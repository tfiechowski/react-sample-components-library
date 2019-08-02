import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

import packageJSON from "./package.json";
const input = "./src/index.js";

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      commonjs()
    ]
  }
];
