import { dirname, resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'node:url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

export default {
  entry: './src/index.tsx',
  output: {
    filename: 'script/[name].[contenthash].js',
    path: resolve(_dirname, '../dist'),
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': resolve(_dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }], // 启用新的 JSX 转换
              '@babel/preset-typescript'
            ]
          },
        },
      },
      // 图片资源
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
      // 字体资源
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};