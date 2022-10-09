console.log(process.env.TEST, process.env.MODE);
// 第三方库合并到本地代码
import resolve from "@rollup/plugin-node-resolve";
// 让rollup 支持 commonjs 文件
import commonjs from "@rollup/plugin-commonjs";
// rollup  处理JSON 文件
import json from "@rollup/plugin-json";
const plugins = [resolve(), commonjs(), json()];

import { terser } from "rollup-plugin-terser";
// 输出的第三方使用的 插件很少， 一般是压缩， 等。
const outputPlugins = []; //[terser()];

export default [
  {
    input: "./main.js",
    // 不打包到一起。
    external: ["react"],
    plugins,
    output: [
      {
        format: "es",
        file: "dist/index.es.js",
        plugins: outputPlugins,
      },

      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "Index",
        plugins: outputPlugins,
        //   放在打包文件开头的 一段话， 用于宣传 、 说明等。
        banner: " /*** this project is my excise rollup project ***/",
      },
    ],
  },
  //   {
  //     input: "./main.js",
  //     external: ["react"],
  //     plugins,
  //     output: {
  //       format: "es",
  //       file: "dist/index.es.js",
  //       plugins: outputPlugins,
  //     },
  //   },
];
