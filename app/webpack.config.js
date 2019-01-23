const path = require("path");
module.exports = {
	output: {
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, "src"),
					/react-intersection-observer/,
				],
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		alias: {
			"babel-plugin-rawact": path.resolve(__dirname, "..")
		}
	}
};
