import { split } from '@apollo/client';
import { getMainDefinition, hasDirectives } from '@apollo/client/utilities';
import {
  authBffLink,
  AUTH_ANNOTATION,
  PRIVATE_AUTH_ANNOTATION,
} from './links/authBff.link';
import bffLink from './links/bff.link';
import { authLink } from './links/utils';
import WSLink from './links/ws.link';

const rootLink = split(
  ({ query }) =>
    hasDirectives([AUTH_ANNOTATION], query) ||
    hasDirectives([PRIVATE_AUTH_ANNOTATION], query),
  authBffLink,
  bffLink
);

const link = split(
  ({ query }) => {
    const { operation } = getMainDefinition(query);
    return operation === 'subscription';
  },
  WSLink,
  authLink.concat(rootLink)
);

export default link;
