module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addShortcode("handleCodeBlock", function(cb) { 
    return `<pre><code class=language-${cb.lang}}>${cb.code}</code></pre>`
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
