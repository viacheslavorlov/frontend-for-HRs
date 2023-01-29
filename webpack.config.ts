// @ts-ignore
import HtmlWebpackPlugin from "html-webpack-plugin";
// @ts-ignore
import path from "path";
// @ts-ignore
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
	entry:  path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'public', 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
}
const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
	mode: "development",
	paths,
	isDev
})

export default config