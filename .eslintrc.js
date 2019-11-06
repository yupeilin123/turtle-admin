module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'max-len': ['error', { code: 140 }],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': [0],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx','js'] }],
    'react/destructuring-assignment': [0],
    'react/state-in-constructor': [0],
    'import/no-unresolved': [0],
    '@typescript-eslint/no-use-before-define': [0],
  }
}