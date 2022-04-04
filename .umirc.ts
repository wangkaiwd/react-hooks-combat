import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none"
  },
  mock: false,
  routes: [],
  webpack5: {},
  fastRefresh: {}
});
