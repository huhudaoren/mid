var isNS=false;var isIE=true;if(navigator.appName=="Microsoft Internet Explorer")isIE=true;if(navigator.appName=="Netscape"){isIE=false;isNS=true;}
var chrome_event_bind=false;function getStringField(str,deli,pos)
{arr=str.split(deli);if(arr.length>=pos)
{return arr[pos-1];}
else
{return"";}}
function _URLSubstring(str,len)
{var ln=0;var subs="";for(var i=0;i<str.length;i++)
{var s=str.substr(i,1);if(s>'~')
{ln+=6;}
else if(s==" ")
{ln+=3;}
else
{ln++;}
if(ln<=len)
{subs+=s;if(ln==len)break;}
else
{break;}}
return subs;}
function msgFilter(msg)
{while(/onerror|onclick|onload|onmouse|onkey|unescape|decodeuri|eval|expression|\\/igm.test(msg)){msg=msg.replace(/onerror|onclick|onload|onmouse|onkey|unescape|decodeuri|eval|expression|\\/igm,'');}
return msg;}
function HtmlMode(msg)
{if((navigator.appName=="Microsoft Internet Explorer")&&(navigator.appVersion.match(/MSIE \d\.\d/)=="MSIE 5.0"))
{;}
else
{msg=msg.replace(new RegExp('<scr'+'ipt[^>]*?>.*?</scr'+'ipt>','g'),"");msg=msg.replace(new RegExp('\<\!\-\-.*?\-\-\>','g'),"");}
msg=msg.replace('\<\!\-\-',"");msg+="</a>";msg=msg.replace(/(\r\n)/g,"<br>&nbsp;&nbsp;");return msg;}
function UrlEncode(text)
{return encodeURIComponent(text);}
function UrlDecode(text)
{try
{return unescape(text);}
catch(e)
{return text;}}
function UrlDecode2(text)
{try
{return decodeURIComponent(text);}
catch(e)
{return text;}}
function UrlDecode3(text)
{try
{return decodeURIComponent(text);}
catch(e)
{try
{return unescape(text);}
catch(e)
{return text;}}}
function UrlDecode4(text)
{try
{return decodeURIComponent(text.replace(/%(?![\da-f]{2})/gi,'%25'));}
catch(e)
{return text;}}
function HtmlEncode(text)
{var msg=text.replace(/&/g,'&amp;').replace(/\"/g,'&quot;').replace(/\'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;');msg=msg.replace(/\r\n/g,"<br/>");msg=msg.replace(/\r|\n/g,"<br/>");return msg;}
function HtmlDecode(text)
{var msg=text.replace(/&amp;/g,'&').replace(/&amp;/g,'&').replace(/&quot;/g,'\"').replace(/&#039;/g,'\'').replace(/&#39;/g,'\'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&mdash;/g,'—');msg=msg.replace(/<br\/>/g,'\n');return msg;}
function UBBEncode(str){str=str.replace(/<img[^>]*src=[\'\"\s]*[^\s\'\"]+img\/face\/([^\s\'\"]+)\/([^\s\'\".]+)[^>]*>/ig,function($1,$2,$3){var face_code="{"+$2+"#"+$3.split('_')[1]+"#}";return face_code;});str=str.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/ig,'[s:$1]');str=str.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/ig,function($1,$2){if($2.substr(0,2)=='//')return'[IMG]'+http_pro+$2.substr(2)+'[/IMG]';if($2.indexOf('http://')==-1&&$2.indexOf('https://')==-1){if($2.indexOf(host)==-1){return'[IMG]'+http_pro+host+$2+'[/IMG]';}}
return'[IMG]'+$2+'[/IMG]';});var apattern=new RegExp(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/i);if(apattern.test(str)==true){str=str.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/ig,'[URL='+'$1'+']'+'$2'+'[/URL]');return UBBEncode(str);}
var urlList=[];var imgList=[];if(str.indexOf("[IMG")!=-1||str.indexOf("[img")!=-1){var imgpattern=/\[IMG\](https:\/\/|http:\/\/)?(.+?)\[\/IMG\]/gim;str=str.replace(imgpattern,function(img){imgList.push(img);img="[HZ6D_IMG_"+(imgList.length-1)+"]";return img;});}
if(str.indexOf("[URL")!=-1||str.indexOf("[url")!=-1){var pattern=/\[URL\=([^\]]*)\](.+?)\[\/URL\]/gim;str=str.replace(pattern,function(url){urlList.push(url);url="[HZ6D_URL_"+(urlList.length-1)+"]";return url;});}
var re=/\[voice\].+\[\/voice\]/;if(!re.test(str)){str="!"+str;var pattern=/([^{\/])(((ftp|http|https):\/\/)?([\w-]+@[\w-]+\.)+(com|cn|info|net|org|me|top|tw|tv)([\/\?][\w!~;*'()&=\+\$%\-\/\#\?:\.,\|\^]*)?)/gim;if(!pattern.test(str)){var pattern=/([^{\/])(((ftp|http|https):\/\/)?([\w-]+\.)+(com|cn|info|net|org|me|top|tw|tv)([\/\?][\w!~;*'()&=\+\$%\-\/\#\?:\.,\|\^]*)?)/gim;str=str.replace(pattern,"$1[URL=$2]$2[/URL]");}
str=str.replace('!','');}
if(str.indexOf("[URL")!=-1||str.indexOf("[url")!=-1){var pattern=/\[URL\=([^\]]*)\]([^\[]*)\[\/URL\]/gim;str=str.replace(pattern,function(url){urlList.push(url);url="[HZ6D_URL_"+(urlList.length-1)+"]";return url;});}
str=str.replace(/\[URL=www/gi,"[URL="+http_pro+"www");var reg=new RegExp(/[\d]+(1(3[0-9]|4[5-9]|5[012356789]|6[67]|7[0-9]|8[0-9]|9[1789])\d{8})(?!\d)+/gi);if(!reg.test(str)){str=str.replace(/[^\d]?(1(3[0-9]|4[5-9]|5[012356789]|6[67]|7[0-9]|8[0-9]|9[1789])\d{8})(?!\d)+/gi,function(mobi){var tmp1=mobi.replace(/\D/gi,''),tmp2=mobi.replace(/\d/gi,'');mobi=tmp2+'[MOBILE]'+tmp1+'[/MOBILE]';return mobi;});}
var reg2=new RegExp(/[\d]+0(\d{2,3}-?\d{7,8})(?!\d)+/gi);if(!reg2.test(str)){str=str.replace(/([^\d])?(0(\d{2,3}-?\d{7,8}))(?!\d)+/gi,function($1,$2,$3){var tmp=$1.replace($3,'');var phone=tmp+'[PHONE]'+$3+'[/PHONE]';return phone;});}
if(urlList.length>0){var i=0;str=str.replace(/(\[HZ6D_URL_)(\d)+(\])/gi,function(url){url=urlList[i];i++;return url;});}
if(imgList.length>0){var i=0;str=str.replace(/(\[HZ6D_IMG_)(\d)+(\])/gi,function(img){img=imgList[i];i++;return img;});}
str=str.replace(/((\w-*\.*)+@(\w-?)+(\.\w{2,})+)/gi,"[EMAIL]$1[/EMAIL]");return str;}
function UBBCode(strContent){if((navigator.appName=="Microsoft Internet Explorer")&&(navigator.appVersion.match(/MSIE \d\.\d/)=="MSIE 5.0")){if(strContent.indexOf("[IMG]")>=0){var con=strContent.substr(5,strContent.indexOf("[/IMG]")-5);strContent="<IMG SRC=\""+con+"\">";}
if(strContent.indexOf("[URL=")>=0){var tlink=strContent.substr(5,strContent.indexOf("]")-5);var text=strContent.substr(strContent.indexOf("]")+1,strContent.length-6-strContent.indexOf("]")-1);strContent="<A HREF=\""+tlink+"\" TARGET=_blank>"+text+"</A>";}
if(strContent.indexOf("[MOBILE]")>=0){var tlink=strContent.substr(8,strContent.indexOf("[/MOBILE]")-8);strContent=text;}
if(strContent.indexOf("[PHONE]")>=0){var tlink=strContent.substr(7,strContent.indexOf("[/PHONE]")-7);strContent=text;}
if(strContent.indexOf("[EMAIL]")>=0){var tlink=strContent.substr(7,strContent.indexOf("[/EMAIL]")-7);strContent=text;}}else{var r2=new RegExp("(\\[URL=(.+?)\])(.+?)(\\[\\/URL\\])","gim");var r3=new RegExp("(\\[IMG\])(\\S+?)(\\[\\/IMG\\])","gim");var r4=new RegExp("(\\[QQ\])(\\d+?)(\\[\\/QQ\\])","gim");var r5=new RegExp("&amp","gim");var r6=new RegExp("(\\[MOBILE\])(\\d+?)(\\[\\/MOBILE\\])","gim");var r7=new RegExp("(\\[PHONE\])([\\d\\-]+?)(\\[\\/PHONE\\])","gim");var r8=new RegExp("(\\[EMAIL\])(\\S+?)(\\[\\/EMAIL\\])","gim");var r9=new RegExp("(\\[voice\])(\\S+?)(\\[\\/voice\\])","gim");strContent=strContent.replace(r2,function($1,$2,$3,$4,$5){if($3.indexOf('http://')==-1&&$3.indexOf('https://')==-1){$3=http_pro+$3;}
return'<A HREF="'+$3+'" TARGET="_blank" style="text-decoration:underline; color:inherit;">'+$4+'</A>';});strContent=strContent.replace(r3,'<IMG border="0" SRC="$2">');strContent=strContent.replace(r4,'<img border="0" title="点击跟我QQ[$2]聊" src="http://www.53kf.com/img/qq.gif" onclick="addQQ(\'$2\')" style="cursor:pointer"/>[$2]');strContent=strContent.replace(r6,'$2');strContent=strContent.replace(r7,'$2');strContent=strContent.replace(r8,'$2');strContent=strContent.replace(r9,function($1,$2,$3){try{audio_num++;audio_vars['audio_'+audio_num]=new BenzAMRRecorder();audio_vars['audio_'+audio_num].initWithUrl($3);return'<div class="audiobtn" id="audio_'+audio_num+'"><span class="audio_log" alt=""><span></div>';}catch(e){return'<div class="audiobtn unaudio_play"><span class="audio_log" alt=""><span></div>';}});}
strContent=strContent.replace(/\{(.[^#.-\/]*)#(.[^#.-\/]*)#\}/gi,function($1,$2,$3){return"<img class='img_53kf_face' src=\""+http_pro+host+"/img/face/"+$2+"/"+$2.replace('_min','')+"_"+$3+".gif?8\" border=\"0\">";});return strContent;}
function UBBEncode2(str){str=str.replace(/<br[^>]*>/ig,'\n');str=str.replace(/<p[^>\/]*\/>/ig,'\n');str=str.replace(/\son[\w]{3,16}\s?=\s*([\'\"]).+?\1/ig,'');str=str.replace(/<hr[^>]*>/ig,'[hr]');str=str.replace(/<(sub|sup|u|strike|b|i|pre)>/ig,'[$1]');str=str.replace(/<\/(sub|sup|u|strike|b|i|pre)>/ig,'[/$1]');str=str.replace(/<(\/)?strong>/ig,'[$1b]');str=str.replace(/<(\/)?em>/ig,'[$1i]');str=str.replace(/<(\/)?blockquote([^>]*)>/ig,'[$1blockquote]');str=str.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/ig,'[s:$1]');str=str.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/ig,'[img]'+'$1'+'[/img]');str=str.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/ig,'[url=$1]'+'$2'+'[/url]');str=str.replace(/<[^>]*?>/ig,'');str=str.replace(/&amp;/ig,'&');str=str.replace(/&lt;/ig,'<');str=str.replace(/&gt;/ig,'>');return str;}
function UBBDecode2(str){str=str.replace(/</ig,'&lt;');str=str.replace(/>/ig,'&gt;');str=str.replace(/\n/ig,'<br />');str=str.replace(/\[code\](.+?)\[\/code\]/ig,function($1,$2){return phpcode($2);});str=str.replace(/\[hr\]/ig,'<hr />');str=str.replace(/\[\/(size|color|font|backcolor)\]/ig,'</font>');str=str.replace(/\[(sub|sup|u|i|strike|b|blockquote|li)\]/ig,'<$1>');str=str.replace(/\[\/(sub|sup|u|i|strike|b|blockquote|li)\]/ig,'</$1>');str=str.replace(/\[\/align\]/ig,'</p>');str=str.replace(/\[(\/)?h([1-6])\]/ig,'<$1h$2>');str=str.replace(/\[align=(left|center|right|justify)\]/ig,'<p align="$1">');str=str.replace(/\[size=(\d+?)\]/ig,'<font size="$1">');str=str.replace(/\[color=([^\[\<]+?)\]/ig,'<font color="$1">');str=str.replace(/\[backcolor=([^\[\<]+?)\]/ig,'<font style="background-color:$1">');str=str.replace(/\[font=([^\[\<]+?)\]/ig,'<font face="$1">');str=str.replace(/\[list=(a|A|1)\](.+?)\[\/list\]/ig,'<ol type="$1">$2</ol>');str=str.replace(/\[(\/)?list\]/ig,'<$1ul>');str=str.replace(/\[s:(\d+)\]/ig,function($1,$2){return smilepath($2);});str=str.replace(/\[img\]([^\[]*)\[\/img\]/ig,'<img src="$1" border="0" />');str=str.replace(/\[url=([^\]]+)\]([^\[]+)\[\/url\]/ig,'<a href="$1">'+'$2'+'</a>');str=str.replace(/\[url\]([^\[]+)\[\/url\]/ig,'<a href="$1">'+'$1'+'</a>');return str;}
function checkCookie(){var timestamp=new Date().getTime();setCookie2('sup_cookie',timestamp);if(timestamp!=getCookie2('sup_cookie')){return false;}
try{return'localStorage'in window&&window['localStorage']!==null;}catch(e){return false;}
return true;}
function getCookie2(name)
{var search=name+"=";if(document.cookie.length>0)
{offset=document.cookie.indexOf(search);if(offset!=-1)
{offset+=search.length
end=document.cookie.indexOf(";",offset)
if(end==-1)
{end=document.cookie.length;}
return unescape(document.cookie.substring(offset,end));}}
return"";}
function setCookie2(name,value)
{var today=new Date();var expires=new Date();expires.setTime(today.getTime()+1000*60*60*24*365);document.cookie=name+"="+escape(value)+"; expires="+expires.toGMTString();}
function getTime()
{var dd=new Date();return Math.floor(dd.getTime()/1000);}
function getTime2()
{var date=new Date();var hour="000"+date.getHours();var min="000"+date.getMinutes();var sec="000"+date.getSeconds();hour=hour.substr(hour.length-2);min=min.substr(min.length-2);sec=sec.substr(sec.length-2);return hour+":"+min+":"+sec;}
function snapshot_fun(type){var time_later=1;if(type=='hide'){try{top.postMessage('53kf_min_window','*');time_later=200;}catch(e){}}
setTimeout(function(){window.snapShot_obj=document.getElementById('snapShot_obj');snapShot_obj.host=snapshot_host;snapShot_obj.id6d=snapshot_rand_num;snapShot_obj.start();},time_later);}
function ocx_callback(a,b,c){try{top.postMessage('53kf_show_window','*');}catch(e){}
if(a==200){var img_url='http://'+snapshot_host+'/upload/snapshot/'+b+'/'+c;var urlcode='[IMG]'+img_url+'[/IMG]';to_insert_img_obj.sendimgmsg(urlcode);}}
function insert_snapshot3(host,rand_num,type){if($(".line-up").css("display")=='block')return;if(window.ActiveXObject||("ActiveXObject"in window)){if(document.getElementById('plugin_snapshot').innerHTML){snapshot_fun(type);}else{var plusCheck=false;try{new ActiveXObject('KFIESNAPSHOT.KfIESnapshotCtrl.1');plusCheck=true;}catch(e){var new_window_left=(window.screen.width-800)/2;window.open('/download/snapshot_show.php','newwindow','height='+window.screen.availHeight+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');return;}
snapshot_host=host;snapshot_rand_num=rand_num;if(plusCheck){var ss='';ss+='<object id="snapShot_obj" name="snapShot_obj" classid="clsid:4CC32CB3-E6D8-4042-8A69-5C7783B977D0" codebase="http://'+host+'/download/KFIESnapShot_v1.1.exe#version=1,0,0,2"></object>';document.getElementById('plugin_snapshot').innerHTML=ss;setTimeout(snapshot_fun(type),500);}}
return;}
if(navigator.userAgent.indexOf('Chrome')!=-1){if(navigator.userAgent.indexOf('TheWorld')!=-1||navigator.userAgent.indexOf('Edge')!=-1||navigator.userAgent.indexOf('MetaSr')!=-1||navigator.userAgent.indexOf('BIDUBrowser')!=-1||navigator.userAgent.indexOf('QQBrowser')!=-1){var new_window_left=(window.screen.width-800)/2;var new_window_height=window.screen.availHeight-80;window.open('/download/snapshot_show.php?browser=other','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');return;}
var mimeTypes=navigator.mimeTypes;for(var mt in mimeTypes){if(mimeTypes[mt]['type']=='application/vnd.chromium.remoting-viewer'){var new_window_left=(window.screen.width-800)/2;var new_window_height=window.screen.availHeight-80;window.open('/download/snapshot_show.php?browser=other','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');return;}}
var chrome_version=navigator.userAgent.substr(navigator.userAgent.indexOf('Chrome')+7,2);if(chrome_version>=45){var CrxEventFlag='myKfCapturteCustomEvent';var objFlag=document.getElementById(CrxEventFlag);if(objFlag===null){window.open('/download/snapshot_show.php?browser=other','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');return;}
if(!chrome_event_bind){snapshot_host=host;document.addEventListener('CaptureEventCallBack',function(evt){var _aoResult=evt.detail;ocx_callback(_aoResult.state,_aoResult.fpath,_aoResult.fname);});chrome_event_bind=true;}
if(type=='hide'){try{top.postMessage('53kf_min_window','*');}catch(e){}}
var evt=document.createEvent("CustomEvent");evt.initCustomEvent('myKfCapturteCustomEvent',true,false,'{"host":"'+host+'","id6d":"'+rand_num+'"}');document.dispatchEvent(evt);}else{if(document.getElementById('plugin_snapshot').innerHTML){try{snapshot_fun(type);ocx_callback(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){alert(e);}}else{var ss='';ss+='<embed id="snapShot_obj" type="application/snapshot-plugin" width=0 height=0></embed>';document.getElementById('plugin_snapshot').style.display='block';document.getElementById('plugin_snapshot').innerHTML=ss;snapshot_host=host;snapshot_rand_num=rand_num;try{snapshot_fun(type);ocx_callback(snapShot_obj.state,snapShot_obj.fpath,snapShot_obj.fname);}catch(e){var new_window_left=(window.screen.width-800)/2;var new_window_height=window.screen.availHeight-80;window.open('/download/snapshot_show.php?browser=other','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');}}}
return;}
var new_window_left=(window.screen.width-800)/2;var new_window_height=window.screen.availHeight-80;window.open('/download/snapshot_show.php?browser=other','newwindow','height='+new_window_height+', width=800, top=0, left='+new_window_left+', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');}
function getUrlParams(param,url){if(url==undefined){url=location.search;}
var params_arr=url.split('&');for(var i=0;i<params_arr.length;i++){if(params_arr[i].indexOf(param)!=-1){var temp=params_arr[i].split('=');return temp[1];}}
return'';}
function sendkafka(type,device,number,time,vote){var talk_time='0';if(time)talk_time=time;var senddata='';var curUrl=window.location.href;if(curUrl.indexOf("is_swh=1")!=-1)is_swh=1;if(type=='type'){senddata="&type="+type+"&talk_id="+mytempid+"&company_id="+company_id+"&guest_id="+myid+"&talk_type="+talk_type+"&talk_time="+talk_time+"&device="+device+"&guest_ip_info="+UrlEncode(guest_ip_info)+"&talk_page="+UrlEncode(talkpage)+"&talk_quality=0&number="+number+"&se="+UrlEncode(search_engine)+"&kw="+UrlEncode(keyword)+"&referer="+UrlEncode(frompage)+"&is_swh="+is_swh+"&land_page="+UrlEncode(land_page);}else if(type=='vote'){senddata="&type="+type+"&talk_id="+myfirst_tempid+"&company_id="+company_id+"&id6d="+obj_id+"&talk_time="+talk_time+"&number="+number+"&vote="+vote+"&device="+device;}else if(type=="talk_info"){senddata="&type=talk_info&uid="+uid+"&talk_id="+myfirst_tempid+"&company_id="+company_id+"&guest_id="+myid+"&open_time="+open_time+"&device="+device+"&guest_ip_info="+UrlEncode(guest_ip_info)+"&talk_page="+UrlEncode(talkpage)+"&se="+UrlEncode(search_engine)+"&kw="+UrlEncode(keyword)+"&referer="+UrlEncode(frompage)+"&id6d="+obj_id+"&tFrom="+tfrom;}
$.ajax({type:"POST",url:"company_collection.php",data:senddata,dataType:"json",success:function(data){if(data.result=='succeed'&&talk_type=='3'){origin_time=data.talk_time;}}});}
function collection_guest(guest_id){var data={type:"guest",guest_id:guest_id};$.ajax({type:"POST",url:"company_collection.php",data:data,dataType:"json",success:function(data){}});};var code_key='';function verifyCode(res,event){var e=event||window.event;mouse=new MouseEvent(e);if(res.guestid<0)res.guestid=0;var xpos=mouse.x;var ypos=mouse.y;var url=http_pro+"imgcode.53kf.com/imgcode.jsp";var str="action=CODE&operate=verify_code";str+="&pictureid="+res.pictureid;str+="&from="+res.from;str+="&guestid="+res.guestid;str+="&companyid="+res.companyid;str+="&time="+Date.parse(new Date());str+="&xpos="+xpos;str+="&ypos="+ypos;refreshcode('POST',url,str);}
function callBackCode(res){if(res.result==="success"){var char='char'+res.times;$("#"+char).attr("style","font-weight:bold;color:red;width:10%;font-size:medium;background:#FFF;border:0px;");if(res.times==1){code_key=res.code_key;collection_guest(res.guestid);destroyCodeDiv();checkCodeSuccess(res.vcode);}}else{if(res.status==2)
alert("验证失败。重新点击。");else
alert("验证超时。重新点击。");fireCode_img(res.pictureid,res.from,res.type,res.guestid,res.companyid);}}
function createCodeFreeze(guestid,from,company_id){fireCode_img("",from,undefined,guestid,company_id);}
function createCodeValidateDiv(height,width,res){var validate_str=document.createElement("div");validate_str.id="code_div";validate_str.style.width="300px";validate_str.style.height="225px";validate_str.style.position="absolute";validate_str.style.fontSize="12px";validate_str.style.textAlign="center";validate_str.style.backgroundColor="#FFF";validate_str.style.zIndex=9999;var str='<img style="margin:10px;" id="code_img" alt="正在加载..." src="img/loadingcode.gif">';str+='<div style="text-align:center;position:absolute;bottom:20%;width:100%;padding-top:15px;margin:0 auto;text-align:center;">';str+='<font size="3px" style="margin-left:5px;font-weight:normal;">依次点击图中的: </font>';str+='<label id="char0" style="height;10px;width:35px;font-size:medium;background:#FFF;border:0px;display:inline-block;*display:inline;*zoom:1;" border="0">"&quot;'+decodeURI(res.char0)+'&quot;"';str+='</label>';str+='、';str+='<label id="char1" style="height;10px;width:35px;font-size:medium;background:#FFF;border:0px;display:inline-block;*display:inline;*zoom:1;" border="0">"&quot;'+decodeURI(res.char1)+'&quot;"';str+='</label>';str+='</div>';str+='<div style="margin:0 auto;margin-left:10%;position:absolute;bottom:7%;width:80%;border:1px solid #ccc;height:0px;">';str+='</div>';str+='<a id="code_refresh" onmouseover="btnchange();" class="code_refresh_1" onclick="fireCode_img(\''+res.pictureid　+'\', \''+res.from+'\', \''+res.type+'\', \''+res.guestid+'\', \''+res.companyid+'\')" title="刷新验证码">';str+='</a>';validate_str.innerHTML=str;var validate_freeze=document.getElementById("validate_freeze");document.body.insertBefore(validate_str,validate_freeze);replaccode(res);}
function createCodeValidateFreeze(id,top,left,height,width){var voteFreezeDiv=document.createElement("div");voteFreezeDiv.id=id;voteFreezeDiv.style.top=top+"px";voteFreezeDiv.style.left=left+"px";voteFreezeDiv.style.height=height+"px";voteFreezeDiv.style.width=width+"px";voteFreezeDiv.style.border="none";voteFreezeDiv.style.position="absolute";voteFreezeDiv.style.backgroundColor="#000";voteFreezeDiv.style.margin=0;voteFreezeDiv.style.padding=0;voteFreezeDiv.style.zIndex=9998;voteFreezeDiv.style.opacity="0.2";voteFreezeDiv.style.filter="alpha(opacity=20)";voteFreezeDiv.style.duration=1000;voteFreezeDiv.innerHTML="<div style='position:absolute;z-index:-1;left:-1px;top:0;width:100%;height:100%;'><iframe style='background:#000;width:100%;height:100%;filter:alpha(opacity=0);-moz-opacity:0;' frameborder='0'></iframe></div>";document.body.insertBefore(voteFreezeDiv,document.body.firstChild);}
function fireCode_img(pictureid,from,type,guestid,company_id){var url=http_pro+"imgcode.53kf.com/imgcode.jsp";var str="action=CODE&operate=get_code";str+="&type="+type;str+="&guestid="+guestid;str+="&pictureid="+pictureid;str+="&from="+from;str+="&companyid="+company_id;str+="&time="+Date.parse(new Date());refreshcode('POST',url,str);}
function refreshcode(action,url,str){$.ajax({url:url,data:str,dataType:'jsonp',jsonp:'callback',timeout:3000,success:function(res){if(res.action=='codeInfo'){codeInfo(res);}else if(res.action=='callBackCode'){callBackCode(res);}},error:function(){checkCodeError();}});}
function codeInfo(res){var obj=document.getElementById("validate_freeze");if(obj!=null){replaccode(res);}else{var height=document.body.clientHeight;var width=document.body.clientWidth;createCodeValidateFreeze("validate_freeze",0,0,height,width);createCodeValidateDiv(height,width,res);}}
function replaccode(res){var src=http_pro+"imgcode.53kf.com/imgcode.jsp";src+="?action=CODE";src+="&guestid="+res.guestid;src+="&pictureid="+res.pictureid;src+="&from="+res.from;src+="&operate=show_code";src+="&codeid="+res.codeid;src+="&companyid="+res.companyid;src+="&time="+new Date().getTime();$("#code_img").attr("src",src);$("#code_img").unbind('click').bind("click",{res:res},function(event){verifyCode(res,event);});$("#char0").html('"'+decodeURI(res.char0)+'"');$("#char1").html('"'+decodeURI(res.char1)+'"');$("#char0").attr("style","width:10%;font-size:medium;background:#FFF;border:0px;");$("#char1").attr("style","width:10%;font-size:medium;background:#FFF;border:0px;");}
function btnchange(){var bg=document.getElementById("code_refresh");bg.onmouseover=function(){this.setAttribute("className","code_refresh_2");this.setAttribute("class","code_refresh_2");}
bg.onmouseout=function(){this.setAttribute("className","code_refresh_1");this.setAttribute("class","code_refresh_1");}
bg.onmousedown=function(){this.setAttribute("className","code_refresh_3");this.setAttribute("class","code_refresh_3");}
bg.onmouseup=function(){this.setAttribute("className","code_refresh_1");this.setAttribute("class","code_refresh_1");}}
function destroyCodeDiv()
{var obj=document.getElementById("validate_freeze");obj.parentNode.removeChild(obj);obj=document.getElementById("code_div");obj.parentNode.removeChild(obj);}
function MouseEvent(e){var p=$("#code_img");var position=p.position();var positionX=e.pageX-p.offset().left||e.clientX
-p.offset().left||e.layerX-p.offset().left;this.x=positionX;var positionY=e.pageY-p.offset().top||e.clientY
-p.offset().top||e.layerY-p.offset().top;this.y=positionY;}
$(function(){var link=document.createElement("link");link.rel="stylesheet";link.type="text/css";link.href="../css/code.css";document.getElementsByTagName("head").item(0).appendChild(link);});CONST_TYPE_MODE_WITHOUT_MSG=0;CONST_TYPE_MODE_WITH_MSG=1;CONST_LNK_TYPE_ALWAYS_NEW=0;CONST_LNK_TYPE_KEEP_EXIST=1;function XMLGetNodes(xmlDoc,tagName)
{try{return(null==xmlDoc)?null:xmlDoc.getElementsByTagName(tagName);}catch(e){return null;}}
function XMLGetNode(nodeList,i)
{try{return(null==nodeList)?null:nodeList.item(i);}catch(e){return null;}}
function XMLGetNamedAttr(node,attrName)
{try{return(null==node)?'':node.attributes.getNamedItem(attrName).value;}catch(e){return'';}}
function XMLGetNodesLength(nodeList)
{try{return(null==nodeList)?0:nodeList.length;}catch(e){return 0;}}
function XMLCheckStatus(url)
{try
{var ajax=new CXMLRequest().GetXmlHttp();ajax.open("HEAD",url,false);ajax.send();return ajax.status;}
catch(e)
{return 9999;}}
function GetPostDataValue(postData,position)
{return getStringField(getStringField(postData,'&',position),'=',2);}
function CXMLRequest(tag,client)
{this.m_tag=tag;this.m_client=client;this.m_url="";this.m_postData="";this.m_isSubmit=false;this.m_xmlHttp=null;this.m_retryNum=1;if(typeof CXMLRequest._initialized=='undefined'){var myProto=CXMLRequest.prototype;myProto.CreateAjax=function(){var me=this;if(window.XMLHttpRequest)
{this.m_xmlHttp=new XMLHttpRequest();}
else
{this.m_xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}
this.m_xmlHttp.onreadystatechange=function(){me.AjaxHandler();}}
myProto.AjaxHandler=function(){var me=this;if(4==this.m_xmlHttp.readyState){if(200==this.m_xmlHttp.status){this.m_client.RequestHandler(me);this.m_xmlHttp=null;me=null;}else{var cmdArray=['LNK','REG','QST','FIL','SRV','NAM','NTS','TIP','STE','ITK','IFIL','GET','ULN'];if(/cmd=([^&]+)/.test(this.m_postData)&&cmdArray.indexOf(RegExp.$1)>=0){if(this.m_retryNum>0){this.m_retryNum--;this.Repost();}else{this.m_client.RequestHandler(me);}}}}}
myProto.SendReq=function(cmd){if(location.href.indexOf('webCompany_bg.php?')>-1)this.AddPostData('rnd',page_rnd);if(!this.m_isSubmit){this.m_xmlHttp.open("POST",this.m_url,true);this.m_xmlHttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");this.m_xmlHttp.send(this.m_postData);this.m_isSubmit=true;}}
myProto.SetURL=function(URL){if(""==this.m_url){this.m_url=URL+'?_='+new Date().getTime();}}
myProto.AddPostData=function(name,value){this.m_postData+=name+"="+value+"&";}
myProto.SetPostData=function(value){this.m_postData=value;}
myProto.GetPostData=function(value){return this.m_postData;}
myProto.GetTag=function(){return this.m_tag;}
myProto.GetXmlHttp=function(){return this.m_xmlHttp;}
myProto.Repost=function(){this.m_isSubmit=false;this.CreateAjax();this.SendReq();}
CXMLRequest._initialized=true;}
this.CreateAjax();}
function CXMLGETRequest(tag,client){var me=this;var m_tag=tag;var m_client=client;var m_url="";var m_postData="";var m_isSubmit=false;this.SendReq=function(){if(!m_isSubmit){try{$.getJSON(m_url+"?"+m_postData+"jsoncallback=?",function(xmlStr){var xml=me.loadXML(xmlStr);m_client.GETRequestHandler(me,xml);});}catch(e){}
m_isSubmit=true;}}
this.loadXML=function(xmlStr){var xmlDom=null;if(window.ActiveXObject){xmlDom=new ActiveXObject("Microsoft.XMLDOM");xmlDom.async=false;xmlDom.loadXML(xmlStr);}else{xmlDom=new DOMParser().parseFromString(xmlStr,"text/xml");}
return xmlDom;}
this.SetURL=function(URL){if(""==m_url){m_url=URL;}}
this.AddPostData=function(name,value){m_postData+=name+"="+value+"&";}
this.SetPostData=function(value){m_postData=value;}
this.GetPostData=function(value){return m_postData;}
this.GetTag=function(){return m_tag;}};function CXMLClientKh(srvAddr,cmdAddr,debug)
{this.m_cmdAddr="";this.m_srvAddr=srvAddr;this.m_debug=debug;this.m_addNo=1;this.m_gid=0;this.m_vid=0;this.m_tid=0;this.first_tid=0;this.m_link=0;this.m_dwid=0;this.m_kfid=0;this.m_kfName="";this.m_workerid=0;this.m_from="";this.m_kfPage="";this.m_lnkParam="";this.m_tfrom="";this.m_search_engine="";this.m_keyword="";this.m_counter=0;this.m_lastGetTime=0;this.m_lastGetTag=0;this.m_khnumber=1;this.m_shutdown=false;var undefined,get_timestamp="",get_timestamp_old="";if(undefined==cmdAddr){this.m_cmdAddr="/sendmsg.jsp";}else{this.m_cmdAddr=cmdAddr;}
if(typeof CXMLClientKh._initialized=='undefined'){var myProto=CXMLClientKh.prototype;myProto.GetGid=function(){return this.m_gid;}
myProto.GetTid=function(){return this.m_tid;}
myProto.GetFirstTid=function(){if(this.first_tid==''){return this.m_tid;}
return this.first_tid;}
myProto.GetVid=function(){return this.m_vid;}
myProto.GetKfid=function(){return this.m_kfid;}
myProto.GetKfname=function(){return this.m_kfName;}
myProto.GetWorkerid=function(){return this.m_workerid;}
myProto.GetKhnumber=function(){return this.m_khnumber;}
myProto.ShutDown=function(isDown){this.m_shutdown=isDown;if(isDown){this.m_lastGetTime=0;m_lastSessionTime=0;window.clearInterval(this.timerID);}else{this.m_lastGetTime=new Date().getTime();m_lastSessionTime=new Date().getTime();}}
myProto.Timeout=function(){if(this.m_lastGetTime>0&&(new Date().getTime()-this.m_lastGetTime)>20000){this.GetCmd(true);}}
myProto.SetKhInfo=function(gid,frompage,talkpage,talktitle,lnkparam,tfrom,search_engine,keyword){this.m_gid=gid;this.m_from=frompage;m_talkPage=talkpage;m_talktitle=talktitle;this.m_lnkParam=lnkparam;this.m_tfrom=tfrom;this.m_search_engine=search_engine;this.m_keyword=keyword;this.land_page=arguments[8]?arguments[8]:'';}
myProto.CreateRequest=function(){if(this.m_shutdown){return null;}else{var req=new CXMLRequest(++this.m_counter,this);return req;}}
myProto.RequestHandler=function(request){var ajax=request.GetXmlHttp();if(ajax.status==200)
{if(this.m_debug){this.OnDebug(ajax.responseText);}
var rspList=XMLGetNodes(ajax.responseXML,'Response'),rspLength=XMLGetNodesLength(rspList);if(rspLength>0)
{var rspListNodes=[];for(var i=0;i<rspLength;i++)
{rspListNodes[i]=XMLGetNode(rspList,i);if(XMLGetNamedAttr(rspListNodes[i],"cmd")=="GET")
{get_timestamp=XMLGetNamedAttr(rspListNodes[i],"timestamp");if(get_timestamp!=""&&get_timestamp_old==get_timestamp){this.GetCmd();rspListNodes=null;return;}}}
for(var i=0;i<rspLength;i++){try{this.RspProc(request.GetTag(),rspListNodes[i]);}catch(e){this.OnErr(e.name,e.message);}}}
else
{this.m_addNo++;this.OnErr(0,"Parse rsp error!");}}
else
{var postData=request.GetPostData(),cmd=GetPostDataValue(postData,1);switch(cmd){case"LNK":this.OnLnkFail();break;case"QST":var msg=GetPostDataValue(postData,6);this.OnQstFail(msg);break;case"FIL":this.OnFilFail();break;default:break;}}}
myProto.RspProc=function(tag,rsp){var cmd,errCode=0,node,nodeList,data,msg,me=this;if(null==rsp){return;}
try{cmd=XMLGetNamedAttr(rsp,"cmd");switch(cmd){case"LNK":{errCode=XMLGetNamedAttr(rsp,"ecode");this.m_kfid=XMLGetNamedAttr(rsp,"kfid");this.m_kfName=XMLGetNamedAttr(rsp,"kfname");this.m_tid=XMLGetNamedAttr(rsp,"khtmpid");this.first_tid=XMLGetNamedAttr(rsp,"firstkhtempid");this.m_gid=XMLGetNamedAttr(rsp,"khid");this.m_workerid=XMLGetNamedAttr(rsp,"workerid");this.m_khnumber=XMLGetNamedAttr(rsp,"khnumber");var robotid=XMLGetNamedAttr(rsp,"robotid");origin_time=XMLGetNamedAttr(rsp,"time")?XMLGetNamedAttr(rsp,"time"):0;if(0==errCode||6==errCode)
{var exp=new Date();exp.setTime(exp.getTime()+60*24*60*60*1000);document.cookie='lastKfid6d_'+company_id+"="+escape(this.m_kfid)+";expires="+exp.toGMTString();try{window.clearInterval(this.timerID);}catch(e){}
this.timerID=window.setInterval(function(){me.Timeout();},2000);}else if((3!=errCode)&&(2!=errCode))
{this.ShutDown(true);}
this.OnLinkOpen(errCode,XMLGetNamedAttr(rsp,"emsg"),robotid);break;}
case"ADDN":this.m_addNo++;break;case"GET":var isLost=XMLGetNamedAttr(rsp,'lost');code_key=XMLGetNamedAttr(rsp,'code_key');if('true'===isLost){this.getLostMsg();}
if(tag==this.m_lastGetTag){this.GetCmd();}
break;case"ULN":this.OnLinkClose(XMLGetNamedAttr(rsp,"robid"),XMLGetNamedAttr(rsp,"arg"),XMLGetNamedAttr(rsp,"style"),XMLGetNamedAttr(rsp,"workerid"),XMLGetNamedAttr(rsp,"islink"),XMLGetNamedAttr(rsp,"iscswh"),XMLGetNamedAttr(rsp,"islink_companyId"),XMLGetNamedAttr(rsp,"sid"),XMLGetNamedAttr(rsp,"companyId"));break;case"FLN":this.OnTimeOverClose(XMLGetNamedAttr(rsp,"link"));break;case"QST":var msgid=XMLGetNamedAttr(rsp,"msgid");var msg_type=XMLGetNamedAttr(rsp,"new_type");if(typeof max_msgid=="undefined"||max_msgid<msgid)max_msgid=msgid;this.OnRecvTalkMsg(XMLGetNamedAttr(rsp,"msg"),XMLGetNamedAttr(rsp,"font"),XMLGetNamedAttr(rsp,"size"),XMLGetNamedAttr(rsp,"color"),XMLGetNamedAttr(rsp,"from"),XMLGetNamedAttr(rsp,"jid6d"),XMLGetNamedAttr(rsp,"sid"),msgid,msg_type);break;case"CINFO":this.OnRecvCinfoMsg(XMLGetNamedAttr(rsp,"logo"),XMLGetNamedAttr(rsp,"title"),XMLGetNamedAttr(rsp,"content"),XMLGetNamedAttr(rsp,"curl"),XMLGetNamedAttr(rsp,"msgType"));break;case"GHQST":case"RLQST":nodeList=XMLGetNodes(rsp,"Data");var node=XMLGetNode(nodeList,0),rowList=XMLGetNodes(node,"row");this.OnRecvReceiveMsg(rowList);if(typeof rowList.length!="undefined"&&rowList.length>0){var last_list=rowList[rowList.length-1];if(typeof last_list.msgid!="undefined"){if(typeof max_msgid=="undefined"||max_msgid<last_list.msgid)max_msgid=last_list.msgid;}}
break;case"ANSWER":this.OnRecvQst(XMLGetNamedAttr(rsp,"fk_msgid"));break;case"TYP":msg=XMLGetNamedAttr(rsp,"msg");if(""==msg){this.OnTyping();}else{this.OnSetupTyping(msg);}
break;case"FIL":this.OnRecvFile(XMLGetNamedAttr(rsp,"filename"),XMLGetNamedAttr(rsp,"sid"),XMLGetNamedAttr(rsp,"jid6d"),XMLGetNamedAttr(rsp,"type"),XMLGetNamedAttr(rsp,"file_cancel_id"),XMLGetNamedAttr(rsp,"size"));break;case"REQST":this.OnRecvReqst(XMLGetNamedAttr(rsp,"file_cancel_id"),XMLGetNamedAttr(rsp,"msg"));break;case"REMSG":this.OnRecvRemsg(XMLGetNamedAttr(rsp,"msgid"));break;case"WAT":this.m_tid=XMLGetNamedAttr(rsp,"khtmpid");this.OnWaitCount(XMLGetNamedAttr(rsp,"count"));if(this.m_gid==undefined||this.m_gid==0){this.m_gid=this.m_tid;try{if(this.m_gid>0){var today=new Date();var expires=new Date();expires.setTime(today.getTime()+1000*60*60*24*365*30);document.cookie="guest_id="+escape(this.m_gid)+"; expires="+expires.toGMTString()+";domain="+base_host;}}catch(e){}}
break;case"RLK":this.OnRecvRlk();break;case"VOT":this.OnRecvVote(XMLGetNamedAttr(rsp,"sid"),XMLGetNamedAttr(rsp,"state"));break;case"OK":break;case"XLNK":var x_kfid=XMLGetNamedAttr(rsp,"kfid");var x_gid=XMLGetNamedAttr(rsp,"khid");var x_companyid=XMLGetNamedAttr(rsp,"companyid");this.OnRecvXLNK(x_kfid,x_gid,x_companyid);break;case"GRL":this.sendGrl();break;case"GUESTMENU":this.OnRecvGuestmenu(XMLGetNamedAttr(rsp,"title"),XMLGetNamedAttr(rsp,"ids"),XMLGetNamedAttr(rsp,"msgid"));break;default:this.OnErr(0,"unknown rsp:"+cmd);}}catch(e){this.OnErr(e.name,e.message);return;}}
myProto.OnLogin=function(errCode){}
myProto.OnLinkOpen=function(errCode,errMsg){}
myProto.OnLinkClose=function(robid,arg,style,workerid){}
myProto.OnTimeOverClose=function(link){}
myProto.OnRecvTalkMsg=function(msg,font,size,color,from,jid6d,sid){}
myProto.OnRecvCinfoMsg=function(logo,title,content,curl,msgType){}
myProto.OnRecvReceiveMsg=function(rowList){}
myProto.OnTyping=function(){}
myProto.OnSetupTyping=function(mode){}
myProto.OnRecvFile=function(fileName,sid,jid6d,type){}
myProto.OnErr=function(errCode,message){}
myProto.OnDebug=function(dbgInfo){}
myProto.OnWaitCount=function(cnt){}
myProto.OnRecvRlk=function(){}
myProto.OnLnkFail=function(){}
myProto.OnQstFail=function(msg){}
myProto.OnFilFail=function(){}
myProto.OnRecvVote=function(id6d,state){}
myProto.OnRecvQst=function(fk_msgid){}
myProto.OnRecvGuestmenu=function(title,ids,formid){}
myProto.OpenLink=function(dwid,kfList,type,autotips,khname,dwname,khinfo,khcontact,question){this.ShutDown(false);var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);this.m_lastGetTime=new Date().getTime();var last_id6d=this.getCookie('lastKfid6d_'+company_id);if(last_id6d==undefined)last_id6d=0;var islink=0;var iscswh=0;try{var url=location.search;var params_arr=url.split('&');for(var i=0;i<params_arr.length;i++){if(params_arr[i].indexOf('switch_workerid')!=-1){var workerid_str=params_arr[i].split('=');kfList=workerid_str[1];}
if(params_arr[i].indexOf('islink_companyId')!=-1){var islink_companyId=params_arr[i].split('=');islink_companyId=islink_companyId[1];}
if(params_arr[i].indexOf('iscswh_id6d')!=-1){var iscswh_id6d=params_arr[i].split('=');iscswh_id6d=iscswh_id6d[1];}
if(params_arr[i].indexOf('iscswh_companyId')!=-1){var iscswh_companyId=params_arr[i].split('=');iscswh_companyId=iscswh_companyId[1];}}
if(url.indexOf('islink=1')!=-1){islink=1;}
if(url.indexOf('iscswh=1')!=-1){iscswh=1;}}catch(e){}
var isold=0;if(isoldkf==1||this.getCookie("isoldkf_"+company_id+"_"+myid)==1)isold=1;req.AddPostData("cmd","LNK");req.AddPostData("sid","");req.AddPostData("lastKfid6d",last_id6d);req.AddPostData("did","11");req.AddPostData("khid",this.m_gid);req.AddPostData("dwid",dwid);req.AddPostData("type",type);req.AddPostData("kf_list",kfList);req.AddPostData("from",this.m_from);req.AddPostData("talkpage",m_talkPage);req.AddPostData("talktitle",m_talktitle);req.AddPostData("lnkparam",this.m_lnkParam);req.AddPostData("lnkfire",lnk_fire);req.AddPostData("tfrom",this.m_tfrom);req.AddPostData("style",style);req.AddPostData("ucust_id",encodeURIComponent(ucust_id));req.AddPostData("u_stat_id",u_stat_id);req.AddPostData("stat_id",uid);req.AddPostData("firewall",firewall_uuid);req.AddPostData("style_id",style_id);req.AddPostData("search_engine",encodeURIComponent(this.m_search_engine));req.AddPostData("keyword",this.m_keyword);req.AddPostData("land_page",this.land_page);req.AddPostData("open_time",open_time);req.AddPostData("islink",islink);req.AddPostData("iscswh",iscswh);if(is_group!=undefined){req.AddPostData("is_group",is_group);}
if(autotips!=undefined){req.AddPostData("autotips",autotips);}
if(khname!=undefined){req.AddPostData("khname",khname);}
if(dwname!=undefined){req.AddPostData("dwname",dwname);}
if(khinfo!=undefined){req.AddPostData("khinfo",khinfo);}
if(khcontact!=undefined){req.AddPostData("khcontact",khcontact);}
if(question!=undefined){req.AddPostData("question",question);}
if(channel!==''){req.AddPostData("channel",encodeURIComponent(channel));}
if(code_key!==''){req.AddPostData("code_key",code_key);}
if(verify_key!==''){req.AddPostData("verify_key",verify_key);}
if(lnk_overflow!==''){req.AddPostData("lnk_overflow",lnk_overflow);}
if(islink_companyId!=undefined){req.AddPostData("islink_companyId",islink_companyId);}
if(iscswh_id6d!=undefined){req.AddPostData("iscswh_id6d",iscswh_id6d);}
if(iscswh_companyId!=undefined){req.AddPostData("iscswh_companyId",iscswh_companyId);}
if(is_sceneToTalk){req.AddPostData("isscene",1);}
req.AddPostData("time",this.m_lastGetTime);req.SendReq();this.m_lastGetTag=req.GetTag();this.m_dwid=dwid;return req.GetTag();}
myProto.GetCmd=function(reconnect){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);if(reconnect){this.m_addNo++;req.AddPostData("did","11");this.OnDebug("Reconnect");}else{req.AddPostData("did","0");}
this.m_lastGetTime=new Date().getTime();req.AddPostData("first_khtempid",this.first_tid);req.AddPostData("gid",this.m_gid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("cmd","GET");req.AddPostData("sid",this.m_tid);req.AddPostData("msg",this.m_addNo);req.AddPostData("time",this.m_lastGetTime);if(get_timestamp!=""){get_timestamp_old=get_timestamp;req.AddPostData("timestamp",get_timestamp);}
if(code_key!==''){req.AddPostData("code_key",code_key);}
if(verify_key!==''){req.AddPostData("verify_key",verify_key);}
req.AddPostData("style_id",style_id);req.AddPostData("version",commond_version);req.SendReq();this.m_lastGetTag=req.GetTag();return req.GetTag();}
myProto.TerminateLink=function(){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","ULN");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("time",new Date().getTime());req.SendReq();this.OnLinkClose("","","");return req.GetTag();}
myProto.QuitWait=function(){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","WAT");req.AddPostData("sid",this.m_tid);req.AddPostData("did",11);req.AddPostData("dwid",this.m_dwid);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.RegSuccess=function(gid){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","REG");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("khid",gid);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendTalkMsg=function(msg,code,fk_msgid,msg_type,msgid){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","QST");req.AddPostData("sid",this.m_tid);req.AddPostData("first_khtempid",this.first_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("msg",msg);req.AddPostData("gid",this.m_gid);req.AddPostData("stat_id",uid);req.AddPostData("time",new Date().getTime()+1);if(code_key!==''){req.AddPostData("code_key",code_key);}
if(verify_key!==''){req.AddPostData("verify_key",verify_key);}
req.AddPostData("style_id",style_id);req.AddPostData("code",code);if(fk_msgid!=undefined){req.AddPostData("fk_msgid",fk_msgid);}
if(msg_type!=undefined&&msg_type!=''){req.AddPostData("msg_type",msg_type);}
if(msgid!=undefined&&msgid!=''){req.AddPostData("msgid",msgid);}
if(typeof max_msgid!="undefined"){req.AddPostData("max_msgid",max_msgid);}else{req.AddPostData("max_msgid",0);}
req.SendReq();return req.GetTag();}
myProto.SendCinfoMsg=function(logo,title,content,curl){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","CINFO");req.AddPostData("sid",this.m_tid);req.AddPostData("first_khtempid",this.first_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("logo",logo);req.AddPostData("title",title);req.AddPostData("content",content);req.AddPostData("curl",curl);req.AddPostData("gid",this.m_gid);req.AddPostData("time",new Date().getTime()+1);req.SendReq();return req.GetTag();}
myProto.SendConnPrompt=function(msg){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","HINT");req.AddPostData("did",this.m_tid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("msg",msg);req.AddPostData("guest_id",this.m_gid);req.AddPostData("id6d",this.m_kfid);req.AddPostData("sid",this.first_tid);req.AddPostData("time",new Date().getTime()+1);req.SendReq();return req.GetTag();}
myProto.SendCallBackPhone=function(code,phone,call_id){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","CBP");req.AddPostData("code",code);req.AddPostData("phone",phone);req.AddPostData("call_id",call_id);req.AddPostData("sid",this.first_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("time",new Date().getTime()+1);req.SendReq();return req.GetTag();}
myProto.SendReceiveMsg=function(){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","GHQST");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("time",new Date().getTime());req.AddPostData("first_khtempid",this.first_tid);req.SendReq();return req.GetTag();}
myProto.SendAttachMsg=function(msg){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","TIP");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("msg",msg);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendTyping=function(msg){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","TYP");req.AddPostData("first_khtempid",this.first_tid);req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("msg",msg);req.AddPostData("khid",this.m_gid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendFile=function(fileURL,type,size){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","FIL");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("msg",fileURL);req.AddPostData("type",type);req.AddPostData("size",size);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.SendVote=function(state){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData("cmd","VOT");req.AddPostData("sid",this.m_tid);req.AddPostData("did",this.m_kfid);req.AddPostData("dwid",this.m_dwid);req.AddPostData("gid",this.m_gid);req.AddPostData("state",state);req.AddPostData("time",new Date().getTime());req.SendReq();return req.GetTag();}
myProto.getCookie=function(objName){var arrStr=document.cookie.split("; ");for(var i=0;i<arrStr.length;i++){var temp=arrStr[i].split("=");if(temp[0]==objName)return unescape(temp[1]);}}
myProto.sendGrl=function(){var req=this.CreateRequest();if(null==req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData('cmd','GRL');req.AddPostData('first_khtempid',this.first_tid);req.AddPostData('gid',this.m_gid);req.AddPostData("sid",this.m_tid);req.AddPostData('dwid',this.m_dwid);req.AddPostData('did',this.m_kfid);req.AddPostData("stat_id",uid);req.AddPostData('time',new Date().getTime());if(code_key!==''){req.AddPostData("code_key",code_key);}
if(verify_key!==''){req.AddPostData("verify_key",verify_key);}
if(typeof max_msgid!="undefined"){req.AddPostData("max_msgid",max_msgid);}else{req.AddPostData("max_msgid",0);}
req.AddPostData("style_id",style_id);req.SendReq();this.m_lastGetTag=req.GetTag();return req.GetTag();}
myProto.getLostMsg=function(){var req=this.CreateRequest();if(null===req){return;}
req.SetURL(this.m_srvAddr+this.m_cmdAddr);req.AddPostData('cmd','OQST');req.AddPostData('sid',this.m_tid);req.AddPostData('time',new Date().getTime());req.SendReq();return req.GetTag();}
CXMLClientKh._initialized=true;}};function waitClinet(){var _this=this;var waitPro=waitClinet.prototype;_this.beatId=0;_this.beatTime=20000;_this.sendQueue=[];_this.overId=0;_this.overTime=20000;waitPro.init=function(){if(myid>0){_this.sendBeat();_this.beatId=setInterval(_this.sendBeat,_this.beatTime);}else{sendGid();}
_this.overId=setInterval(function(){var now=new Date().getTime();for(var i=0;i<_this.sendQueue.length;i++){if(now-_this.sendQueue[i].time>20000){var data=_this.sendQueue.shift();_this.faliHandler(data);}}},_this.overTime);}
waitPro.closeLink=function(){if(_this.beatId)clearInterval(_this.beatId);if(_this.overId)clearInterval(_this.overId);}
waitPro.send=function(sendData){jQuery.support.cors=true;$.ajax({type:"POST",url:http_pro+wait_host+"/sendwait.jsp?k="+myid+"&v="+new Date().getTime(),data:sendData,timeout:20000,dataType:"json",beforeSend:function(xhr){xhr.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");},success:function(data){_this.clearData(data);_this.sucHandler(data);},error:function(xhr,status,error){_this.clearData(sendData);_this.faliHandler(sendData);}});}
waitPro.sucHandler=function(data){var cmd=data.cmd;switch(cmd){case"GID":myid=data.gid;_this.sendBeat();_this.beatId=setInterval(_this.sendBeat,_this.beatTime);break;case"OK":break;}}
waitPro.faliHandler=function(data){var cmd=data.cmd;switch(cmd){case"ROA":if(data.sendtimes<5){data.sendtimes++;_this.sendRoa(data.msg,data.size,data.sendtimes);}
break;case"GID":sendGid();break;}}
waitPro.clearData=function(data){if(data.timestamp!=""){for(var i=0;i<_this.sendQueue.length;i++){if(data.timestamp=_this.sendQueue[i].time){_this.sendQueue.splice(i,1);i--;}}}}
waitPro.sendBeat=function(){var sendData={"cmd":"BEAT","company_id":company_id,"guest_id":myid,"time":new Date().getTime()}
_this.send(sendData);}
waitPro.sendGid=function(){var sendData={"cmd":"GID","company_id":company_id,"time":new Date().getTime()}
_this.sendQueue.push(sendData);_this.send(sendData);}
waitPro.sendRoa=function(msg,size,sendtimes){if(typeof sendtimes=="undefined")sendtimes=0;var sendData={"cmd":"ROA","company_id":company_id,"guest_id":myid,"talkPage":talkpage,"fromPage":frompage,"search":search_engine,"keyword":keyword,"landPage":land_page,"style":style,"tFrom":tfrom,"is_group":is_group,"msg":msg,"size":size,"open_time":open_time,"sendtimes":sendtimes,"stat_id":uid,"time":new Date().getTime(),}
_this.sendQueue.push(sendData);_this.send(sendData);}}
var wait_client=new waitClinet();;function sceneClinet(){var _this=this;var scenePro=sceneClinet.prototype;_this.company_id=company_id;_this.myid=guest_id;_this.style=style;_this.style_id=style_id;_this.getTime=20000;_this.getOver=false;_this.sendQueue=[];_this.roaQueue=[];_this.overId=0;_this.overTime=1000;_this.http_pro="";_this.scene_host="";_this.talkpage="";_this.frompage="";_this.search_engine="";_this.keyword="";_this.land_page="";_this.tfrom="";_this.is_group="";_this.open_time="";_this.uid="";_this.u_stat_id="";_this.ucust_id="";_this.lnksuccess=false;_this.callBacks={"GID_CALL":function(data){},"ROA_CALL":function(data){},"SLNK_CALL":function(data){},};scenePro.init=function(){if(_this.myid>0){_this.sendLnk();}else{_this.sendGid();}
_this.overId=setInterval(function(){var now=new Date().getTime();for(var i=0;i<_this.sendQueue.length;i++){if(now-_this.sendQueue[i].time>20000){var data=_this.sendQueue.shift();_this.faliHandler(data);}}},1000);}
scenePro.setParams=function(http_pro,scene_host,talkpage,frompage,search_engine,keyword,land_page,tfrom,is_group,open_time,guest_id,uid,ucust_id,u_stat_id){_this.http_pro=http_pro;_this.scene_host=scene_host;_this.talkpage=talkpage;_this.frompage=frompage;_this.search_engine=search_engine;_this.keyword=keyword;_this.land_page=land_page;_this.tfrom=tfrom;_this.is_group=is_group;_this.open_time=open_time;_this.uid=uid;_this.u_stat_id=u_stat_id;_this.ucust_id=ucust_id;if(typeof guest_id!="undefined"&&guest_id>0){_this.myid=guest_id;}}
scenePro.closeLink=function(send){_this.getOver=true;if(_this.overId)clearInterval(_this.overId);if(send)_this.sendEnd();}
scenePro.send=function(sendData){jQuery.support.cors=true;$.ajax({type:"POST",url:_this.http_pro+_this.scene_host+"/sendscene.jsp?k="+_this.myid+"&v="+new Date().getTime(),data:sendData,timeout:20000,dataType:"json",beforeSend:function(xhr){xhr.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");},success:function(data){if(data instanceof Array){for(var i=0;i<data.length;i++){_this.clearData(data[i]);_this.sucHandler(data[i]);}}else{_this.clearData(data);_this.sucHandler(data);}},error:function(xhr,status,error){sendData.timestamp=sendData.time;_this.clearData(sendData);_this.faliHandler(sendData);}});}
scenePro.sucHandler=function(data){var cmd=data.cmd;switch(cmd){case"GID":_this.myid=data.gid;_this.callBacks.GID_CALL(data.gid);_this.sendLnk();break;case"GET":_this.sendGet();break;case"SLNK":_this.temp_id=data.temp_id;_this.sucLnk(data.step);break;case"ROA":_this.callBacks.ROA_CALL(data.step,data.point,data.steps);break;case"END":_this.closeLink();break;case"OK":break;}}
scenePro.faliHandler=function(data){var cmd=data.cmd;switch(cmd){case"SLNK":if(data.sendtimes<3){data.sendtimes++;_this.sendLnk(data.sendtimes);}
break;case"ROA":if(data.sendtimes<5){data.sendtimes++;_this.sendRoa(data.msg,data.size,data.type,data.point,data.sendtimes);}
break;case"GID":_this.sendGid();break;case"GET":_this.sendGet();break;}}
scenePro.sucLnk=function(step){_this.lnksuccess=true;_this.sendGet();_this.callBacks.SLNK_CALL(step);if(_this.roaQueue.length>0){for(var i=0;i<_this.roaQueue.length;i++){_this.sendQueue.push(_this.roaQueue[i]);_this.roaQueue[i].temp_id=_this.temp_id;_this.send(_this.roaQueue[i]);}}}
scenePro.clearData=function(data){if(data.timestamp!=""){for(var i=0;i<_this.sendQueue.length;i++){if(data.timestamp=_this.sendQueue[i].time){_this.sendQueue.splice(i,1);i--;}}}}
scenePro.sendGet=function(){var sendData={"cmd":"GET","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"temp_id":_this.temp_id,"time":new Date().getTime()}
if(!_this.getOver){_this.sendQueue.push(sendData);_this.send(sendData);}}
scenePro.sendEnd=function(){var sendData={"cmd":"END","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"temp_id":_this.temp_id,"time":new Date().getTime()}
_this.sendQueue.push(sendData);_this.send(sendData);}
scenePro.sendLnk=function(sendtimes){if(typeof sendtimes=="undefined")sendtimes=0;var sendData={"cmd":"SLNK","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"style_id":_this.style_id,"frompage":_this.frompage,"land_page":_this.land_page,"talkpage":_this.talkpage,"keyword":_this.keyword,"search_engine":_this.search_engine,"tfrom":_this.tfrom,"is_group":_this.is_group,"open_time":_this.open_time,"stat_id":_this.uid,"ucust_id":_this.ucust_id,"u_stat_id":_this.u_stat_id,"sendtimes":sendtimes,"time":new Date().getTime()}
_this.sendQueue.push(sendData);_this.send(sendData);}
scenePro.sendGid=function(){var sendData={"cmd":"GID","company_id":_this.company_id,"time":new Date().getTime()}
_this.sendQueue.push(sendData);_this.send(sendData);}
scenePro.sendRoa=function(msg,step,type,point,sendtimes,code){if(typeof sendtimes=="undefined")sendtimes=0;if(typeof point=="undefined")point='';if(typeof code=="undefined")code='';var sendData={"cmd":"ROA","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"temp_id":_this.temp_id,"msg":msg,"step":step,"type":type,"point":point,"code":code,"sendtimes":sendtimes,"time":new Date().getTime(),}
if(_this.lnksuccess){_this.sendQueue.push(sendData);_this.send(sendData);}else{_this.roaQueue.push(sendData);}}
scenePro.setCallBack=function(callName,callBack){if(typeof _this.callBacks[callName]!="undefined"&&typeof callBack=="function"){_this.callBacks[callName]=callBack;}}}
var scene_client=new sceneClinet();;function robotClinet(){var _this=this;var robotPro=robotClinet.prototype;_this.company_id=company_id;_this.myid=guest_id;_this.style=style;_this.style_id=style_id;_this.getTime=20000;_this.getOver=false;_this.sendQueue=[];_this.roaQueue=[];_this.overId=0;_this.overTime=1000;_this.http_pro="";_this.robot_host="";_this.talkpage="";_this.frompage="";_this.search_engine="";_this.keyword="";_this.land_page="";_this.tfrom="";_this.is_group="";_this.open_time="";_this.uid="";_this.u_stat_id="";_this.ucust_id="";_this.lnksuccess=false;_this.robot_talk_list=[];_this.first_tempid=0;_this.temp_id=0;_this.beatTimer=0;_this.sendBeatTimer=0;_this.getBeatTimer=0;_this.callBacks={"GID_CALL":function(data){},"ROA_CALL":function(data){},"RLNK_CALL":function(){},"RQST_CALL":function(list){},"ULN_CALL":function(){},"ZRG_CALL":function(data){}};robotPro.init=function(){if(_this.myid>0){_this.sendLnk();}else{_this.sendGid();}
_this.overId=setInterval(function(){var now=new Date().getTime();for(var i=0;i<_this.sendQueue.length;i++){if(now-_this.sendQueue[i].time>20000){var data=_this.sendQueue.shift();_this.faliHandler(data);}}},1000);}
robotPro.setParams=function(http_pro,robot_host,talkpage,frompage,search_engine,keyword,land_page,tfrom,is_group,open_time,guest_id,uid,ucust_id,u_stat_id){_this.http_pro=http_pro;_this.robot_host=robot_host;_this.talkpage=talkpage;_this.frompage=frompage;_this.search_engine=search_engine;_this.keyword=keyword;_this.land_page=land_page;_this.tfrom=tfrom;_this.is_group=is_group;_this.open_time=open_time;_this.uid=uid;_this.u_stat_id=u_stat_id;_this.ucust_id=ucust_id;if(typeof guest_id!="undefined"&&guest_id>0){_this.myid=guest_id;}}
robotPro.closeLink=function(send){_this.getOver=true;if(_this.overId)clearInterval(_this.overId);if(_this.beatTimer)clearInterval(_this.beatTimer);}
robotPro.send=function(sendData){jQuery.support.cors=true;$.ajax({type:"POST",url:_this.http_pro+_this.robot_host+"/sendrobot.jsp?k="+_this.myid+"&v="+new Date().getTime(),data:sendData,timeout:20000,dataType:"json",beforeSend:function(xhr){xhr.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");},success:function(data){if(data instanceof Array){for(var i=0;i<data.length;i++){_this.clearData(data[i]);_this.sucHandler(data[i]);}}else{_this.clearData(data);_this.sucHandler(data);}},error:function(xhr,status,error){sendData.timestamp=sendData.time;_this.clearData(sendData);setTimeout(function(){_this.faliHandler(sendData);},2000);}});}
robotPro.sendBeat=function(sendData){jQuery.support.cors=true;$.ajax({type:"POST",url:_this.http_pro+_this.robot_host+"/sendrobot.jsp?k="+_this.myid+"&v="+new Date().getTime(),data:sendData,timeout:20000,dataType:"json",beforeSend:function(xhr){xhr.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");},success:function(data){_this.getBeatTimer=new Date().getTime();if(data instanceof Array){for(var i=0;i<data.length;i++){_this.sucHandler(data[i]);}}else{_this.sucHandler(data);}},error:function(xhr,status,error){}});}
robotPro.sucHandler=function(data){var cmd=data.cmd;switch(cmd){case"GID":_this.myid=data.gid;_this.callBacks.GID_CALL(data.gid);_this.sendLnk();break;case"GET":_this.sendGet();break;case"RLNK":_this.temp_id=data.temp_id;_this.first_tempid=data.first_tempid;_this.sucLnk();break;case"ROA":_this.robot_talk_list.push(data);if(window.sessionStrage){window.sessionStrage[_this.company_id+"_"+_this.myid+"_"+_this.style+"_"+_this.first_tempid]=JSON.stringify(_this.robot_talk_list);}
break;case"RQST":_this.callBacks.RQST_CALL(data.datas);break;case"END":_this.closeLink();break;case"ULN":_this.closeLink();_this.callBacks.ULN_CALL();break;case"ZRG":_this.closeLink();_this.callBacks.ZRG_CALL(data.workerid);break;case"OK":break;}}
robotPro.faliHandler=function(data){var cmd=data.cmd;switch(cmd){case"RLNK":if(data.sendtimes<3){data.sendtimes++;_this.sendLnk(data.sendtimes);}
break;case"ROA":if(data.sendtimes<5){data.sendtimes++;_this.sendRoa(data.msg,data.type,data.code,data.task_zsk_id,data.index,data.index_times,data.guide_size,data.sendtimes);}
break;case"RQST":if(data.sendtimes<3){data.sendtimes++;_this.sendRqst(data.sendtimes);}
break;case"GID":_this.sendGid();break;case"GET":break;}}
robotPro.sucLnk=function(){_this.lnksuccess=true;_this.openGetBeat();_this.sendGet();_this.callBacks.RLNK_CALL();if(_this.roaQueue.length>0){for(var i=0;i<_this.roaQueue.length;i++){_this.sendQueue.push(_this.roaQueue[i]);_this.roaQueue[i].temp_id=_this.temp_id;_this.send(_this.roaQueue[i]);}}}
robotPro.openGetBeat=function(){_this.sendBeatTimer=_this.getBeatTimer=new Date().getTime();_this.beatTimer=setInterval(function(){var now=new Date().getTime();if(now-_this.sendBeatTimer>20000){_this.sendGet();}},1000);}
robotPro.clearData=function(data){if(data.timestamp!=""){for(var i=0;i<_this.sendQueue.length;i++){if(data.timestamp=_this.sendQueue[i].time){_this.sendQueue.splice(i,1);i--;}}}}
robotPro.sendGet=function(){var sendData={"cmd":"GET","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"temp_id":_this.temp_id,"time":new Date().getTime()}
if(!_this.getOver){_this.sendBeatTimer=new Date().getTime();_this.sendBeat(sendData);}}
robotPro.sendEnd=function(){var sendData={"cmd":"END","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"temp_id":_this.temp_id,"time":new Date().getTime()}
_this.sendQueue.push(sendData);_this.send(sendData);}
robotPro.sendLnk=function(sendtimes){if(typeof sendtimes=="undefined")sendtimes=0;var sendData={"cmd":"RLNK","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"style_id":_this.style_id,"frompage":_this.frompage,"land_page":_this.land_page,"talkpage":_this.talkpage,"keyword":_this.keyword,"search_engine":_this.search_engine,"tfrom":_this.tfrom,"is_group":_this.is_group,"open_time":_this.open_time,"stat_id":_this.uid,"ucust_id":_this.ucust_id,"u_stat_id":_this.u_stat_id,"sendtimes":sendtimes,"time":new Date().getTime()}
_this.sendQueue.push(sendData);_this.send(sendData);}
robotPro.sendGid=function(){var sendData={"cmd":"GID","company_id":_this.company_id,"time":new Date().getTime()}
_this.sendQueue.push(sendData);_this.send(sendData);}
robotPro.sendRoa=function(msg,type,code,task_zsk_id,index,index_times,guide_size,sendtimes){if(typeof sendtimes=="undefined")sendtimes=0;var sendData={"cmd":"ROA","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"temp_id":_this.temp_id,"msg":msg,"type":type,"stat_id":_this.uid,"sendtimes":sendtimes,"code":code,"time":new Date().getTime(),}
if(typeof task_zsk_id!="undefined"&&typeof index!="undefined"&&typeof index_times!="undefined"&&typeof guide_size!="undefined"){sendData["task_zsk_id"]=task_zsk_id;sendData["index"]=index;sendData["index_times"]=index_times;sendData["guide_size"]=guide_size;}
if(_this.lnksuccess&&!_this.getOver){_this.sendQueue.push(sendData);_this.send(sendData);}else{_this.roaQueue.push(sendData);}}
robotPro.sendRqst=function(sendtimes){if(typeof sendtimes=="undefined")sendtimes=0;var sendData={"cmd":"RQST","company_id":_this.company_id,"guest_id":_this.myid,"style":_this.style,"temp_id":_this.temp_id,"sendtimes":sendtimes,"time":new Date().getTime(),}
_this.sendQueue.push(sendData);_this.send(sendData);}
robotPro.setCallBack=function(callName,callBack){if(typeof _this.callBacks[callName]!="undefined"&&typeof callBack=="function"){_this.callBacks[callName]=callBack;}}}
var robot_client=new robotClinet();;function taskRobot(){var _this=this;var taskProto=taskRobot.prototype;var task_robot={};_this.company_id=0;_this.robot_url="client/client_robot_task.php";_this.is_create=true;_this.is_use=false;_this.task_un_answer=[];_this.first_task_list=[];_this.now_task_list={};_this.now_task={};_this.intype="question";_this.answer_show_index=0;_this.index_times=0;_this.m_prompt_guide_list=[];_this.prompt_guide_size=-1;_this.prompt_guide_timer=0;_this.landpage="";_this.keyword="";_this.last_msg="";_this.task_type="match_first";_this.task_type_list=["match_first","keyword_first"];_this.in_show_answer=false;_this.prepare_msg_list=[];_this.no_talk_timer=0;taskProto.init=function(company_id,task_robot_data,is_use,talk_robot_info,alias,m_prompt_guide_list,landpage,keyword,task_type){_this.company_id=company_id;_this.task_robot=task_robot_data;_this.is_use=is_use==""?0:parseInt(is_use);_this.m_prompt_guide_list=m_prompt_guide_list;_this.landpage=landpage;_this.keyword=keyword;if(typeof task_type!="undefined"&&_this.task_type_list.indexOf(task_type)!==-1){_this.task_type=task_type;}
if(!_this.is_use)return;var guide_content=_this.task_robot.guide_content;if(_this.task_robot.task_id==0)_this.is_create=false;if(typeof guide_content[0]!="undefined"){_this.first_task_list=guide_content[0];}
_this.task_un_answer=_this.task_robot.tclose_promet;if(typeof talk_robot_info.khnumber!="undefined"&&typeof talk_robot_info.task_zsk_id!="undefined"&&typeof guide_content[talk_robot_info.task_zsk_id]!=undefined){if(typeof guide_content[talk_robot_info.task_zsk_id]!="undefined"){_this.now_task_list=guide_content[talk_robot_info.task_zsk_id];}else{_this.now_task_list=_this.first_task_list;}
_this.answer_show_index=talk_robot_info.index;_this.index_times=talk_robot_info.index_times;_this.now_task=talk_robot_info.now_task;_this.prompt_guide_size=talk_robot_info.guide_size;if(_this.prompt_guide_size!=-1&&(_this.task_robot.tconn_promet.type=="guide"||_this.task_robot.tconn_promet.type=="messages")){_this.showTConnPrompt(_this.task_robot.tconn_promet);}}else{if(is_use){_this.showTConnPrompt(_this.task_robot.tconn_promet);}
_this.now_task_list=_this.first_task_list;}
if(typeof alias!="undefined"&&alias!="")_this.robot_url=alias+"/"+_this.robot_url;}
taskProto.setNetList=function(){_this.answer_show_index=0;_this.index_times=0;var use_id=_this.now_task.link_id==0?_this.now_task.id:_this.now_task.link_id;if(typeof guide_content[use_id]!="undefined"){_this.now_task_list=guide_content[use_id];}else{_this.now_task_list=_this.first_task_list;}}
taskProto.checkUse=function(){return _this.is_use;}
taskProto.showTConnPrompt=function(tconn_promet){if(tconn_promet.type=="message"){var conn_promet=tconn_promet.content;for(var i=0;i<conn_promet.length;i++){_this.kfShow(conn_promet[i],_this.now_task,_this.answer_show_index,_this.index_times,_this.prompt_guide_size);}}else if(tconn_promet.type=="guide"){_this.showGuide();}else if(tconn_promet.type=="messages"){_this.showMessages(tconn_promet.content);}}
taskProto.showGuide=function(){var prompt_guide=new Array();var prompt_guide_default=new Array();var is_match=false;var m_prompt_guide_list=_this.m_prompt_guide_list;for(var i=0;i<m_prompt_guide_list.length;i++){var prompt_guide_i=m_prompt_guide_list[i].prompt;if(m_prompt_guide_list[i].title=="其他"){prompt_guide_default=prompt_guide_i;continue;}
if(typeof m_prompt_guide_list[i].promote_link!="undefined"&&m_prompt_guide_list[i].promote_link!=""){try{if(_this.landpage!=""&&m_prompt_guide_list[i].link_init!=""&&_this.landpage.indexOf(m_prompt_guide_list[i].link_init)!==-1){prompt_guide=prompt_guide_i;is_match=true;break;}}catch(e){}}else{if(_this.keyword!=""&&(m_prompt_guide_list[i].title.toLowerCase().indexOf(_this.keyword.toLowerCase())!==-1||_this.keyword.toLowerCase().indexOf(m_prompt_guide_list[i].title.toLowerCase())!==-1)){prompt_guide=prompt_guide_i;is_match=true;break;}}}
if(is_match===false)prompt_guide=prompt_guide_default;if(prompt_guide.length==0){return;}
_this.showPrompt(prompt_guide);}
taskProto.showMessages=function(connect_promet){if(typeof connect_promet.length=="undefined"||connect_promet.length<=0){return;}
_this.showPrompt(connect_promet);}
taskProto.showPrompt=function(prompt){var num=parseInt(_this.prompt_guide_size)+1;function set_time_robot_prompt(){if(prompt.length>0){_this.kfShow(prompt[num].prompt_content.replace(/\\"/ig,'"'),_this.now_task,_this.answer_show_index,_this.index_times,num);}else{return;}
num++;_this.prompt_guide_size=num;if(num>=prompt.length){_this.prompt_guide_size=-1;_this.kfShow("",_this.now_task,_this.answer_show_index,_this.index_times,_this.prompt_guide_size);return;}
if(num<_this.prompt_guide_size)var next_time=num*50;else var next_time=parseInt(prompt[num].time)*1000+num*50;_this.prompt_guide_timer=setTimeout(set_time_robot_prompt,next_time);}
if(typeof prompt[num]!="undefined"&&typeof prompt[num].time!="undefined")var prompt_guide_time=parseInt(prompt[num].time)*1000;else var prompt_guide_time=0;_this.prompt_guide_timer=setTimeout(set_time_robot_prompt,prompt_guide_time);}
taskProto.showPrompt=function(prompt){var num=parseInt(_this.prompt_guide_size)+1;function set_time_robot_prompt(){if(prompt.length>0){_this.kfShow(prompt[num].prompt_content.replace(/\\"/ig,'"'),_this.now_task,_this.answer_show_index,_this.index_times,num);}else{return;}
num++;_this.prompt_guide_size=num;if(num>=prompt.length){_this.prompt_guide_size=-1;_this.kfShow("",_this.now_task,_this.answer_show_index,_this.index_times,_this.prompt_guide_size);return;}
if(num<_this.prompt_guide_size)var next_time=num*50;else var next_time=parseInt(prompt[num].time)*1000+num*50;_this.prompt_guide_timer=setTimeout(set_time_robot_prompt,next_time);}
if(typeof prompt[num]!="undefined"&&typeof prompt[num].time!="undefined")var prompt_guide_time=parseInt(prompt[num].time)*1000;else var prompt_guide_time=0;_this.prompt_guide_timer=setTimeout(set_time_robot_prompt,prompt_guide_time);}
taskProto.backRobotGuide=function(){if(_this.prompt_guide_size!=-1){_this.prompt_guide_size=-1;_this.kfShow("",_this.now_task,_this.answer_show_index,_this.index_times,_this.prompt_guide_size);}
if(_this.prompt_guide_timer)clearTimeout(_this.prompt_guide_timer);if(_this.no_talk_timer)clearTimeout(_this.no_talk_timer);}
taskProto.handleMsg=function(msg){if(!_this.checkUse())return;if(!_this.is_create){_this.unMatch();return;}
msg=msg.replace(/<[^>]+>/g,"");if(msg==""||_this.in_show_answer)return;if(_this.no_talk_timer)clearTimeout(_this.no_talk_timer);if(_this.answer_show_index==0){if(_this.task_type=="match_first")_this.handleQaMsg(msg);else if(_this.task_type=="keyword_first")_this.handleQaMsgByKw(msg);}else{_this.handleAnswerMsg(msg);}}
taskProto.handleQaMsg=function(msg){var keyword_obj={};var now_tasks={};var text_ids="";for(var i=0;i<_this.now_task_list.length;i++){var now_task=_this.now_task_list[i];var use_id=now_task.link_id==0?now_task.id:now_task.link_id;now_tasks[use_id]=now_task;var now_keywords=[];try{if(now_task.question.length>0){for(var j=0;j<now_task.question.length;j++){if(now_task.question[j].type=="match"){var is_match=_this.handleMatch(now_task.question[j].regular,msg);if(is_match){_this.isMatchHandle(now_task);return true;}}
if(now_task.question[j].type=="keyword"){now_keywords.push(now_task.question[j].regular);}}}
keyword_obj[i]=now_keywords;text_ids=text_ids==""?use_id:text_ids+','+use_id;}catch(e){console.log(e);continue;}}
for(var p in keyword_obj){try{var now_keywords=keyword_obj[p];for(var k=0;k<now_keywords.length;k++){if(msg.indexOf(now_keywords[k])!==-1){_this.isMatchHandle(_this.now_task_list[p]);return true;}}}catch(e){console.log(e);continue;}}
if(text_ids!=""){$.ajax({url:_this.robot_url,data:{cmd:"UQR",zsk_ids:text_ids,company_id:_this.company_id,question:msg},type:'POST',dataType:'JSON',success:function(data){if(data.task_id!=0){_this.isMatchHandle(now_tasks[data.task_id]);}else{_this.unMatch();}},error:function(){_this.unMatch();}});}else{_this.unMatch();}}
taskProto.handleQaMsgByKw=function(msg){var keyword_obj={};var now_tasks={};var text_ids="";for(var i=0;i<_this.now_task_list.length;i++){var now_task=_this.now_task_list[i];var use_id=now_task.link_id==0?now_task.id:now_task.link_id;now_tasks[use_id]=now_task;var now_keywords=[];try{if(now_task.question.length>0){for(var j=0;j<now_task.question.length;j++){if(now_task.question[j].type=="keyword"){if(msg.indexOf(now_task.question[j].regular)!==-1){_this.isMatchHandle(now_task);return true;}}
if(now_task.question[j].type=="match"){now_keywords.push(now_task.question[j].regular);}}}
keyword_obj[i]=now_keywords;text_ids=text_ids==""?use_id:text_ids+','+use_id;}catch(e){console.log(e);continue;}}
for(var p in keyword_obj){try{var now_keywords=keyword_obj[p];for(var k=0;k<now_keywords.length;k++){var is_match=_this.handleMatch(now_keywords[k],msg);if(is_match){_this.isMatchHandle(_this.now_task_list[p]);return true;}}}catch(e){console.log(e);continue;}}
if(text_ids!=""){$.ajax({url:_this.robot_url,data:{cmd:"UQR",zsk_ids:text_ids,company_id:_this.company_id,question:msg},type:'POST',dataType:'JSON',success:function(data){if(data.task_id!=0){_this.isMatchHandle(now_tasks[data.task_id]);}else{_this.unMatch();}},error:function(){_this.unMatch();}});}else{_this.unMatch();}}
taskProto.handleAnswerMsg=function(msg){try{if(_this.answer_show_index!=0&&typeof _this.now_task["answer"][_this.answer_show_index-1]!="undefined"){var answer=_this.now_task["answer"][_this.answer_show_index-1];if(answer.type=="question"){var is_match=_this.handleMatch(answer.regular,msg);if(is_match||answer.count==0){_this.answer_show_index++;_this.index_times=0;_this.last_msg="";_this.isMatchHandle(_this.now_task);}else{_this.qaAnsUnMatch(answer);}}else{if(_this.answer_show_index<_this.now_task["answer"].length){_this.answer_show_index++;_this.handleAnswerMsg(msg);}else{_this.unMatch();}}}}catch(e){console.log(e);}}
taskProto.qaAnsUnMatch=function(answer){if(_this.index_times==-1){_this.last_msg=answer.content;var list_data=_this.getListData(answer,_this.now_task,"in_answer");_this.showMsgProcess(list_data);}else if(_this.index_times<answer.count){_this.index_times++;_this.last_msg=answer.content;var list_data=_this.getListData(answer,_this.now_task,"in_answer");if(_this.index_times>=answer.count)list_data.qa_times="last";_this.showMsgProcess(list_data);}else{_this.unMatch();}}
taskProto.repeatedQa=function(answer){if(answer.type!="question")return;if(_this.no_talk_timer)clearTimeout(_this.no_talk_timer);if(answer.overtime==undefined)answer.overtime=180;if(answer.overtime>0){_this.no_talk_timer=setTimeout(function(){_this.qaAnsUnMatch(answer);},answer.overtime*1000);}}
taskProto.isMatch=function(now_task){try{if(_this.answer_show_index<=now_task.answer.length){var start_i=_this.answer_show_index==0?0:_this.answer_show_index-1;for(var i=start_i;i<now_task.answer.length;i++){var answer=now_task.answer[i];_this.answer_show_index=i+1;if(answer.type=="message"){_this.last_msg=answer.content;_this.setLastAnswer(i,now_task);var list_data=_this.getListData(answer,_this.now_task,"is_match");_this.showMsgProcess(list_data);}
if(answer.type=="question"){_this.last_msg=answer.content;if(answer.count==-1)_this.index_times=-1;if(answer.count!=-1&&answer.count!=0&&_this.index_times>=answer.count)_this.setLastAnswer(i,now_task);var list_data=_this.getListData(answer,_this.now_task,"is_match");_this.showMsgProcess(list_data);break;}
if(answer.type=="tokf"){_this.last_msg="";_this.setLastAnswer(i,now_task);var list_data=_this.getListData(answer,_this.now_task,"is_match");_this.showMsgProcess(list_data);break;}
if(answer.type=="end"){_this.is_use=false;_this.endTask();break;}}}else{_this.answer_show_index=0;var use_id=_this.now_task.link_id==0?_this.now_task.id:_this.now_task.link_id;if(typeof _this.task_robot.guide_content[use_id]=="undefined"){_this.last_msg="";_this.now_task={};}
_this.kfShow("",_this.now_task,_this.answer_show_index,_this.index_times);}}catch(e){_this.answer_show_index=0;console.log(e);}}
taskProto.setLastAnswer=function(index,now_task){if(index==(now_task.answer.length-1)){_this.answer_show_index=0;var use_id=_this.now_task.link_id==0?_this.now_task.id:_this.now_task.link_id;if(typeof _this.task_robot.guide_content[use_id]=="undefined"){_this.last_msg="";_this.now_task={};}}}
taskProto.isMatchHandle=function(now_task){_this.now_task=now_task;_this.isMatch(now_task);var use_id=_this.now_task.link_id==0?_this.now_task.id:_this.now_task.link_id;if(typeof _this.task_robot.guide_content[use_id]=="undefined"){_this.now_task_list=_this.first_task_list;}else{_this.now_task_list=_this.task_robot.guide_content[use_id];}}
taskProto.turnKf=function(){_this.breakNowTask();_this.connectKf();}
_this.breakNowTask=function(){_this.now_task_list=_this.first_task_list;_this.now_task={};_this.intype="question";_this.answer_show_index=0;_this.index_times=0;}
taskProto.unMatch=function(){if(typeof _this.now_task.un_answer=="undefined"||_this.now_task.un_answer==""){var un_answer=_this.task_un_answer;}else{var un_answer=_this.now_task.un_answer;}
_this.breakNowTask();_this.showUnMatch(un_answer);}
taskProto.showUnMatch=function(un_answer){_this.last_msg="";for(var i=0;i<un_answer.length;i++){var list_data=_this.getListData(un_answer[i],_this.now_task,"un_answer");_this.showMsgProcess(list_data);}};taskProto.showLastMsg=function(){if(_this.last_msg!=""&&!_this.in_show_answer&&_this.checkUse()){_this.kfShow(_this.last_msg,_this.now_task,_this.answer_show_index,_this.index_times);}}
taskProto.handleMatch=function(regular,match_msg){match_msg='-'+match_msg;switch(regular){case"mobile":if(match_msg.match(/[^\d](1[3-9]\d{9})(?!\d)/gi)||match_msg.match(/[^\d](0\d{2,3}-?\d{7,8})(?!\d)/gi)){return true;}
break
case"wechat":if(match_msg.match(/[^A-Za-z][A-Za-z](\w|-){5,19}(?![\w#])/gi)||match_msg.match(/[^\d](1[3-9]\d{9})(?!\d)/gi)){return true;}
break;case"qq":if(match_msg.match(/[^\d](\d{5,12})(?!\d)/gi)){return true;}
break;case"email":if(match_msg.match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/gi)){return true;}
break;case"num":if(match_msg.match(/\d+/gi)){return true;}
break;case"url":if(match_msg.match(/([^{\/])((ftp:\/\/|https:\/\/|http:\/\/|www\d{0,4}\.)[\w\-]*\.[\w!~;*'()&=\+\$%\-\/\#\?:\.,\|\^]*)/gim)){return true;}
break;case"any":return true;break;}
return false;}
taskProto.showMsgProcess=function(list_data,type){if(type==undefined)var type=false;function showMsgProcess(list_data,type){if(type==undefined)var type=false;if(typeof list_data.answer.time=="undefined"||list_data.type=="in_answer"){list_data.answer.time=0;}
if(_this.in_show_answer&&!type){_this.prepare_msg_list.push(list_data);}else{_this.in_show_answer=true;setTimeout(function(){try{switch(list_data.type){case"is_match":if(list_data.answer.type=="tokf"){_this.turnKf();_this.kfShow("",_this.now_task,_this.answer_show_index,_this.index_times);}else{_this.kfShow(list_data.answer.content,list_data.now_task,list_data.answer_show_index,list_data.index_times);}
break;case"in_answer":_this.kfShow(list_data.answer.content,list_data.now_task,list_data.answer_show_index,list_data.index_times);break;case"un_answer":if(list_data.answer.type=="tokf"){_this.turnKf();}else{_this.kfShow(list_data.answer.content,list_data.now_task,list_data.answer_show_index,list_data.index_times);}
break;}
if(list_data.answer.type=="question"){if(list_data.answer.count!=0&&list_data.qa_times!="last")_this.repeatedQa(list_data.answer);}
if(_this.prepare_msg_list.length>0){list_data=_this.prepare_msg_list.shift();showMsgProcess(list_data,true);}else{_this.in_show_answer=false;}}catch(e){console.log(e);_this.in_show_answer=false;}},list_data.answer.time*1000);}}
showMsgProcess(list_data,type);}
taskProto.deepCopy=function(source){function deepCopy(source){var result={};for(var key in source){result[key]=typeof source[key]==='object'?deepCopy(source[key]):source[key];}
return result;}
return deepCopy(source);}
taskProto.getListData=function(answer,now_task,type){var list_data={"answer":answer,"now_task":_this.deepCopy(now_task),"answer_show_index":_this.answer_show_index,"index_times":_this.index_times,"type":type};return list_data;}
taskProto.kfShow=function(msg,now_task,show_index,times,prompt_guide_size){};taskProto.connectKf=function(){};taskProto.endTask=function(){};};var imfocus=1;var retry_num=0;var lnkover=0;var m_hasreg=-1;var worker_online=0;var m_regName="";var m_regEmail="";var m_regPhone="";var m_regMobile="";var m_regQQ="";var m_regWeixin="";var m_regMSN="";var m_regCompany="";var m_regAddr="";var zdyzc_obj={};var obj_name="";var rec_stat=0;var sendtyptime=0;var settyptime=0;var typtime=8;var sendtyp_type=0;var typcontent="";var m_typTimer=0;var m_gidTimer=0;var m_autoTimer=0;var m_leftTime=0;var m_tempLeftTime=0;var m_noTalkTimer=0;var m_kfNoTalkTimer=0;var m_ImKfNoTalkTimer=0;var m_refreshTimer=0;var m_qstResTimer=0;var g_comm=null;var m_success=false;var m_busy=false;var m_busyCnt=0;var m_browserClose=false;var m_clickLink=false;var CONST_GID_OVERTIME=5;var CONST_REG_OVERTIME=4;var isImportTimer=0;var isImportTryNum=0;var sendlnktimes=0;var CONST_NOTALK_TIP=0;var CONST_NOTALK_OVER=180;var noTalkNum=0;var noTalkOver=0;var m_startInitial=false;var m_isLink=false;var m_titleTimer=0;var m_scrollTitle="";var m_titleFlag=true;var m_setTalkLastTime=true;var CONST_KF_NOTALK_TIP=0;var kfNoTalkNum=0;var ImKfNoTalkNum=0;var m_cusWebMsg=true;var m_isAtuoToKf=false;var m_company_activity=true;var m_fk_history=true;var m_firstWelcome=true;var m_fisrtConnPrompt=true;var m_requestVote=false;var m_androidTip=false;var khtalk_up=0;var khtalk_down=0;var closemark="beidong";var fk_dropList=0;var khnumber=1;var m_checkCodeType=0;var prompt_guide_timer=0;var isset_prompt_cookie=0;var is_show_prompt=false;var is_line_up=false;var msg_wait_arr=new Array();var is_swh=0;var m_isSend_ly_conn=false;var m_show_ly_guide=true;var m_ly_guide_timer=0;var m_show_ly_end=true;var m_ly_conn_prompt_time=0;var custom_auto_update={"qq":0,"weixin":0};var web_msg_talk_id=[];var is_sceneToTalk=false;var task_robot_obj=new Object;function initial(){if(m_startInitial)return;try{document.cookie="hz6d_open_talk_"+company_id+"=1";}catch(e){}
try{m_startInitial=true;first_get();init_comm();settyptime=getTime();m_leftTime=zdkf_auto;CONST_NOTALK_TIP=(auto_disconnect-3)*60;if(myid>0){isold=1;}else{myid=guest_id;}
if(is_get_guest_id==2)myid=guest_id;var iscswh=getUrlParams('iscswh');if(iscswh=='1'){robot_ass=0;m_regStat=2;is_wlist=0;}
mainProgram();try{sendkafka("talk_info","1");}catch(e){}}catch(e){m_startInitial=false;}
try{if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){$('.talk .edui-upload-video').trigger('pause');}else{$('.talk .edui-upload-video').eq(0).attr('autoplay',true);}}catch(e){}}
function mainProgram(){if(myid>0&&(m_regStat==0||m_lyszc=="on")){is_import_true();}
if(is_wlist==2){to_main_kf();if(zdkf_auto!="off"){autoLink();$(".connectionFail").show();m_autoTimer=setInterval("autoLink()",1000);}}else{if((robot_ass==1||online_cnt=="0")&&m_robid!=''){showzsk();return;}
if(lnkover==0){to_kf(wids,worker_name);}}}
function is_import_true(){$.ajax({type:"POST",url:"impl/rpc_customer_new.php",data:"action=get_status&company_id="+company_id+"&guest_id="+myid,dataType:"json",success:function(result){if(result.ecode==0){document.getElementById("kh_has_import").value=result.status;}else{}}});}
function to_kf(wid,wname,online){if(arguments[3]){select_ground_id=arguments[3];select_ground_name=wname;}
if(m_isLink)return;m_isLink=true;worker_id=wid;worker_name=wname;$(".connectionFail").hide();clearInterval(m_autoTimer);m_leftTime=zdkf_auto;if(zdkf_type==2){if(online==0&&is_wlist==3&&online_cnt!="0"){connectTalk();return;}}
if(typeof(online)!="undefined"){worker_online=online;if(worker_online==0){connectTalk();return;}}else{worker_online=online_cnt;}
if(m_regStat==0&&worker_online>=1&&robot_ass!='3'){if(isold==0){to_reg();}else{m_hasreg=document.getElementById("kh_has_import").value;if(m_hasreg==0){to_reg();}else if(m_hasreg==1){connectTalk();}else{isImportTimer=setInterval("checkIsImport()",500);}}}else{connectTalk();}}
function checkIsImport(){m_hasreg=document.getElementById("kh_has_import").value;if(m_hasreg!=-1){clearInterval(isImportTimer);if(m_hasreg==0){to_reg();}else{connectTalk();}}else{if(isImportTryNum>=CONST_REG_OVERTIME){clearInterval(isImportTimer);insertErrorInfos("2","rpc","is_import_true request failed!");m_hasreg=0;to_reg();}
isImportTryNum++;}}
function autoLink(){if(m_leftTime<0){m_isAtuoToKf=true;to_kf(wids,"");m_isAtuoToKf=false;$(".connectionFail").hide();clearInterval(m_autoTimer);m_leftTime=zdkf_auto;}else{var html='<label>'+infos[30]+'</label><span>'+m_leftTime+'</span><label>'+infos[56]+'</label>';$(".connectionFail").html(html);m_leftTime--;}}
function getGidTimer(){myid=get_flash_gid();if(myid>=0){clearInterval(m_gidTimer);if(myid>0){isold=1;}
mainProgram();}else{retry_num++;if(retry_num>=CONST_GID_OVERTIME){clearInterval(m_gidTimer);insertErrorInfos("2","flash","mainserverim load failed!");mainProgram();}}}
function get_flash_gid(){try{return document.frames["kh_gid"].window.guest_id;}catch(e){try{return document.getElementById("kh_gid").contentWindow.guest_id;}catch(e){return 0;}}}
function init_comm(){try{g_comm=new CXMLClientKh(http_pro+host,"/sendmsg.jsp",true);g_comm_success=true;}catch(e){insertErrorInfos("2","comm","create g_comm failed!");}
callback_talk();}
function callback_talk(){g_comm.OnErr=errProc;g_comm.OnDebug=debugProc;g_comm.OnLinkOpen=linkOpenProc;g_comm.OnLinkClose=linkCloseProc;g_comm.OnTimeOverClose=timeOverCloseProc;g_comm.OnRecvTalkMsg=recvTalkMsgProc;g_comm.OnRecvCinfoMsg=recvCinfoMsgProc;g_comm.OnRecvReceiveMsg=recvReceiveMsgProc;g_comm.OnTyping=typingProc;g_comm.OnSetupTyping=setupTypingProc;g_comm.OnRecvFile=recvFileProc;g_comm.OnWaitCount=waitCountProc;g_comm.OnRecvRlk=recvRlkProc;g_comm.OnLnkFail=lnkFailProc;g_comm.OnQstFail=qstFailProc;g_comm.OnFilFail=filFailProc;g_comm.OnRecvVote=recvVoteProc;g_comm.OnRecvQst=recvQstProc;g_comm.OnRecvReqst=recvReqstProc;g_comm.OnRecvRemsg=recvRemsgProc;g_comm.OnRecvGuestmenu=recvGuestmenuProc;}
function connectTalk(){if(fire_set=='1'&&fire_level>=1){if(checkCookie()===false){if(verify_code==0){$(".talk").show().siblings().hide();$(".pc-talk").show().siblings().hide();$(".beStopped").show();display_sys_msg("access block!");return false;}else{is_verify=1;}}}
verify_code=is_verify;if(verify_code==1){m_checkCodeType=1;createCodeFreeze(myid,verify_code,company_id);}else{if(robot_ass==3&&is_wlist==0&&scene_cookie==""){if(company_tpl=='minichat2'){$(".pc-visitor-main").css("padding-bottom","18px");}else{$(".pc-visitor-main").css("padding-bottom","40px");}
$(".pc-visitor-footer").hide();try{scene_client.setParams(http_pro,scene_host,UrlEncode(talkpage),UrlEncode(frompage),search_engine,UrlEncode(keyword),UrlEncode(land_page),tfrom,is_group,open_time,guest_id,uid,ucust_id,u_stat_id);scene_client.setCallBack("GID_CALL",function(gid){myid=gid;});scene_client.setCallBack("SLNK_CALL",function(steps_str){if(steps_str!=''&&steps_str!=undefined){var step_arr=steps_str.split(',');if(step_arr.length>scene_step_arr.length){scene_step_arr=step_arr;}}});scene_client.setCallBack("ROA_CALL",function(step,point){if(step!=''){var step_temp=step.split('-');var option_id=step_temp[0];var num=step_temp[1];var option_cont=m_scene_guide_list[option_id].option_cont;var action=m_scene_guide_list[option_id].action;if(option_cont.length==num){if(action=='tokf'){sceneToTalk();scene_client.closeLink(true);}else if(action=='option'){var point_num=step_temp[2];var btn=m_scene_guide_list[option_id].option_btn[point_num];if(btn){$('#'+'scene_'+option_id+'_'+num).hide();display_fk_msg(btn.name);show_scene_guide(btn.point);}else{$.each(m_scene_guide_list[option_id].option_btn,function(i,v){if(v.point==point){$('#'+'scene_'+option_id+'_'+num).hide();display_fk_msg(v.name);show_scene_guide(point);return false;}});}}}else if(option_cont[num].type=='form'){$('#'+'scene_'+option_id+'_'+num).removeClass("guide_f").html("发送成功");show_scene_guide(option_id,parseInt(num)+1);}}});scene_client.init();}catch(e){console.log(e)}
show_scene_guide(1);return;}
if(robot_ass==2&&is_wlist==0&&prompt_cookie==""&&online_cnt!="0"){show_prompt_guide();}else{sendLNK();}}}
function sendLNK(){if(m_clickLink==false){if(prompt_guide_timer)clearTimeout(prompt_guide_timer);try{wait_client.closeLink();}catch(e){}
try{task_robot_obj.backRobotGuide();robot_client.closeLink(true);}catch(e){}
m_clickLink=true;if(parseInt(myid)<0)myid=0;try{$.get("wnn_debug.php",{"type":"finger","flag":"is_assist","info":is_assist+","+is_get_guest_id,"company_id":company_id});if(is_get_guest_id!=0&&is_get_guest_id!=2&&is_assist==0){var get_finger_times=0;is_assist=1;getFingerLnk(get_finger_times);}else{sendGcommLnk();}}catch(e){sendGcommLnk();}
if(origin_type=='1'){sendkafka('type','1','-1',origin_time);origin_type=0;}
m_refreshTimer=setTimeout("refreshLNK()",20000);}
lnkover=2;}
function getFingerLnk(times){if(finger_id==""&&is_get_guest_id==1){if(times<3){times++;setTimeout(function(){getFingerLnk(times);},2000);}else{sendGcommLnk();}
return false;}
var assist_id="";if(is_get_guest_id==1)assist_id=finger_id;else if(is_get_guest_id==2)assist_id=ip;$.get("wnn_debug.php",{"type":"finger","flag":"assist_id","info":assist_id+","+myid,"company_id":company_id});$.ajax({url:http_pro+finger_host+'/fingerprintjs?cmd=get&fn='+assist_id,timeout:5000,type:'get',success:function(data){$.get("wnn_debug.php",{"type":"finger","flag":"data","info":data,"company_id":company_id});if(data!=""&&parseInt(data)>0){myid=parseInt(data);var today=new Date();var expires=new Date();expires.setTime(today.getTime()+1000*60*60*24*365*30);if(is_get_guest_id==1)
document.cookie="finger_guest_id="+escape(myid)+"; expires="+expires.toGMTString()+";domain="+base_host;else if(is_get_guest_id==2)
document.cookie="ip_guest_id="+escape(myid)+"; expires="+expires.toGMTString()+";domain="+base_host;}else{if(myid>0)$.get(http_pro+finger_host+'/fingerprintjs?cmd=set&fn='+assist_id+"&guestid="+myid,function(){});else is_set_finger=1;$.get("wnn_debug.php",{"type":"finger","flag":"set","info":assist_id+","+myid,"company_id":company_id});}
sendGcommLnk();},complete:function(XMLHttpRequest,status){if(status=='timeout'||status=="error"){$.get("wnn_debug.php",{"type":"finger","flag":"status","info":status,"company_id":company_id});sendGcommLnk();}}});}
function sendGcommLnk(){g_comm.SetKhInfo(myid,UrlEncode(frompage),UrlEncode(talkpage),UrlEncode(talktitle),UrlEncode(lnk_param),tfrom,search_engine,UrlEncode(keyword),UrlEncode(land_page));if(username!="")m_regName=username;if(is_wlist==0){worker_id=wids;}
if(m_regName!=""){g_comm.OpenLink(company_id,worker_id,0,UrlEncode(UBBEncode(conn_prompt)),UrlEncode(HtmlEncode(m_regName)));}else{g_comm.OpenLink(company_id,worker_id,0,UrlEncode(UBBEncode(conn_prompt)));}}
function errProc(ecode,message)
{}
function debugProc(dbgInfo)
{}
function linkOpenProc(errCode,errMsg,robotid){clearTimeout(m_refreshTimer);if(obj_id!=0&&g_comm.GetKfid()!=obj_id)is_swh=1;try{if(is_set_finger)$.get(http_pro+finger_host+'/fingerprintjs?cmd=set&fn='+finger_id+"&guestid="+g_comm.GetGid(),function(){});}catch(e){}
myid=g_comm.GetGid();mytempid=g_comm.GetTid();myfirst_tempid=g_comm.GetFirstTid();obj_name=g_comm.GetKfname();obj_id=g_comm.GetKfid();khnumber=g_comm.GetKhnumber();var busy_prompt_time=getKfPromptTime();CONST_KF_NOTALK_TIP=busy_prompt_time;try{if(is_get_guest_id==0&&myid>0){var today=new Date();var expires=new Date();expires.setTime(today.getTime()+1000*60*60*24*365*30);document.cookie="guest_id="+escape(myid)+"; expires="+expires.toGMTString()+";domain="+base_host;}}catch(e){}
if(obj_id==0){$("#file-picker").on("click",".webuploader-element-invisible",function(){return false;})
if(errCode==1){getWlist(1);rec_stat=1;}else if(errCode==2){getWlist(1);rec_stat=1;}else if(errCode==3){m_busy=true;lnkReturnShow();if(m_robid!=''){$(".toRobot").show();}
$(".personNum").html(m_busyCnt);if(lword_type=='2'){$(".talk .line-up .toMessage").hide();}
$(".talk .line-up").show();if(!!window["ActiveXObject"]||"ActiveXObject"in window)
{$(".changeColor-wrap").siblings(".function-icon-disabled").css({"opacity":0.5,"filter":"alpha(opacity = 50)","cursor":"not-allowed"});$(".changeColor-wrap").siblings(".function-icon-disabled").not(".upload_box").addClass("disabled");}else
{$(".changeColor-wrap").siblings(".function-icon-disabled").addClass("disabled");}
if(worker_id.indexOf(",")==-1){getWorkerCard();}
lnkover=2;rec_stat=1;is_line_up=true;}else if(errCode==11){lnkReturnShow();display_sys_msg(UBBCode(UBBEncode(reject_prompt)));$(".beStopped").show();lnkover=2;rec_stat=0;}else if(errCode==100){lnkover=2;}else if(errCode==101){getWlist(1);lnkover=2;rec_stat=1;}else if(errCode==111){alert(infos[57]);set_rlnk();lnkover=200;var curUrl=window.location.href;window.location.href=curUrl;}else if(errCode==4){if(is_robotToTalk){$(".system-wait").remove();display_robot_msg('','no_kf');is_robotToTalk=false;lnkover=200;}else{m_robid=robotid;showzsk(1);}}}else{if(imfocus==0){window.focus();}
lnkReturnShow();lnksuccess();if(khnumber>1&&!is_sceneToTalk){playSound();g_comm.SendReceiveMsg();sendkafka("talk_info","1");}else{try{handleCustMsg("lnk")}catch(e){}
if(myid>0&&m_cusWebMsg){getCusWebMsg();}
if((robot_ass!=2||is_wlist==2||is_wlist==3||prompt_cookie!="")&&!is_sceneToTalk&&is_swh!=1){showConnPrompt();}}
if(m_ImKfNoTalkTimer==0&&errCode==6){m_ImKfNoTalkTimer=setInterval('checkImKfNoTalk()',1000);setImKfNoTalkVariable();}
if(m_noTalkTimer==0&&auto_disconnect!=0){m_noTalkTimer=setInterval("checkNoTalk()",1000);}
if(m_typTimer==0){m_typTimer=setInterval("sendTypMsg()",1000);}
getWorkerCard();if(wx_drainage=='1'&&wx_public_account=='1')getQrcode();}}
function refreshLNK(){sendlnktimes++;if(sendlnktimes>3)return;$.ajax({url:'get_firewall.php?type=m_new&company_id='+company_id+"&guest_id="+myid,timeout:5000,type:'get',dataType:'json',success:function(data){firewall_uuid=data.firewall_uuid;lnk_param=data.lnk_param;lnk_fire=data.lnk_fire;m_clickLink=false;sendLNK();},complete:function(XMLHttpRequest,status){if(status=='timeout'||status=="error"){lnkFailProc();}}});}
function linkCloseProc(robid,arg,style,workerid,islink,iscswh,islink_companyId,iscswh_id6d,iscswh_companyId){clearInterval(m_noTalkTimer);clearInterval(m_kfNoTalkTimer);try{document.cookie="hz6d_open_talk_"+company_id+"=0";}catch(e){}
m_success=false;g_comm.ShutDown(true);if(enable_talk_collection==1){if(closemark!="zhudong"){$.ajax({type:"POST",url:"impl/rpc_count.php",data:"kf_id="+obj_id+"&kh_id="+myid+"&kh_up="+khtalk_up+"&kh_down="+khtalk_down+"&talk_id="+mytempid,dataType:"xml",success:function(data){}});}}
try{$(".pc_ptlink_notice").each(function(){$(this).remove();});}catch(e){}
if(robid!=""){m_robid=robid;showzsk(1);chatrobot=3;return;}
if(arg!=""){set_rlnk();vote_true=true;lnkover=200;var curUrl=window.location.href;curUrl_arr=curUrl.split("&");for(var i=0;i<curUrl_arr.length;i++){if(curUrl_arr[i].substr(0,3)=="tpl"){var tpl=curUrl_arr[i].substr(4);}
if(curUrl_arr[i].substr(0,15)=="interface_theme"){var interface_theme=curUrl_arr[i].substr(16);}
if(curUrl_arr[i].substr(0,13)=="minchat_style"){var minchat_style=curUrl_arr[i].substr(14);}}
var referer=curUrl.match(/&referer=[^&]*/gim);var keyword=curUrl.match(/&keyword=[^&]*/gim);var str="";if(referer!=null)str+=referer;if(keyword!=null)str+=keyword;var href=http_pro+master_host+"/webCompany.php?arg="+arg+"&style="+style+"&cross=1"+str+"&is_swh=1";if(workerid!=undefined&&workerid!=''){href+="&switch_workerid="+workerid;}
if(islink=='1'){href+="&islink=1&islink_companyId="+islink_companyId;}
if(iscswh=='1'){href+="&iscswh=1&iscswh_id6d="+iscswh_id6d+"&iscswh_companyId="+iscswh_companyId;}
if(tpl!=""&&tpl!=undefined&&tpl!=null)
href=href+"&tpl="+tpl;if(interface_theme!=""&&interface_theme!=undefined&&interface_theme!=null)
href=href+"&interface_theme="+interface_theme;if(minchat_style!=""&&minchat_style!=undefined&&minchat_style!=null)
href=href+"&minchat_style="+minchat_style;location.href=href;return;}
lnkover=3;display_sys_msg(UBBCode(UBBEncode(getKfPrompt('close_prompt'))));if(kfpf!=0&&!vote_true){vote_open();}
$(".maskArea").show();try{$('.talk .edui-upload-video').trigger('pause');}catch(e){}
ret=new Object();mytempid=0;clearTYP();kindeditor.html("");hiddenQuick();removeVisitorForm();try{top.postMessage('53kf_new_colse','*');}catch(e){}}
function timeOverCloseProc(link){clearInterval(m_noTalkTimer);clearInterval(m_kfNoTalkTimer);try{document.cookie="hz6d_open_talk_"+company_id+"=0";}catch(e){}
m_success=false;g_comm.ShutDown(true);lnkover=3;display_sys_msg(UBBCode(UBBEncode(getKfPrompt('close_prompt'))));if(kfpf!=0&&!vote_true){vote_open();}
clearTYP();kindeditor.html("");$(".maskArea").show();try{$('.talk .edui-upload-video').trigger('pause');}catch(e){}
ret=new Object();mytempid=0;hiddenQuick();try{top.postMessage('53kf_new_colse','*');}catch(e){}
$(".pc_ptlink_notice").each(function(){$(this).remove();});removeVisitorForm();}
function recvTalkMsgProc(msg,font,size,color,from,jid6d,sid,msgid,msg_type){if(m_success==false)return;if(msg_type=='z'){changeFormStatus('formid_'+msgid,true);return;}
if(!isLoadVoice(msg)){setTimeout(function(){recvTalkMsgProc(msg,font,size,color,from,jid6d,sid,msgid);},100);return;}
khtalk_down=khtalk_down+1;msg=UBBCode(msg);msg=msg.replace(/(<br>)/g,"<br>");if(color=='#000'){if(company_tpl=='minichat2'){color=minicolor_kfxx;}else{color=color_kfxx;}}
if(company_tpl=='minichat2')color_kfqp=minicolor_kfqp;var style="font-family:"+font+";font-size:"+size+"px;color:"+color+";background-color:"+color_kfqp+";";var talkname=obj_name;if(jid6d!=""){talkname=getWorkerNameById6d(jid6d);}
if(sid==obj_id){playSound();setKfNoTalkVariable();setImKfNoTalkVariable();try{top.postMessage('53kf_new_msg','*');}catch(e){}
display_kf_msg(msg,talkname,style,undefined,msgid);if(isoldkf==0&&getCookie3("isoldkf_"+company_id+"_"+myid)!=1){var exp=new Date();exp.setTime(exp.getTime()+10*365*24*60*60*1000);document.cookie='isoldkf_'+company_id+'_'+myid+"=1;expires="+exp.toGMTString();isoldkf=1;}}else{setNoTalkVariable();display_fk_msg(msg);}
try{clearTimeout(carousel_id);}catch(e){}
if(!m_androidTip&&from=="android"){m_androidTip=true;display_sys_msg(infos[58]);}
if(imfocus==0){window.focus();kindeditor.focus();}
clearTYP();}
function recvCinfoMsgProc(logo,title,content,curl,msgType){if(logo!=""&&title!=""&&content!=""&&curl!=""){if(msgType=="p")
showCinfo("w",logo,title,content,curl);else
showCinfo("v",logo,title,content,curl);}}
function recvQstProc(fk_msgid){try{if(fk_msgid.indexOf('WU_FILE_')!=-1){$("#"+fk_msgid).find(".uploadStatus").text(infos[14]).css("color","#1E88E5");if($("#"+fk_msgid).find(".upload-image").length){var url=$("#"+fk_msgid).data('url');$("#"+fk_msgid).html("<img src='"+url+"' />");};}else if(fk_msgid.indexOf('formid_')!=-1){changeFormStatus(fk_msgid,true);}else{$("#"+fk_msgid).removeClass('info-status');try{clearTimeout(m_qstResTimer[fk_msgid]);m_qstResTimer[fk_msgid]=null;}catch(e){}}}catch(e){}}
function recvReceiveMsgProc(rowList){var rowLength=XMLGetNodesLength(rowList);for(var i=0;i<rowLength;i++){var node=XMLGetNode(rowList,i);var type=XMLGetNamedAttr(node,"type");if(type=='s'||type=='z')continue;var msg=XMLGetNamedAttr(node,"msg");if(i==0)msg=UBBEncode(msg);if(!isLoadVoice(msg)){setTimeout(function(){recvReceiveMsgProc(rowList);},100);return;}}
for(var i=0;i<rowLength;i++){var node=XMLGetNode(rowList,i);var type=XMLGetNamedAttr(node,"type");var msg=XMLGetNamedAttr(node,"msg");if(i==0)msg=UBBEncode(msg);var msg_time=XMLGetNamedAttr(node,"msg_time");var talkname=XMLGetNamedAttr(node,"kfname");if(type=='s'||type=='z')continue;var msgid=XMLGetNamedAttr(node,"msgid");if(type=='n'){var form_info=JSON.parse(msg);showVisitorForm(form_info.title,form_info.ids,"formid_"+msgid);continue;}
var imageText=new RegExp("(\\[imageText\])([\\s\\S]+?)(\\[\\/imageText\\])","gim");var cinfo_msg=msg.replace(imageText,function($1,$2,$3){return $3;});try{if(cinfo_msg!="")cinfo_msg=eval('('+cinfo_msg+')');}catch(e){}
try{if(cinfo_msg.logo!=undefined&&cinfo_msg.title!=undefined&&cinfo_msg.content!=undefined&&cinfo_msg.curl!=undefined){if(type=="p"||type=="r"||type=="h")showCinfo("w",cinfo_msg.logo,cinfo_msg.title,cinfo_msg.content,cinfo_msg.curl);else showCinfo("v",cinfo_msg.logo,cinfo_msg.title,cinfo_msg.content,cinfo_msg.curl);continue;}}catch(e){continue;}
if(msg.indexOf('down_file.php?')!=-1&&msg.indexOf('file=upload/files')!=-1){var reg=new RegExp("(\\[URL=(.+?)\])(.+?)(\\[\\/URL\\])","gim");var name,url;msg=msg.replace(reg,function($1,$2,$3,$4){name=$4;url=$3;return $1;});if(type=='p'||type=="r"||type=="h"){display_fil_msg(name,url,obj_id);}else{display_fil_msg(name,url,myid);}
continue;}
if(talkname=='')talkname=infos[45];msg=UBBCode(msg);msg=msg.replace(/(<br>)/g,"<br>");if(type=='p'||type=="r"||type=="h"||type=="q"||type=="k"){if(msg){if(msg.indexOf("http://kfs3")!=-1||msg.indexOf("https://kfs3")!=-1){displayAsVideoAudio(msg,undefined,msg_time,"kf",talkname);}else{display_kf_msg(msg,talkname,undefined,msg_time,msgid);}}}else if(type=='f'){display_kf_msg('发送成功',talkname,undefined,msg_time);}else{if(msg.indexOf("http://kfs3")!=-1||msg.indexOf("https://kfs3")!=-1){displayAsVideoAudio(msg,undefined,msg_time,"fk",talkname);}else{display_fk_msg(msg,undefined,msg_time);}}}
setTimeout(function(){basic.scrollPage();},100);}
function recvFileProc(fileName,sid,jid6d,type,file_cancel_id,size){if(m_success==false)return;setKfNoTalkVariable();setImKfNoTalkVariable();try{clearTimeout(carousel_id);}catch(e){}
playSound();var name=getStringField(fileName,"*",2);var url=getStringField(fileName,"*",1);display_fil_msg(name,url,sid,jid6d,type,file_cancel_id,size);if(imfocus==0){window.focus();kindeditor.focus();}
clearTYP();try{top.postMessage('53kf_new_msg','*');}catch(e){}}
function recvReqstProc(file_cancel_id,msg){try{if($("#"+file_cancel_id).length>=1){$("#"+file_cancel_id).remove();}else{if(msg.indexOf('down_file.php?file=upload/files')!=-1||msg.indexOf("http://kfs3")!=-1||msg.indexOf("https://kfs3")!=-1){var reg=new RegExp("(\\[URL=(.+?)\])(.+?)(\\[\\/URL\\])","gim");var url;msg=msg.replace(reg,function($1,$2,$3,$4){url=$3;return $1;});$(".file_cancel").each(function(){if(msg.indexOf('down_file.php?file=upload/files')!=-1){if($(this).find('a').attr('href')==url){$(this).remove();return false;}}else{url=HtmlDecode(url);if($(this).find('audio').attr('src')==url){$(this).remove();return false;}else if($(this).find('video').attr('src')==url){$(this).remove();return false;}}});}}}catch(e){}}
function recvRemsgProc(msgid){try{if($("#"+msgid).length>=1){$("#"+msgid).remove();}}catch(e){}}
function recvGuestmenuProc(title,ids,msgid){try{showVisitorForm(title,ids,"formid_"+msgid);clearTimeout(carousel_id);}catch(e){}}
function waitCountProc(cnt){if(cnt<0){getWlist(1);}else{m_busyCnt=parseInt(cnt)+1;if(m_busy==true){$(".personNum").html(m_busyCnt);}}}
function recvRlkProc()
{display_sys_msg(infos[59]);getCusWebMsg();}
function lnkFailProc()
{display_sys_msg(infos[62]);}
function qstFailProc(msg)
{}
function send_FIL(filename,type,size)
{setNoTalkVariable();g_comm.SendFile(filename,type,size);}
function filFailProc()
{display_sys_msg(infos[63]);}
function recvVoteProc(id6d,state){m_requestVote=true;if(kfpf==0){replayVote("4");}else if(vote_true){replayVote("3");}else{vote_open();}}
function replayVote(state)
{if(m_requestVote){g_comm.SendVote(state);m_requestVote=false;}}
function setFlashGid()
{try
{document.getElementById("kh_gid").src=http_pro+host+"/iframe_set_gid.php";}
catch(e){}}
function playSound(){if(fk_music!=''){try{if(navigator.userAgent.indexOf("MSIE 8.0")>0){$("#bgsoundSound").attr("src",http_pro+host+"/sound/"+fk_music+".mp3");}else{var myAuto=document.getElementById('audioSound');$("#audioSound").attr("src",http_pro+host+"/sound/"+fk_music+".mp3");myAuto.play();}}catch(e){}}}
function lnkReturnShow(){$(".talk").show().siblings().hide();try{$('.edui-upload-video').eq(0).trigger('play');}catch(e){}
$(".pc-talk").show().siblings().hide();$(".robot-function-bar").hide().siblings(".talk-function-bar").show();$(".system-wait").remove();$(".guanlian-problem").hide();is_robotToTalk=false;}
function lnksuccess(){$(".changeColor-wrap").siblings(".function-icon-disabled").removeClass("disabled");$(".upload_box").hover(function(){$(".upload_copy .svgColor").css("fill","#1F8CEB")},function(){$(".upload_copy .svgColor").css("fill","#466080")})
$(".svgWrap .function-icon-eval").parent().removeClass("disabled");$(".talk .line-up").hide();if(company_tpl=='minichat2'){$(".pc-visitor-main").css("padding-bottom","110px");}else{$(".pc-visitor-main").css("padding-bottom","190px");}
$(".pc-visitor-footer").show();setLnkOverTime();lnkover=1;rec_stat=0;is_line_up=false;m_success=true;m_setTalkLastTime=false;if(net_callBack==1){$(".talk").addClass("hasCallBack");}
if(is_sceneToTalk)display_sys_msg(obj_name+" 为您服务");try{if(comeinfo.logo!=""&&comeinfo.title!=""&&comeinfo.content!=""&&comeinfo.curl!=""){var comeinfo_html='<div style="height:68px;width: 100%;margin-bottom:15px"><div class="pc_ptlink_notice" style="width: 100%;border:1px solid #D8DFEA;background-color: #fff;height:68px;max-width: 512px;float: left;padding: 10px;position: relative;"><div style="width:48px;height: 48px;float: left;"><img src="'+comeinfo.logo+'" alt="" style="pointer-events:none;width: 100%;height:100%;"></div><div class="pc_ptlink_notice_text" style="position: absolute;height: 63px;top:10px;bottom:0;left: 68px;right:99px;"><p class="pc_ptlink_title" style="width:100%;margin-bottom: 10px;font-size:12px;line-height: 18px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color:#28334B;">'+comeinfo.title+'</p><p class="pc_ptlink_price" style="color:#F44024;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size:12px;line-height: 20px">'+comeinfo.content+'</p></div><div style="float: right;width: 79px;height: 32px;border:1px solid #F44024;color:#F44024;font-size:14px;text-align: center;line-height: 30px;border-radius: 2px;cursor: pointer;margin-top: 7px;" onclick="sendCinfo()"> 发送链接</div></div></div>';diaplay_cinfo_msg(comeinfo_html);}
var msg_div="<div id='talk_pos' style='display: none'></div>";$(".pc-talk").append(msg_div);}catch(e){}
try{if(msg_wait_arr.length>0){for(var i=0;i<msg_wait_arr.length;i++){qstmsg(UrlEncode(msg_wait_arr[i]));}}
msg_wait_arr=new Array();}catch(e){}}
function handleCustMsg(type){if(custmsg!=""){if(type=="lnk"){sendmsg(custmsg);}else if(type=="lword"){if(lword_type=='1'){$("#ly_content").val(custmsg);$("#submit_lword").removeClass("prevent-send");}else{sendmsg(custmsg);}}else if(type=="robot"){sendmsg(custmsg);}}
custmsg="";}
function setLnkOverTime(){try{var httprequest=createHttpRequest();if(httprequest!=null){var senddata="arg="+arg+"&lnkopentime="+lnkopentime+"&check_id=11917718fe939f3106d35a30074bcd30";var url="impl/rpc_lnkover_time.php";httprequest.open("POST",url,true);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function(){if(4==httprequest.readyState){if(200==httprequest.status){}}}}}catch(e){}}
function getKfPromptTime(){var list=m_busy_prompt_time_list;var len=list.length,info_list;for(var i=0;i<len;i++){info_list=list[i];var id6d=info_list.id6d;var busy_prompt_time=info_list.busy_prompt_time;if(id6d==obj_id&&busy_prompt_time!=''&&busy_prompt_time!=undefined){return busy_prompt_time;}}
if(kf_auto_tip==0)return 1800;return kf_auto_tip;}
function getConnPrompt()
{var len=m_conn_prompt_list.length,info_list;var carousel_count=0;var prompt_count=1;var first_prompt='';for(var i=0;i<len;i++){info_list=m_conn_prompt_list[i];var id6d=info_list.id6d;if(id6d==obj_id){if(typeof(info_list.carousel)=='undefined'||(!info_list.carousel_prompt1&&!info_list.carousel_prompt2&&!info_list.carousel_prompt3&&!info_list.carousel_prompt4&&!info_list.carousel_prompt5&&!info_list.carousel_prompt6&&!info_list.carousel_prompt7&&!info_list.carousel_prompt8)){return info_list.prompt;}else{try{clearTimeout(carousel_id);}catch(e){}
function check_prmopt(){if(lnkover!=1){return;}
if(eval("info_list.carousel_prompt"+prompt_count)){conn_prompt_num=prompt_count;if(!first_prompt){first_prompt=eval("info_list.carousel_prompt"+prompt_count);}else{playSound();display_kf_msg(UBBCode(UBBEncode(eval("info_list.carousel_prompt"+prompt_count))),undefined,'');g_comm.SendConnPrompt(UrlEncode(UBBEncode(eval("info_list.carousel_prompt"+prompt_count))));}
prompt_count++;if(info_list['carousel_time'+prompt_count]){carousel_id=setTimeout(check_prmopt,info_list['carousel_time'+prompt_count]*1000);}else{carousel_id=setTimeout(check_prmopt,info_list['carousel_time1']*1000);}}else{prompt_count++;if(prompt_count>8){prompt_count=1;carousel_count++;if(carousel_count>=info_list.carousel_num){return;}}
check_prmopt();}}
check_prmopt();return first_prompt;}}}
return"";}
function getKfPrompt(prompt){if(prompt=="close_prompt"){var list=m_close_prompt_list;var list_prompt=close_prompt;}else if(prompt=="phrase_prompt"){var list=m_phrase_prompt_list;var list_prompt=kf_auto_tip_phrase;}
var len=list.length,info_list;for(var i=0;i<len;i++){info_list=list[i];var id6d=info_list.id6d;if(id6d==obj_id&&info_list.prompt!=''){return info_list.prompt;}}
return list_prompt;}
function showConnPrompt(){var conn_prompt_show="";var cp=getConnPrompt();var cp_trim=$.trim(cp.replace(/&nbsp;/g,""));if(cp_trim!=""){conn_prompt_show=cp;if(m_fisrtConnPrompt==true){}}else{conn_prompt_show=conn_prompt;}
m_fisrtConnPrompt=false;if(conn_prompt_show!=""){playSound();display_kf_msg(UBBCode(UBBEncode(conn_prompt_show)),undefined,'');}
if(question!=""){g_comm.SendTalkMsg(UrlEncode(question));display_fk_msg(question);}}
function checkKfNoTalk(){if(kfNoTalkNum<CONST_KF_NOTALK_TIP){kfNoTalkNum++;}else{setKfNoTalkVariable();if(m_success==true)display_sys_msg(getKfPrompt('phrase_prompt'),1);}}
function setNoTalkVariable()
{noTalkNum=0;noTalkOver=0;}
function setKfNoTalkVariable()
{kfNoTalkNum=0;clearInterval(m_kfNoTalkTimer);}
function setImKfNoTalkVariable()
{ImKfNoTalkNum=0;}
function checkImKfNoTalk()
{if(ImKfNoTalkNum<imkf_no_talk_time)
{ImKfNoTalkNum++;}
else
{if(m_success==true)closeLink();}}
function checkNoTalk()
{if(noTalkNum<CONST_NOTALK_TIP)
{noTalkNum++;}
else
{if(noTalkOver==0)
{display_sys_msg(disconnect_prompt);}
if(noTalkOver<CONST_NOTALK_OVER)
{noTalkOver++;}
else
{closeLink();}}}
function typingProc(){setTYP();}
function setTYP(){settyptime=getTime();$(".kf_input").addClass("is_inputting");}
function setupTypingProc(mode){if(mode==CONST_TYPE_MODE_WITHOUT_MSG){typtime=8;}else{typtime=4;}
sendtyp_type=mode;}
function sendTypMsg()
{if(getTime()-settyptime>=8)
{clearTYP();}
sendTYP();}
function clearTYP()
{settyptime=getTime();$(".kf_input").removeClass("is_inputting");}
function sendTYP(){var msg_content=$.trim(kindeditor.html());msg_content=msg_content.replace(/&nbsp;/g,'').replace(/ /g,'');msg_content=HtmlDecode(msg_content);if(getTime()-sendtyptime>=typtime&&typcontent!=msg_content){if(sendtyp_type==0){if(msg_content!=""){g_comm.SendTyping("");}}else{if(msg_content!=""){var msg=UBBEncode(msg_content);try{msg=msgFilter(msg);}catch(e){}
g_comm.SendTyping(UBBCode(UrlEncode(msg)));}else{if(typcontent!=''){g_comm.SendTyping('');}}}
sendtyptime=getTime();typcontent=msg_content;}}
function qstmsg(msg,fk_msgid,msg_type,msgid){typcontent='';setNoTalkVariable();try{clearTimeout(carousel_id);}catch(e){}
if(kfNoTalkNum==0){try{clearInterval(m_kfNoTalkTimer);m_kfNoTalkTimer=setInterval("checkKfNoTalk()",1000);}catch(e){}}
var code_arr=new Array();try{var mo_patt=new RegExp("(%5BMOBILE%5D)(\\d+?)(%5B%2FMOBILE%5D)","gim");var ph_patt=new RegExp("(%5BPHONE%5D)([\\d\\-]+?)(%5B%2FPHONE%5D)","gim");var em_patt=new RegExp("(%5BEMAIL%5D)(\\S+?)(%5B%2FEMAIL%5D)","gim");var img_patt=new RegExp("(%5BIMG%5D)(\\S+?)(%5B%2FIMG%5D)","gim");var url_patt=new RegExp("(%5BURL%3D(.+?)%5D)(.+?)(%5B%2FURL%5D)","gim");var qq_patt=new RegExp("[1-9][0-9]{5,10}","gim");if(mo_patt.test(msg)){code_arr.push("1");}
if(ph_patt.test(msg)){code_arr.push("2");}
if(em_patt.test(msg)){code_arr.push("3");}
var msg_tmp=decodeURIComponent(msg.replace(mo_patt,'').replace(ph_patt,'').replace(em_patt,'').replace(img_patt,'').replace(url_patt,''));if(qq_patt.test(msg_tmp)){code_arr.push("4");}}catch(e){}
if(is_first_talk=="1"&&(company_id=="72000051"||company_id=="72000450"||company_id=="72087813"||company_id=="70665384"||company_id=="72141571"||company_id=="72001915")){$.get("wnn_debug.php",{"type":"onlyone","flag":"first_msg","info":conn_prompt_num,"company_id":company_id});is_first_talk=0;}
g_comm.SendTalkMsg(msg,code_arr.join(","),fk_msgid,msg_type,msgid);khtalk_up=khtalk_up+1;kc.addCompany("72136855,72000450,72034819")
kc.kCode()}
function sendCinfo(){if(comeinfo.logo!=""&&comeinfo.title!=""&&comeinfo.content!=""&&comeinfo.curl!=""){try{clearTimeout(carousel_id);}catch(e){}
g_comm.SendCinfoMsg(encodeURIComponent(comeinfo.logo),encodeURIComponent(comeinfo.title),encodeURIComponent(comeinfo.content),encodeURIComponent(comeinfo.curl));showCinfo("v",comeinfo.logo,comeinfo.title,comeinfo.content,comeinfo.curl);}}
function showCinfo(type,logo,title,content,curl){if(logo!=""&&title!=""&&content!=""&&curl!=""){var comeinfo_msg='<div class="pc_ptlink_bubble" onclick="window.open(\''+curl+'\',\'_blank\')" style="width: 230px;background-color: #fff;height:68px;box-sizing:border-box; padding:10px;"><div style="width: 48px;height: 48px; float: left;"><img src="'+logo+'" alt="" style="pointer-events:none; width: 100%;height:100%;"></div><div class="pc_ptlink_bubble_text" style="margin-left: 10px;float: left;height: 48px;width: 150px;"><p class="pc_ptlink_title" style="width:100%;margin-bottom: 10px;font-size: 12px ;line-height: 18px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color:#28334B;">'+title+'</p><p class="pc_ptlink_price" style="color:#F44024;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size:12px;line-height: 20px">'+content+'</p></div></div>';if(type=="v")display_fk_msg(comeinfo_msg);else display_kf_msg(comeinfo_msg);}}
function closeLink(){closemark="zhudong";g_comm.TerminateLink();if(enable_talk_collection==1){if(typeof khtalk_up=="undefined"){khtalk_up=0;}
if(typeof khtalk_down=="undefined"){khtalk_downs=0;}
g_comm.ShutDown(true);clearInterval(m_noTalkTimer);clearInterval(m_kfNoTalkTimer);$.ajax({type:"POST",url:"impl/rpc_count.php",data:"kf_id="+obj_id+"&kh_id="+myid+"&kh_up="+khtalk_up+"&kh_down="+khtalk_down+"&talk_id="+mytempid,dataType:"xml",success:function(data){}});}}
function getWorkerCard(){var postdata="company_id="+company_id+"&id6d="+obj_id+"&check_id=11917718fe939f3106d35a30074bcd30";if(obj_id==0){postdata=postdata+"&worker_id="+worker_id;}
$.ajax({type:"POST",url:"impl/rpc_worker_info_new.php",data:postdata,dataType:"json",success:function(result){if(result.ecode==0){var data=result.data;showWorkerCard(data);}}});}
var m_joinNames=[];function getWorkerNameById6d(id6d){var name=infos[45];for(var i=0;i<m_joinNames.length;i++){var obj=m_joinNames[i];if(obj.jid6d==id6d){return obj.name;}}
$.ajax({type:"POST",url:"impl/rpc_worker_info_new.php",data:"company_id="+company_id+"&id6d="+id6d+"&check_id=11917718fe939f3106d35a30074bcd30",dataType:"json",async:false,success:function(result){if(result.ecode==0){var data=result.data;name=data['bname'];m_joinNames.push({'jid6d':id6d,'name':name});}}});return name;}
function getQrcode(){$.ajax({type:"POST",url:"impl/rpc_get_qrcode.php",data:"company_id="+company_id+"&id6d="+obj_id+"&guest_id="+myid+"&talk_id="+mytempid+"&style_id="+style_id+"&style="+style+"&kf_list="+worker_id,dataType:"json",success:function(result){if(result.status=='success'){qrcode_url=result.url;if(qrcode_url)addQrcode();}else{console.log(result.errmsg);}}});}
function quickQA(obj,cmd,type_id,question_id,wd)
{var robot_id=0;if(cmd==undefined){cmd="GetHotList";type_id=0;question_id="";wd="";if(m_robid!=''){robot_id=m_robid;}}else{robot_id=m_robid;}
try{var senddata="cmd="+cmd+"&company_id="+company_id+"&robot_id="+robot_id+"&type_id="+type_id+"&question_id="+question_id+"&wd="+wd;var url="impl/zsk.php";xmlhttp.open("POST",url,false);xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");xmlhttp.send(senddata);var dom=xmlhttp.responseXML;var rspNodes=XMLGetNodes(dom,"Response");var rspNode=XMLGetNode(rspNodes,0);if(rspNode!=null){var ecode=XMLGetNamedAttr(rspNode,"ecode");var cmd=XMLGetNamedAttr(rspNode,"cmd");}else{return;}
if(ecode==0){switch(cmd){case"GetHotList":var hotArray=new Array();var datas=XMLGetNodes(rspNode,"Data");var data=XMLGetNode(datas,0);var rowList=XMLGetNodes(data,"row");var nodeLength=XMLGetNodesLength(rowList);for(var i=0;i<nodeLength;i++){var node=XMLGetNode(rowList,i);var hot=new Object();hot.id=XMLGetNamedAttr(node,"id");hot.question=XMLGetNamedAttr(node,"question");hotArray.push(hot);}
showQuickList(obj,hotArray);break;case"GetAnswer":setKfNoTalkVariable();setImKfNoTalkVariable();var answer=XMLGetNamedAttr(rspNode,"answer");display_kf_msg(UBBCode(UBBEncode(answer.replace(/(\n)/g,"<br>"))));saveRobotMsgInfo(answer,"w");break;default:break;}}else if(ecode==1){basic.toastOut(infos[46]);}else if(ecode==2){basic.toastOut(infos[47]);}}catch(e){}}
function showQuickList(obj,hotArray){var html=new Array();var len=hotArray.length;if(len!=0){for(var i=0;i<len;i++){var hot=hotArray[i];var id=hot.id;var question=hot.question;html.push("<p onclick='getQuickAnswer(\""+id+"\",\""+question.replace(/\\/g,"\\\\").replace(/&quot;/g,"\\&quot;")+"\")' title='"+question+"'>"+question+"</p>");}}else{html.push("<p>"+infos[48]+"</p>");}
$(".service-help").html(html.join(""));}
function getQuickAnswer(id,question){setNoTalkVariable();display_fk_msg(question);saveRobotMsgInfo(question,"v");quickQA("","GetAnswer","",id);hiddenQuick();}
function hiddenQuick(){try{$(".service-help").removeClass("active").slideUp(100);$(".icon-hot").parent().removeClass("active");}catch(e){}}
function saveRobotMsgInfo(msg,type){msg=msg.replace(/<[^>]+>/g,"");if(type=="w"){if(msg.toLowerCase().indexOf('qq')>-1){custom_auto_update.qq=2;}
if(msg.toLowerCase().indexOf('微信')>-1){custom_auto_update.wechat=2;}}else if(type=="v"){var data_new={"mobile":"","phone":"","email":"","qq":"","wechat":"",};var msg=msg.replace(/\[URL=.*?]/g,'').replace(/\[IMG\](.*?)\[\/IMG\]/g,'');data_new.mobile=msgInfoFilter(msg,'mobile');data_new.phone=msgInfoFilter(msg,'phone');data_new.email=msgInfoFilter(msg,'email');if(msg.toLowerCase().indexOf('qq')>-1||custom_auto_update.qq>0){if(msg.toLowerCase().indexOf('qq')>-1){custom_auto_update.qq=2;}
data_new.qq=msgInfoFilter(msg,'qq');custom_auto_update.qq--;}
if(msg.toLowerCase().indexOf('微信')>-1||custom_auto_update.wechat>0){if(msg.toLowerCase().indexOf('微信')>-1){custom_auto_update.wechat=2;}
data_new.wechat=msgInfoFilter(msg,'wechat');custom_auto_update.wechat--;}
if(data_new.mobile!=""||data_new.phone!=""||data_new.email!=""||data_new.qq!=""||data_new.wechat!="")saveMsgInfo(data_new);}}
function msgInfoFilter(msg,filter_key){if(filter_key=='mobile'){var data=('-'+msg).match(/[^\d](1[3-9]\d{9})(?!\d)/);if(data)data=data[0].substring(1);}
if(filter_key=='phone'){var data=('-'+msg).match(/[^\d](0\d{2,3}-?\d{7,8})(?!\d)/);if(data)data=data[0].substring(1);}
if(filter_key=='email'){var data=msg.match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);if(data)data=data[0];}
if(filter_key=='qq'){var data=('-'+msg).match(/[^\d](\d{5,12})(?!\d)/);if(data)data=data[0].substring(1);}
if(filter_key=='wechat'){var data=('-'+msg).match(/[^\w]\w{6,20}(?![\w#])/);if(data)data=data[0].substring(1);}
if(data!=""&&data!=null)return data;else return"";}
function saveMsgInfo(data){var _this=this;var url="/client/set_robot_msg.php";m_lwordObject=m_lwordObject=='zdgs'?'':m_lwordObject;var postdata="mobile="+data.mobile+"&phone="+data.phone+"&email="+data.email+"&qq="+data.qq+"&wechat="+data.wechat+"&company_id="+company_id+"&guest_id="+myid+"&land_page="+encodeURIComponent(land_page)+"&referer="+encodeURIComponent(talkpage)+"&referer1="+encodeURIComponent(frompage)+"&ly_mode=3&ly_object="+m_lwordObject+"&ucust_id="+ucust_id+"&u_stat_id="+u_stat_id+"&tfrom="+tfrom+"&style_id="+style_id+"&uid="+uid+"&open_time="+open_time+"&ly_first=true";$.ajax({type:'POST',url:url,data:postdata,success:function(data){},error:function(){}})}
function getCusWebMsg(){try{var httprequest=createHttpRequest();if(httprequest!=null){var url="impl/rpc_cus_web_msg.php";var senddata="check_id=11917718fe939f3106d35a30074bcd30&company_id="+company_id+"&guest_id="+myid;httprequest.open("POST",url,true);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function(){if(4==httprequest.readyState){if(200==httprequest.status){var dom=httprequest.responseXML;var msgList=new Array();var rowList=XMLGetNodes(dom,"row");var rowLength=XMLGetNodesLength(rowList);if(rowLength==0){return;}
for(var i=0;i<rowLength;i++)
{var row=XMLGetNode(rowList,i);var msg=new Object();msg.remark=XMLGetNamedAttr(row,"remark");msg.send_time=XMLGetNamedAttr(row,"send_time");msg.bname=XMLGetNamedAttr(row,"bname");msg.talk_id=XMLGetNamedAttr(row,"talk_id");var web_talk_id=msg.talk_id;if(web_msg_talk_id.indexOf(web_talk_id)==-1){web_msg_talk_id.push(web_talk_id);}
msgList.push(msg);}
showCusWebMsgList(msgList);}else{return;}}}}}
catch(e)
{return;}}
function repeatMainProgram()
{m_cusWebMsg=false;mainProgram();}
function showCusWebMsgList(msgList){for(var i=0;i<msgList.length;i++){var msg=msgList[i].remark;if(!isLoadVoice(msg)){setTimeout(function(){showCusWebMsgList(msgList);},100);return;}}
for(var i=0;i<msgList.length;i++){var msg=msgList[i];var send_time=msg.send_time;var bname=msg.bname;var remark=msg.remark;try{display_web_msg(UBBCode(remark),bname,undefined,send_time);}catch(e){display_kf_msg(UBBCode(remark),bname,undefined,send_time);}}}
function createHttpRequest()
{try
{var httpRequest=new ActiveXObject("MSXML2.XMLHTTP");}
catch(e)
{var httpRequest=new XMLHttpRequest();}
return httpRequest;}
function insertErrorInfos(err_from,err_type,err_detail)
{try
{var httprequest=createHttpRequest();if(httprequest!=null)
{var err_from=UrlEncode(HtmlEncode(err_from));var err_type=UrlEncode(HtmlEncode(err_type));var err_detail=UrlEncode(HtmlEncode(err_detail));var senddata="err_from="+err_from+"&err_type="+err_type+"&err_detail="+err_detail+"&company_id="+company_id+"&id6d="+obj_id;var url="err_infos.php";httprequest.open("POST",url,true);httprequest.setRequestHeader("Content-Length",senddata.length);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function()
{if(4==httprequest.readyState)
{if(200==httprequest.status)
{var rspNodes=XMLGetNodes(httprequest.responseXML,'Response');if(rspNodes!=null)
{var rspNode=rspNodes[0];if(rspNode!=null)
{var ecode=unescape(rspNode.attributes.getNamedItem("ecode").nodeValue);}
if(ecode==0)
{}
else
{}}}}}}}
catch(e){}}
function insertTalkTotal()
{try
{var httprequest=createHttpRequest();if(httprequest!=null)
{var url="lword.php";var senddata="company_id="+company_id+"&guest_id="+myid+"&tempid="+mytempid+"&referer="+talkpage+"&referer1="+frompage+"&zsk=1&talk_his_table="+talk_his_table+"&style_id="+style_id+"&sign="+lnk_fire;httprequest.open("POST",url,true);httprequest.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");httprequest.send(senddata);httprequest.onreadystatechange=function()
{if(4==httprequest.readyState)
{if(200==httprequest.status)
{var restxt=httprequest.responseText;ret=str_to_obj(restxt);if(parseInt(ret.tempid)>0)
{mytempid=ret.tempid;}
if(parseInt(ret.guestid)>0)
{myid=ret.guestid;}
try
{if(myid>0){setCookie2("guest_id",myid);}}catch(e){}}}}}}
catch(e){}}
function set_rlnk()
{try
{document.frames["iframe_fav"].window.rlnk=1;}
catch(e)
{try
{document.getElementById("iframe_fav").contentWindow.rlnk=1;}
catch(e){}}}
function checkCodeSuccess(vcode){if(m_checkCodeType==1){if(robot_ass==2&&is_wlist==0&&prompt_cookie==""&&online_cnt!="0"){show_prompt_guide();}else{sendLNK();}}else if(m_checkCodeType==2){save_lword(vcode);}}
function checkCodeError(){if(m_checkCodeType==2){basic.toastOut(infos[31]);$("#submit_lword").text(infos[6]).removeClass("loading");}}
function show_prompt_guide(){if(is_show_prompt===true)return;is_show_prompt=true;if(adminHeaderUrl!='')kf_header=adminHeaderUrl;lnkReturnShow();try{wait_client.init();var prompt_guide=new Array();var prompt_guide_default=new Array();var is_match=false;for(var i=0;i<m_prompt_guide_list.length;i++){var prompt_guide_i=m_prompt_guide_list[i].prompt;if(m_prompt_guide_list[i].title=="其他"){prompt_guide_default=prompt_guide_i;continue;}
if(typeof m_prompt_guide_list[i].promote_link!="undefined"&&m_prompt_guide_list[i].promote_link!=""){try{if(land_page!=""&&m_prompt_guide_list[i].link_init!=""&&land_page.indexOf(m_prompt_guide_list[i].link_init)!==-1){prompt_guide=prompt_guide_i;is_match=true;break;}}catch(e){}}else{if(keyword!=""&&(m_prompt_guide_list[i].title.toLowerCase().indexOf(keyword.toLowerCase())!==-1||keyword.toLowerCase().indexOf(m_prompt_guide_list[i].title.toLowerCase())!==-1)){prompt_guide=prompt_guide_i;is_match=true;break;}}}
if(is_match===false)prompt_guide=prompt_guide_default;if(prompt_guide.length==0)return;var num=0;function set_time_prompt(){if(prompt_guide.length>0){playSound();display_kf_msg(UBBCode(UBBEncode(prompt_guide[num].prompt_content)),admin_bname);wait_client.sendRoa(UBBCode(UBBEncode(prompt_guide[num].prompt_content)),num+1);}else{return;}
num++;if(num>=prompt_guide.length)return;if(num<prompt_guide_size)var next_time=num*50;else var next_time=parseInt(prompt_guide[num].time)*1000+num*50;prompt_guide_timer=setTimeout(set_time_prompt,next_time);}
if(prompt_guide_size==0)var prompt_guide_time=parseInt(prompt_guide[num].time)*1000;else var prompt_guide_time=0;prompt_guide_timer=setTimeout(set_time_prompt,prompt_guide_time);}catch(e){}}
function show_scene_guide(option_id,num){if(adminHeaderUrl!='')kf_header=adminHeaderUrl;var option_cont=m_scene_guide_list[option_id].option_cont;var action=m_scene_guide_list[option_id].action;var option_btn=m_scene_guide_list[option_id].option_btn;if(num==undefined)num=0;function show_scene(){if(option_cont.length>0){var scene_tmp=option_id+"-"+num;if(option_cont.length==num){if(action!='option'){var time=new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);var expires=new Date();expires.setTime(time);document.cookie="scene_guide_"+company_id+"=1; expires="+expires.toGMTString();}
if(action=='tokf'){sceneToTalk();scene_client.closeLink(true);}else if(action=='option'){var is_display=false;$.each(scene_step_arr,function(i,v){if(v.indexOf(scene_tmp)!==-1){var btn_num=v.split('-')[2];if(option_btn[btn_num]){display_fk_msg(option_btn[btn_num].name);show_scene_guide(option_btn[btn_num].point);is_display=true;return false;}}});if(!is_display){playSound();display_scene_option(option_btn,option_id,num);}}else{scene_client.closeLink(true);}}else{if(option_cont[num].type=='message'){playSound();display_kf_msg(UBBCode(UBBEncode(option_cont[num].cont)),admin_bname);if($.inArray(scene_tmp,scene_step_arr)!=-1){num++;show_scene();}else{try{scene_client.sendRoa(UrlEncode(UBBEncode(option_cont[num].cont)),scene_tmp,'p');num++;setTimeout(function(){show_scene();},1000);}catch(e){}}}else{if($.inArray(scene_tmp,scene_step_arr)!=-1){display_kf_msg('发送成功');num++;show_scene();}else{playSound();display_scene_form(option_cont[num].cont,option_id,num);}}}}else{sendLNK();}}
show_scene();}
function setDnLog(type,status){try{if(company_id!=72140467&&company_id!=72047738&&company_id!=72034871&&company_id!=70833187)return;var url="http://"+host+"/wnn_debug.php";var sendData="company_id="+company_id+"&open_time="+open_time+"&type="+type;if(typeof status!='undefined')sendData+="&status="+status;$.post(url,sendData,function(){});}catch(e){alert(e);}}
function setDppLog(type,msg){try{if(company_id==72153759){var url="http://"+host+"/dpp_debug.php";if(msg==undefined){msg='';}
var sendData="company_id="+company_id+"&type="+type+"&msg="+msg+"&gid="+myid;$.post(url,sendData,function(){});}}catch(e){alert(e);}}
function zn_order(){if(online_cnt!="0"&&robot_ass==2&&is_wlist==0&&(typeof(rec_stat)=="undefined"||rec_stat!=1)&&m_success==false&&prompt_cookie==""&&isset_prompt_cookie==0){var time=new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);var expires=new Date();expires.setTime(time);document.cookie="prompt_guide_"+company_id+"=1; expires="+expires.toGMTString();isset_prompt_cookie=1;var now_time=Date.parse(new Date())/1000;if(now_time-lnkopentime>540){refreshLNK();}else{sendLNK(true);}}};;var ActRd;var ActRs=new Array();function Act(obj,str)
{eval(obj.type+'.'+str+'(obj)');}
function LoadClass(name)
{eval(name+'=new '+name+'()');}
function GetIndex(obj)
{for(var i=0;i<obj.form.elements.length;i++)
{if(obj.form.elements[i].uniqueID==obj.uniqueID)return(i);}
return(-1);}
function GetOffset(obj)
{var x=0,y=0;if(!obj)return[x,y];while(obj)
{x+=parseInt(obj.offsetLeft);y+=parseInt(obj.offsetTop);obj=obj.offsetParent;}
return[x,y];}
function Cookie()
{this._Cookie=[];this.Load=function()
{if(document.cookie.indexOf(";")!=-1)
{var _sp,_name,_tp,_tars,_tarslength;var _item=document.cookie.split("; ");var _itemlength=_item.length;while(_itemlength>0)
{_sp=_item[--_itemlength].split("=");_name=_sp[0];if(_sp.length<2)
{continue;}
_tp=_sp[1].split(",");_tars=_tp.slice(1,_tp.length);this._Cookie[_name]=[];this._Cookie[_name]=_tars;this._Cookie[_name]["timeout"]=_tp[0];}
return true;}
return false;}
this.Save=function()
{var _str,_ars,_mars,_marslength,timeout,i,key;for(key in this._Cookie)
{if(!this._Cookie[key])return;_str=[];_mars=this._Cookie[key];_marslength=_mars.length;for(i=0;i<_marslength;i++)
{_str[_str.length]=escape(_mars[i]);}
document.cookie=key+"="+_mars["timeout"]+(_str.length>0?",":"")+_str+(_mars["timeout"]==0?"":";expires="+new Date(parseInt(_mars["timeout"])).toGMTString());}}
this.Create=function(name,days)
{days=days?days:0;if(!this._Cookie[name])this._Cookie[name]=[];this._Cookie[name]["timeout"]=days!=0?new Date().getTime()+parseInt(days)*86400000:0;}
this.Modify=function(name,days)
{this.Create(name,days);}
this.Delete=function(name)
{this.Create(name,0);}
this.AddItem=function(name,value)
{this._Cookie[name][this._Cookie[name].length]=value;}
this.DelItem=function(name,index)
{var _ttime=this._Cookie[name]["timeout"];this._Cookie[name]=this._Cookie[name].slice(0,index).concat(this._Cookie[name].slice(parseInt(index)+1,this._Cookie[name].length));this._Cookie[name]["timeout"]=_ttime;}
this.GetItem=function(name,index)
{return this._Cookie[name][index];}
this.GetTime=function(name)
{return new Date(parseInt(this._Cookie[name]["timeout"]));}
this.GetCount=function(name)
{return this._Cookie[name].length;}
this.GetCookieCount=function()
{var _length=0,key;for(key in this._Cookie)_length++;return _length;}
this.SetCookie=function(name,value)
{var today=new Date()
var expires=new Date()
expires.setTime(today.getTime()+1000*60*60*24*365)
document.cookie=name+"="+escape(value)+"; expires="+expires.toGMTString()}
this.GetCookie=function(Name)
{var search=Name+"="
if(document.cookie.length>0)
{offset=document.cookie.indexOf(search)
if(offset!=-1)
{offset+=search.length
end=document.cookie.indexOf(";",offset)
if(end==-1)end=document.cookie.length
return unescape(document.cookie.substring(offset,end))}}
return""}}
Number.prototype.Fix=function()
{return numFix(this)}
Number.prototype.Int=function()
{return numInt(this)}
Array.prototype.Clear=function()
{this.length=0;}
Array.prototype.Max=function()
{var i,max=this[0];for(i=1;i<this.length;i++)
{if(max<this[i])max=this[i];}
return max;}
Array.prototype.Min=function()
{var i,min=this[0];for(i=1;i<this.length;i++)
{if(min>this[i])min=this[i];}
return min;}
Array.prototype.Sum=function()
{var i,sum=0;for(i=0;i<this.length;i++)
{sum+=this[i];}
return sum;}
Array.prototype.Left=function(length)
{return this.slice(0,length);}
Array.prototype.Mid=function(start,length)
{return this.slice(start,start+length);}
Array.prototype.Right=function(length)
{if(length>=this.length)return this;return this.slice(this.length-length,this.length);}
String.prototype.IsDate=function()
{var myReg=/^(\d{4})(-|\/|.)(\d{1,2})\2(\d{1,2})$/;var result=this.match(myReg);if(result==null)return false;var test=new Date(result[1],result[3]-1,result[4]);if((test.getFullYear()==result[1])&&(test.getMonth()+1==result[3])&&(test.getDate()==result[4]))
{ActRs.Clear();ActRs[0]=result[1];ActRs[1]=result[3];ActRs[2]=result[4];return true;}
else return false;}
String.prototype.IsTime=function()
{var myReg=/^(\d{1,2})(:)(\d{1,2})\2(\d{1,2})$/;var result=this.match(myReg);if(result==null)return false;var test=new Date(2000,1,1,result[1],result[3],result[4]);if((test.getHours()==result[1])&&(test.getMinutes()==result[3])&&(test.getSeconds()==result[4]))
{ActRs[3]=result[1];ActRs[4]=result[3];ActRs[5]=result[4];return true;}
else
{return false;}}
String.prototype.IsDateTime=function()
{var myReg=this.split(" ");if(myReg.length!=2)return false;if(myReg[0].IsDate()&&myReg[1].IsTime())return true;return false;}
String.prototype.IsEmail=function()
{var myReg=/[\u4e00-\u9fa5]/;if(!myReg.test(this))
{myReg=/^[_a-zA-Z0-9][-._a-zA-Z0-9]*@[-._a-zA-Z0-9]+\.[-._a-zA-Z0-9]+(\.[-._a-zA-Z])*$/;if(myReg.test(this))return true;}
else
{myReg=/^[_a-zA-Z0-9\u4e00-\u9fa5][-_.a-zA-Z0-9\u4e00-\u9fa5]*@[-._a-zA-Z0-9\u4e00-\u9fa5]+(\.[-._0-9a-zA-Z\u4e00-\u9fa5]+)*$/;if(myReg.test(this))return true;}
return false;}
String.prototype.IsIdcard=function()
{var myReg=/^[1-9][0-9]{14}$|^[1-9][0-9]{16}[0-9a-zA-Z]$/;if(myReg.test(this))return true;return false;}
String.prototype.IsTelephone=function()
{myReg=/[(]/;if(!myReg.test(this))
{myReg=/^[1-9][0-9]{6,7}$|^[0-9]{3,4}-[1-9][0-9]{6,7}$|^[0-9]{3,4}-[1-9][0-9]{6,7}-[0-9]{2,8}$/;if(myReg.test(this))return true;}
return false;}
String.prototype.IsTelephone2=function()
{myReg=/^[0-9]{7,}$|^[0-9]{3,}-[0-9]{7,}$|^[0-9]{3,4}-[0-9]{3,}-[0-9]{4,}$/;if(myReg.test(this))return true;return false;}
String.prototype.IsNumber=function()
{var myReg=/^[0-9]+$/;if(!myReg.test(this))return false;ActRd=parseInt(this)
return true;}
String.prototype.IsFloat=function()
{var myReg=/^[0-9.]+$/;if(!myReg.test(this))return false;var pos=this.indexOf('.')
if(pos==-1)return false;if(pos!=this.lastIndexOf('.'))return false;if(pos==0||(pos+1)==this.length)return false;ActRd=parseFloat(this)
return true;}
String.prototype.IsPhone=function()
{if(!this.IsNumber())return false;if(this.length!=11||this<13000000000||this>13999999999)return false;return true;}
String.prototype.IsDomain=function()
{var myReg=/^[0-9a-zA-Z\-]+$/;if(myReg.test(this))return true;return false;}
String.prototype.IsAvail=function()
{var myReg=/^[0-9a-zA-Z]+$/;if(myReg.test(this))return true;return false;}
String.prototype.IsEn=function()
{var myReg=/^[a-zA-Z]+$/;if(myReg.test(this))return true;return false;}
String.prototype.ConvertHtml=function()
{var tmp=this.replace(/\&/g,"&amp;");tmp=tmp.replace(/\"/g,"&quot;");tmp=tmp.replace(/ /g,"&nbsp;");tmp=tmp.replace(/</g,"&lt;");tmp=tmp.replace(/>/g,"&gt;");return tmp;}
String.prototype.ConvertHtmlWithN=function()
{var tmp=this.replace(/\&/g,"&amp;");tmp=tmp.replace(/\"/g,"&quot;");tmp=tmp.replace(/ /g,"&nbsp;");tmp=tmp.replace(/</g,"&lt;");tmp=tmp.replace(/>/g,"&gt;");tmp=tmp.replace(/\r\n/g,"<br>");return tmp;}
String.prototype.ConvertHtmlWithP=function()
{var tmp=this.replace(/\&/g,"&amp;");tmp=tmp.replace(/\"/g,"&quot;");tmp=tmp.replace(/ /g,"&nbsp;");tmp=tmp.replace(/</g,"&lt;");tmp=tmp.replace(/>/g,"&gt;");tmp=tmp.replace(/\r\n/g,"</p><p>");return tmp;}
String.prototype.IsCn=function()
{var ch,temp,isCN,isTrue;isTrue=true;for(var i=0;i<this.length;i++)
{ch=this.substring(i,i+1);temp=escape(ch);isCN=(temp.length==6)?true:false;if(!isCN)
{isTrue=false;break;}}
return isTrue;}
String.prototype.isCom_sep_char=function()
{var myReg=/^[-()_+*]*$/;if(myReg.test(this))return true;return false;}
String.prototype.IsReg1=function()
{var s,i;for(i=0;i<this.length;i++)
{s=this.charAt(i);if(s.IsNumber()||s.IsEn()||s.IsCn())continue;return false;}
return i?true:false;}
String.prototype.IsReg12=function()
{var s,i;for(i=0;i<this.length;i++)
{s=this.charAt(i);if(s.IsNumber()||s.IsEn()||s.IsCn()||s.isCom_sep_char())continue;return false;}
return i?true:false;}
String.prototype.Trim=function()
{var tmp=this.replace(/(^\s*)|(\s*$)/g,"");return tmp.replace(/(^\2005-9-28*)|(\　*$)/g,"");}
String.prototype.Left=function(n)
{return strLeft(this,n);}
String.prototype.Right=function(n)
{return strRight(this,n);}
String.prototype.Len=function()
{var len=0;for(var i=0;i<this.length;i++)
{if(this.charCodeAt(i)>255)
{len+=2;}
else
{len++;}}
return len;}
String.prototype.Text=function()
{var elm=document.createElement("DIV");elm.innerHTML=this;return elm.innerText;}
String.prototype.Html=function()
{var elm=document.createElement("DIV");elm.innerText=this;return elm.innerHTML;}
String.prototype.Escape=function()
{return escape(this);}
String.prototype.UnEscape=function()
{return unescape(this);}
String.prototype.toInt=function()
{return parseInt(this);}
String.prototype.toFloat=function()
{return parseFloat(this);}
String.prototype.toHex=function()
{if(!this.IsNumber())return"";var x=parseInt(this);var out="";var remainder;while(x>0)
{remainder=x%16;if(remainder<10)
{out=remainder+out;}
else if(remainder==10)
{out="a"+out;}
else if(remainder==11)
{out="b"+out;}
else if(remainder==12)
{out="c"+out;}
else if(remainder==13)
{out="d"+out;}
else if(remainder==14)
{out="e"+out;}
else if(remainder==15)
{out="f"+out;}
x=Math.floor(x/16);}
return out;}
String.prototype.toDate=function()
{ActRs.Clear();this.IsDate();return new Date(ActRs[0],ActRs[1]-1,ActRs[2]);}
String.prototype.Hexto=function()
{var myReg=/^[0-9a-fA-F]+$/;if(!myReg.test(this))return"0";ActRd=parseInt(this,16);return""+ActRd;}
String.prototype.Octto=function()
{var myReg=/^[0-7]+$/;if(!myReg.test(this))return"0";ActRd=parseInt(this,8);return""+ActRd;}
String.prototype.Binto=function()
{var myReg=/^[0-1]+$/;if(!myReg.test(this))return"0";ActRd=parseInt(this,2);return""+ActRd;}
String.prototype.Repeat=function(n)
{if(typeof(n)!="number")return"";var out=this;for(var i=1;i<n;i++)out+=this;return out;}
String.prototype.Reverse=function()
{var out="";for(var i=this.length;i>=0;i--)
{out+=this.charAt(i);}
return out;}
String.prototype.Comp=function(str,m)
{return Compstr(this,str,m);}
String.prototype.addDate=function(mode,d)
{return addDate(mode,d,this);}
String.prototype.Count=function()
{var out=new Array(256);for(var i=0;i<this.length;i++)
{if(out[this.charCodeAt(i)]==undefined)
{out[this.charCodeAt(i)]=1;}
else
{out[this.charCodeAt(i)]++;}}
return out;}
function cutStr(str,strlen)
{var temp_i=0;var temp=0;var temp_str="";for(temp_i=0;temp_i<str.length;temp_i++)
{if(Math.abs(str.charCodeAt(temp_i))>255)
{temp+=2;}
else
{temp+=1;}
if(temp>strlen)
{temp_str=str.substr(0,temp_i)+"...";break;}
else
{temp_str=str;}}
return temp_str;}
String.prototype.myEncode=function()
{return this.replace(/\&/g,"%26").replace(/\?/g,"%3F").replace(/\#/g,"%23").replace(/\+/g,"%2B");}
function generateQueryString(aform)
{var qstr="";if(aform!=null)
{for(var i=0;i<aform.length;i++)
{if(aform[i].type=="text"||aform[i].type=="textarea")
{qstr+=aform[i].name+"="+aform[i].value.myEncode()+"&";}
else if(aform[i].type=="radio")
{if(aform[i].checked)
{qstr+=aform[i].name+"="+aform[i].value.myEncode()+"&";}}
else if(aform[i].type=="checkbox")
{if(aform[i].checked)
{qstr+=aform[i].name+"="+aform[i].value.myEncode()+"&";}}
else if(aform[i].type=="button")
{}
else
{qstr+=aform[i].name+"="+aform[i].value.myEncode()+"&";}}
if(qstr.length>0)
{qstr=qstr.substring(0,qstr.length-1);}}
return qstr;}
function setCookie(name,value,path,domain)
{var curCookie=name+"="+escape(value)+"; expires=Thu, 6 Jan 2033 08:05:36 UTC"+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"");document.cookie=curCookie;}
function getCookie(name)
{var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1)
{begin=dc.indexOf(prefix);if(begin!=0)return null;}
else
{begin+=2;}
var end=document.cookie.indexOf(";",begin);if(end==-1)
{end=dc.length;}
return unescape(dc.substring(begin+prefix.length,end));}
function deleteCookie(name,path,domain)
{if(getCookie(name))
{document.cookie=name+"="+((path)?"; path="+path:"")+((domain)?"; domain="+domain:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT";}};$(function(){jQuery.extend({createUploadIframe:function(id,uri)
{var frameId='jUploadFrame'+id;var iframeHtml='<iframe id="'+frameId+'" name="'+frameId+'" style="position:absolute; top:-9999px; left:-9999px"';if(window.ActiveXObject)
{if(typeof uri=='boolean'){iframeHtml+=' src="'+'javascript:false'+'"';}
else if(typeof uri=='string'){iframeHtml+=' src="'+uri+'"';}}
iframeHtml+=' />';jQuery(iframeHtml).appendTo(document.body);return jQuery('#'+frameId).get(0);},createUploadForm:function(id,fileElementId,data)
{var formId='jUploadForm'+id;var fileId='jUploadFile'+id;var form=jQuery('<form  action="" method="POST" name="'+formId+'" id="'+formId+'" enctype="multipart/form-data"></form>');if(data)
{for(var i in data)
{jQuery('<input type="hidden" name="'+i+'" value="'+data[i]+'" />').appendTo(form);}}
var oldElement=jQuery('#'+fileElementId);var newElement=jQuery(oldElement).clone();jQuery(oldElement).attr('id',fileId);jQuery(oldElement).before(newElement);jQuery(oldElement).appendTo(form);jQuery(form).css('position','absolute');jQuery(form).css('top','-1200px');jQuery(form).css('left','-1200px');jQuery(form).appendTo('body');return form;},ajaxFileUpload:function(s){s=jQuery.extend({},jQuery.ajaxSettings,s);var id=new Date().getTime();var form=jQuery.createUploadForm(id,s.fileElementId,(typeof(s.data)=='undefined'?false:s.data));var io=jQuery.createUploadIframe(id,s.secureuri);var frameId='jUploadFrame'+id;var formId='jUploadForm'+id;if(s.global&&!jQuery.active++)
{jQuery.event.trigger("ajaxStart");}
var requestDone=false;var xml={}
if(s.global)
jQuery.event.trigger("ajaxSend",[xml,s]);var uploadCallback=function(isTimeout)
{var io=document.getElementById(frameId);try
{if(io.contentWindow)
{xml.responseText=io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;xml.responseXML=io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;}else if(io.contentDocument)
{xml.responseText=io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;xml.responseXML=io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;}
if(xml.responseText.indexOf('<div id="myKfCapturteCustomEvent" style="display: none;"></div>')!=-1){xml.responseText=xml.responseText.replace('<div id="myKfCapturteCustomEvent" style="display: none;"></div>','');}}catch(e)
{jQuery.handleError(s,xml,null,e);}
if(xml||isTimeout=="timeout")
{requestDone=true;var status;try{status=isTimeout!="timeout"?"success":"error";if(status!="error")
{var data=jQuery.uploadHttpData(xml,s.dataType);if(s.success)
s.success(data,status);if(s.global)
jQuery.event.trigger("ajaxSuccess",[xml,s]);}else
jQuery.handleError(s,xml,status);}catch(e)
{status="error";jQuery.handleError(s,xml,status,e);}
if(s.global)
jQuery.event.trigger("ajaxComplete",[xml,s]);if(s.global&&!--jQuery.active)
jQuery.event.trigger("ajaxStop");if(s.complete)
s.complete(xml,status);jQuery(io).unbind()
setTimeout(function()
{try
{jQuery(io).remove();jQuery(form).remove();}catch(e)
{jQuery.handleError(s,xml,null,e);}},100)
xml=null}}
if(s.timeout>0)
{setTimeout(function(){if(!requestDone)uploadCallback("timeout");},s.timeout);}
try
{var form=jQuery('#'+formId);jQuery(form).attr('action',s.url);jQuery(form).attr('method','POST');jQuery(form).attr('target',frameId);if(form.encoding)
{jQuery(form).attr('encoding','multipart/form-data');}
else
{jQuery(form).attr('enctype','multipart/form-data');}
jQuery(form).submit();}catch(e)
{jQuery.handleError(s,xml,null,e);}
jQuery('#'+frameId).load(uploadCallback);return{abort:function(){}};},uploadHttpData:function(r,type){var data=!type;data=type=="xml"||data?r.responseXML:r.responseText;if(type=="script")
jQuery.globalEval(data);if(type=="json")
eval("data = "+data);if(type=="html")
jQuery("<div>").html(data).evalScripts();return data;},handleError:function(s,xhr,status,e){if(s.error){s.error.call(s.context||s,xhr,status,e);}
if(s.global){(s.context?jQuery(s.context):jQuery.event).trigger("ajaxError",[xhr,s,e]);}}})});(function(name,context,definition){'use strict'
if(typeof window.define==='function'&&window.define.amd){window.define(definition)}else if(typeof module!=='undefined'&&module.exports){module.exports=definition()}else if(context.exports){context.exports=definition()}else{context[name]=definition()}})('Fingerprint2',this,function(){'use strict'
var Fingerprint2=function(options){if(!(this instanceof Fingerprint2)){return new Fingerprint2(options)}
var defaultOptions={swfContainerId:'fingerprintjs2',swfPath:'flash/compiled/FontList.swf',detectScreenOrientation:true,sortPluginsFor:[/palemoon/i],userDefinedFonts:[],excludeDoNotTrack:true,excludePixelRatio:true}
this.options=this.extend(options,defaultOptions)
this.nativeForEach=Array.prototype.forEach
this.nativeMap=Array.prototype.map}
Fingerprint2.prototype={extend:function(source,target){if(source==null){return target}
for(var k in source){if(source[k]!=null&&target[k]!==source[k]){target[k]=source[k]}}
return target},get:function(done){var that=this
var keys={data:[],addPreprocessedComponent:function(pair){var componentValue=pair.value
if(typeof that.options.preprocessor==='function'){componentValue=that.options.preprocessor(pair.key,componentValue)}
keys.data.push({key:pair.key,value:componentValue})}}
keys=this.userAgentKey(keys)
keys=this.languageKey(keys)
keys=this.colorDepthKey(keys)
keys=this.deviceMemoryKey(keys)
keys=this.pixelRatioKey(keys)
keys=this.hardwareConcurrencyKey(keys)
keys=this.screenResolutionKey(keys)
keys=this.availableScreenResolutionKey(keys)
keys=this.timezoneOffsetKey(keys)
keys=this.sessionStorageKey(keys)
keys=this.localStorageKey(keys)
keys=this.indexedDbKey(keys)
keys=this.addBehaviorKey(keys)
keys=this.openDatabaseKey(keys)
keys=this.cpuClassKey(keys)
keys=this.platformKey(keys)
keys=this.doNotTrackKey(keys)
keys=this.pluginsKey(keys)
keys=this.canvasKey(keys)
keys=this.webglKey(keys)
keys=this.webglVendorAndRendererKey(keys)
keys=this.adBlockKey(keys)
keys=this.hasLiedLanguagesKey(keys)
keys=this.hasLiedResolutionKey(keys)
keys=this.hasLiedOsKey(keys)
keys=this.hasLiedBrowserKey(keys)
keys=this.touchSupportKey(keys)
keys=this.customEntropyFunction(keys)
this.fontsKey(keys,function(newKeys){var values=[]
that.each(newKeys.data,function(pair){var value=pair.value
if(value&&typeof value.join==='function'){value=value.join(';')}
values.push(value)})
var murmur=that.x64hash128(values.join('~~~'),31)
return done(murmur,newKeys.data)})},customEntropyFunction:function(keys){if(typeof this.options.customFunction==='function'){keys.addPreprocessedComponent({key:'custom',value:this.options.customFunction()})}
return keys},userAgentKey:function(keys){if(!this.options.excludeUserAgent){keys.addPreprocessedComponent({key:'user_agent',value:this.getUserAgent()})}
return keys},getUserAgent:function(){return navigator.userAgent},languageKey:function(keys){if(!this.options.excludeLanguage){keys.addPreprocessedComponent({key:'language',value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||''})}
return keys},colorDepthKey:function(keys){if(!this.options.excludeColorDepth){keys.addPreprocessedComponent({key:'color_depth',value:window.screen.colorDepth||-1})}
return keys},deviceMemoryKey:function(keys){if(!this.options.excludeDeviceMemory){keys.addPreprocessedComponent({key:'device_memory',value:this.getDeviceMemory()})}
return keys},getDeviceMemory:function(){return navigator.deviceMemory||-1},pixelRatioKey:function(keys){if(!this.options.excludePixelRatio){keys.addPreprocessedComponent({key:'pixel_ratio',value:this.getPixelRatio()})}
return keys},getPixelRatio:function(){return window.devicePixelRatio||''},screenResolutionKey:function(keys){if(!this.options.excludeScreenResolution){return this.getScreenResolution(keys)}
return keys},getScreenResolution:function(keys){var resolution
if(this.options.detectScreenOrientation){resolution=(window.screen.height>window.screen.width)?[window.screen.height,window.screen.width]:[window.screen.width,window.screen.height]}else{resolution=[window.screen.width,window.screen.height]}
keys.addPreprocessedComponent({key:'resolution',value:resolution})
return keys},availableScreenResolutionKey:function(keys){if(!this.options.excludeAvailableScreenResolution){return this.getAvailableScreenResolution(keys)}
return keys},getAvailableScreenResolution:function(keys){var available
if(window.screen.availWidth&&window.screen.availHeight){if(this.options.detectScreenOrientation){available=(window.screen.availHeight>window.screen.availWidth)?[window.screen.availHeight,window.screen.availWidth]:[window.screen.availWidth,window.screen.availHeight]}else{available=[window.screen.availHeight,window.screen.availWidth]}}
if(typeof available!=='undefined'){keys.addPreprocessedComponent({key:'available_resolution',value:available})}
return keys},timezoneOffsetKey:function(keys){if(!this.options.excludeTimezoneOffset){keys.addPreprocessedComponent({key:'timezone_offset',value:new Date().getTimezoneOffset()})}
return keys},sessionStorageKey:function(keys){if(!this.options.excludeSessionStorage&&this.hasSessionStorage()){keys.addPreprocessedComponent({key:'session_storage',value:1})}
return keys},localStorageKey:function(keys){if(!this.options.excludeSessionStorage&&this.hasLocalStorage()){keys.addPreprocessedComponent({key:'local_storage',value:1})}
return keys},indexedDbKey:function(keys){if(!this.options.excludeIndexedDB&&this.hasIndexedDB()){keys.addPreprocessedComponent({key:'indexed_db',value:1})}
return keys},addBehaviorKey:function(keys){if(!this.options.excludeAddBehavior&&document.body&&document.body.addBehavior){keys.addPreprocessedComponent({key:'add_behavior',value:1})}
return keys},openDatabaseKey:function(keys){if(!this.options.excludeOpenDatabase&&window.openDatabase){keys.addPreprocessedComponent({key:'open_database',value:1})}
return keys},cpuClassKey:function(keys){if(!this.options.excludeCpuClass){keys.addPreprocessedComponent({key:'cpu_class',value:this.getNavigatorCpuClass()})}
return keys},platformKey:function(keys){if(!this.options.excludePlatform){keys.addPreprocessedComponent({key:'navigator_platform',value:this.getNavigatorPlatform()})}
return keys},doNotTrackKey:function(keys){if(!this.options.excludeDoNotTrack){keys.addPreprocessedComponent({key:'do_not_track',value:this.getDoNotTrack()})}
return keys},canvasKey:function(keys){if(!this.options.excludeCanvas&&this.isCanvasSupported()){keys.addPreprocessedComponent({key:'canvas',value:this.getCanvasFp()})}
return keys},webglKey:function(keys){if(!this.options.excludeWebGL&&this.isWebGlSupported()){keys.addPreprocessedComponent({key:'webgl',value:this.getWebglFp()})}
return keys},webglVendorAndRendererKey:function(keys){if(!this.options.excludeWebGLVendorAndRenderer&&this.isWebGlSupported()){keys.addPreprocessedComponent({key:'webgl_vendor',value:this.getWebglVendorAndRenderer()})}
return keys},adBlockKey:function(keys){if(!this.options.excludeAdBlock){keys.addPreprocessedComponent({key:'adblock',value:this.getAdBlock()})}
return keys},hasLiedLanguagesKey:function(keys){if(!this.options.excludeHasLiedLanguages){keys.addPreprocessedComponent({key:'has_lied_languages',value:this.getHasLiedLanguages()})}
return keys},hasLiedResolutionKey:function(keys){if(!this.options.excludeHasLiedResolution){keys.addPreprocessedComponent({key:'has_lied_resolution',value:this.getHasLiedResolution()})}
return keys},hasLiedOsKey:function(keys){if(!this.options.excludeHasLiedOs){keys.addPreprocessedComponent({key:'has_lied_os',value:this.getHasLiedOs()})}
return keys},hasLiedBrowserKey:function(keys){if(!this.options.excludeHasLiedBrowser){keys.addPreprocessedComponent({key:'has_lied_browser',value:this.getHasLiedBrowser()})}
return keys},fontsKey:function(keys,done){if(this.options.excludeJsFonts){return this.flashFontsKey(keys,done)}
return this.jsFontsKey(keys,done)},flashFontsKey:function(keys,done){if(this.options.excludeFlashFonts){return done(keys)}
if(!this.hasSwfObjectLoaded()){return done(keys)}
if(!this.hasMinFlashInstalled()){return done(keys)}
if(typeof this.options.swfPath==='undefined'){return done(keys)}
this.loadSwfAndDetectFonts(function(fonts){keys.addPreprocessedComponent({key:'swf_fonts',value:fonts.join(';')})
done(keys)})},jsFontsKey:function(keys,done){var that=this
return setTimeout(function(){var baseFonts=['monospace','sans-serif','serif']
var fontList=['Andale Mono','Arial','Arial Black','Arial Hebrew','Arial MT','Arial Narrow','Arial Rounded MT Bold','Arial Unicode MS','Bitstream Vera Sans Mono','Book Antiqua','Bookman Old Style','Calibri','Cambria','Cambria Math','Century','Century Gothic','Century Schoolbook','Comic Sans','Comic Sans MS','Consolas','Courier','Courier New','Geneva','Georgia','Helvetica','Helvetica Neue','Impact','Lucida Bright','Lucida Calligraphy','Lucida Console','Lucida Fax','LUCIDA GRANDE','Lucida Handwriting','Lucida Sans','Lucida Sans Typewriter','Lucida Sans Unicode','Microsoft Sans Serif','Monaco','Monotype Corsiva','MS Gothic','MS Outlook','MS PGothic','MS Reference Sans Serif','MS Sans Serif','MS Serif','MYRIAD','MYRIAD PRO','Palatino','Palatino Linotype','Segoe Print','Segoe Script','Segoe UI','Segoe UI Light','Segoe UI Semibold','Segoe UI Symbol','Tahoma','Times','Times New Roman','Times New Roman PS','Trebuchet MS','Verdana','Wingdings','Wingdings 2','Wingdings 3']
var extendedFontList=['Abadi MT Condensed Light','Academy Engraved LET','ADOBE CASLON PRO','Adobe Garamond','ADOBE GARAMOND PRO','Agency FB','Aharoni','Albertus Extra Bold','Albertus Medium','Algerian','Amazone BT','American Typewriter','American Typewriter Condensed','AmerType Md BT','Andalus','Angsana New','AngsanaUPC','Antique Olive','Aparajita','Apple Chancery','Apple Color Emoji','Apple SD Gothic Neo','Arabic Typesetting','ARCHER','ARNO PRO','Arrus BT','Aurora Cn BT','AvantGarde Bk BT','AvantGarde Md BT','AVENIR','Ayuthaya','Bandy','Bangla Sangam MN','Bank Gothic','BankGothic Md BT','Baskerville','Baskerville Old Face','Batang','BatangChe','Bauer Bodoni','Bauhaus 93','Bazooka','Bell MT','Bembo','Benguiat Bk BT','Berlin Sans FB','Berlin Sans FB Demi','Bernard MT Condensed','BernhardFashion BT','BernhardMod BT','Big Caslon','BinnerD','Blackadder ITC','BlairMdITC TT','Bodoni 72','Bodoni 72 Oldstyle','Bodoni 72 Smallcaps','Bodoni MT','Bodoni MT Black','Bodoni MT Condensed','Bodoni MT Poster Compressed','Bookshelf Symbol 7','Boulder','Bradley Hand','Bradley Hand ITC','Bremen Bd BT','Britannic Bold','Broadway','Browallia New','BrowalliaUPC','Brush Script MT','Californian FB','Calisto MT','Calligrapher','Candara','CaslonOpnface BT','Castellar','Centaur','Cezanne','CG Omega','CG Times','Chalkboard','Chalkboard SE','Chalkduster','Charlesworth','Charter Bd BT','Charter BT','Chaucer','ChelthmITC Bk BT','Chiller','Clarendon','Clarendon Condensed','CloisterBlack BT','Cochin','Colonna MT','Constantia','Cooper Black','Copperplate','Copperplate Gothic','Copperplate Gothic Bold','Copperplate Gothic Light','CopperplGoth Bd BT','Corbel','Cordia New','CordiaUPC','Cornerstone','Coronet','Cuckoo','Curlz MT','DaunPenh','Dauphin','David','DB LCD Temp','DELICIOUS','Denmark','DFKai-SB','Didot','DilleniaUPC','DIN','DokChampa','Dotum','DotumChe','Ebrima','Edwardian Script ITC','Elephant','English 111 Vivace BT','Engravers MT','EngraversGothic BT','Eras Bold ITC','Eras Demi ITC','Eras Light ITC','Eras Medium ITC','EucrosiaUPC','Euphemia','Euphemia UCAS','EUROSTILE','Exotc350 Bd BT','FangSong','Felix Titling','Fixedsys','FONTIN','Footlight MT Light','Forte','FrankRuehl','Fransiscan','Freefrm721 Blk BT','FreesiaUPC','Freestyle Script','French Script MT','FrnkGothITC Bk BT','Fruitger','FRUTIGER','Futura','Futura Bk BT','Futura Lt BT','Futura Md BT','Futura ZBlk BT','FuturaBlack BT','Gabriola','Galliard BT','Gautami','Geeza Pro','Geometr231 BT','Geometr231 Hv BT','Geometr231 Lt BT','GeoSlab 703 Lt BT','GeoSlab 703 XBd BT','Gigi','Gill Sans','Gill Sans MT','Gill Sans MT Condensed','Gill Sans MT Ext Condensed Bold','Gill Sans Ultra Bold','Gill Sans Ultra Bold Condensed','Gisha','Gloucester MT Extra Condensed','GOTHAM','GOTHAM BOLD','Goudy Old Style','Goudy Stout','GoudyHandtooled BT','GoudyOLSt BT','Gujarati Sangam MN','Gulim','GulimChe','Gungsuh','GungsuhChe','Gurmukhi MN','Haettenschweiler','Harlow Solid Italic','Harrington','Heather','Heiti SC','Heiti TC','HELV','Herald','High Tower Text','Hiragino Kaku Gothic ProN','Hiragino Mincho ProN','Hoefler Text','Humanst 521 Cn BT','Humanst521 BT','Humanst521 Lt BT','Imprint MT Shadow','Incised901 Bd BT','Incised901 BT','Incised901 Lt BT','INCONSOLATA','Informal Roman','Informal011 BT','INTERSTATE','IrisUPC','Iskoola Pota','JasmineUPC','Jazz LET','Jenson','Jester','Jokerman','Juice ITC','Kabel Bk BT','Kabel Ult BT','Kailasa','KaiTi','Kalinga','Kannada Sangam MN','Kartika','Kaufmann Bd BT','Kaufmann BT','Khmer UI','KodchiangUPC','Kokila','Korinna BT','Kristen ITC','Krungthep','Kunstler Script','Lao UI','Latha','Leelawadee','Letter Gothic','Levenim MT','LilyUPC','Lithograph','Lithograph Light','Long Island','Lydian BT','Magneto','Maiandra GD','Malayalam Sangam MN','Malgun Gothic','Mangal','Marigold','Marion','Marker Felt','Market','Marlett','Matisse ITC','Matura MT Script Capitals','Meiryo','Meiryo UI','Microsoft Himalaya','Microsoft JhengHei','Microsoft New Tai Lue','Microsoft PhagsPa','Microsoft Tai Le','Microsoft Uighur','Microsoft YaHei','Microsoft Yi Baiti','MingLiU','MingLiU_HKSCS','MingLiU_HKSCS-ExtB','MingLiU-ExtB','Minion','Minion Pro','Miriam','Miriam Fixed','Mistral','Modern','Modern No. 20','Mona Lisa Solid ITC TT','Mongolian Baiti','MONO','MoolBoran','Mrs Eaves','MS LineDraw','MS Mincho','MS PMincho','MS Reference Specialty','MS UI Gothic','MT Extra','MUSEO','MV Boli','Nadeem','Narkisim','NEVIS','News Gothic','News GothicMT','NewsGoth BT','Niagara Engraved','Niagara Solid','Noteworthy','NSimSun','Nyala','OCR A Extended','Old Century','Old English Text MT','Onyx','Onyx BT','OPTIMA','Oriya Sangam MN','OSAKA','OzHandicraft BT','Palace Script MT','Papyrus','Parchment','Party LET','Pegasus','Perpetua','Perpetua Titling MT','PetitaBold','Pickwick','Plantagenet Cherokee','Playbill','PMingLiU','PMingLiU-ExtB','Poor Richard','Poster','PosterBodoni BT','PRINCETOWN LET','Pristina','PTBarnum BT','Pythagoras','Raavi','Rage Italic','Ravie','Ribbon131 Bd BT','Rockwell','Rockwell Condensed','Rockwell Extra Bold','Rod','Roman','Sakkal Majalla','Santa Fe LET','Savoye LET','Sceptre','Script','Script MT Bold','SCRIPTINA','Serifa','Serifa BT','Serifa Th BT','ShelleyVolante BT','Sherwood','Shonar Bangla','Showcard Gothic','Shruti','Signboard','SILKSCREEN','SimHei','Simplified Arabic','Simplified Arabic Fixed','SimSun','SimSun-ExtB','Sinhala Sangam MN','Sketch Rockwell','Skia','Small Fonts','Snap ITC','Snell Roundhand','Socket','Souvenir Lt BT','Staccato222 BT','Steamer','Stencil','Storybook','Styllo','Subway','Swis721 BlkEx BT','Swiss911 XCm BT','Sylfaen','Synchro LET','System','Tamil Sangam MN','Technical','Teletype','Telugu Sangam MN','Tempus Sans ITC','Terminal','Thonburi','Traditional Arabic','Trajan','TRAJAN PRO','Tristan','Tubular','Tunga','Tw Cen MT','Tw Cen MT Condensed','Tw Cen MT Condensed Extra Bold','TypoUpright BT','Unicorn','Univers','Univers CE 55 Medium','Univers Condensed','Utsaah','Vagabond','Vani','Vijaya','Viner Hand ITC','VisualUI','Vivaldi','Vladimir Script','Vrinda','Westminster','WHITNEY','Wide Latin','ZapfEllipt BT','ZapfHumnst BT','ZapfHumnst Dm BT','Zapfino','Zurich BlkEx BT','Zurich Ex BT','ZWAdobeF']
if(that.options.extendedJsFonts){fontList=fontList.concat(extendedFontList)}
fontList=fontList.concat(that.options.userDefinedFonts)
fontList=fontList.filter(function(font,position){return fontList.indexOf(font)===position})
var testString='mmmmmmmmmmlli'
var testSize='72px'
var h=document.getElementsByTagName('body')[0]
var baseFontsDiv=document.createElement('div')
var fontsDiv=document.createElement('div')
var defaultWidth={}
var defaultHeight={}
var createSpan=function(){var s=document.createElement('span')
s.style.position='absolute'
s.style.left='-9999px'
s.style.fontSize=testSize
s.style.fontStyle='normal'
s.style.fontWeight='normal'
s.style.letterSpacing='normal'
s.style.lineBreak='auto'
s.style.lineHeight='normal'
s.style.textTransform='none'
s.style.textAlign='left'
s.style.textDecoration='none'
s.style.textShadow='none'
s.style.whiteSpace='normal'
s.style.wordBreak='normal'
s.style.wordSpacing='normal'
s.innerHTML=testString
return s}
var createSpanWithFonts=function(fontToDetect,baseFont){var s=createSpan()
s.style.fontFamily="'"+fontToDetect+"',"+baseFont
return s}
var initializeBaseFontsSpans=function(){var spans=[]
for(var index=0,length=baseFonts.length;index<length;index++){var s=createSpan()
s.style.fontFamily=baseFonts[index]
baseFontsDiv.appendChild(s)
spans.push(s)}
return spans}
var initializeFontsSpans=function(){var spans={}
for(var i=0,l=fontList.length;i<l;i++){var fontSpans=[]
for(var j=0,numDefaultFonts=baseFonts.length;j<numDefaultFonts;j++){var s=createSpanWithFonts(fontList[i],baseFonts[j])
fontsDiv.appendChild(s)
fontSpans.push(s)}
spans[fontList[i]]=fontSpans}
return spans}
var isFontAvailable=function(fontSpans){var detected=false
for(var i=0;i<baseFonts.length;i++){detected=(fontSpans[i].offsetWidth!==defaultWidth[baseFonts[i]]||fontSpans[i].offsetHeight!==defaultHeight[baseFonts[i]])
if(detected){return detected}}
return detected}
var baseFontsSpans=initializeBaseFontsSpans()
h.appendChild(baseFontsDiv)
for(var index=0,length=baseFonts.length;index<length;index++){defaultWidth[baseFonts[index]]=baseFontsSpans[index].offsetWidth
defaultHeight[baseFonts[index]]=baseFontsSpans[index].offsetHeight}
var fontsSpans=initializeFontsSpans()
h.appendChild(fontsDiv)
var available=[]
for(var i=0,l=fontList.length;i<l;i++){if(isFontAvailable(fontsSpans[fontList[i]])){available.push(fontList[i])}}
h.removeChild(fontsDiv)
h.removeChild(baseFontsDiv)
keys.addPreprocessedComponent({key:'js_fonts',value:available})
done(keys)},1)},pluginsKey:function(keys){if(!this.options.excludePlugins){if(this.isIE()){if(!this.options.excludeIEPlugins){keys.addPreprocessedComponent({key:'ie_plugins',value:this.getIEPlugins()})}}else{keys.addPreprocessedComponent({key:'regular_plugins',value:this.getRegularPlugins()})}}
return keys},getRegularPlugins:function(){var plugins=[]
if(navigator.plugins){for(var i=0,l=navigator.plugins.length;i<l;i++){if(navigator.plugins[i]){plugins.push(navigator.plugins[i])}}}
if(this.pluginsShouldBeSorted()){plugins=plugins.sort(function(a,b){if(a.name>b.name){return 1}
if(a.name<b.name){return-1}
return 0})}
return this.map(plugins,function(p){var mimeTypes=this.map(p,function(mt){return[mt.type,mt.suffixes].join('~')}).join(',')
return[p.name,p.description,mimeTypes].join('::')},this)},getIEPlugins:function(){var result=[]
if((Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,'ActiveXObject'))||('ActiveXObject'in window)){var names=['AcroPDF.PDF','Adodb.Stream','AgControl.AgControl','DevalVRXCtrl.DevalVRXCtrl.1','MacromediaFlashPaper.MacromediaFlashPaper','Msxml2.DOMDocument','Msxml2.XMLHTTP','PDF.PdfCtrl','QuickTime.QuickTime','QuickTimeCheckObject.QuickTimeCheck.1','RealPlayer','RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)','RealVideo.RealVideo(tm) ActiveX Control (32-bit)','Scripting.Dictionary','SWCtl.SWCtl','Shell.UIHelper','ShockwaveFlash.ShockwaveFlash','Skype.Detection','TDCCtl.TDCCtl','WMPlayer.OCX','rmocx.RealPlayer G2 Control','rmocx.RealPlayer G2 Control.1']
result=this.map(names,function(name){try{new window.ActiveXObject(name)
return name}catch(e){return null}})}
if(navigator.plugins){result=result.concat(this.getRegularPlugins())}
return result},pluginsShouldBeSorted:function(){var should=false
for(var i=0,l=this.options.sortPluginsFor.length;i<l;i++){var re=this.options.sortPluginsFor[i]
if(navigator.userAgent.match(re)){should=true
break}}
return should},touchSupportKey:function(keys){if(!this.options.excludeTouchSupport){keys.addPreprocessedComponent({key:'touch_support',value:this.getTouchSupport()})}
return keys},hardwareConcurrencyKey:function(keys){if(!this.options.excludeHardwareConcurrency){keys.addPreprocessedComponent({key:'hardware_concurrency',value:this.getHardwareConcurrency()})}
return keys},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return true}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return true}},hasIndexedDB:function(){try{return!!window.indexedDB}catch(e){return true}},getHardwareConcurrency:function(){if(navigator.hardwareConcurrency){return navigator.hardwareConcurrency}
return'unknown'},getNavigatorCpuClass:function(){if(navigator.cpuClass){return navigator.cpuClass}else{return'unknown'}},getNavigatorPlatform:function(){if(navigator.platform){return navigator.platform}else{return'unknown'}},getDoNotTrack:function(){if(navigator.doNotTrack){return navigator.doNotTrack}else if(navigator.msDoNotTrack){return navigator.msDoNotTrack}else if(window.doNotTrack){return window.doNotTrack}else{return'unknown'}},getTouchSupport:function(){var maxTouchPoints=0
var touchEvent=false
if(typeof navigator.maxTouchPoints!=='undefined'){maxTouchPoints=navigator.maxTouchPoints}else if(typeof navigator.msMaxTouchPoints!=='undefined'){maxTouchPoints=navigator.msMaxTouchPoints}
try{document.createEvent('TouchEvent')
touchEvent=true}catch(_){}
var touchStart='ontouchstart'in window
return[maxTouchPoints,touchEvent,touchStart]},getCanvasFp:function(){var result=[]
var canvas=document.createElement('canvas')
canvas.width=2000
canvas.height=200
canvas.style.display='inline'
var ctx=canvas.getContext('2d')
ctx.rect(0,0,10,10)
ctx.rect(2,2,6,6)
result.push('canvas winding:'+((ctx.isPointInPath(5,5,'evenodd')===false)?'yes':'no'))
ctx.textBaseline='alphabetic'
ctx.fillStyle='#f60'
ctx.fillRect(125,1,62,20)
ctx.fillStyle='#069'
if(this.options.dontUseFakeFontInCanvas){ctx.font='11pt Arial'}else{ctx.font='11pt no-real-font-123'}
ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03',2,15)
ctx.fillStyle='rgba(102, 204, 0, 0.2)'
ctx.font='18pt Arial'
ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03',4,45)
ctx.globalCompositeOperation='multiply'
ctx.fillStyle='rgb(255,0,255)'
ctx.beginPath()
ctx.arc(50,50,50,0,Math.PI*2,true)
ctx.closePath()
ctx.fill()
ctx.fillStyle='rgb(0,255,255)'
ctx.beginPath()
ctx.arc(100,50,50,0,Math.PI*2,true)
ctx.closePath()
ctx.fill()
ctx.fillStyle='rgb(255,255,0)'
ctx.beginPath()
ctx.arc(75,100,50,0,Math.PI*2,true)
ctx.closePath()
ctx.fill()
ctx.fillStyle='rgb(255,0,255)'
ctx.arc(75,75,75,0,Math.PI*2,true)
ctx.arc(75,75,25,0,Math.PI*2,true)
ctx.fill('evenodd')
if(canvas.toDataURL){result.push('canvas fp:'+canvas.toDataURL())}
return result.join('~')},getWebglFp:function(){var gl
var fa2s=function(fa){gl.clearColor(0.0,0.0,0.0,1.0)
gl.enable(gl.DEPTH_TEST)
gl.depthFunc(gl.LEQUAL)
gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)
return'['+fa[0]+', '+fa[1]+']'}
var maxAnisotropy=function(gl){var ext=gl.getExtension('EXT_texture_filter_anisotropic')||gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')||gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
if(ext){var anisotropy=gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
if(anisotropy===0){anisotropy=2}
return anisotropy}else{return null}}
gl=this.getWebglCanvas()
if(!gl){return null}
var result=[]
var vShaderTemplate='attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
var fShaderTemplate='precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
var vertexPosBuffer=gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER,vertexPosBuffer)
var vertices=new Float32Array([-0.2,-0.9,0,0.4,-0.26,0,0,0.732134444,0])
gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW)
vertexPosBuffer.itemSize=3
vertexPosBuffer.numItems=3
var program=gl.createProgram()
var vshader=gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vshader,vShaderTemplate)
gl.compileShader(vshader)
var fshader=gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fshader,fShaderTemplate)
gl.compileShader(fshader)
gl.attachShader(program,vshader)
gl.attachShader(program,fshader)
gl.linkProgram(program)
gl.useProgram(program)
program.vertexPosAttrib=gl.getAttribLocation(program,'attrVertex')
program.offsetUniform=gl.getUniformLocation(program,'uniformOffset')
gl.enableVertexAttribArray(program.vertexPosArray)
gl.vertexAttribPointer(program.vertexPosAttrib,vertexPosBuffer.itemSize,gl.FLOAT,!1,0,0)
gl.uniform2f(program.offsetUniform,1,1)
gl.drawArrays(gl.TRIANGLE_STRIP,0,vertexPosBuffer.numItems)
try{result.push(gl.canvas.toDataURL())}catch(e){}
result.push('extensions:'+(gl.getSupportedExtensions()||[]).join(';'))
result.push('webgl aliased line width range:'+fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
result.push('webgl aliased point size range:'+fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
result.push('webgl alpha bits:'+gl.getParameter(gl.ALPHA_BITS))
result.push('webgl antialiasing:'+(gl.getContextAttributes().antialias?'yes':'no'))
result.push('webgl blue bits:'+gl.getParameter(gl.BLUE_BITS))
result.push('webgl depth bits:'+gl.getParameter(gl.DEPTH_BITS))
result.push('webgl green bits:'+gl.getParameter(gl.GREEN_BITS))
result.push('webgl max anisotropy:'+maxAnisotropy(gl))
result.push('webgl max combined texture image units:'+gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
result.push('webgl max cube map texture size:'+gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
result.push('webgl max fragment uniform vectors:'+gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
result.push('webgl max render buffer size:'+gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
result.push('webgl max texture image units:'+gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
result.push('webgl max texture size:'+gl.getParameter(gl.MAX_TEXTURE_SIZE))
result.push('webgl max varying vectors:'+gl.getParameter(gl.MAX_VARYING_VECTORS))
result.push('webgl max vertex attribs:'+gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
result.push('webgl max vertex texture image units:'+gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
result.push('webgl max vertex uniform vectors:'+gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
result.push('webgl max viewport dims:'+fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
result.push('webgl red bits:'+gl.getParameter(gl.RED_BITS))
result.push('webgl renderer:'+gl.getParameter(gl.RENDERER))
result.push('webgl shading language version:'+gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
result.push('webgl stencil bits:'+gl.getParameter(gl.STENCIL_BITS))
result.push('webgl vendor:'+gl.getParameter(gl.VENDOR))
result.push('webgl version:'+gl.getParameter(gl.VERSION))
try{var extensionDebugRendererInfo=gl.getExtension('WEBGL_debug_renderer_info')
if(extensionDebugRendererInfo){result.push('webgl unmasked vendor:'+gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
result.push('webgl unmasked renderer:'+gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))}}catch(e){}
if(!gl.getShaderPrecisionFormat){return result.join('~')}
result.push('webgl vertex shader high float precision:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_FLOAT).precision)
result.push('webgl vertex shader high float precision rangeMin:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_FLOAT).rangeMin)
result.push('webgl vertex shader high float precision rangeMax:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_FLOAT).rangeMax)
result.push('webgl vertex shader medium float precision:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_FLOAT).precision)
result.push('webgl vertex shader medium float precision rangeMin:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_FLOAT).rangeMin)
result.push('webgl vertex shader medium float precision rangeMax:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_FLOAT).rangeMax)
result.push('webgl vertex shader low float precision:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_FLOAT).precision)
result.push('webgl vertex shader low float precision rangeMin:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_FLOAT).rangeMin)
result.push('webgl vertex shader low float precision rangeMax:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_FLOAT).rangeMax)
result.push('webgl fragment shader high float precision:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).precision)
result.push('webgl fragment shader high float precision rangeMin:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).rangeMin)
result.push('webgl fragment shader high float precision rangeMax:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).rangeMax)
result.push('webgl fragment shader medium float precision:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT).precision)
result.push('webgl fragment shader medium float precision rangeMin:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT).rangeMin)
result.push('webgl fragment shader medium float precision rangeMax:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT).rangeMax)
result.push('webgl fragment shader low float precision:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_FLOAT).precision)
result.push('webgl fragment shader low float precision rangeMin:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_FLOAT).rangeMin)
result.push('webgl fragment shader low float precision rangeMax:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_FLOAT).rangeMax)
result.push('webgl vertex shader high int precision:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_INT).precision)
result.push('webgl vertex shader high int precision rangeMin:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_INT).rangeMin)
result.push('webgl vertex shader high int precision rangeMax:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.HIGH_INT).rangeMax)
result.push('webgl vertex shader medium int precision:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_INT).precision)
result.push('webgl vertex shader medium int precision rangeMin:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_INT).rangeMin)
result.push('webgl vertex shader medium int precision rangeMax:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.MEDIUM_INT).rangeMax)
result.push('webgl vertex shader low int precision:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_INT).precision)
result.push('webgl vertex shader low int precision rangeMin:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_INT).rangeMin)
result.push('webgl vertex shader low int precision rangeMax:'+gl.getShaderPrecisionFormat(gl.VERTEX_SHADER,gl.LOW_INT).rangeMax)
result.push('webgl fragment shader high int precision:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_INT).precision)
result.push('webgl fragment shader high int precision rangeMin:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_INT).rangeMin)
result.push('webgl fragment shader high int precision rangeMax:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_INT).rangeMax)
result.push('webgl fragment shader medium int precision:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_INT).precision)
result.push('webgl fragment shader medium int precision rangeMin:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_INT).rangeMin)
result.push('webgl fragment shader medium int precision rangeMax:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_INT).rangeMax)
result.push('webgl fragment shader low int precision:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_INT).precision)
result.push('webgl fragment shader low int precision rangeMin:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_INT).rangeMin)
result.push('webgl fragment shader low int precision rangeMax:'+gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_INT).rangeMax)
return result.join('~')},getWebglVendorAndRenderer:function(){try{var glContext=this.getWebglCanvas()
var extensionDebugRendererInfo=glContext.getExtension('WEBGL_debug_renderer_info')
return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL)+'~'+glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)}catch(e){return null}},getAdBlock:function(){var ads=document.createElement('div')
ads.innerHTML='&nbsp;'
ads.className='adsbox'
var result=false
try{document.body.appendChild(ads)
result=document.getElementsByClassName('adsbox')[0].offsetHeight===0
document.body.removeChild(ads)}catch(e){result=false}
return result},getHasLiedLanguages:function(){if(typeof navigator.languages!=='undefined'){try{var firstLanguages=navigator.languages[0].substr(0,2)
if(firstLanguages!==navigator.language.substr(0,2)){return true}}catch(err){return true}}
return false},getHasLiedResolution:function(){if(window.screen.width<window.screen.availWidth){return true}
if(window.screen.height<window.screen.availHeight){return true}
return false},getHasLiedOs:function(){var userAgent=navigator.userAgent.toLowerCase()
var oscpu=navigator.oscpu
var platform=navigator.platform.toLowerCase()
var os
if(userAgent.indexOf('windows phone')>=0){os='Windows Phone'}else if(userAgent.indexOf('win')>=0){os='Windows'}else if(userAgent.indexOf('android')>=0){os='Android'}else if(userAgent.indexOf('linux')>=0){os='Linux'}else if(userAgent.indexOf('iphone')>=0||userAgent.indexOf('ipad')>=0){os='iOS'}else if(userAgent.indexOf('mac')>=0){os='Mac'}else{os='Other'}
var mobileDevice
if(('ontouchstart'in window)||(navigator.maxTouchPoints>0)||(navigator.msMaxTouchPoints>0)){mobileDevice=true}else{mobileDevice=false}
if(mobileDevice&&os!=='Windows Phone'&&os!=='Android'&&os!=='iOS'&&os!=='Other'){return true}
if(typeof oscpu!=='undefined'){oscpu=oscpu.toLowerCase()
if(oscpu.indexOf('win')>=0&&os!=='Windows'&&os!=='Windows Phone'){return true}else if(oscpu.indexOf('linux')>=0&&os!=='Linux'&&os!=='Android'){return true}else if(oscpu.indexOf('mac')>=0&&os!=='Mac'&&os!=='iOS'){return true}else if((oscpu.indexOf('win')===-1&&oscpu.indexOf('linux')===-1&&oscpu.indexOf('mac')===-1)!==(os==='Other')){return true}}
if(platform.indexOf('win')>=0&&os!=='Windows'&&os!=='Windows Phone'){return true}else if((platform.indexOf('linux')>=0||platform.indexOf('android')>=0||platform.indexOf('pike')>=0)&&os!=='Linux'&&os!=='Android'){return true}else if((platform.indexOf('mac')>=0||platform.indexOf('ipad')>=0||platform.indexOf('ipod')>=0||platform.indexOf('iphone')>=0)&&os!=='Mac'&&os!=='iOS'){return true}else if((platform.indexOf('win')===-1&&platform.indexOf('linux')===-1&&platform.indexOf('mac')===-1)!==(os==='Other')){return true}
if(typeof navigator.plugins==='undefined'&&os!=='Windows'&&os!=='Windows Phone'){return true}
return false},getHasLiedBrowser:function(){var userAgent=navigator.userAgent.toLowerCase()
var productSub=navigator.productSub
var browser
if(userAgent.indexOf('firefox')>=0){browser='Firefox'}else if(userAgent.indexOf('opera')>=0||userAgent.indexOf('opr')>=0){browser='Opera'}else if(userAgent.indexOf('chrome')>=0){browser='Chrome'}else if(userAgent.indexOf('safari')>=0){browser='Safari'}else if(userAgent.indexOf('trident')>=0){browser='Internet Explorer'}else{browser='Other'}
if((browser==='Chrome'||browser==='Safari'||browser==='Opera')&&productSub!=='20030107'){return true}
var tempRes=eval.toString().length
if(tempRes===37&&browser!=='Safari'&&browser!=='Firefox'&&browser!=='Other'){return true}else if(tempRes===39&&browser!=='Internet Explorer'&&browser!=='Other'){return true}else if(tempRes===33&&browser!=='Chrome'&&browser!=='Opera'&&browser!=='Other'){return true}
var errFirefox
try{throw'a'}catch(err){try{err.toSource()
errFirefox=true}catch(errOfErr){errFirefox=false}}
if(errFirefox&&browser!=='Firefox'&&browser!=='Other'){return true}
return false},isCanvasSupported:function(){var elem=document.createElement('canvas')
return!!(elem.getContext&&elem.getContext('2d'))},isWebGlSupported:function(){if(!this.isCanvasSupported()){return false}
var glContext=this.getWebglCanvas()
return!!window.WebGLRenderingContext&&!!glContext},isIE:function(){if(navigator.appName==='Microsoft Internet Explorer'){return true}else if(navigator.appName==='Netscape'&&/Trident/.test(navigator.userAgent)){return true}
return false},hasSwfObjectLoaded:function(){return typeof window.swfobject!=='undefined'},hasMinFlashInstalled:function(){return window.swfobject.hasFlashPlayerVersion('9.0.0')},addFlashDivNode:function(){var node=document.createElement('div')
node.setAttribute('id',this.options.swfContainerId)
document.body.appendChild(node)},loadSwfAndDetectFonts:function(done){var hiddenCallback='___fp_swf_loaded'
window[hiddenCallback]=function(fonts){done(fonts)}
var id=this.options.swfContainerId
this.addFlashDivNode()
var flashvars={onReady:hiddenCallback}
var flashparams={allowScriptAccess:'always',menu:'false'}
window.swfobject.embedSWF(this.options.swfPath,id,'1','1','9.0.0',false,flashvars,flashparams,{})},getWebglCanvas:function(){var canvas=document.createElement('canvas')
var gl=null
try{gl=canvas.getContext('webgl')||canvas.getContext('experimental-webgl')}catch(e){}
if(!gl){gl=null}
return gl},each:function(obj,iterator,context){if(obj===null){return}
if(this.nativeForEach&&obj.forEach===this.nativeForEach){obj.forEach(iterator,context)}else if(obj.length===+obj.length){for(var i=0,l=obj.length;i<l;i++){if(iterator.call(context,obj[i],i,obj)==={}){return}}}else{for(var key in obj){if(obj.hasOwnProperty(key)){if(iterator.call(context,obj[key],key,obj)==={}){return}}}}},map:function(obj,iterator,context){var results=[]
if(obj==null){return results}
if(this.nativeMap&&obj.map===this.nativeMap){return obj.map(iterator,context)}
this.each(obj,function(value,index,list){results[results.length]=iterator.call(context,value,index,list)})
return results},x64Add:function(m,n){m=[m[0]>>>16,m[0]&0xffff,m[1]>>>16,m[1]&0xffff]
n=[n[0]>>>16,n[0]&0xffff,n[1]>>>16,n[1]&0xffff]
var o=[0,0,0,0]
o[3]+=m[3]+n[3]
o[2]+=o[3]>>>16
o[3]&=0xffff
o[2]+=m[2]+n[2]
o[1]+=o[2]>>>16
o[2]&=0xffff
o[1]+=m[1]+n[1]
o[0]+=o[1]>>>16
o[1]&=0xffff
o[0]+=m[0]+n[0]
o[0]&=0xffff
return[(o[0]<<16)|o[1],(o[2]<<16)|o[3]]},x64Multiply:function(m,n){m=[m[0]>>>16,m[0]&0xffff,m[1]>>>16,m[1]&0xffff]
n=[n[0]>>>16,n[0]&0xffff,n[1]>>>16,n[1]&0xffff]
var o=[0,0,0,0]
o[3]+=m[3]*n[3]
o[2]+=o[3]>>>16
o[3]&=0xffff
o[2]+=m[2]*n[3]
o[1]+=o[2]>>>16
o[2]&=0xffff
o[2]+=m[3]*n[2]
o[1]+=o[2]>>>16
o[2]&=0xffff
o[1]+=m[1]*n[3]
o[0]+=o[1]>>>16
o[1]&=0xffff
o[1]+=m[2]*n[2]
o[0]+=o[1]>>>16
o[1]&=0xffff
o[1]+=m[3]*n[1]
o[0]+=o[1]>>>16
o[1]&=0xffff
o[0]+=(m[0]*n[3])+(m[1]*n[2])+(m[2]*n[1])+(m[3]*n[0])
o[0]&=0xffff
return[(o[0]<<16)|o[1],(o[2]<<16)|o[3]]},x64Rotl:function(m,n){n%=64
if(n===32){return[m[1],m[0]]}else if(n<32){return[(m[0]<<n)|(m[1]>>>(32-n)),(m[1]<<n)|(m[0]>>>(32-n))]}else{n-=32
return[(m[1]<<n)|(m[0]>>>(32-n)),(m[0]<<n)|(m[1]>>>(32-n))]}},x64LeftShift:function(m,n){n%=64
if(n===0){return m}else if(n<32){return[(m[0]<<n)|(m[1]>>>(32-n)),m[1]<<n]}else{return[m[1]<<(n-32),0]}},x64Xor:function(m,n){return[m[0]^n[0],m[1]^n[1]]},x64Fmix:function(h){h=this.x64Xor(h,[0,h[0]>>>1])
h=this.x64Multiply(h,[0xff51afd7,0xed558ccd])
h=this.x64Xor(h,[0,h[0]>>>1])
h=this.x64Multiply(h,[0xc4ceb9fe,0x1a85ec53])
h=this.x64Xor(h,[0,h[0]>>>1])
return h},x64hash128:function(key,seed){key=key||''
seed=seed||0
var remainder=key.length%16
var bytes=key.length-remainder
var h1=[0,seed]
var h2=[0,seed]
var k1=[0,0]
var k2=[0,0]
var c1=[0x87c37b91,0x114253d5]
var c2=[0x4cf5ad43,0x2745937f]
for(var i=0;i<bytes;i=i+16){k1=[((key.charCodeAt(i+4)&0xff))|((key.charCodeAt(i+5)&0xff)<<8)|((key.charCodeAt(i+6)&0xff)<<16)|((key.charCodeAt(i+7)&0xff)<<24),((key.charCodeAt(i)&0xff))|((key.charCodeAt(i+1)&0xff)<<8)|((key.charCodeAt(i+2)&0xff)<<16)|((key.charCodeAt(i+3)&0xff)<<24)]
k2=[((key.charCodeAt(i+12)&0xff))|((key.charCodeAt(i+13)&0xff)<<8)|((key.charCodeAt(i+14)&0xff)<<16)|((key.charCodeAt(i+15)&0xff)<<24),((key.charCodeAt(i+8)&0xff))|((key.charCodeAt(i+9)&0xff)<<8)|((key.charCodeAt(i+10)&0xff)<<16)|((key.charCodeAt(i+11)&0xff)<<24)]
k1=this.x64Multiply(k1,c1)
k1=this.x64Rotl(k1,31)
k1=this.x64Multiply(k1,c2)
h1=this.x64Xor(h1,k1)
h1=this.x64Rotl(h1,27)
h1=this.x64Add(h1,h2)
h1=this.x64Add(this.x64Multiply(h1,[0,5]),[0,0x52dce729])
k2=this.x64Multiply(k2,c2)
k2=this.x64Rotl(k2,33)
k2=this.x64Multiply(k2,c1)
h2=this.x64Xor(h2,k2)
h2=this.x64Rotl(h2,31)
h2=this.x64Add(h2,h1)
h2=this.x64Add(this.x64Multiply(h2,[0,5]),[0,0x38495ab5])}
k1=[0,0]
k2=[0,0]
switch(remainder){case 15:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+14)],48))
case 14:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+13)],40))
case 13:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+12)],32))
case 12:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+11)],24))
case 11:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+10)],16))
case 10:k2=this.x64Xor(k2,this.x64LeftShift([0,key.charCodeAt(i+9)],8))
case 9:k2=this.x64Xor(k2,[0,key.charCodeAt(i+8)])
k2=this.x64Multiply(k2,c2)
k2=this.x64Rotl(k2,33)
k2=this.x64Multiply(k2,c1)
h2=this.x64Xor(h2,k2)
case 8:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+7)],56))
case 7:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+6)],48))
case 6:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+5)],40))
case 5:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+4)],32))
case 4:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+3)],24))
case 3:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+2)],16))
case 2:k1=this.x64Xor(k1,this.x64LeftShift([0,key.charCodeAt(i+1)],8))
case 1:k1=this.x64Xor(k1,[0,key.charCodeAt(i)])
k1=this.x64Multiply(k1,c1)
k1=this.x64Rotl(k1,31)
k1=this.x64Multiply(k1,c2)
h1=this.x64Xor(h1,k1)}
h1=this.x64Xor(h1,[0,key.length])
h2=this.x64Xor(h2,[0,key.length])
h1=this.x64Add(h1,h2)
h2=this.x64Add(h2,h1)
h1=this.x64Fmix(h1)
h2=this.x64Fmix(h2)
h1=this.x64Add(h1,h2)
h2=this.x64Add(h2,h1)
return('00000000'+(h1[0]>>>0).toString(16)).slice(-8)+('00000000'+(h1[1]>>>0).toString(16)).slice(-8)+('00000000'+(h2[0]>>>0).toString(16)).slice(-8)+('00000000'+(h2[1]>>>0).toString(16)).slice(-8)}}
Fingerprint2.VERSION='1.8.0'
return Fingerprint2})