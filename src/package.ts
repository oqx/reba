import { writeFile } from './utils'
// @ts-ignore
import pkg from './assets/package.json'

/**
 * Writes package.json file to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const writePackageJson = async params => {
    params = await params
    pkg.name = `${params.prefix}/${params.name.toLowerCase()}`
    await writeFile(params.name, 'package.json', JSON.stringify(pkg, null, 2))
    return params
}
