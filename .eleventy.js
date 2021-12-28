module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/admin");

  function entityEncoder(html) {
    return html.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
      return "&#" + i.charCodeAt(0) + ";";
    });
  }

  eleventyConfig.addShortcode("handleCodeBlock", function (cb) {
    return `<pre><code class=language-${
      cb.lang
    }>${entityEncoder(cb.code)}</code></pre>`;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
