const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: {
      "quill.imageCompressor": "./src/quill.imageCompressor.js",
      demo: "./src/demo.js"
    },
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/dist/",
    },
    devServer: {
      contentBase: './src',
    },
    externals: {
      quill: "Quill"
    },
    // devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              }
            ]
          })
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }
];
