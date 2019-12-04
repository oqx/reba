import { promises as fs } from 'fs'
import { PACKAGES_PATH } from './constants'

/**
 * Wraps writeFileSync and handles writing verbose
 * package/<name>/<outputFileName> paths and content.
 * @param {string} name Name of the component (for path purposes).
 * @param {string} outputFileName Name of the file being written.
 * @param {string} content A string to be written to disk.
 */
export const writeFile = (
    name: string,
    outputFileName: string,
    content: string
) => {
    return fs.writeFile(
        `${process.cwd()}${PACKAGES_PATH}${name}/${outputFileName}`,
        content
    )
}

export const compose = (...fns) =>
    fns.reduce((f, g) => (...args) => f(g(...args)))

/**
 * Capitalizes a file string.
 * @param {string} s String to be capitalized.
 * @returns Capitalized input or empty string.
 */
export const capitalize = s => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const isPromise = p =>
    p && Object.prototype.toString.call(p) === '[object Promise]'
