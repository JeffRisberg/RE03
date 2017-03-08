module.exports = {
  entry: {
    javascript: "./app/js/client.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};