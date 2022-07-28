import { ApolloClient, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import lodash from 'lodash';
import {
  DEFAULT_ORDER_BY,
  MERGEABLE_LISTS,
  PAGINATION_PARAMS
} from 'utils/constants';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: Object.values(MERGEABLE_LISTS).reduce(
        (fields, key) => ({
          ...fields,
          [key]: {
            keyArgs: (_, { variables }) =>
              Object.keys(variables).filter(
                (variable) => !PAGINATION_PARAMS.includes(variable)
              ),
            merge(
              existing = { data: [] },
              incoming,
              { variables: { orderBy = DEFAULT_ORDER_BY }, readField }
            ) {
              return {
                ...existing,
                ...incoming,
                data: lodash.orderBy(
                  existing.data.concat(incoming.data).map((item) => ({
                    ...lodash
                      .flatten(orderBy.map((object) => Object.keys(object)))
                      .reduce(
                        (accumulator, key) => ({
                          ...accumulator,
                          [key]: readField(key, item),
                        }),
                        {}
                      ),
                    ...item,
                  })),
                  lodash.flatten(orderBy.map((object) => Object.keys(object))),
                  lodash.flatten(orderBy.map((object) => Object.values(object)))
                ),
              };
            },
          },
        }),
        {}
      ),
    },
  },
});

// const client = new ApolloClient({
//   link: ApolloLink.from([errorLink, link]),
//   cache,
//   errorLink,
// });

const client = new ApolloClient({
  uri: 'http://localhost:9803/graphql',
  cache: new InMemoryCache(),
});

export default client;
