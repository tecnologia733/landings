var lmdPageType,lmdItemId,lmdItemName;function getCookie(d){var b=d+"=";var f=decodeURIComponent(document.cookie);var a=f.split(";");for(var e=0;e<a.length;e++){var g=a[e];while(g.charAt(0)==" "){g=g.substring(1)}if(g.indexOf(b)==0){return g.substring(b.length,g.length)}}return""}if((getCookie("lmd_cj")=="lomadee"||getCookie("lmd_cj")=="buscape")&&execute()){window.YETT_BLACKLIST=[/postaffiliatepro/,/enviou\\.com\\.br/,/zanox/,/soclminer/,/socialminer/,/ytimg/,/shoptarget/,/shopback/,/shopconvert/,/btg360/,/cnt\\.my/,/webelapp/,/retagro/,/efiliacao/,/bsmartdata/,/admaxium/,/admediasales/,/adform/,/mathtag/,/curtivendi/,/boostbox/,/omguk/,/getblue/,/anilima/,/audiencegear/,/adensemble/,/smct/,/performa\\.ai/,/smarthint/,/afilio/,/smartbmc/,/buzzlead/,/actionpay/,/g3wmidia/,/baixou/,/performasales/,/justclick/,/sirdata/,/cityads/,/rtb123/,/awin/,/optimisemedia/,/rtbhouse/,/criteo/,/squidit/,/retargetly/,/marinsm/];!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):b(a.yett={})}(this,function(p){var j={blacklist:window.YETT_BLACKLIST,whitelist:window.YETT_WHITELIST},b={blacklisted:[]},f=function(a,c){return a&&(!c||"javascript/blocked"!==c)&&(!j.blacklist||j.blacklist.some(function(i){return i.test(a)}))&&(!j.whitelist||j.whitelist.every(function(i){return !i.test(a)}))},h=function(a){var c=a.getAttribute("src");return j.blacklist&&j.blacklist.every(function(e){return !e.test(c)})||j.whitelist&&j.whitelist.some(function(e){return e.test(c)})},k=new MutationObserver(function(a){a.forEach(function(n){for(var o=n.addedNodes,l=function(r){var e=o[r];if(1===e.nodeType&&"SCRIPT"===e.tagName){var u=e.src,s=e.type;if(f(u,s)){b.blacklisted.push(e.cloneNode()),e.type="javascript/blocked";e.addEventListener("beforescriptexecute",function r(c){"javascript/blocked"===e.getAttribute("type")&&c.preventDefault(),e.removeEventListener("beforescriptexecute",r)}),e.parentElement.removeChild(e)}}},q=0;q<o.length;q++){l(q)}})});k.observe(document.documentElement,{childList:!0,subtree:!0});var d=document.createElement;document.createElement=function(){for(var l=arguments.length,o=Array(l),n=0;n<l;n++){o[n]=arguments[n]}if("script"!==o[0].toLowerCase()){return d.bind(document).apply(void 0,o)}var a=d.bind(document).apply(void 0,o),q=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")},set:function(c){return f(c,a.type)&&q("type","javascript/blocked"),q("src",c),!0}},type:{set:function(c){var i=f(a.src,a.type)?"javascript/blocked":c;return q("type",i),!0}}}),a.setAttribute=function(c,i){"type"===c||"src"===c?a[c]=i:HTMLScriptElement.prototype.setAttribute.call(a,c,i)},a};var g=function(a){if(Array.isArray(a)){for(var i=0,c=Array(a.length);i<a.length;i++){c[i]=a[i]}return c}return Array.from(a)},m=new RegExp("[|\\{}()[\\]^$+*?.]","g");p.unblock=function(){for(var c=arguments.length,r=Array(c),q=0;q<c;q++){r[q]=arguments[q]}r.length<1?(j.blacklist=[],j.whitelist=[]):(j.blacklist&&(j.blacklist=j.blacklist.filter(function(n){return r.every(function(o){return !n.test(o)})})),j.whitelist&&(j.whitelist=[].concat(g(j.whitelist),g(r.map(function(n){var o=".*"+n.replace(m,"\\$&")+".*";return j.whitelist.find(function(s){return s.toString()===o.toString()})?null:new RegExp(o)}).filter(Boolean)))));for(var e=document.querySelectorAll('script[type="javascript/blocked"]'),a=0;a<e.length;a++){var i=e[a];h(i)&&(i.type="application/javascript",b.blacklisted.push(i),i.parentElement.removeChild(i))}var l=0;[].concat(g(b.blacklisted)).forEach(function(o,s){if(h(o)){var u=document.createElement("script");u.setAttribute("src",o.src),u.setAttribute("type","application/javascript"),document.head.appendChild(u),b.blacklisted.splice(s-l,1),l++}}),j.blacklist&&j.blacklist.length<1&&k.disconnect()},Object.defineProperty(p,"__esModule",{value:!0})})}function execute(){return getRandomIntInclusive(0,1)==0&&location.hostname.indexOf("awin.com")==-1&&location.hostname.indexOf("postaffiliatepro.com")==-1&&location.hostname.indexOf("enviou.com.br")==-1&&location.hostname.indexOf("zanox.com")==-1&&location.hostname.indexOf("socialminer.com")==-1&&location.hostname.indexOf("socialminer.com")==-1&&location.hostname.indexOf("shoptarget.com")==-1&&location.hostname.indexOf("webelapp.com")==-1&&location.hostname.indexOf("bsmartdata.com")==-1&&location.hostname.indexOf("rakuten.com")==-1&&location.hostname.indexOf("afilio.com")==-1&&location.hostname.indexOf("cityads.com")==-1&&location.hostname.indexOf("tradetracker.com")==-1&&location.hostname.indexOf("admediasales.com")==-1&&location.hostname.indexOf("adform.com")==-1&&location.hostname.indexOf("mathtag.com")==-1&&location.hostname.indexOf("curtivendi.com")==-1&&location.hostname.indexOf("boostbox.com")==-1&&location.hostname.indexOf("optimisemedia.com")==-1&&location.hostname.indexOf("getblue.io")==-1&&location.hostname.indexOf("performa.ai")==-1&&location.hostname.indexOf("smarthint.co")==-1&&location.hostname.indexOf("smartbmc.com")==-1&&location.hostname.indexOf("buzzlead.com")==-1&&location.hostname.indexOf("actionpay.net")==-1&&location.hostname.indexOf("actionpay.com")==-1&&location.hostname.indexOf("g3wmidia.com")==-1&&location.hostname.indexOf("baixou.com")==-1&&location.hostname.indexOf("performasales.com")==-1&&location.hostname.indexOf("justclick.media")==-1&&location.hostname.indexOf("sirdata.com")==-1&&location.hostname.indexOf("rtghouse.com")==-1&&location.hostname.indexOf("criteo.com")==-1&&location.hostname.indexOf("squidit.com")==-1&&location.hostname.indexOf("retargetly.com")==-1&&location.hostname.indexOf("marinsoftware.com")==-1}function getRandomIntInclusive(b,a){return b=Math.ceil(b),a=Math.floor(a),Math.floor(Math.random()*(a-b+1))+b};