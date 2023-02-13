import webpack from 'webpack';

import path from 'path';
import { buildCssLoader } from '../build/cssLoaders/buldCSSLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
    config.resolve.extensions.push('ts', 'tsx');

    config.module.rules.push(buildCssLoader(true));
    return config;
};
