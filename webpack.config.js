const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	
	module: {
		
		rules:[
		{
			test: /\.tsx?$/,
			loader: "awesome-typescript-loader"
		},
		{
			enforce: "pre",
			test: /\.js$/,
			loader: "source-map-loader"
		}		
		
		]
		
	},
	plugins:[
	  new htmlWebpackPlugin({template: "./index.html"})
	],
	
	//enables debugging of tsx files
	devtool: "source-map",
	
	//importing can work for the files with the below extension. if you import "app", then node will look for app.js, app.ts and app.tsx
	resolve: {extensions: [".js", ".ts", ".tsx"]}
	
	
}