import type { DocumentNode } from 'graphql';
import { resolveRequestDocument } from 'graphql-request';
import type { FetchOptions } from 'ofetch';

import { gqlClient } from './client';
import { getSdk } from './generated/getSdk';

export const PreprSdk = getSdk(
  async <TData, TVariables>(
    document: DocumentNode,
    variables?: TVariables,
    options?: FetchOptions<'json'>,
  ) => {
    const { query, operationName } = resolveRequestDocument(document);

    const { data } = await gqlClient<{ data: TData }>('', {
      ...options,
      body: { query, variables, operationName },
    });

    return data;
  },
);
