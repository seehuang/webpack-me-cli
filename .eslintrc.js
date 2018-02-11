/*
* @Author: hc
* @Date:   2018-02-11 10:31:08
* @Last Modified by:   hc
* @Last Modified time: 2018-02-11 10:35:52
*/
module.exports = {
	env: {
		browser:true,
		commonjs:true,
		es6:true,
		node:true
	},
	extends:'eslint:recommended',
	parserOptions:{
		sourceType:'module',
	},
	rules:{
		'comma-dangle':['error','always-multiline'],
		indent:['error',2],
		'linebreak-style':['error','unix'],
		quotes:['error','single'],
		semi:['error','always'],
		'no-unused-wars':['warn'],
		'no-console':0
	}
}