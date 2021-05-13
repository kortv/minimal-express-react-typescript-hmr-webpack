import { resolve } from 'path'
import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        ['autoprefixer', {}],
        ['postcss-filename-prefix', {}],
      ],
    },
  },
}

const config: Configuration = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  externals: [],
  entry: {
    main: ['webpack-hot-middleware/client?reload=true', './src/client/index.tsx'],
  },
  output: {
    path: resolve('./dist/client'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/client/index.ejs'),
    }),
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
          },
          'react-prefix-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', postCssLoader],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          postCssLoader,
          {
            loader: 'stylus-loader',
            options: {
              stylusOptions: {
                import: [resolve('./src/client/styles/before.styl'), resolve('./src/client/styles/index.styl')],
                includeCSS: true,
              },
            },
          },
        ],
      },
    ],
  },
}

export default config
