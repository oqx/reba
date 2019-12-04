import { promises as fs } from 'fs'
import { writeFile, compose, isPromise } from './utils'
import * as fromConstants from './constants'
import * as fromTypes from './types'

/**
 * Reads generic react component file and replaces generic name with user defined name,
 * and injects the export type (default, named) into the result file.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeReactComponent: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    try {
        const data = await fs.readFile(fromConstants.REACT_COMPONENT, 'utf8')
        // Replace placeholder data with actual export in file string.
        const withExport = data.replace(
            fromConstants.EXPORT_REGEX,
            params.default
                ? fromConstants.DEFAULT_EXPORT
                : fromConstants.DESTRUCTURED_EXPORT
        )
        // Replace generic name with user defined name.
        const component = withExport.replace(
            fromConstants.COMPONENT_NAME_REGEX,
            params.name
        )
        const writePath = `${params.name}/src/`
        // Write file to packages path.
        await writeFile(writePath, 'index.tsx', component)
    } catch (err) {
        throw `writeReactComponent Error: ${err.stack}`
    }
    return params
}

/**
 * Writes demo/example component file to component root and adds import type to file string.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeExampleRoot: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    try {
        const data = await fs.readFile(fromConstants.EXAMPLE_PATH, 'utf8')
        /* 
                 Add import statement based on user input value 'default'
                */
        const withImport = data.replace(
            fromConstants.IMPORT_REGEX,
            params.default
                ? fromConstants.DEFAULT_IMPORT_SRC
                : fromConstants.DESTRUCTURED_IMPORT_SRC
        )
        // Replace generic name with component name
        const component = withImport.replace(
            fromConstants.COMPONENT_NAME_REGEX,
            params.name
        )
        // Write file to component root.
        writeFile(params.name, 'Example.tsx', component)
    } catch (err) {
        throw `writeExampleRoot Error: ${err.stack}`
    }
    return params
}

/**
 * Writes sass file to component src dir. It's the equivelent of copying the file,
 * albeit this is cross-browser without additional dependencies.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeScopedSCSS: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const writePath = `${params.name}/src/`
    try {
        const data = await fs.readFile(fromConstants.SASS_PATH, 'utf8')
        await writeFile(writePath, 'styles.local.scss', data)
    } catch (err) {
        throw `writeScopedSCSS Error: ${err.stack}`
    }
    return params
}

/**
 * Copies boilerplate spec file to component src dir and adds the proper
 * imports based on user defined input 'default'.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeReactTests: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const writePath = `${params.name}/src/`
    try {
        const data = await fs.readFile(fromConstants.SPEC_PATH, 'utf8')

        /* 
                 Add import statement based on user input value 'default'
                */
        const withImport = data.replace(
            fromConstants.IMPORT_REGEX,
            params.default
                ? fromConstants.DEFAULT_IMPORT
                : fromConstants.DESTRUCTURED_IMPORT
        )
        // Replace generic name with component name
        const component = withImport.replace(
            fromConstants.COMPONENT_NAME_REGEX,
            params.name
        )
        await writeFile(writePath, 'index.spec.tsx', component)
    } catch (err) {
        throw `writeReactTests Error: ${err.stack}`
    }
    return params
}

/**
 * Writes all react-related files.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const writeReactFiles = compose(
    writeReactTests,
    writeScopedSCSS,
    writeReactComponent,
    writeExampleRoot
)
