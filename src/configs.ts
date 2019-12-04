import { promises as fs } from 'fs'
import { writeFile, compose, isPromise } from './utils'
import * as fromConstants from './constants'
import * as fromTypes from './types'

/**
 * Writes .babelrc to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeBabelRC: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const data = await fs.readFile(fromConstants.BABEL_CONFIG, 'utf8')
    await writeFile(params.name, '.babelrc', data)
    return params
}

/**
 * Writes .npmignore to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeNPMIgnore: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const data = await fs.readFile(fromConstants.NPM_IGNORE, 'utf8')
    await writeFile(params.name, '.npmignore', data)
    return params
}

/**
 * Writes .gitignore to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeGitIgnore: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const data = await fs.readFile(fromConstants.GIT_IGNORE, 'utf8')
    await writeFile(params.name, '.gitignore', data)
    return params
}

/**
 * Writes webpack.config.js to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeWebpackConfig: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const data = await fs.readFile(fromConstants.WEBPACK_CONFIG, 'utf8')
    await writeFile(params.name, 'webpack.config.js', data)
    return params
}

/**
 * Writes tsconfig.json to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeTSConfig: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const data = await fs.readFile(fromConstants.TS_CONFIG, 'utf8')
    await writeFile(params.name, 'tsconfig.json', data)
    return params
}

/**
 * Writes jest.config.js to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeJestConfig: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const data = await fs.readFile(fromConstants.JEST_CONFIG, 'utf8')

    await writeFile(params.name, 'jest.config.js', data)
    return params
}

/**
 * Writes README.md to component root.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
const writeReadme: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    const data = await fs.readFile(fromConstants.README_PATH, 'utf8')
    await writeFile(params.name, 'README.md', data)
    return params
}

/**
 * Copies configuration + readme files over to component dir.
 * Uses writeFile to avoid cross env issues and additional
 * dependencies.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const writeConfigs = compose(
    writeJestConfig,
    writeTSConfig,
    writeReadme,
    writeWebpackConfig,
    writeBabelRC,
    writeGitIgnore,
    writeNPMIgnore
)
