export const PACKAGES_PATH = '/packages/'

export const DEFAULT_IMPORT = "import %component_name% from '.'"

export const DESTRUCTURED_IMPORT = "import { %component_name% } from '.'"

export const DESTRUCTURED_IMPORT_SRC = "import { %component_name% } from './src'"

export const DEFAULT_IMPORT_SRC = "import %component_name% from './src'"

export const DEFAULT_EXPORT = 'export default React.memo(_%component_name%)'

export const DESTRUCTURED_EXPORT =
    'export const %component_name% = React.memo(_%component_name%)'

export const ASSETS_PATH = `${__dirname}/assets`

export const TEMPLATES_PATH = `${ASSETS_PATH}/templates`

export const TS_TEMPLATE_SRC = `${TEMPLATES_PATH}/typescript/src`

export const JS_TEMPLATE_SRC = `${TEMPLATES_PATH}/javascript/src`

export const SHARED_ROOT = `${ASSETS_PATH}/shared-root`

export const SHARED_SRC = `${ASSETS_PATH}/shared-src`

export const COMPONENT_NAME_REGEX = /%component_name%/g

export const IMPORT_REGEX = /%import_type%/g

export const EXPORT_REGEX = /%export_type%/g
