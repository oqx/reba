import * as fromPaths from './paths'
import * as fromInterpolate from './interpolate'
import * as fromValidators from './validators'
import { compose } from './functional'

/**
 * Handles component generation operations, and creates all
 * peripheral files, like testing, configs, etc.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const generateComponent = compose(
    fromValidators.onComplete,
    fromInterpolate.transformFiles,
    fromPaths.writePathsAndCopy,
    fromValidators.validateName
)
