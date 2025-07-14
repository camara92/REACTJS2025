const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,  // ✅ CORRIGÉ : échappement du point
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
          },
        },
        type: 'javascript/auto', // ✅ OPTIONNEL MAIS UTILE POUR ÉVITER LE BUG
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // ✅ Permet d'importer sans extensions
  },
};
