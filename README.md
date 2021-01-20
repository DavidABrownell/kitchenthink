# [kitchenth.ink](https://kitchenth.ink)

Ink's personal website.

## Development

Download and install dependencies:

```shell
git clone https://github.com/InkBrownell/kitchenthink.git
cd kitchenthink
npm install
```

This project uses [EditorConfig](https://editorconfig.org/). See [`.editorconfig`](.editorconfig).

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to enforce code style. These are
run as a pre-commit hook using [Husky](https://www.npmjs.com/package/husky). See [`.eslintrc.js`](.eslintrc.js) and
[`.prettierrc`](.prettierrc).

## Testing

To run tests,

```shell
npm test
```

Tests will also be run automatically on every push to Github.

## Deployment

Github will deploy on pushes to `main` if CI tests pass. See
[the github workflow](.github/workflows/kitchenthink.yml).
