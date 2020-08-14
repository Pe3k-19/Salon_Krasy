const path = require("path");
const fs = require("fs");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BabelPolyfill = require("babel-polyfill");

module.exports = (env) => {
  //Mode selection - local, dev, test, stage, prod
  // const mode = env.NODE_ENV || "dev"
  // console.log("[webpack] environment", mode)

  // let configPath = `./config/.env.${mode}`

  // //Fallback if local config does not exist
  // if (!fs.existsSync(configPath)) {
  // 	console.log("[webpack] configPath", configPath, "does not exist fallback to dev")
  // 	configPath = `./config/.env.dev`
  // }

  // console.log("[webpack] final configPath", configPath)
  // const denv = new Dotenv({path: configPath})

  return {
    devtool: "source-map",
    entry: ["babel-polyfill", "./src"],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }],
        },
        {
          test: /\.css$/,
          // exclude: /node_modules/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        {
          test: /\.less$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "less-loader" },
          ],
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [{ loader: "url-loader" }],
        },
        {
          test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [{ loader: "file-loader" }],
        },
        {
          test: /\.html$/,
          use: [{ loader: "html-loader" }],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new CopyPlugin([{ from: "public/.htaccess", to: "." }]),
      new CaseSensitivePathsPlugin(),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      denv,
    ],
    output: {
      filename: "main.[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
  };
};
