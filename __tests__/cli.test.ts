import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { FILE_TESTS } from '../file-runs'
// @ts-ignore
import pkge from '../package.json'

describe('CLI Version', () => {
    test('Should print the version number', done => {
        exec('reba --version', { encoding: 'utf8' }, (err, stdout, stderr) => {
            expect(stdout.trim()).toEqual(pkge.version)
            done()
        })
    })
})

describe('CLI Command --name', () => {
    test('Should generate log indicating component has been created.', done => {
        exec(
            'reba --name button',
            { encoding: 'utf8' },
            (err, stdout, stderr) => {
                expect(stdout.trim()).toEqual(`@generic/button created! 🦄`)
                done()
            }
        )
    })
    describe.each(FILE_TESTS)
})

describe('CLI Command --name button --default false', () => {
    test('Should generate log indicating component has been created.', done => {
        exec(
            'reba --name button --default false',
            { encoding: 'utf8' },
            (err, stdout, stderr) => {
                expect(stdout.trim()).toEqual(`@generic/button created! 🦄`)
                done()
            }
        )
    })
    describe.each(FILE_TESTS)
})

describe('CLI Command --name button --default false --prefix @hello', () => {
    test('Should generate log indicating component has been created.', done => {
        exec(
            'reba --name button --default false --prefix @hello',
            { encoding: 'utf8' },
            (err, stdout, stderr) => {
                expect(stdout.trim()).toEqual(`@hello/button created! 🦄`)
                done()
            }
        )
    })

    describe.each(FILE_TESTS)
})

describe('CLI Command --name button --default false --typescript false', () => {
    test('Should generate log indicating component has been created.', done => {
        exec(
            'reba --name button --default false --typescript false',
            { encoding: 'utf8' },
            (err, stdout, stderr) => {
                expect(stdout.trim()).toEqual(`@generic/button created! 🦄`)
                done()
            }
        )
    })

    describe.each(FILE_TESTS)
})
