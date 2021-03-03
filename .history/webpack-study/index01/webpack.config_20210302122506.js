 const path = require('path');

 module.exports = {
     entry: "./src/main.js",
     output: {
         path: path.resolve(__dirname, "dist"),
         filename: "bundle.js",
     },
     module: {
         rules: [{
                 test: /\.css$/i,
                 use: ['style-loader', "css-loader"],
             },

             {
                 test: /\.less$/i,
                 use: [{
                         loader: "style-loader", // 从 JS 中创建样式节点
                     },
                     {
                         loader: "css-loader", // 转化 CSS 为 CommonJS
                     },
                     {
                         loader: "less-loader", // 编译 Less 为 CSS
                     },
                 ],
             },
         ],
     },
 };