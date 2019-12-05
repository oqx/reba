import * as fromUtils from './utils'

/**
 * Writes package.json file to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const writePackageJson = async params => {
    params = await params
    const pkg = params.typescript
        ? await import('./assets/templates/typescript/static/package.json')
        : await import('./assets/templates/javascript/static/package.json')
    pkg.name = `${params.prefix}/${params.name.toLowerCase()}`
    await fromUtils.writeFile(`${fromUtils.getDestRootPath(params.name)}/package.json`, JSON.stringify(pkg, null, 2))
    return params
}
