/*
* @Author: hc
* @Date:   2018-02-11 10:04:39
* @Last Modified by:   hc
* @Last Modified time: 2018-02-11 13:31:45
*/

//引入基础配置文件
const webpackBase = require("./webpack.config.base");

const webpackMerge = require("webpack-merge");

const config = require("./config");

module.exports = webpackMerge(webpackBase,{

	//配置 webpack dev server
	devServer:{
		//项目根目录
		contentBase:config.devServerOutputPath,
		//错误，警告展示设置
		overlay:{
			errors:true,
			warning:true,
		}
	}
});
