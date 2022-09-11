module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/_styles/main.css");

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
};