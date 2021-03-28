import { resolve } from 'path';
//import { Configuration } from "webpack"
import { Configuration as WebpackConfiguration } from "webpack"
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import nodeExternals from 'webpack-node-externals'
import NodemonPlugin from 'nodemon-webpack-plugin'

type Configuration = WebpackConfiguration & {
	devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  mode: 'development',
	target: 'node',
	externalsPresets: { node: true },
	// @ts-expect-error typing conflict, may be fixed in a future patch/update
	externals: [nodeExternals()],
  entry: resolve(__dirname, 'src/server/index.ts'),
  output: {
    path: resolve(__dirname, 'dist/server')
  },
	plugins: [
		new NodemonPlugin()		
	],
	module: {		
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['@babel/preset-typescript']
					}
				}
			}
		]
	}
};

export default config;