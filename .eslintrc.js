module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/standard',
    'prettier/react',
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'valid-jsdoc': 'error',
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
      },
    ],
    'linebreak-style': ['error', 'unix'],
  },
};
