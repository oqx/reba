import { exec } from 'child_process'
// @ts-ignore
import pkge from '../package.json'

describe('CLI Commands', () => {
    test('Should print the version number', done => {
        exec('reba --version', { encoding: 'utf8' }, (err, stdout, stderr) => {
            expect(stdout.trim()).toEqual(pkge.version)
            done()
        })
    })
})
