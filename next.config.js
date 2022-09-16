const UnoCSS = require("@unocss/webpack").default;
const presetUno = require("@unocss/preset-uno").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config, context) {
    config.plugins.push(UnoCSS({ presets: [presetUno()] }));

    if (context.buildId !== "development") {
      // * disable filesystem cache for build
      // * https://github.com/unocss/unocss/issues/419
      // * https://webpack.js.org/configuration/cache/
      config.cache = false;
    }
    config.cache = true;

    return config;
  },
  //experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
