import { resolve } from 'path';
import { Configuration as WebpackConfiguration } from "webpack"
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

type Configuration = WebpackConfiguration & {
	devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  mode: 'development',
	target: 'web',
	externals: [],
  entry: resolve(__dirname, 'src/client/index.tsx'),
  output: {
    path: resolve(__dirname, 'dist/client')
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'src/client/index.ejs')
		})
	],
	devServer: {
		open: true
	},
	module: {		
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['@babel/preset-typescript', '@babel/preset-react']
					}
				}
			}
		]
	}
};

export default config;