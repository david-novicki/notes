module.exports = {
  plugins: ["react-hot-loader/babel"],
  presets: [
    ["@babel/env"],
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development"
      }
    ]
  ]
};
