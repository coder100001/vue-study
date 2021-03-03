 const path = require('path')

 module.exports = {
     entry: "./src/main.js",
     output: {
         path: path.resolve(__dirname, __filename),
         filename: "bundle.js",
     },
 };