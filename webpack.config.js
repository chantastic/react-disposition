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
          loader: "babel",
          query: {
            presets: ["es2015", "react"],
            plugins: ["transform-object-rest-spread"],
          }
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
          query: {
            presets: ["es2015", "react"],
            plugins: ["transform-object-rest-spread"],
          }
        }
      ]
     }
  },
]
