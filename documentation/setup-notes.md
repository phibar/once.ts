# Setup Notes
This document is a living documentation for the setup for Once.ts nano kernel. Here all installing and configuration stuff is documentated and explained. All researches and Links will be added.

## NPM packages
### typescript
once.ts is the typescript implementation of ONCE, so it is elementary to support typescript

```
npm i -D typescript ttypescript rimraf npm-run-all @types/node
npx tsc --init 
```
Packages:
- typescript: typescript compiler
- ttypescript: a typescript wrapper which adds the support of adding custom transpiler to typescript
- rimraf: small tool which can recursive remove folders in cleanup process
- npm-run-all: small tool which allows to run different npm scripts in sequence
- @types/node: typescript types for node

The init command will create a [config file](../tsconfig.json) which configures the compiler. All setted transpiler settings will be explained in this file.

### eslint
In order to have the same coding style all over all components. Once uses a linter which check for some rules. At beginning we start with the [Standard](https://github.com/standard/standard) rules.

```
npm i -D eslint
npx eslint --init
```

With initialisation of eslint following packages are required by eslint:

- @typescript-eslint/eslint-plugin
- eslint-config-standard
- eslint
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-promise
- @typescript-eslint/parser@latest
## Scripts
