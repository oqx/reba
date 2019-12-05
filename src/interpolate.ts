import * as fromUtils from './utils'
import * as fromConstants from './constants'
import * as fromTypes from './types'
import { compose } from './functional'
/**
 * Reads template-specific react index file and handles interpolation, copying
 * result to destination.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const handleIndexTemplating: fromTypes.Composable = async params => {
    if (fromUtils.isPromise(params)) {
        params = await params
    }

    const args: fromTypes.ReplaceAndWriteDirType = {
        readDirPath: params.typescript
            ? fromConstants.TS_TEMPLATE_SRC
            : fromConstants.JS_TEMPLATE_SRC,
        writePath: fromUtils.getDestSRCPath(params.name),
        default: params.default,
        name: params.name,
        typescript: params.typescript
    }

    await fromUtils.replaceAndWriteInDir(args)

    return params
}

/**
 * Reads shared-root directory files and handles interpolation, copying
 * result to destination.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const handleSharedRootTemplating = async params => {
    if (fromUtils.isPromise(params)) {
        params = await params
    }

    const args: fromTypes.ReplaceAndWriteDirType = {
        readDirPath: fromConstants.SHARED_ROOT,
        writePath: fromUtils.getDestRootPath(params.name),
        default: params.default,
        name: params.name,
        typescript: params.typescript
    }

    await fromUtils.replaceAndWriteInDir(args)

    return params
}

/**
 * Reads shared-src directory files and handles interpolation, copying
 * result to destination.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const handleSharedSrcTemplating = async params => {
    if (fromUtils.isPromise(params)) {
        params = await params
    }

    const args: fromTypes.ReplaceAndWriteDirType = {
        readDirPath: fromConstants.SHARED_SRC,
        writePath: fromUtils.getDestSRCPath(params.name),
        default: params.default,
        name: params.name,
        typescript: params.typescript
    }

    await fromUtils.replaceAndWriteInDir(args)

    return params
}

/**
 * Reads template-specific react index file and handles interpolation, copying
 * result to destination.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const handleLanguageStaticTemplating: fromTypes.Composable = async params => {
    if (fromUtils.isPromise(params)) {
        params = await params
    }

    const args: fromTypes.ReplaceAndWriteDirType = {
        readDirPath: params.typescript
            ? fromConstants.TS_TEMPLATE_STATIC
            : fromConstants.JS_TEMPLATE_STATIC,
        writePath: fromUtils.getDestRootPath(params.name),
        default: params.default,
        name: params.name,
        typescript: params.typescript
    }

    await fromUtils.replaceAndWriteInDir(args)

    return params
}

export const transformFiles = compose(
    handleLanguageStaticTemplating,
    handleSharedSrcTemplating,
    handleSharedRootTemplating,
    handleIndexTemplating
)
