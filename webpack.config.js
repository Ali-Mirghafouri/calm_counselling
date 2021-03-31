const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js",
    publicPath: "/",
  },
  resolve: {
    mainFields: ["browser", "main", "module"],
    extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json", ".web.js", ".webpack.js"],
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          // // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
        // issuer: {
        //     exclude: /\.less$/,
        // },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|ttf|eot|woff)$/,
        // exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favIcon.png",
    }),
  ],
}
