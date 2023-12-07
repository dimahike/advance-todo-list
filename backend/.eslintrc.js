module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-unused-vars': 'warn',
    eqeqeq: ['error', 'always'],
    'no-console': 'warn',
    curly: 'error',
    'no-undef': 'error',
    'prefer-const': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
  },
};
