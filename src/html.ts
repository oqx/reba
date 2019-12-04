import { promises as fs } from 'fs'
import { writeFile, isPromise } from './utils'
import { HTML_PATH } from './constants'

/**
 * Copies index.html file over to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const writeIndexHTML = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const data = await fs.readFile(HTML_PATH, 'utf8')
    await writeFile(params.name, 'index.html', data)
    return params
}
