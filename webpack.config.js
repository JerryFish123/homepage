// var path = require('path');
// // const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   entry: "./index.js",
//   output: {
//     path: __dirname,
//     filename: "dist/bundle.js"
//   },
//   module: {
//     rules: [
//       // {
//       //   test: /\.css$/,
//       //   use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"]
//       // },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015']
//         }
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         query: {
//           presets: ['react']
//           //  npm install --save-dev babel-preset-react
//         }
//       }
//     ],
//   },
//   plugins: [
//     // new MiniCssExtractPlugin({
//     //   filename: `[name]_[contenthash:8].css`,
//     //   chunkFilename: `index.css`
//     // })
//   ]

// }




const path = require("path");
//这里是利用nodejs的path模块去获取绝对路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "[name][id][hash:8].js",
    path: path.resolve(__dirname, "./dist_[hash]")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,"style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react']
          //  npm install --save-dev babel-preset-react
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`,
      chunkFilename: `abc.css`
    })
  ]
};

