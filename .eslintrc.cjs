// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('./.prettierrc.cjs');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['warn', prettier],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    'no-console': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
  },
  ignorePatterns: ['*.config.js', 'node_modules/'],
};
