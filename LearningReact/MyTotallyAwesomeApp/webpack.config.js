const webpack = require("webpack");
const path = require("path");

const DEV = path.resolve(__dirname, "dev");
const OUTPUT = path.resolve(__dirname, "output");

const config = {
	entry: DEV + "/index.jsx",
	output: {
		path: OUTPUT,
		filename: "myCode.js"
	},
	module: {
		loaders: [{
			include: DEV,
			loader: "babel",
		}]
	}
};

module.exports = config;
