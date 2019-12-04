import { promises as fs } from 'fs'
import { isPromise } from './utils'
import * as fromConstants from './constants'
import * as fromTypes from './types'
import path from 'path'

/**
 * Copies configuration + readme files over to component dir as they
 * do not require any modification.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const writeUnmodifiedFilesToDest: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    // File path to CLI boilerplate assets
    const inputDir = path.join(__dirname, 'assets', 'unmodified')
    // Path to destination dir
    const outputDir = `${process.cwd()}${fromConstants.PACKAGES_PATH}${
        params.name
    }/`
    try {
        const files = await fs.readdir(inputDir)
        // Add copy promises to array and resolve all.
        await Promise.all(
            files.map(file => {
                // if scss file place in destination src
                if (file.endsWith('scss')) {
                    return fs.copyFile(
                        `${inputDir}/${file}`,
                        `${outputDir}src/${file}`
                    )
                }
                // else place in destination root
                return fs.copyFile(`${inputDir}/${file}`, `${outputDir}${file}`)
            })
        )
    } catch (err) {
        throw `writeUnmodifiedFilesToDest Error: ${err}`
    }
    return params
}
