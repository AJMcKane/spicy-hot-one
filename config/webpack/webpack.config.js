const path = require('path');
const fs = require('fs');
const baseDirectory = fs.realpathSync(process.cwd());
const getPath = (relativePath) => path.resolve(baseDirectory, relativePath);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: getPath('./src/index.tsx'),
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        enforce: 'pre',
        include: getPath('src'),
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        include: getPath('src'),
        loader: require.resolve('html-loader'),
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  },
  output: {
    filename: 'app.bundle.js',
    path: getPath('dist/'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    https: true,
  }
};