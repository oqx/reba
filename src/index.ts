import * as fromConfigs from './configs'
import * as fromPackage from './package'
import * as fromPaths from './paths'
import * as fromReact from './react'
import * as fromHTML from './html'
import * as fromValidators from './validators'
import { compose } from './utils'

/**
 * Handles component generation operations, and creates all
 * peripheral files, like testing, configs, etc.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const generateComponent = compose(
    fromValidators.onComplete,
    fromConfigs.writeConfigs,
    fromHTML.writeIndexHTML,
    fromPackage.writePackageJson,
    fromReact.writeReactFiles,
    fromPaths.writePathsAndCopy,
    fromValidators.validateName
)
