import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none"
  },
  dynamicImport: {},
  hash: true,
  mock: false,
  webpack5: {},
  fastRefresh: {}
});
