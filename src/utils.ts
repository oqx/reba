import { promises as fs } from 'fs'
import * as fromConstants from './constants'
import { transformPipeline } from './transformers'
import * as fromTypes from './types'
/**
 * Wraps writeFileSync and handles writing verbose
 * package/<name>/<outputFileName> paths and content.
 *
 * @param {string} name Name of the component (for path purposes).
 * @param {string} outputFileName Name of the file being written.
 * @param {string} content A string to be written to disk.
 */
export const writeFile = (writePath: string, content: string) => {
    try {
        return fs.writeFile(writePath, content)
    } catch (err) {
        throw `writeFile Error: ${err}`
    }
}

/**
 * Capitalizes a file string.
 *
 * @param {string} s String to be capitalized.
 * @returns {string} Capitalized input or empty string.
 */
export const capitalize = s => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Checks whether a value/object is a promise.
 *
 * @param p
 * @returns {boolean}
 */
export const isPromise = (p: any): boolean =>
    p && Object.prototype.toString.call(p) === '[object Promise]'


/**
 * Reads template files, passes files as strings through transform functions to interpolate
 * values, then writes data to user's destination directory.
 * 
 * @param {ReplaceAndWriteFileType} params 
 * @returns {void}
 */
export const replaceAndWriteFile = async (
    params: fromTypes.ReplaceAndWriteFileType
): Promise<void> => {
    try {
        const fileString = await fs.readFile(params.readPath, 'utf8')
        // Replace placeholder data with actual export in file string.
        const { data } = transformPipeline({
            ...params,
            data: fileString
        })
        // Write file to packages path.
        await writeFile(params.writePath, data)
    } catch (err) {
        throw `replaceAndWriteFile Error: Could not replace values in ${params.readPath}\n${err}`
    }
}

/**
 * Creates array of file names from specified readDirPath directory, loops through each
 * firing replaceAndWriteFile to apply transformations to each file's data.
 * 
 * @param {ReplaceAndWriteDirType} params 
 * @returns {void}
 */
export const replaceAndWriteInDir = async (
    params: fromTypes.ReplaceAndWriteDirType
): Promise<void> => {
    try {
        const files = await fs.readdir(params.readDirPath)
        // Resolve array of promises once all replace funcs are collected.
        await Promise.all(
            files.map(file =>
                replaceAndWriteFile({
                    ...params,
                    readPath: `${params.readDirPath}/${file}`,
                    writePath: `${params.writePath}/${handleJsxToJsx(
                        file,
                        params.typescript
                    )}`
                })
            )
        )
    } catch (err) {
        throw `replaceAndWriteInDir Error: ${err}`
    }
}

/**
 * Checks if typescript is enabled or disabled and changes fileName's extension
 * accordingly.
 * 
 * @param {string} fileName Name of file, including extension.
 * @param {boolean} isTypescript A value indicating whether typescript is enabled (--typescript).
 */
export const handleJsxToJsx = (fileName: string, isTypescript: boolean) => {
    if (!isTypescript && fileName.endsWith('.tsx')) {
        return fileName.substr(0, fileName.lastIndexOf('.')) + '.jsx'
    }
    return fileName
}

/**
 * Retrieves destination root directory of component. Uses cwd.
 * 
 * @param {string} name 
 */
export const getDestRootPath = (name: string) =>
    `${process.cwd()}${fromConstants.PACKAGES_PATH}${name}`

/**
 * Retrieves destination src directory of component. Uses cwd.
 * 
 * @param {string} name 
 */
export const getDestSRCPath = (name: string) =>
    `${process.cwd()}${fromConstants.PACKAGES_PATH}${name}/src`
