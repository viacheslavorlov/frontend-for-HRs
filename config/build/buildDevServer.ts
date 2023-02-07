import { Configuration as DevServerCofiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer({ port }:BuildOptions): DevServerCofiguration {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
