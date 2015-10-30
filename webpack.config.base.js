'use strict';

var webpack = require('webpack');
module.exports = {
    module: {
      loaders: [
          { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
      ]
    },
    output: {
        library: 'Redux Easy CRUD',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js']
    }
};
