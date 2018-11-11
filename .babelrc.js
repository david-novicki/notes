module.exports = {
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
