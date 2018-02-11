/*
* @Author: hc
* @Date:   2018-02-10 16:34:29
* @Last Modified by:   hc
* @Description 由于所有的配置文件都集中再config文件夹，所以，根目录下面的webpack.config.js很简单
* @Last Modified time: 2018-02-10 16:46:10
*/


//获取环境命令，并除去首位空格
const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"");

//根据环境变量引用的相关的配置文件
module.exports = require(`./config/webpack.config.${env}.js`)