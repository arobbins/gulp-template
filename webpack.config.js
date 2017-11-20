var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: ["./assets/js/app/app"],
  output: {
    filename: "theme.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
