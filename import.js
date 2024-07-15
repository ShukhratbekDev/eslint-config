/**
 * IMPORTANT: The next settings greatly slow down the linting time
 *
 * | Rule                              | Time (ms)   |
 * | :---------------------------------|------------:|
 * | import/no-cycle                   | ~123277.571 |
 * | import/namespace                  |   ~5000.721 |
 * | import/no-deprecated              |    ~861.482 |
 * | import/named                      |    ~795.273 |
 * | import/no-duplicates              |    ~560.121 |
 * | import/no-unresolved              |    ~513.314 |
 * | import/export                     |     ~41.371 |
 * | import/default                    |     ~26.225 |
 * | import/no-named-as-default-member |     ~25.790 |
 * | import/no-named-as-default        |     ~21.542 |
 * | import/no-unused-modules          |     ~14.811 |
 */
module.exports = {
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    'import-x/named': 'error',
    'import-x/namespace': 'error',
    'import-x/no-cycle': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-unused-modules': 'error',
    'import-x/no-deprecated': 'warn',
  },
};
