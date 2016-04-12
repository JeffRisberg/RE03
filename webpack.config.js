module.exports = {
  entry: {
    javascript: "./app/js/app.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      {test: /\.jsx$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
};