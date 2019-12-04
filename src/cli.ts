#!/usr/bin/env node

/**
 * @author Jay Kariesch <jay.kariesch@gmail.com>
 *
 * @description A Lerna companion CLI for generating ReactJS component
 * boilerplate to simplify the entire configuration and generation process
 * into a simple command. Creates a component following the
 * Lerna directory convention of <root>/packages/<component-name>. If
 * you have an irregular directory structure, this won't work.
 *
 * @example reba --name Heading --default false --prefix @myrepo
 *
 */
import yargs from 'yargs'
import chalk from 'chalk'
import { generateComponent } from '.'
import { capitalize } from './utils'
import * as fromTypes from './types'

/**
 * Generates CLI help docs and parses arguments.
 */
const args: fromTypes.YargsArgs = yargs
    .alias('v', 'version')
    .version('1')
    .describe('v', 'show version information')
    .alias('h', 'help')
    .help('help')
    .usage('Usage: $0 -n panel -p @monorepo -d false')
    .showHelpOnFail(true, 'Specify --help for available options')
    .option('name', {
        alias: 'n',
        describe: 'First argument-- name of component.',
        type: 'string' /* array | boolean | string */,
        nargs: 1,
        default: 'HamburgerNetwork',
        demand: true
    })
    .option('prefix', {
        alias: 'p',
        describe: 'Prefixed name of monorepo (i.e. @babel)',
        type: 'string' /* array | boolean | string */,
        nargs: 1,
        default: '@generic'
    })
    .option('default', {
        alias: 'd',
        describe:
            'Determines whether component has a default export or named export.',
        type: 'boolean' /* array | boolean | string */,
        nargs: 1,
        default: true
    }).argv as fromTypes.YargsArgs

/**
 * Tries to generate component, and catches errors if need be.
 */
try {
    // Capitalize first letter of component name.
    args.name = capitalize(args.name)
    // Run generation funcs.
    generateComponent(args)
} catch (err) {
    console.log(chalk.bold.red(err))
}
