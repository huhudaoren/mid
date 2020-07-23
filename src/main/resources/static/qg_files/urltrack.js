//站长统计
// var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1255603889'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1255603889' type='text/javascript'%3E%3C/script%3E"));

/*
if(location.host!='360.28d4.com'){
var thetongji_pageurl = escape(window.location.href);
var thetongji_referer = escape(document.referrer);
var C_SEM_URL = "http://semsys.28.com/Count.php?PageUrl="+encodeURIComponent(thetongji_pageurl)+"&ReferUrl="+encodeURIComponent(thetongji_referer);
document.write(unescape("%3Cscript src='" + C_SEM_URL + "' %3E%3C/script%3E"));
}*/

function changeUrl(){
	var url=location.href;//获取url
	var s = url.indexOf("?");//判断是否挂有参数
	if(s!=-1){
		//获取当前所有a标签链接
		var arr=document.getElementsByTagName("a");
		for(var i=0;i<arr.length;i++){
			var getStr=url.substr(s);
			var href=arr[i].getAttribute("href");
			
			if(!href){
				continue;
			}
			var cl=arr[i].getAttribute("class");
			if(cl=="head_icon1"||cl=="btn_tj"){
				continue;
			}
			if( typeof(href)!="undefined" || !href || href.indexOf("javascript:")!=-1){
				continue;
			}
			if (typeof(href)!="undefined" || !href || href!=0)
			{
				continue;
			}
			//判断url和href里是否都包含相同参数，如果有责不挂url里的对应参数
			if(!(href.indexOf("ad")==-1)&&!(getStr.indexOf("ad")==-1)){
				getStr=getStr.replace(/(^[?&])ad=([^&]*?)(&|$)/g, "$3");
			}
			if(!(href.indexOf("qt")==-1)&&!(getStr.indexOf("qt")==-1)){
				getStr=getStr.replace(/(^[?&])qt=([^&]*?)(&|$)/g, "$3");
			}
			//alert(href+";   "+getStr)
			if(!(href.indexOf("zt")==-1)&&!(getStr.indexOf("zt")==-1)){
				getStr=getStr.replace(/(^[?&])zt=([^&]*?)(&|$)/g, "$3");
			}
			if(!(href.indexOf("bannerID")==-1)&&!(getStr.indexOf("bannerID")==-1)){
				getStr=getStr.replace(/(^[?&])bannerID=([^&]*?)(&|$)/g, "$3");
			}
			//如果url中带锚点链接，直接去掉
			if(!(getStr.indexOf("#")==-1)){
				getStr = getStr.replace(/#.*/,"");
			}
			//如果href里带锚点链接的挪到链接的后面
			if(!(href.indexOf("#")==-1)){
				getStr = getStr+href.match(/#.*/);
				href = href.replace(/#.*/,"");
			}

			//getStr=getStr+"&key="+come_key;

			//查看当前链接是否自带参数
			if(href.indexOf("?")==-1){
				arr[i].setAttribute("href",href+getStr);
			}else{
				arr[i].setAttribute("href",href+getStr.replace("?","&"));
			}
		}
	}
}

window.onload=changeUrl();//页面载入后执行更换url方法

function getQueryString(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = window.location.search.substr(1).match(reg);
if (r != null) return unescape(r[2]); return null;
}