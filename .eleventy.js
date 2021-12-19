module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy('./src/admin');

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
