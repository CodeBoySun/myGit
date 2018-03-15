var path = require("path");
var webpack= require("webpack");

module.exports={

    entry:__dirname+"/src/js/index.js",

    module:{
        rules:[
            {
                test:/\.js?$/,
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

}