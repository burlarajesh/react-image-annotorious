var path = require("path")
module.exports = {
    entry: path.resolve(__dirname, 'react-image-annotorious.js'),
    output: {
      path: path.resolve(__dirname, './lib'),
      filename: 'index.js',
      library: '',
      libraryTarget: 'commonjs'
    },   
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            query: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            }
          }     
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  };