import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert { type: "json" };
import scss from "rollup-plugin-scss";
import del from "rollup-plugin-delete";

// Excluded dependencies - dev dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.build.json",
      }),
      // terser(),
      scss({
        fileName: "wds.css",
      }),
    ],
    external: ["react", "react-dom"].concat(EXTERNAL),
  },
];
