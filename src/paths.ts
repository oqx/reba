import mkdirp from 'mkdirp'
import copydir from 'copy-dir'
import { PACKAGES_PATH } from './constants'
import { isPromise } from './utils'
import { compose } from './functional'
import * as fromTypes from './types'

/**
 * Performs the initial mkdir -p to brute-force create directories if
 * they don't already exist. Uses mkdirp package as it works cross env.
 * @param params
 */
const writeDirPaths: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    mkdirp.sync(`${process.cwd()}${PACKAGES_PATH}${params.name}/src`, err => {
        if (err) throw `writeDirPaths Error: ${err}`
    })
    return params
}

/**
 * Copies the entire __mocks__ dir and its contents to component
 * root. These are the mocks needed to stub Jest when a component
 * requests a file.
 * @param params
 */
const copyMocksToPath: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    try {
        copydir.sync(
            `${process.cwd()}/dist/assets/__mocks__`,
            `${process.cwd()}${PACKAGES_PATH}${params.name}/__mocks__`
        )
    } catch (err) {
        throw `copyMocksToPath Error: ${err.stack}`
    }
    return params
}

/**
 * Handles path creation and dir movements.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const writePathsAndCopy = compose(copyMocksToPath, writeDirPaths)
