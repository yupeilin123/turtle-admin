module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    },
    project: './tsconfig.json'
  },
  rules: {
    'max-len': [0, { code: 140 }],
    'jsx-quotes': [1, 'prefer-single'],
    'react/jsx-props-no-spreading': [0],
    'import/no-unresolved': [0],
    'no-use-before-define': [0],
    'import/no-extraneous-dependencies': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.js'] }],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    '@typescript-eslint/quotes': [0, 'single'],
    '@typescript-eslint/semi': [0],
  }
}