const {merge} = require("webpack-merge");
const base = require("./webpack.config");
const webpack = require("webpack");

const config = {
    apiUrl: 'http://localhost:8080'
}

module.exports = merge(base, {
    mode: 'development',
    devtool: "inline-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.PROFILE": JSON.stringify("dev"),
            "process.env.CONFIG": JSON.stringify(config)
        })
    ]
});