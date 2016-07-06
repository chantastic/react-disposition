module.exports = [
  {
    externals: {
      "react": true,
    },
    entry: "./src/index.js",
    output: {
      library: "ReactDisposition",
      libraryTarget: "commonjs2",
      path: __dirname + "/lib",
      filename: "index.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel",
        }
      ]
     }
  },
]
