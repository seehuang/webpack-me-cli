/*
* @Author: hc
* @Date:   2018-02-11 10:09:06
* @Last Modified by:   hc
* @Last Modified time: 2018-02-12 09:29:11
*/

//引入基本配置
const webpackBase = require("./webpack.config.base");
//引入webpack-merge插件
const webpackMerge = require("webpack-merge");
//引入配置文件
const config = require("./config");

const webpack = require("webpack");

module.exports = webpackMerge(webpackBase,{
	plugins:[
		//代码压缩
		new webpack.optimize.UglifyJsPlugin({
			//开启sourceMap
			sourceMap:true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			//chunk名为commons
			name:"commons",
			filename:"js/[name].bundle.[hash:5].js"
		})
	]
})
