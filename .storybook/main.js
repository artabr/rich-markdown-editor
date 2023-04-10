const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  webpackFinal: (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
                auto: true,
              },
            },
          },
          'postcss-loader',
        ],
        include: path.resolve(__dirname, '../src'),
      },
    );

    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  core: {
    builder: "webpack5",
  },
};
