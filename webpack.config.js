const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: 'index_bundle.js',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
			Pages: path.resolve(__dirname, 'src/Pages'),
			Modules: path.resolve(__dirname, 'src/Modules'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: [/node_modules/,/build/,/tests/],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
			},
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
			filename: './index.html',
			favicon: './public/favicon.ico',
			manifest: "./public/manifest.json",
    }),
  ],
}