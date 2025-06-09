import TerserPlugin from "terser-webpack-plugin";

export const getWebpackConfig = (options = {}) => {
  const webpackConfig = {
    mode: options.mode || "development",
    entry: {
      main: "./app/js/main.ts",
    },
    output: {
      filename: "[name].bundle.js",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-class-properties"],
            },
          },
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    plugins: [],
  };

  return webpackConfig;
};
