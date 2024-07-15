module.exports = {
  root: true,
  extends: ['plugin:jest/style', 'plugin:react/recommended', 'plugin:react-hooks/recommended', './common.js'],
  plugins: ['jest-dom', 'playwright', 'react', 'testing-library'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'spaced-comment': 'error',
    'testing-library/consistent-data-testid': [
      'error',
      {
        testIdPattern: '^([a-zA-Z])[a-zA-Z0-9-_]*$',
        testIdAttribute: ['data-testid'],
      },
    ],
    'import-x/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '**/*.+(svg|png|jpg|jpeg|mp3|mp4|tiff|webp|gif)',
            group: 'index',
            position: 'after',
          },
          {
            pattern: './*.+(scss|css)',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'function', format: ['camelCase', 'PascalCase'] },
          { selector: 'typeLike', format: ['PascalCase'] },
          { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
          { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
        ],
        'max-lines-per-function': [
          'error',
          {
            max: 100,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
        'unicorn/filename-case': 0,
      },
    },
    {
      files: ['*.test.tsx', '*.test.ts', '*.spec.tsx', '*.spec.ts', '*/tests/mocks/*.ts'],
      excludedFiles: ['src/e2e/**/*.ts'],
      rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unnecessary-type-assertion': ['warn'],
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/unbound-method': 0,
        'max-lines-per-function': 0,
        'testing-library/no-container': 0,
        'testing-library/no-node-access': 0,
        'unicorn/consistent-function-scoping': 0, // to use mocked functions correctly
        'unicorn/no-useless-undefined': 0,
      },
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    },
    {
      files: ['src/e2e/**/*.test.ts', 'src/e2e/**/*.spec.ts'],
      rules: {
        'jest/no-done-callback': 0,
        'max-lines-per-function': 0,
      },
      extends: ['plugin:playwright/playwright-test'],
    },
    {
      files: ['src/e2e/**/*.ts'],
      rules: {
        'no-console': 0,
      },
    },
    {
      files: ['cdk/**/*'],
      rules: {
        'max-lines-per-function': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
      },
    },
  ],
  globals: {
    React: true,
    JSX: true,
    jsdom: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
