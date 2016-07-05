module.exports = {
    entry: "./index.js",
    output: {
        library: "ReactBlox",
        libraryTarget: "umd",
        path: __dirname,
        filename: "browser-bundle.js"
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
}
