/* eslint-disable max-len */
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';

export const updateOperationHeader = (operation, accessToken) =>
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`,
    },
  }));

export const onError = (observer) => ({
  next: observer.next.bind(observer),
  error: observer.error.bind(observer),
  complete: observer.complete.bind(observer),
});

export const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('access_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
