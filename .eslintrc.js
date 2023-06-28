module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['standard', 'prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['jest', '@typescript-eslint'],
  env: {
    'jest/globals': true
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/no-unused-vars': ['error']
  },
  ignorePatterns: ['.eslintrc.js', '**/*.config.ts']
};
