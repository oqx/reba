import * as fromConstants from './constants'
import { compose } from './functional'
import * as fromTypes from './types'

/**
 * @description Similar to how webpack loaders work, transformers have access to
 * a file's content as a string, which they're able to transform in some way.
 */

/**
 * Transforms %export_type% values into actual ES6 exports, either default or named.
 * @param {TransformerArgs} params
 * @returns {TransformerArgs}
 */
const transformExports: fromTypes.ComposableTransformer = params => {
    if (fromConstants.EXPORT_REGEX.test(params.data)) {
        const data = params.data.replace(
            fromConstants.EXPORT_REGEX,
            params.default
                ? fromConstants.DEFAULT_EXPORT
                : fromConstants.DESTRUCTURED_EXPORT
        )
        return {
            ...params,
            data
        }
    }
    return params
}

/**
 * Transforms %import_type% values into actual ES6 imports, either default or named.
 * @param {TransformerArgs} params
 * @returns {TransformerArgs}
 */
const transformImports: fromTypes.ComposableTransformer = params => {
    if (fromConstants.IMPORT_REGEX.test(params.data)) {
        const data = params.data.replace(
            fromConstants.IMPORT_REGEX,
            params.default
                ? fromConstants.DEFAULT_IMPORT
                : fromConstants.DESTRUCTURED_IMPORT
        )
        return {
            ...params,
            data
        }
    }
    return params
}

/**
 * Transforms %import_src_type% values into actual ES6 imports, either default or named.
 * @param {TransformerArgs} params
 * @returns {TransformerArgs}
 */
const transformRootImportsToSrc: fromTypes.ComposableTransformer = params => {
    if (fromConstants.IMPORT_SRC_REGEX.test(params.data)) {
        const data = params.data.replace(
            fromConstants.IMPORT_SRC_REGEX,
            params.default
                ? fromConstants.DEFAULT_IMPORT_SRC
                : fromConstants.DESTRUCTURED_IMPORT_SRC
        )
        return {
            ...params,
            data
        }
    }
    return params
}

/**
 * Transforms %component_name% values into capitalized --name argument value.
 * @param {TransformerArgs} params
 * @returns {TransformerArgs}
 */
const transformName: fromTypes.ComposableTransformer = params => {
    if (fromConstants.COMPONENT_NAME_REGEX.test(params.data)) {
        const data = params.data.replace(
            fromConstants.COMPONENT_NAME_REGEX,
            params.name
        )
        return {
            ...params,
            data
        }
    }
    return params
}

/**
 * Transforms %ext_type% values into jsx/tsx.
 * @param {TransformerArgs} params
 * @returns {TransformerArgs}
 */
const transformExtensions: fromTypes.ComposableTransformer = params => {
    if (fromConstants.FILE_EXT_REGEX.test(params.data)) {
        const data = params.data.replace(
            fromConstants.FILE_EXT_REGEX,
            params.typescript ? 'tsx' : 'jsx'
        )
        return {
            ...params,
            data
        }
    }
    return params
}

/**
 * Transforms %ext_type% values into jsx/tsx.
 * @param {TransformerArgs} params
 * @returns {TransformerArgs}
 */
const transformPackageName: fromTypes.ComposableTransformer = params => {
    if (fromConstants.PACKAGE_NAME_REGEX.test(params.data)) {
        const data = params.data.replace(
            fromConstants.PACKAGE_NAME_REGEX,
            `${params.prefix}/${params.name.toLowerCase()}`
        )
        return {
            ...params,
            data
        }
    }
    return params
}

/**
 * Applies transformation functions to file data.
 * @param {TransformerArgs} params
 * @returns {TransformerArgs}
 */
export const transformPipeline = compose(
    transformName,
    transformPackageName,
    transformRootImportsToSrc,
    transformExports,
    transformExtensions,
    transformImports
)
