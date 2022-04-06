const CracoAntDesignPlugin = require('@mrbatman/craco-antd');
const config = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  webpack: {},
  devServer: {
    open: false,
  },
};

export default config;
