const {merge} = require("webpack-merge");
const base = require("./webpack.config");

module.exports = (env) => {
    const config = {
        apiUrl: env.apiUrl,
        apiKey: env.apiKey
    }

    return merge(base, {
        mode: 'production',
        devtool: "false",
        plugins: [
            new webpack.DefinePlugin({
                "process.env.PROFILE": JSON.stringify("prod"),
                "process.env.CONFIG": JSON.stringify(config),
            })
        ]
    });
}