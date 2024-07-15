const currentYear = new Date().getFullYear();

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import-x/recommended',
    'plugin:import-x/typescript',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'plugin:lodash/recommended',
  ],
  plugins: ['@typescript-eslint', 'header', 'import', 'jest', 'unicorn', 'lodash'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/no-unsafe-enum-comparison': 0,
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variableLike', format: ['camelCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
    ],
    curly: ['error', 'all'],
    'dot-notation': 'error',
    'import-x/first': 'error',
    'import-x/named': 0,
    'import-x/namespace': 0,
    'import-x/newline-after-import': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-named-as-default': 0,
    'import-x/no-useless-path-segments': ['warn', { noUselessIndex: true }],
    'import-x/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'jest/valid-title': [
      'error',
      {
        mustMatch: {
          test: /should|^\$\w+$/u.source,
          it: /should|^\$\w+$/u.source,
        },
        mustNotMatch: {
          test: /(?:be|is|are|works?)\s(?:correct(?:ly)?|right|good)?$/u.source,
          it: /(?:be|is|are|works?)\s(?:correct(?:ly)?|right|good)?$/u.source,
        },
      },
    ],
    'lodash/matches-prop-shorthand': 0,
    'lodash/prefer-constant': 0,
    'lodash/prefer-is-nil': 0,
    'lodash/prefer-lodash-method': 0,
    'lodash/prefer-lodash-typecheck': 0,
    'lodash/prefer-noop': 0,
    'lodash/prop-shorthand': 0,
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'no-console': 'error',
    'no-template-curly-in-string': 'error',
    'no-unused-expressions': 'error',
    'prefer-template': 'error',
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'unicorn/import-style': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-null': 0,
    'unicorn/prefer-top-level-await': 0,
    'unicorn/prevent-abbreviations': 0,
  },
  overrides: [
    {
      files: ['cdk/**', 'deploy/**'],
      rules: {
        'max-lines-per-function': 0,
        'unicorn/filename-case': 0,
        'unicorn/prefer-module': 0,
      },
    },
  ],
  settings: {
    'import-x/resolver': {
      typescript: true,
      node: true,
    },
  },
};
