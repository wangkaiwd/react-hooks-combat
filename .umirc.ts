import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none"
  },
  hash: true,
  mock: false,
  webpack5: {},
  fastRefresh: {}
});
