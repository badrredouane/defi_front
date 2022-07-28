/* eslint-disable implicit-arrow-linebreak */
import { ApolloLink, Observable } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { createUploadLink } from 'apollo-upload-client';
import { BFF_URL } from '../../../../config';
import { updateOperationHeader } from './utils';

const uploadedBffLink = createUploadLink({ uri: BFF_URL });

const TokenInterceptor = () =>
  new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        AsyncStorage.getItem('access_token')
          .then((token) => {
            updateOperationHeader(operation, token);
          })
          .then(() => {
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

const bffLink = ApolloLink.from([TokenInterceptor(), uploadedBffLink]);

export default bffLink;
