export const PACKAGES_PATH = '/packages/'

export const DEFAULT_IMPORT = "import Component from '.'"

export const DESTRUCTURED_IMPORT = "import { Component } from '.'"

export const DESTRUCTURED_IMPORT_SRC = "import { Component } from './src'"

export const DEFAULT_IMPORT_SRC = "import Component from './src'"

export const DEFAULT_EXPORT = 'export default React.memo(_Component)'

export const DESTRUCTURED_EXPORT =
    'export const Component = React.memo(_Component)'

export const ASSETS_PATH = `${__dirname}/assets`

export const BABEL_CONFIG = `${ASSETS_PATH}/.babelrc`

export const NPM_IGNORE = `${ASSETS_PATH}/.npmignore`

export const GIT_IGNORE = `${ASSETS_PATH}/.gitignore`

export const WEBPACK_CONFIG = `${ASSETS_PATH}/webpack.config.js`

export const TS_CONFIG = `${ASSETS_PATH}/tsconfig.json`

export const JEST_CONFIG = `${ASSETS_PATH}/jest.config.js`

export const README_PATH = `${ASSETS_PATH}/README.md`

export const REACT_COMPONENT = `${ASSETS_PATH}/index.tsx`

export const EXAMPLE_PATH = `${ASSETS_PATH}/Example.tsx`

export const SASS_PATH = `${ASSETS_PATH}/styles.local.scss`

export const SPEC_PATH = `${ASSETS_PATH}/index.spec.tsx`

export const HTML_PATH = `${ASSETS_PATH}/index.html`

export const COMPONENT_NAME_REGEX = /(?<!Function)Component/g

export const IMPORT_REGEX = /%import_type%/g

export const EXPORT_REGEX = /%export_type%/g
