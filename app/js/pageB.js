/*
* @Author: hc
* @Date:   2018-02-10 14:28:27
* @Last Modified by:   hc
* @Last Modified time: 2018-02-10 16:26:11
*/
import Common from '../common/common';

import '../css/base.css';

import '../css/pageB.css';


class pageB{

	constructor(){

	}

	initEvent(){
		this.btnClickHandle(dom);
	}

	btnClickHandle(dom){
		dom.on("click",(e)=>{
			alert(" page A btn click");
		})
	}

}

export default pageB