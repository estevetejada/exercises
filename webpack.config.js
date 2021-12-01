import path from 'path';

export default {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist'),
    },
};
