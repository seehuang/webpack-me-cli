/*
* @Author: hc
* @Date:   2018-02-10 14:28:09
* @Last Modified by:   hc
* @Last Modified time: 2018-02-11 17:00:38
*/
import Common from '../common/common';

import '../css/base.css';

import '../css/pageA.css';

import '../css/swiper2.7.6.css';

import $ from 'jquery';
import Swiper from 'swiper';
class pageA {

	constructor(){
		console.log(new Common().getCurrentTime());
		window.onload = function() {
		  var mySwiper = new Swiper('.swiper-container',{
		    loop: true
		    //其他设置
		  });  
		}
	}

	initEvent(){
		const dom = $('.pageA-btn');
		this.btnClickHandle(dom);
	}

	btnClickHandle(dom){
		dom.on("click",(e)=>{
			alert(" page B btn click");
		})
	}
}

new pageA().initEvent();

export default pageA