module.exports = {
  layout: "workshop.njk",
  tags: ["workshops"],
  eleventyComputed: {
    permalink: (data) => `/workshops/${data.slug}/`
  }
};
