const webpack = require("webpack");
const path = require("path");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: [
    "react-hot-loader/patch",
    "./src/index.tsx",
    "./src/libs/index.tsx",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "dgm",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /(\.css$)/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  resolveLoader: {
    modules: [
      "node_modules",
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, "lib/node_modules"),
    ],
  },

  resolve: {
    modules: [
      "node_modules",
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, "lib/node_modules"),
    ],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    port: 9950,
    contentBase: "./dist",
    writeToDisk: true,
  },
};

module.exports = config;
