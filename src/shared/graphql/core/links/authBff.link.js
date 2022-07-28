/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */
import { ApolloLink, Observable } from '@apollo/client';
import {
  checkDocument,
  hasDirectives,
  removeDirectivesFromDocument,
} from '@apollo/client/utilities';
import AsyncStorage from '@react-native-community/async-storage';
import { createUploadLink } from 'apollo-upload-client';
import { AUTH_BFF_URL } from '../../../../config';
import { updateOperationHeader } from './utils';

export const AUTH_ANNOTATION = 'authBff';
export const PRIVATE_AUTH_ANNOTATION = 'privateAuthBff';

const sanitizedQueryCache = new Map();
const authLink = createUploadLink({ uri: AUTH_BFF_URL });

const getQueryFromCache = (query) => {
  let sanitizedQuery = sanitizedQueryCache[JSON.stringify(query)];
  if (!sanitizedQuery) {
    checkDocument(query);
    sanitizedQuery = removeDirectivesFromDocument(
      [{ name: AUTH_ANNOTATION }, { name: PRIVATE_AUTH_ANNOTATION }],
      query
    );
    sanitizedQueryCache[JSON.stringify(query)] = sanitizedQuery;
  }
  return sanitizedQuery;
};

const AuthBffInterceptor = () =>
  new ApolloLink(
    (operation, forward) =>
      new Observable(async (observer) => {
        AsyncStorage.getItem('access_token')
          .then((token) => {
            if (hasDirectives([PRIVATE_AUTH_ANNOTATION], operation.query)) {
              updateOperationHeader(operation, token);
            }
          })
          .then(() => {
            operation.query = getQueryFromCache(operation.query);
            forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch((err) => {
            observer.error(err);
          });
      })
  );

export const authBffLink = ApolloLink.from([AuthBffInterceptor(), authLink]);
