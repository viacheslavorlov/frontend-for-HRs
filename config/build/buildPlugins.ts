import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths, isDev, apiUrl, project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [];
    plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV: JSON.stringify(isDev),
            __API_URL: JSON.stringify(apiUrl),
            __PROJECT: JSON.stringify(project),
        }),
        new HtmlWebpackPlugin({
            template: paths.html,

        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // new BundleAnalyzerPlugin()
    );
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }
    return plugins;
}
