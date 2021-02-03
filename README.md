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

This repo is currently deployed on Netlify. Pushes to the `main` branch will start deployment.

## License

kitchenth.ink, a personal blog  
Copyright (C) 2021 Ink Brownell

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public
License as published by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
details.

You should have received a copy of the GNU Affero General Public License along with this program. If not,
see <https://www.gnu.org/licenses/>.

Note that this license does not extend to the content of the blog. That is, the code is licensed under the AGPLv3 or
later, but the content is retained under exclusive copyright and may not be copied without permission.
