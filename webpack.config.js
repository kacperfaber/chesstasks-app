const path = require('path');


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
    }
};