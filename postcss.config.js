/*
* @Author: hc
* @Date:   2018-02-11 10:37:33
* @Last Modified by:   hc
* @Last Modified time: 2018-02-11 14:00:26
*/
module.exports = {
	plugins:{
		'autoprefixer':{
			browsers:['last 5 version','android >= 4.0'],
			//是否美化属性值 默认ture
			cascade:true,
			//是否去掉不必要的前缀 默认ture
			remove:true
		}
	}
}