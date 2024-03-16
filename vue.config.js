const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/to-do-list/",
  chainWebpack: (config) => {
    config.output.chunkFilename(`./js/[name].[id].[chunkhash:8].js`);
  },
  outputDir: "to-do-list",
});
