const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    javascript: "./app/js/client.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ 
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          {
	      loader: "sass-loader",
	      options: {
		  api: "modern"
	      }
	  }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: '[path][name].[ext]',
        },
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^(buffertools)$/
    }),
    new MiniCssExtractPlugin({ filename: 'public/style.css' })
  ]
};
