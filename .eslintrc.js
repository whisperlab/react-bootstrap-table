module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": 'babel-eslint',
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "jsx-a11y",
    "react"
  ],
  "rules": {
    //"indent": [
    //  "error",
    //  2
    //],
    "linebreak-style": [
      "error",
      "unix"
    ],
    //"quotes": [
    //  "error",
    //  "single"
    //],
    //"semi": [
    //  "error",
    //  "never"
    //],
    "no-unused-vars": [0, {"vars": "all", "args": "none"}], // disallow declaration of variables that are not used in the code
    "no-console": 0,                 // disallow use of console (off by default in the node environment)
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'no-prototype-builtins': 0,
  }
};
