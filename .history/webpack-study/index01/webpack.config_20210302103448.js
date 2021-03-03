 const path = require('[ath]');

 module.exports = {
     entry: "./src/main.js",
     output: {
         path: path.resolve(__dirname, "dist"),
         filename: "bundle.js",
     },
     module: {
         rules: [{
             test: /\.css$/i,
             use: ["css-loader"],
         }, ],
     },
 };