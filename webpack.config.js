const webpack = require("webpack");
const path = require("path");
const resolveTsAliases = require("resolve-ts-aliases");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const config = {
  entry: {
    index: ["react-hot-loader/patch"],
    cms: {
      import: "./src/index.tsx",
      dependOn: "index",
    },
    editor: {
      import: "./src/libs/editor/index.tsx",
      dependOn: "index",
    },
    contents: {
      import: "./src/libs/contents/index.tsx",
      dependOn: "index",
    },
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: "index.html",
  //     title: "DGM-CMS",
  //     inject: "body",
  //   }),
  // ],
  output: {
    filename: "bundles/[name].js",
    path: path.resolve(__dirname, "dist"),
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
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
};

module.exports = config;
