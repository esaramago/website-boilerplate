import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const ROOT = './src'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const SITE_URL = process.env.SITE_URL
const outputPath = 'dist'

export default {
  entry: ROOT + '/main.ts',
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: '[name].js',
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    compress: true,
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

  ],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/i,
        use: 'url-loader?limit=1024',
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
}