var webpack = require("webpack")

var options = {
  externals: { "react": "React" },

  entry: "./src/index.js",

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel"
      }
    ]
  }
}

module.exports = [
  {
    externals: options.externals,
    entry: options.entry,
    output: {
      library: "ReactDisposition",
      libraryTarget: "umd",
      path: __dirname + "/dist",
      filename: "ReactDisposition.js"
    },
    module: options.module
  },

  {
    externals: options.externals,
    entry: options.entry,
    output: {
      library: "ReactDisposition",
      libraryTarget: "umd",
      path: __dirname + "/dist",
      filename: "ReactDisposition.min.js"
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({})
    ],
    module: options.module
  },
]
