!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){var n,r=t.exports=function(){var t,e,n,r,i,o,a=[],s=a.slice,c=a.filter,u=window.document,l={},f={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=u.createElement("table"),b=u.createElement("tr"),w={tr:u.createElement("tbody"),tbody:x,thead:x,tfoot:x,td:b,th:b,"*":u.createElement("div")},O=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,P={},C=u.createElement("div"),T={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},N=Array.isArray||function(t){return t instanceof Array};function A(t){return null==t?String(t):j[S.call(t)]||"object"}function _(t){return"function"==A(t)}function W(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function k(t){return"object"==A(t)}function L(t){return k(t)&&!W(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function q(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function B(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function D(t,e){return"number"!=typeof e||h[q(t)]?e:e+"px"}function $(t){return"children"in t?s.call(t.children):n.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function U(t,e){return null==e?n(t):n(t).filter(e)}function F(t,e,n,r){return _(e)?e.call(t,n,r):e}function I(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function z(e,n){var r=e.className||"",i=r&&r.baseVal!==t;if(n===t)return i?r.baseVal:r;i?r.baseVal=n:e.className=n}function Z(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}return P.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=C).appendChild(t),r=~P.qsa(i,e).indexOf(t),o&&C.removeChild(t),r},i=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},o=function(t){return c.call(t,function(e,n){return t.indexOf(e)==n})},P.fragment=function(e,r,i){var o,a,c;return d.test(e)&&(o=n(u.createElement(RegExp.$1))),o||(e.replace&&(e=e.replace(m,"<$1></$2>")),r===t&&(r=p.test(e)&&RegExp.$1),r in w||(r="*"),(c=w[r]).innerHTML=""+e,o=n.each(s.call(c.childNodes),function(){c.removeChild(this)})),L(i)&&(a=n(o),n.each(i,function(t,e){y.indexOf(t)>-1?a[t](e):a.attr(t,e)})),o},P.Z=function(t,e){return(t=t||[]).__proto__=n.fn,t.selector=e||"",t},P.isZ=function(t){return t instanceof P.Z},P.init=function(e,r){var i,o;if(!e)return P.Z();if("string"==typeof e)if("<"==(e=e.trim())[0]&&p.test(e))i=P.fragment(e,RegExp.$1,r),e=null;else{if(r!==t)return n(r).find(e);i=P.qsa(u,e)}else{if(_(e))return n(u).ready(e);if(P.isZ(e))return e;if(N(e))o=e,i=c.call(o,function(t){return null!=t});else if(k(e))i=[e],e=null;else if(p.test(e))i=P.fragment(e.trim(),RegExp.$1,r),e=null;else{if(r!==t)return n(r).find(e);i=P.qsa(u,e)}}return P.Z(i,e)},(n=function(t,e){return P.init(t,e)}).extend=function(n){var r,i=s.call(arguments,1);return"boolean"==typeof n&&(r=n,n=i.shift()),i.forEach(function(i){!function n(r,i,o){for(e in i)o&&(L(i[e])||N(i[e]))?(L(i[e])&&!L(r[e])&&(r[e]={}),N(i[e])&&!N(r[e])&&(r[e]=[]),n(r[e],i[e],o)):i[e]!==t&&(r[e]=i[e])}(n,i,r)}),n},P.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=E.test(o);return M(t)&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:s.call(a&&!r?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=u.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=A,n.isFunction=_,n.isWindow=W,n.isArray=N,n.isPlainObject=L,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return a.indexOf.call(e,t,n)},n.camelCase=i,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var r,i,o,a,s=[];if(R(t))for(i=0;i<t.length;i++)null!=(r=e(t[i],i))&&s.push(r);else for(o in t)null!=(r=e(t[o],o))&&s.push(r);return(a=s).length>0?n.fn.concat.apply([],a):a},n.each=function(t,e){var n,r;if(R(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},n.grep=function(t,e){return c.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:a.forEach,reduce:a.reduce,push:a.push,sort:a.sort,indexOf:a.indexOf,concat:a.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(s.apply(this,arguments))},ready:function(t){return O.test(u.readyState)&&u.body?t(n):u.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?s.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return a.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return _(t)?this.not(this.not(t)):n(c.call(this,function(e){return P.matches(e,t)}))},add:function(t,e){return n(o(this.concat(n(t,e))))},is:function(t){return this.length>0&&P.matches(this[0],t)},not:function(e){var r=[];if(_(e)&&e.call!==t)this.each(function(t){e.call(this,t)||r.push(this)});else{var i="string"==typeof e?this.filter(e):R(e)&&_(e.item)?s.call(e):n(e);this.forEach(function(t){i.indexOf(t)<0&&r.push(t)})}return n(r)},has:function(t){return this.filter(function(){return k(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!k(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!k(t)?t:n(t)},find:function(t){var e=this;return t?"object"==typeof t?n(t).filter(function(){var t=this;return a.some.call(e,function(e){return n.contains(e,t)})}):1==this.length?n(P.qsa(this[0],t)):this.map(function(){return P.qsa(this,t)}):n()},closest:function(t,e){var r=this[0],i=!1;for("object"==typeof t&&(i=n(t));r&&!(i?i.indexOf(r)>=0:P.matches(r,t));)r=r!==e&&!M(r)&&r.parentNode;return n(r)},parents:function(t){for(var e=[],r=this;r.length>0;)r=n.map(r,function(t){if((t=t.parentNode)&&!M(t)&&e.indexOf(t)<0)return e.push(t),t});return U(e,t)},parent:function(t){return U(o(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return $(this)}),t)},contents:function(){return this.map(function(){return s.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return c.call($(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,l[t]||(e=u.createElement(t),u.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),l[t]=n),l[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=_(t);if(this[0]&&!e)var r=n(t).get(0),i=r.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){var e;for(n(this[0]).before(t=n(t));(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=_(t);return this.each(function(r){var i=n(this),o=i.contents(),a=e?t.call(this,r):t;o.length?o.wrapAll(a):i.append(a)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var r=n(this);(e===t?"none"==r.css("display"):e)?r.show():r.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var r=this.innerHTML;n(this).empty().append(F(this,t,e,r))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=F(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,r){var i;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(k(n))for(e in n)I(this,e,n[e]);else I(this,n,F(this,r,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){I(this,t)},this)})},prop:function(t,e){return t=T[t]||t,1 in arguments?this.each(function(n){this[t]=F(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var r="data-"+e.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Z(i):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=F(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var r=n(this),i=F(this,t,e,r.offset()),o=r.offsetParent().offset(),a={top:i.top-o.top,left:i.left-o.left};"static"==r.css("position")&&(a.position="relative"),r.css(a)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,r){if(arguments.length<2){var o,a=this[0];if(!a)return;if(o=getComputedStyle(a,""),"string"==typeof t)return a.style[i(t)]||o.getPropertyValue(t);if(N(t)){var s={};return n.each(t,function(t,e){s[e]=a.style[i(e)]||o.getPropertyValue(e)}),s}}var c="";if("string"==A(t))r||0===r?c=q(t)+":"+D(t,r):this.each(function(){this.style.removeProperty(q(t))});else for(e in t)t[e]||0===t[e]?c+=q(e)+":"+D(e,t[e])+";":this.each(function(){this.style.removeProperty(q(e))});return this.each(function(){this.style.cssText+=";"+c})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&a.some.call(this,function(t){return this.test(z(t))},B(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){r=[];var i=z(this);F(this,t,e,i).split(/\s+/g).forEach(function(t){n(this).hasClass(t)||r.push(t)},this),r.length&&z(this,i+(i?" ":"")+r.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return z(this,"");r=z(this),F(this,e,n,r).split(/\s+/g).forEach(function(t){r=r.replace(B(t)," ")}),z(this,r.trim())}})},toggleClass:function(e,r){return e?this.each(function(i){var o=n(this);F(this,e,i,z(this)).split(/\s+/g).forEach(function(e){(r===t?!o.hasClass(e):r)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),r=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return r.top-=parseFloat(n(t).css("margin-top"))||0,r.left-=parseFloat(n(t).css("margin-left"))||0,i.top+=parseFloat(n(e[0]).css("border-top-width"))||0,i.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:r.top-i.top,left:r.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||u.body;t&&!g.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var r=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(i){var o,a=this[0];return i===t?W(a)?a["inner"+r]:M(a)?a.documentElement["scroll"+r]:(o=this.offset())&&o[e]:this.each(function(t){(a=n(this)).css(e,F(this,i,t,a[e]()))})}}),["after","prepend","before","append"].forEach(function(t,e){var r=e%2;n.fn[t]=function(){var t,i,o=n.map(arguments,function(e){return"object"==(t=A(e))||"array"==t||null==e?e:P.fragment(e)}),a=this.length>1;return o.length<1?this:this.each(function(t,s){i=r?s:s.parentNode,s=0==e?s.nextSibling:1==e?s.firstChild:2==e?s:null;var c=n.contains(u.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return n(t).remove();i.insertBefore(t,s),c&&function t(e,n){n(e);for(var r=0,i=e.childNodes.length;r<i;r++)t(e.childNodes[r],n)}(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[r?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),P.Z.prototype=n.fn,P.uniq=o,P.deserializeValue=Z,n.zepto=P,n}();!function(t){var e,n=1,r=Array.prototype.slice,i=t.isFunction,o=function(t){return"string"==typeof t},a={},s={},c="onfocusin"in window,u={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};function f(t){return t._zid||(t._zid=n++)}function h(t,e,n,r){if((e=p(e)).ns)var i=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(a[f(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||f(t.fn)===f(n))&&(!r||t.sel==r)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t,e){return t.del&&!c&&t.e in u||!!e}function m(t){return l[t]||c&&u[t]||t}function g(n,r,i,o,s,c,u){var h=f(n),g=a[h]||(a[h]=[]);r.split(/\s/).forEach(function(r){if("ready"==r)return t(document).ready(i);var a=p(r);a.fn=i,a.sel=s,a.e in l&&(i=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return a.fn.apply(this,arguments)}),a.del=c;var f=c||i;a.proxy=function(t){if(!(t=O(t)).isImmediatePropagationStopped()){t.data=o;var r=f.apply(n,t._args==e?[t]:[t].concat(t._args));return!1===r&&(t.preventDefault(),t.stopPropagation()),r}},a.i=g.length,g.push(a),"addEventListener"in n&&n.addEventListener(m(a.e),a.proxy,d(a,u))})}function v(t,e,n,r,i){var o=f(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(m(e.e),e.proxy,d(e,i))})})}s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",t.event={add:g,remove:v},t.proxy=function(e,n){var a=2 in arguments&&r.call(arguments,2);if(i(e)){var s=function(){return e.apply(n,a?a.concat(r.call(arguments)):arguments)};return s._zid=f(e),s}if(o(n))return a?(a.unshift(e[n],e),t.proxy.apply(null,a)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var y=function(){return!0},x=function(){return!1},b=/^([A-Z]|returnValue$|layer[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function O(n,r){return!r&&n.isDefaultPrevented||(r||(r=n),t.each(w,function(t,e){var i=r[t];n[t]=function(){return this[e]=y,i&&i.apply(r,arguments)},n[e]=x}),(r.defaultPrevented!==e?r.defaultPrevented:"returnValue"in r?!1===r.returnValue:r.getPreventDefault&&r.getPreventDefault())&&(n.isDefaultPrevented=y)),n}function E(t){var n,r={originalEvent:t};for(n in t)b.test(n)||t[n]===e||(r[n]=t[n]);return O(r,t)}t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(n,a,s,c,u){var l,f,h=this;return n&&!o(n)?(t.each(n,function(t,e){h.on(t,a,s,e,u)}),h):(o(a)||i(c)||!1===c||(c=s,s=a,a=e),(i(s)||!1===s)&&(c=s,s=e),!1===c&&(c=x),h.each(function(e,i){u&&(l=function(t){return v(i,t.type,c),c.apply(this,arguments)}),a&&(f=function(e){var n,o=t(e.target).closest(a,i).get(0);if(o&&o!==i)return n=t.extend(E(e),{currentTarget:o,liveFired:i}),(l||c).apply(o,[n].concat(r.call(arguments,1)))}),g(i,n,c,s,a,f||l)}))},t.fn.off=function(n,r,a){var s=this;return n&&!o(n)?(t.each(n,function(t,e){s.off(t,r,e)}),s):(o(r)||i(a)||!1===a||(a=r,r=e),!1===a&&(a=x),s.each(function(){v(this,n,a,r)}))},t.fn.trigger=function(e,n){return(e=o(e)||t.isPlainObject(e)?t.Event(e):O(e))._args=n,this.each(function(){e.type in u&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var r,i;return this.each(function(a,s){(r=E(o(e)?t.Event(e):e))._args=n,r.target=s,t.each(h(s,e.type||e),function(t,e){if(i=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(t=(e=t).type);var n=document.createEvent(s[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),O(n)}}(r),function(t){var e,n,r=0,i=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,c="application/json",u="text/html",l=/^\s*$/,f=i.createElement("a");function h(e,n,r,o){if(e.global)return function(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}(n||i,r,o)}function p(t,e){var n=e.context;if(!1===e.beforeSend.call(n,t,e)||!1===h(e,n,"ajaxBeforeSend",[t,e]))return!1;h(e,n,"ajaxSend",[t,e])}function d(t,e,n,r){var i=n.context;n.success.call(i,t,"success",e),r&&r.resolveWith(i,[t,"success",e]),h(n,i,"ajaxSuccess",[e,n,t]),g("success",e,n)}function m(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),h(r,o,"ajaxError",[n,r,t||e]),g(e,n,r)}function g(e,n,r){var i=r.context;r.complete.call(i,n,e),h(r,i,"ajaxComplete",[n,r]),function(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}(r)}function v(){}function y(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function x(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}f.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var o,a,s=e.jsonpCallback,c=(t.isFunction(s)?s():s)||"jsonp"+ ++r,u=i.createElement("script"),l=window[c],f=function(e){t(u).triggerHandler("error",e||"abort")},h={abort:f};return n&&n.promise(h),t(u).on("load error",function(r,i){clearTimeout(a),t(u).off().remove(),"error"!=r.type&&o?d(o[0],h,e,n):m(null,i||"error",h,e,n),window[c]=l,o&&t.isFunction(l)&&l(o[0]),l=o=void 0}),!1===p(h,e)?(f("abort"),h):(window[c]=function(){o=arguments},u.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),i.head.appendChild(u),e.timeout>0&&(a=setTimeout(function(){f("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:v,success:v,error:v,complete:v,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:c,xml:"application/xml, text/xml",html:u,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(r){var o,g=t.extend({},r||{}),x=t.Deferred&&t.Deferred();for(e in t.ajaxSettings)void 0===g[e]&&(g[e]=t.ajaxSettings[e]);!function(e){e.global&&0==t.active++&&h(e,null,"ajaxStart")}(g),g.crossDomain||((o=i.createElement("a")).href=g.url,o.href=o.href,g.crossDomain=f.protocol+"//"+f.host!=o.protocol+"//"+o.host),g.url||(g.url=window.location.toString()),function(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=y(e.url,e.data),e.data=void 0)}(g);var b=g.dataType,w=/\?.+=\?/.test(g.url);if(w&&(b="jsonp"),!1!==g.cache&&(r&&!0===r.cache||"script"!=b&&"jsonp"!=b)||(g.url=y(g.url,"_="+Date.now())),"jsonp"==b)return w||(g.url=y(g.url,g.jsonp?g.jsonp+"=?":!1===g.jsonp?"":"callback=?")),t.ajaxJSONP(g,x);var O,E=g.accepts[b],j={},S=function(t,e){j[t.toLowerCase()]=[t,e]},P=/^([\w-]+:)\/\//.test(g.url)?RegExp.$1:window.location.protocol,C=g.xhr(),T=C.setRequestHeader;if(x&&x.promise(C),g.crossDomain||S("X-Requested-With","XMLHttpRequest"),S("Accept",E||"*/*"),(E=g.mimeType||E)&&(E.indexOf(",")>-1&&(E=E.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(E)),(g.contentType||!1!==g.contentType&&g.data&&"GET"!=g.type.toUpperCase())&&S("Content-Type",g.contentType||"application/x-www-form-urlencoded"),g.headers)for(n in g.headers)S(n,g.headers[n]);if(C.setRequestHeader=S,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=v,clearTimeout(O);var e,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==P){b=b||((r=g.mimeType||C.getResponseHeader("content-type"))&&(r=r.split(";",2)[0]),r&&(r==u?"html":r==c?"json":a.test(r)?"script":s.test(r)&&"xml")||"text"),e=C.responseText;try{"script"==b?(0,eval)(e):"xml"==b?e=C.responseXML:"json"==b&&(e=l.test(e)?null:t.parseJSON(e))}catch(t){n=t}n?m(n,"parsererror",C,g,x):d(e,C,g,x)}else m(C.statusText||null,C.status?"error":"abort",C,g,x)}var r},!1===p(C,g))return C.abort(),m(null,"abort",C,g,x),C;if(g.xhrFields)for(n in g.xhrFields)C[n]=g.xhrFields[n];var N=!("async"in g)||g.async;for(n in C.open(g.type,g.url,N,g.username,g.password),j)T.apply(C,j[n]);return g.timeout>0&&(O=setTimeout(function(){C.onreadystatechange=v,C.abort(),m(null,"timeout",C,g,x)},g.timeout)),C.send(g.data?g.data:null),C},t.get=function(){return t.ajax(x.apply(null,arguments))},t.post=function(){var e=x.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=x.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,a=this,s=e.split(/\s/),c=x(e,n,r),u=c.success;return s.length>1&&(c.url=s[0],i=s[1]),c.success=function(e){a.html(i?t("<div>").html(e.replace(o,"")).find(i):e),u&&u.apply(a,arguments)},t.ajax(c),this};var b=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(b(e)+"="+b(n))},function e(n,r,i,o){var a,s=t.isArray(r),c=t.isPlainObject(r);t.each(r,function(r,u){a=t.type(u),o&&(r=i?o:o+"["+(c||"object"==a||"array"==a?r:"")+"]"),!o&&s?n.add(u.name,u.value):"array"==a||!i&&"object"==a?e(n,u,i,r):n.add(r,u)})}(r,e,n),r.join("&").replace(/%20/g,"+")}}(r),(n=r).fn.serializeArray=function(){var t,e,r=[],i=function(e){if(e.forEach)return e.forEach(i);r.push({name:t,value:e})};return this[0]&&n.each(this[0].elements,function(r,o){e=o.type,(t=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=e&&"reset"!=e&&"button"!=e&&"file"!=e&&("radio"!=e&&"checkbox"!=e||o.checked)&&i(n(o).val())}),r},n.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},n.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=n.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this},function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(r)},function(t,e,n){"use strict";n.r(e);let r={baidu:["wd","word"],"m.baidu.com":["word"],google:["q"],iask:["k","_searchkey","searchWord"],sina:["word","searchWord"],sogou:["query","keyword"],"m.sogou.com":["keyword","keywod"],"wap.sogou.com":["keyword"],youdao:["q"],yahoo:["p"],lycos:["query"],aol:["encquery"],3721:["p","name"],soso:["w"],zhongsou:["w"],alexa:["q"],m:["search:","q"],sm:["search:","q"],bing:["q"],so:["q"]},i={baidu:{en:"Baidu",cn:"百度"},"m.baidu.com":{en:"Baidu",cn:"百度"},google:{en:"Google",cn:"谷歌"},iask:{en:"Iask",cn:"爱问知识人"},sina:{en:"Sina",cn:"新浪"},sogou:{en:"Sogou",cn:"搜狗"},"m.sogou.com":{en:"Sogou",cn:"搜狗移动端"},"wap.sogou.com":{en:"Sogou",cn:"搜狗移动端"},youdao:{en:"Youdao",cn:"有道"},yahoo:{en:"Yahoo",cn:"雅虎"},lycos:{en:"Lycos",cn:"Lycos"},aol:{en:"Aol",cn:"美国在线"},3721:{en:"3721",cn:"3721"},soso:{en:"Soso",cn:"搜搜"},zhongsou:{en:"Zhongsou",cn:"中搜"},alexa:{en:"Alexa",cn:"Alexa"},m:{en:"sm",cn:"神马搜索"},sm:{en:"sm",cn:"神马搜索"},bing:{en:"Bing",cn:"Bing"},so:{en:"so",cn:"360搜索"}},o=function(t){return void 0===t?"[object Undefined]":null===t?"[object Null]":Object.prototype.toString.apply(t)},a=function(t){return"[object String]"==o(t)},s=function(t){return"[object Object]"==o(t)},c=function(t){let e=document.createElement("a");return e.href=t,e},u=function(t,e){let n=t.indexOf("?");if(-1===n)return{};let r=t.substring(n+1),i={},o=r.length?r.split("&"):[],a=null,s=null;for(let t=0;t<o.length;t++){let e=o[t].indexOf("=");-1!==e&&(a=decodeURIComponent(o[t].substring(0,e)),s=decodeURIComponent(o[t].substring(e+1)),a.length&&(i[a]=s))}return i.hasOwnProperty(e)?i[e]:{}},l=function(t){let e=t.split(".");return 1===e.length||2===e.length?e[0]:3===e.length&&["com","cn","org","net"].indexOf(e[1])>=0?e[0]:e[1]},f=function(t){if(s(t))return"";let e=new RegExp(/^\w{4}$/),n=new RegExp(/^\?+$/);return 4==t.length&&e.test(t)?"":n.test(t)?"":-1!=t.search(/&#[\w]{5};/)?h(t):t},h=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)})};var p={theType:o,isString:a,isArray:function(t){return"[object Array]"==o(t)},isObject:s,isFunction:function(t){return"[object Function]"==o(t)},parseUrl:c,detectMobile:function(){return navigator.userAgent.match(/Android/i)?"Android":navigator.userAgent.match(/webOS/i)?"webOS":navigator.userAgent.match(/iPhone/i)?"iPhone":navigator.userAgent.match(/iPad/i)?"iPad":navigator.userAgent.match(/iPod/i)?"iPod":navigator.userAgent.match(/BlackBerry/i)?"BlackBerry":!!navigator.userAgent.match(/Windows Phone/i)&&"Windows Phone"},detectBrowser:function(){let t,e=navigator.userAgent,n=e.match(/(UCBrowser|baiduboxapp|msie|QQBrowser(?=\/))\/?\s*(\d+)/i)||[];return 0==n.length&&(n=e.match(/(opera|safari|firefox|msie|chrome(?=\/))\/?\s*(\d+)/i)||[]),"Chrome"===n[1]&&null!=(t=e.match(/\bOPR\/(\d+)/))?"Opera":"baiduboxapp"==n[1]||"BaiduBoxApp"==n[1]?"手机百度":(n=n[2]?[n[1]]:[navigator.appName]).join("")},parseKeyword:function(t){let e="";if(!a(t))return"";let n=c(t),i=l(n.hostname.toLowerCase());if(r.hasOwnProperty(i)){let n=r[i],o="";for(let e=0;e<n.length&&(o=u(t,n[e]),!a(o)||""===o);e++);e=o}return"1"==e?"":f(e)},getHostUniquePart:l,parseSearchEngine:function(t){if(!a(t))return{en:"",cn:""};let e=c(t),n=l(e.hostname.toLowerCase());return i.hasOwnProperty(n)?i[n]:{en:"",cn:""}},detectWebkit:function(){let t=function(){let t=navigator.userAgent;return navigator.appVersion,{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/)||!!t.match(/AppleWebKit/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1||t.indexOf("Mac")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1==t.indexOf("Safari")}}();return t.trident?"Trident":t.presto?"Presto":t.webKit?"AppleWebKit":t.gecko?"Gecko":"other"},detectOS:function(){let t=navigator.userAgent,e="Win32"==navigator.platform||"Windows"==navigator.platform,n="Mac68K"==navigator.platform||"MacPPC"==navigator.platform||"Macintosh"==navigator.platform||"MacIntel"==navigator.platform||"iPhone"==navigator.platform||String(navigator.platform).indexOf("Mac OS X")>-1;if(n)return"Mac";if("X11"==navigator.platform&&!e&&!n)return"Unix";if(String(navigator.platform).indexOf("Linux")>-1)return"Linux";if(e){if(t.indexOf("Windows NT 5.0")>-1||t.indexOf("Windows 2000")>-1)return"Win2000";if(t.indexOf("Windows NT 5.1")>-1||t.indexOf("Windows XP")>-1)return"WinXP";if(t.indexOf("Windows NT 5.2")>-1||t.indexOf("Windows 2003")>-1)return"Win2003";if(t.indexOf("Windows NT 6.0")>-1||t.indexOf("Windows Vista")>-1)return"WinVista";if(t.indexOf("Windows NT 6.1")>-1||t.indexOf("Windows 7")>-1)return"Win7";if(t.indexOf("Windows 6.2")>-1||t.indexOf("Windows NT 6.2")>-1||t.indexOf("Windows 6.3")>-1||t.indexOf("Windows NT 6.3")>-1)return"Win8";if(t.indexOf("Windows NT 10.0")>-1||t.indexOf("Windows 10")>-1)return"Win10"}return t.match(/MacIntel/i)||t.match(/Macintosh/i)||t.match(/iPhone/i)||t.match(/iPad/i)||t.match(/iPod/i)?"Mac":"Other"},detectResolution:function(){return window.screen.width+"*"+window.screen.height},getQuery:function(t,e){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");let n=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e||location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))},buildQuery:function(t){let e="";for(let n in t)e=e+"&"+n+"="+t[n];return e.slice(1)}},d=n(0),m=n.n(d);let g={};g.now_page=encodeURIComponent(location.href),g.before_page=encodeURIComponent(document.referrer),g.device_type=p.detectMobile()||"PC",g.browser=p.detectBrowser(),g.search_key=p.parseKeyword(document.referrer);let v=p.parseSearchEngine(document.referrer);g.search_engine_cn=v.cn,-1!==g.search_engine_cn.search(/&#[\w]{5};/)&&(g.search_engine_cn=p.htmlentities_decode(g.search_engine_cn)),g.search_engine_en=v.en,g.title=encodeURIComponent(document.title),g.b_core=p.detectWebkit(),g.detectos=p.detectOS(),g.resolution=p.detectResolution(),g.cid=p.getQuery("cid",m()("#Counter28").attr("src")),m.a.ajax({url:"//count.28.com/Counter?"+p.buildQuery(g),type:"GET",dataType:"json",crossDomain:!0,xhrFields:{withCredentials:!0}})}]);