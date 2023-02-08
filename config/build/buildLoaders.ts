import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],

                ],
            },
        },
    };
    // const fileLoader =  {
    //     test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    //     use: [
    //         {
    //             loader: 'file-loader',
    //         },
    //     ],
    // }

    const assetsLoader = {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, //! создаёт отдельные файлы css, а не пишет весь css в .js файле
            //! Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        localIdentName: isDev
                            ? '[path][name]__[local]__[hash:base64:4]' : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    // ? Если не используем тайпскрипт - нужен babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [svgLoader, babelLoader, typeScriptLoader, cssLoader, assetsLoader];
}
