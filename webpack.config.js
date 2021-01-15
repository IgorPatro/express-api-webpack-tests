const path = require("path")
const nodeExternals = require("webpack-node-externals")
const WebpackShellPluginNext = require("webpack-shell-plugin-next")

const { NODE_ENV = "production" } = process.env

module.exports = {
  mode: NODE_ENV,
  entry: {
    index: "./src/index.ts",
  },
  watch: NODE_ENV === "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildStart: {
        scripts: [
          NODE_ENV === "development" ? "npm run dev" : 'echo "Build Finished"',
        ],
      },
    }),
  ],
}
