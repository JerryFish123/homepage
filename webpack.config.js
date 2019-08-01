
const path = require("path");
//这里是利用nodejs的path模块去获取绝对路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"]
      // },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }, {
          loader: 'css-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
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
    // new MiniCssExtractPlugin({
    //   filename: `[name].css`,
    //   chunkFilename: `abc.css`
    // })

  ]
};
