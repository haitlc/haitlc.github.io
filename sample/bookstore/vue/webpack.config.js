const webpack = require('webpack');
const path = require('path');

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/app.js',
  // Where should the compiled file go?
  output: {
    path: path.resolve(__dirname, './dist/'),
    // To the `dist` folder
    //path: './dist',
    // With the filename `build.js` so it's dist/build.js
    filename: 'build.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },  
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }      
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    inline:true
  }  
  
}