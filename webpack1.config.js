<<<<<<< HEAD
var webpack = require("webpack");
var path = require("path");

module.exports={
    context : __dirname+'/src/',
    entry : "./js/index.js",
=======
var path = require("path");
var webpack= require("webpack");

module.exports={

    entry:__dirname+"/src/js/index.js",

>>>>>>> ea002aeb569529cc18295bb11d2cfcd53d1e21a4
    module:{
        rules:[
            {
                test:/\.js?$/,
<<<<<<< HEAD
                exclude:/{node_modules}/,
                loader : 'babel-loader',
                query:{
                    presets:['react','es2015'],
                    plugins:['react-html-attrs'],
                }
            },
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    output:{
        path:__dirname+"/src/",
        filename:"bundle.js"
    }
=======
                include: [
                    path.resolve(__dirname, "src")
                  ],
                  exclude: [
                    path.resolve(__dirname, "src/index.js")
                 ],
                 loader: "babel-loader",
                 options: {
                    presets: ["es2015","react"]
                  },
            }
        ]
        
    },
    output:{
            path:__dirname+"/dist",
            filename : "bundle.js"
    },

>>>>>>> ea002aeb569529cc18295bb11d2cfcd53d1e21a4
}