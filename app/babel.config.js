module.exports = function(api) {
	api.cache.forever();
	return {
		presets: ["@babel/preset-env", "@babel/preset-react"],
		plugins: ["../", "@babel/plugin-syntax-dynamic-import"]
	};
};
