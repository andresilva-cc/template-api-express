module.exports = {
  plugins: ['jest'],
  extends: [
    'airbnb-typescript/base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'off'
  }
};
