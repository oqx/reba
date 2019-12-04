const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = {
    entry: IS_DEV ? './Example.tsx' : './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },

            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'scoped-css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        IS_DEV &&
            new HtmlWebpackPlugin({
                template: './index.html'
            })
    ].filter(x => x)
}
