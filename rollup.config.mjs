import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };


export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",

            },
            {
                file: packageJson.module,
                format: "esm",

            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            json(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },

];