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

             {
                 test: /\.(png|jpg|jpeg)$/i,
                 use: [{
                     loader: 'url-loader',
                     options: {
                         // 当图片大于limit时，会把图片编译为base64格式
                         // 当图片小于limit时，会寻找file-loader来进行加载 （npm install --save-dev file-loader@3.0.1 这里用的是webpack3.6.0）
                         limit: 8192,
                     },
                 }, ],
             },
         ],
     },
 };