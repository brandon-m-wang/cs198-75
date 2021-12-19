module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addFilter('log', value => {
    console.log(value)
  })
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
