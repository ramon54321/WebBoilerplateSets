const globEntries = require("webpack-glob-entries");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: globEntries("./src/*.js"),
	output: {
		filename: "./out/script/[name].bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				include: /src/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Built HTML",
			filename: "out/main.html",
			template: "src/template.html",
			chunks: ["main"]
		})
/*,
		new UglifyJsPlugin({
			test: /\.js/,
			parallel: 4,
			sourceMap: true
		})
*/
	]
};
