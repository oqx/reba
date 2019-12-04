import chalk from 'chalk'
import { isPromise } from './utils'
import * as fromTypes from './types'

/**
 * Ensures name input contains alpha chars. Throws an error if name cannot pass test.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns {YargsArgs} params
 */
export const validateName: fromTypes.Composable = async params => {
    if (isPromise(params)) {
        params = await params
    }
    if (!/^[A-Z]+$/i.test(params.name)) {
        throw `Argument must only contain letters, received ${params.name} instead.`
    }
    return params
}

/**
 * Terminating function. Displays a green console message on successful component generation.
 *
 * @param {YargsArgs} params YargsArgs
 * @returns null
 */
export const onComplete = async params => {
    if (isPromise(params)) {
        params = await params
    }
    console.log(
        chalk.bold.green(
            `${params.prefix}/${params.name.toLowerCase()} created! 🦄`
        )
    )
    process.exit()
}
