class Common {
	
	constructor(){

	}
	/**
	 * @Author   hc
	 * @DateTime 2018-02-10
	 * @Describe 获取当前时间，格式 2018-01-01 11:02:59
	 * @return   {[type]}   [description]
	 */
	getCurrentTime(){
		var myDate = new Date();
        var y = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
        var m = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
        var d = myDate.getDate();        //获取当前日(1-31)
        m=m>10?m:("0"+m);
        d=d>10?d:("0"+d);
        var hh= myDate.getHours();       //获取当前小时数(0-23)
        var mm = myDate.getMinutes();     //获取当前分钟数(0-59)
        var ss = myDate.getSeconds();     //获取当前秒数(0-59)
        var sss = myDate.getMilliseconds();    //获取当前毫秒数(0-999)
        var time =""+y+"-"+m+"-"+d+" "+hh+":"+mm+":"+ss;
        return time;
	}
}

export default Common;