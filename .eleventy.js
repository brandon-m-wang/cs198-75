module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addPairedShortcode("myShortcode", function(content) {
    return `<div>${content}</div>`;
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
