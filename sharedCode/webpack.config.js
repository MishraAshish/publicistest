var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
    entry: SRC_DIR+"/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath:"/app/"
    },
    module:{
        
                rules:[
        
                    {
        
                        test:/\.js?/,
        
                        include:SRC_DIR,
        
                        loader: "babel-loader", 
        
                        enforce: 'pre',
        
                        query: {
        
                            presets: ["react", "es2015", "stage-2"]
        
                        }
        
                    },
        
                    {
        
                        test:/\.(css|gif|png|jpg|svg)$/,
        
                        include:SRC_DIR,
        
                        use:['style-loader','css-loader']
        
                    },
        
                    {
        
                        include:SRC_DIR,
        
                        test: /\.(gif|png|jpe?g|svg)$/i,
        
                        use: [
        
                          'file-loader',
        
                          {
        
                            loader: 'image-webpack-loader',
        
                            options: {
        
                              bypassOnDebug: true, // webpack@1.x
        
                              disable: true, // webpack@2.x and newer
        
                            },
        
                          },
        
                        ],
        
                      }
        
                ]
        
            }
    // module:{
    //     rules:[
    //         {
    //             test:/\.js?/,
    //             include:SRC_DIR,
    //             loader: "babel-loader",
    //             enforce: 'pre',
    //             query: {
    //                 presets: ["react", "es2015", "stage-2"]
    //             }
    //         }
    //     ]
    // }
};

module.exports = config;