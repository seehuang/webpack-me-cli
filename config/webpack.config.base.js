/*
* @Author: hc
* @Date:   2018-02-11 09:15:25
* @Last Modified by:   hc
* @Last Modified time: 2018-02-12 14:24:59
*/
const path = require("path");

//引入插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
//清理dist文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin");
//抽取css
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//引入多页面的文件列表配置
const config = require("./config");
//通过html-webpack-plugin生成的html集合
let HTMLPlugins = [];
//入口文件集合,即 entry
let Entries = {};

config.HTMLDirs.forEach((page)=>{
	const htmlPlugin = new HTMLWebpackPlugin({
		filename:`${page}.html`,
		template: path.resolve(__dirname,`../app/html/${page}.html`),
		chunks:[page,'commons'],
	});
	HTMLPlugins.push(htmlPlugin);
	Entries[page] = path.resolve(__dirname,`../app/js/${page}.js`)
})


module.exports = {
	entry:Entries,
	devtool:"cheap-module-source-map",
	output:{
		filename:"js/[name].bundle.[hash:5].js",
		path:path.resolve(__dirname,"../dist")
		//libraryTarget : 'var'
	},
	resolve:{
		alias:{
			jquery:path.resolve(__dirname,"../app/lib/jquery-1.10.1.min.js"),
			swiper:path.resolve(__dirname,"../app/lib/swiper2.7.6.min.js")
		}
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				exclude:/node_modules/,
				use:ExtractTextPlugin.extract({
					fallback:"style-loader",
					//设置css的publicPath
					publicPath:config.cssPublicPath,
					use:[
						{
							loader:"css-loader",
							options:{
								// 开启css压缩
								//minimize:true
							}
						},
						{
							loader:"postcss-loader"
						}
					]
				})
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['env']
					}
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use:{
					loader:"file-loader",
					options:{
						//打包生成图片的名字
						name:"img/[name].[ext]"
						//outputPath:config.imgOutputPath
					}
					
				}
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:["file-loader"]
			},
			{
				test:/.html$/,
				use:{
					loader:"html-loader",
					options:{
						attrs:['img:src'],
						minimize: false,
						collapseWhitespace: false
					}
				}
			}
		]
	},
	plugins:[
		//自动清理dist文件夹
		new CleanWebpackPlugin(['dist'],{
			//当前clean认为的根目录为/config/，需要设定根目录为项目根目录
			root:path.resolve(__dirname,"../")
		}),
		//将css抽取到某个文件夹
		new ExtractTextPlugin({
			filename:"css/[name].[hash:5].css",
		}),
		//自动生成HTML插件,ES6解构赋值
		...HTMLPlugins
	]
}