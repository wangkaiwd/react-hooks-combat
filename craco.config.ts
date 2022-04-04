const CracoAntDesignPlugin = require('@mrbatman/craco-antd');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const config = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  webpack: {
    plugins: [new FriendlyErrorsWebpackPlugin()],
  },
  devServer: {
    open: false,
  },
};

export default config;
