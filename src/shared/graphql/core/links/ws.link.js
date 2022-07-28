/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */
import { WebSocketLink } from '@apollo/client/link/ws';
import AsyncStorage from '@react-native-community/async-storage';
import { BFF_URL_SUBSCRIPTIONS as URL_SUBSCRIPTIONS } from '../../../../config';

const wsLink = new WebSocketLink({
  uri: URL_SUBSCRIPTIONS,
  options: {
    reconnect: true,
  },
});

const subscriptionMiddleware = {
  applyMiddleware: async (options, next) => {
    const token = await AsyncStorage.getItem('access_token');
    options.authorization = `Bearer ${token}`;
    next();
  },
};

export default wsLink.subscriptionClient.use([subscriptionMiddleware]);
