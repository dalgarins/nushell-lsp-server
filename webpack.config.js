const path = require('path')

const root = path.resolve(__dirname)
const dist = path.resolve(root, "./dist/language-server")

module.exports = {
  mode: 'production',
  target: 'node',
  devtool: false,
  entry: {
    "nu-language-server": path.resolve(__dirname, './src/server.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: dist,
    filename: '[name].js',
    clean: true,
  },
  plugins: [],
}
