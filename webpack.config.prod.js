const {merge} = require("webpack-merge");
const base = require("./webpack.config");
const webpack = require("webpack");

module.exports = (env) => {
    const config = {
        apiUrl: env.apiUrl,
        apiKey: env.apiKey
    }

    console.log(`Build production with:\n    $ apiUrl=${config.apiUrl},\n    $ apiKey=<SECRET>`);

    return merge(base, {
        mode: 'production',
        plugins: [
            new webpack.DefinePlugin({
                "process.env.PROFILE": JSON.stringify("prod"),
                "process.env.CONFIG": JSON.stringify(config),
            })
        ]
    });
}
