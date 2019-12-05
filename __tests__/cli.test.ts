import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
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

    test('Should have generated a packages/Button directory.', done => {
        const PATH = path.resolve('packages', 'Button')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    })

    test('Should have generated a packages/Button/__mocks__ directory.', done => {
        const PATH = path.resolve('packages', 'Button', '__mocks__')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    })

    test('Should have generated a packages/Button/src directory.', done => {
        const PATH = path.resolve('packages', 'Button', '__mocks__')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    })
})
