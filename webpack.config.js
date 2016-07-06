module.exports = [
  {
    externals: {
      "react": "React",
    },
    entry: "./src/index.js",
    output: {
      library: "ReactDisposition",
      libraryTarget: "umd",
      path: __dirname + "/dist",
      filename: "ReactDisposition.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel"
        }
      ]
     }
  },
  {
    externals: {
      "react": "React",
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
