const path = require("path");
require("dotenv").config();

module.exports = {
  env: {
    API_URL: "http://157.245.205.175:1337",
  },
  publicRuntimeConfig: {
    API_URL: "http://157.245.205.175:1337",
  },

  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  },
};
