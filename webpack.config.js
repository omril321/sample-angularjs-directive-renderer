const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js"
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Load js files through Babel
      { test: /\.(js|jsx)$/,   loader: "babel-loader" }
    ]
  },
  devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: false,
      port: 8080,
  }
};