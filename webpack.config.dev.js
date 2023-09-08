const {merge} = require("webpack-merge");
const base = require("./webpack.config");
const webpack = require("webpack");


module.exports = (env) => {
    const config = {
        apiUrl: env.apiUrl ?? 'http://localhost:8080',
        apiKey: env.apiKey ?? "dev-api-key"
    }

    console.log(`Build developer with:\n    $ apiUrl=${config.apiUrl},\n    $ apiKey=${config.apiKey}`);

    return merge(base, {
        mode: 'development',
        devtool: "inline-source-map",
        plugins: [
            new webpack.DefinePlugin({
                "process.env.PROFILE": JSON.stringify("dev"),
                "process.env.CONFIG": JSON.stringify(config),
            })
        ]
    })
};