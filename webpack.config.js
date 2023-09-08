const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        main: "./src/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, './www/dist/compile-js/'),
        filename: "app-bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "third-party-licenses.txt",
                    to: path.resolve(__dirname, 'www/third-party-licenses.txt')
                }
            ]
        })
    ]
};