const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config();


module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config
  }
}
