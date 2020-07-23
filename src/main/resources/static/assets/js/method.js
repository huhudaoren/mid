/*根据id获取对象*/
// function $(str) {
//     return document.getElementById(str);
// }
 
var addrShow = '';
// var btn = "";
var prov = document.getElementById('prov')
var city = document.getElementById('city')
var country =document.getElementById('country')
 
 
/*用于保存当前所选的省市区*/
var current = {
    prov: '',
    city: '',
    country: ''
};
 
/*自动加载省份列表*/
(function showProv() {
	console.log("showProv")
    // btn.disabled = true;
    var len = provice.length;
    for (var i = 0; i < len; i++) {
        var provOpt = document.createElement('option');
        provOpt.innerText = provice[i]['name'];
        provOpt.value = i;
        prov.appendChild(provOpt);
    }
})();
 
/*根据所选的省份来显示城市列表*/
function showCity(obj) {
	console.log(obj)
    var val = obj.options[obj.selectedIndex].value;
	console.log(val)
	console.log(provice[val].name)
    if (val != current.prov) {
        current.prov = val;
        addrShow.value = '';
        // btn.disabled = true;
    }
	
	document.getElementById('provName').value = provice[val].name;
    if (val != null) {
        city.length = 1;
        var cityLen = provice[val]["city"].length;
		
        for (var j = 0; j < cityLen; j++) {
            var cityOpt = document.createElement('option');
            cityOpt.innerText = provice[val]["city"][j].name;
            cityOpt.value = j;
            city.appendChild(cityOpt);
        }
    }
}
 
/*根据所选的城市来显示县区列表*/
function showCountry(obj) {
	
    var val = obj.options[obj.selectedIndex].value;
    current.city = val;
    if (val != null) {
		console.log(provice[current.prov]["city"][val].name)
		document.getElementById('cityName').value = provice[current.prov]["city"][val].name;
    }
}
