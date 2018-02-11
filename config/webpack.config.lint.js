/*
* @Author: hc
* @Date:   2018-02-11 10:17:41
* @Last Modified by:   hc
* @Last Modified time: 2018-02-11 13:30:47
*/

//引入基础配置
const webpackBase = require("./webpack.config.base");
//引入webpack merge
const webpackMerge = require("webpack-merge");
//引入基础配置表
const config =require("./config");

module.exports = webpackMerge(webpackBase,{
	module:{
		rules:[
			{
				test:/\.js$/,
				//强制先进行ESLint检查
				enforce:"pre",
				//不对node_modules 和lib文件夹中的代码进行检查
				exclude:/node_modules|lib/,
				loader:"eslint-loader",
				options:{
					//启用自动修复
					fix:true,
					emitWarning:true
				}

			}
		]
	},
	devServer:{
		contentBase:config.devServerOutputPath,
		overlay:{
			errors:true,
			warinings:true
		}
	}
})