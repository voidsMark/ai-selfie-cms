module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-empty-function': 'error',
    'no-useless-constructor': 'error',
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'quote-props': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never', {
      'json': 'always',
    }],
    'arrow-body-style': ['error', 'as-needed'],
    'semi': ['error', 'never'],
    'linebreak-style': 'off',
  },
}
