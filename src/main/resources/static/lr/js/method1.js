/*根据id获取对象*/
// function $(str) {
//     return document.getElementById(str);
// }
 
var addrShow = '';
// var btn = "";
var prov1 = document.getElementById('prov1')
var city1 = document.getElementById('city1')
var country =document.getElementById('country1')
 
 
/*用于保存当前所选的省市区*/
var current = {
    prov: '',
    city: '',
    country: ''
};
 
/*自动加载省份列表*/
(function showProv1() {
	console.log("showProv")
    // btn.disabled = true;
    var len = provice.length;
    for (var i = 0; i < len; i++) {
        var provOpt = document.createElement('option');
        provOpt.innerText = provice[i]['name'];
        provOpt.value = i;
        prov1.appendChild(provOpt);
    }
})();
 
/*根据所选的省份来显示城市列表*/
function showCity1(obj) {
    var val = obj.options[obj.selectedIndex].value;
    if (val != current.prov) {
        current.prov = val;
        addrShow.value = '';
        // btn.disabled = true;
    }
	
	document.getElementById('provName1').value = provice[val].name;
    if (val != null) {
        city1.length = 1;
        var cityLen = provice[val]["city"].length;
		
        for (var j = 0; j < cityLen; j++) {
            var cityOpt = document.createElement('option');
            cityOpt.innerText = provice[val]["city"][j].name;
            cityOpt.value = j;
            city1.appendChild(cityOpt);
        }
    }
}
 
/*根据所选的城市来显示县区列表*/
function showCountry1(obj) {
	
    var val = obj.options[obj.selectedIndex].value;
    current.city = val;
    if (val != null) {
		console.log(provice[current.prov]["city"][val].name)
		document.getElementById('cityName1').value = provice[current.prov]["city"][val].name;
    }
}
