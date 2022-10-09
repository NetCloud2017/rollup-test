console.log(process.env.TEST);
export default {
  input: "./main.js",
  output: {
    file: "dist.js",
    format: "umd",
    name: "Index",
  },
};
