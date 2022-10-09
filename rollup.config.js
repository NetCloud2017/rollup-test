console.log(process.env.TEST, process.env.MODE);
export default [
  {
    input: "./main.js",
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      name: "Index",
    },
  },
  {
    input: "./main.js",
    output: {
      format: "es",
      file: "dist/index.es.js",
    },
  },
];
