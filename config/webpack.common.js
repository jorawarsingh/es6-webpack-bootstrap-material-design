var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');

 module.exports =  {        
         entry: {           
            'app': './src/main.js'
         },                                  
         resolve: {
             extensions: ["",  ".js"]
         },
         module: {
             loaders: [
                 { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
                  {test: /\.css$/, loader:   ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })},
                  {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
                  {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
                  {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
                  {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
                  {test: /\.html$/, loader: 'html'},
                  {test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,loader : 'file-loader'},
                  {test: /\.json$/, loader: "json-loader"},
                  {test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw'}
             ]
         }, plugins: [          
             new HtmlWebpackPlugin({
                 template: "./src/index.html",
                 minify:false

             }),
              new webpack.optimize.CommonsChunkPlugin({
                name: ['app']
             }), 
             new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
            }),
        ]     
    };





