const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // ...các cấu hình khác của Webpack

  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json', // đường dẫn đến tsconfig.json của bạn
      }),
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
