/*!build time : 2013-12-24 1:34:17 PM*/
!function(a,b,c){function d(a,b){var c=(a[0]||0)-(b[0]||0);return c>0||!c&&a.length>0&&d(a.slice(1),b.slice(1))}function e(a){if(typeof a!=h)return a;var b=[],c="";for(var d in a)c=typeof a[d]==h?e(a[d]):[d,i?encodeURI(a[d]):a[d]].join("="),b.push(c);return b.join("&")}function f(a){var b=[];for(var c in a)a[c]&&b.push([c,'="',a[c],'"'].join(""));return b.join(" ")}function g(a){var b=['<param name="allowScriptAccess" value="always" />'];for(var c in a)b.push(['<param name="',c,'" value="',e(a[c]),'" />'].join(""));return b.join("")}var h="object",i=!0;try{var j=c.description||function(){return new c("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}()}catch(k){j="Unavailable"}var l=j.match(/\d+/g)||[0];a[b]={available:l[0]>0,activeX:c&&!c.name,version:{original:j,array:l,string:l.join("."),major:parseInt(l[0],10)||0,minor:parseInt(l[1],10)||0,release:parseInt(l[2],10)||0},hasVersion:function(a){var b=/string|number/.test(typeof a)?a.toString().split("."):/object/.test(typeof a)?[a.major,a.minor]:a||[0,0];return d(l,b)},encodeParams:!0,expressInstall:"expressInstall.swf",expressInstallIsActive:!1,create:function(a){var b=this;if(!a.swf||b.expressInstallIsActive||!b.available&&!a.hasVersionFail)return!1;if(!b.hasVersion(a.hasVersion||1)){if(b.expressInstallIsActive=!0,"function"==typeof a.hasVersionFail&&!a.hasVersionFail.apply(a))return!1;a={swf:a.expressInstall||b.expressInstall,height:137,width:214,flashvars:{MMredirectURL:location.href,MMplayerType:b.activeX?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}}attrs={data:a.swf,type:"application/x-shockwave-flash",id:a.id||"flash_"+Math.floor(999999999*Math.random()),width:a.width||320,height:a.height||180,style:a.style||""},i="undefined"!=typeof a.useEncode?a.useEncode:b.encodeParams,a.movie=a.swf,a.wmode=a.wmode||"opaque",delete a.fallback,delete a.hasVersion,delete a.hasVersionFail,delete a.height,delete a.id,delete a.swf,delete a.useEncode,delete a.width;var c=document.createElement("div");return c.innerHTML=["<object ",f(attrs),">",g(a),"</object>"].join(""),c.firstChild}},a.fn[b]=function(c){var d=this.find(h).andSelf().filter(h);return/string|object/.test(typeof c)&&this.each(function(){var d,e=a(this);c=typeof c==h?c:{swf:c},c.fallback=this,d=a[b].create(c),d&&(e.children().remove(),e.html(d))}),"function"==typeof c&&d.each(function(){var d=this,e="jsInteractionTimeoutMs";d[e]=d[e]||0,d[e]<660&&(d.clientWidth||d.clientHeight?c.call(d):setTimeout(function(){a(d)[b](c)},d[e]+66))}),d}}(jQuery,"flash",navigator.plugins["Shockwave Flash"]||window.ActiveXObject);