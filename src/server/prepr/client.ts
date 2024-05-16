import 'server-only';

import { createFetch } from 'ofetch';

import config from '../../../graphql.config.json';

/** Ofetch instance for the Prepr GraphQL API. */
export const gqlClient = createFetch({
  fetch,
  defaults: {
    baseURL: config.schema,
    headers: {
      'Prepr-Resolve-Internal-Links': 'false',
      'Prepr-Clean-Headers': 'true',
    },
    responseType: 'json',
    method: 'POST',
    retry: 3,
    parseResponse(responseText) {
      return JSON.parse(responseText, (_, value: unknown) => value ?? undefined) as unknown;
    },
  },
});
