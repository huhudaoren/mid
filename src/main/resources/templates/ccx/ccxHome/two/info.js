const comName = "东莞市幽梦电子商务有限公司";
const ICPnum = "粤ICP备20036370号";
const tel = "400-6906-999";

window.onload = function () {
	opinion();
    document.getElementById('comName1').innerText = comName;
    document.getElementById('comName2').innerText = comName;
    document.getElementById('tel1').innerText = tel;
    document.getElementById('beian').innerText = ICPnum;
    document.getElementById('comName3').innerText = comName;
    document.getElementById('comName4').innerText = comName;
    document.getElementById('comName5').innerText = comName;
}

function opinion(){
			if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
				document.getElementById('top_info').setAttribute("style","position:absolute;visibility:hidden;");
				document.getElementById('top_logo').setAttribute("style","width:auto;height:50px;");
				document.getElementById('banquan').setAttribute("style","font-size:5px;");
			}else {
				return 0;
			}
		}
		
