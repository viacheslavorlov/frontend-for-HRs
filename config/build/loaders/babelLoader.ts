import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions{
    isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: [/node_modules/, /dist/, /extractedTranslations/, /scripts/, /reports/, /cypress/],
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
        ],
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },

                    ],
                    '@babel/plugin-transform-runtime',
                    ['@babel/plugin-transform-typescript', { isTsx }],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
