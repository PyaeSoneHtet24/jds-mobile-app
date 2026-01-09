module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
    es6: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'prettier',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, {extensions: ['.tsx']}],
    'react/react-in-jsx-scope': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react-native/no-unused-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-raw-text': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    'react-native/no-inline-styles': 'warn',
    'no-empty-pattern': 'off',
    'react/prop-types': 'warn',
    'react/display-name': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    'react-native/split-platform-components': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
