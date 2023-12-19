import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = `${__dirname}/`

const SOURCE = `${ROOT}/src`
const STATIC = `${ROOT}/public`
const OUTPUT = `${ROOT}/dist`
const SITE_URL = process.env.SITE_URL

export default {
  entry:  `${SOURCE}/main.ts`,
  output: {
    path: OUTPUT,
    filename: '[name].js',
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: OUTPUT,
    },
    port: 3000,
    open: true,
    compress: true,
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: `${SOURCE}/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),

    new CopyWebpackPlugin({
        patterns: [
            { from: STATIC }
        ]
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