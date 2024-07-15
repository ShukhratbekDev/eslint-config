# @shukhratbek/eslint-config

## Overview

This package provides a custom ESLint configuration that enforces recommended rules from popular ESLint plugins including `@typescript-eslint/eslint-plugin`, `eslint-plugin-import`, `eslint-plugin-jest`, and `eslint-plugin-unicorn`.

It is designed to provide a consistent code style and enforce best practices for TypeScript development.

## Getting Started

- Install the `@shukhratbek/eslint-config` package as a dev dependency in your project:

```bash
npm install --save-dev `@shukhratbek/eslint-config`
```

- Add the following to your `.eslintrc.js` file:

```js
{
  "extends": "@shukhratbek/eslint-config"
}
```

- Make sure you have a script to run `eslint` in your `package.json` file:

```json
{
  "scripts": {
    "eslint": "eslint . --ext .ts --fix --cache"
  }
}
```

## Usage

Once you have set up the configuration, you can run ESLint on your project using the following command:

```bash
npm run eslint
```

## List of used plugins

The following plugins are used in this configuration:

- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/rules/)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-lodash](https://github.com/wix-incubator/eslint-plugin-lodash)

Please explore the configuration in [index.js]() to see the full list of rules.

# Configurations

## [Node (default)]()

You can configure the plugin as follows:

```json
{
  "extends": ["@shukhratbek/eslint-config"]
}
```

## [React]()

This configuration is used for react:

```json
{
  "extends": ["@shukhratbek/eslint-config/react"]
}
```

## [Configuration for Import]()

This configuration is in addition to the previous ones and contains only import rules, which greatly slow down the linting time.

```json
{
  "extends": ["@shukhratbek/eslint-config/import"]
}
```

### Timing

| Rule                              |    Time (ms) |
| :-------------------------------- | -----------: |
| import/no-cycle                   | ~123 277.571 |
| import/namespace                  |   ~5 000.721 |
| import/no-deprecated              |     ~861.482 |
| import/named                      |     ~795.273 |
| import/no-duplicates              |     ~560.121 |
| import/no-unresolved              |     ~513.314 |
| import/export                     |      ~41.371 |
| import/default                    |      ~26.225 |
| import/no-named-as-default-member |      ~25.790 |
| import/no-named-as-default        |      ~21.542 |
| import/no-unused-modules          |      ~14.811 |
