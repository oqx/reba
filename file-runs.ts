import fs from 'fs'
import path from 'path'

export const FILE_TESTS = [
    test('Should have generated a packages/Button directory.', done => {
        const PATH = path.resolve('packages', 'Button')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/__mocks__ directory.', done => {
        const PATH = path.resolve('packages', 'Button', '__mocks__')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/src directory.', done => {
        const PATH = path.resolve('packages', 'Button', '__mocks__')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/Example.tsx file.', done => {
        const PATH = path.resolve('packages', 'Button', 'Example.tsx')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/index.html file.', done => {
        const PATH = path.resolve('packages', 'Button', 'index.html')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/.babelrc file.', done => {
        const PATH = path.resolve('packages', 'Button', '.babelrc')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/.gitignore file.', done => {
        const PATH = path.resolve('packages', 'Button', '.gitignore')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/.npmignore file.', done => {
        const PATH = path.resolve('packages', 'Button', '.npmignore')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/jest.config.js file.', done => {
        const PATH = path.resolve('packages', 'Button', 'jest.config.js')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/package.json file.', done => {
        const PATH = path.resolve('packages', 'Button', 'package.json')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/README.md file.', done => {
        const PATH = path.resolve('packages', 'Button', 'README.md')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/tsconfig.json file.', done => {
        const PATH = path.resolve('packages', 'Button', 'tsconfig.json')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/webpack.config.js file.', done => {
        const PATH = path.resolve('packages', 'Button', 'webpack.config.js')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/src/styles.local.scss file.', done => {
        const PATH = path.resolve(
            'packages',
            'Button',
            'src',
            'styles.local.scss'
        )
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/src/index.spec.tsx file.', done => {
        const PATH = path.resolve('packages', 'Button', 'src', 'index.spec.tsx')
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/__mocks__/fileMock.js file.', done => {
        const PATH = path.resolve(
            'packages',
            'Button',
            '__mocks__',
            'fileMock.js'
        )
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    }),

    test('Should have generated a packages/Button/__mocks__/styleMock.js file.', done => {
        const PATH = path.resolve(
            'packages',
            'Button',
            '__mocks__',
            'styleMock.js'
        )
        expect(fs.existsSync(PATH)).toEqual(true)
        done()
    })
]
