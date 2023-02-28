import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/cssLoaders/buldCSSLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));

    config.resolve.extensions.push('ts', 'tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildCssLoader(true));

    config.plugins.push(new DefinePlugin({
        __IS_DEV: true,
    }));

    return config;
};
