import type { CodegenConfig } from '@graphql-codegen/cli';

import { documents, schema } from './graphql.config.json';

const config: CodegenConfig = {
  schema,
  documents,
  config: {
    declarationKind: 'interface',
    typesPrefix: 'Prepr',
    useTypeImports: true,
    enumsAsConst: true,
    nonOptionalTypename: true,
    extractAllFieldsToTypes: true,
    defaultScalarType: 'unknown',
    maybeValue: 'T | undefined',
    strictScalars: true,
    useImplementingTypes: true,
    documentMode: 'documentNode',
    scalars: {
      _DateTime: 'Date',
    },
  },

  generates: {
    'src/server/prepr/generated/preprAPI.schema.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    'src/server/prepr/generated/getSdk.ts': {
      plugins: ['typescript-generic-sdk'],
      preset: 'import-types',
      presetConfig: { typesPath: './preprAPI.schema' },
    },
  },
};

export default config;
