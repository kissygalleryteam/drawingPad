/*!build time : 2013-12-24 11:35:45 AM*/
!function(a){"use strict";function b(b,c){a.fn.flash?("string"==typeof b&&(b=a("#"+b)),b.flash({height:"100%",flashvars:c,swf:window.imgproxy.SWF,width:"100%",wmode:"transparent"})):console.error("jquery.swfobject not found.  Cannot load imgproxy.")}function c(){e||(e=!0,d=a("<div />").attr("id","imgproxy").css({height:1,position:"absolute",top:0,width:1}),a("body").append(d),b("imgproxy"))}var d,e=!1,f=!1,g=0,h=[],i={};window.imgproxy={SWF:"imgproxy.swf",load:function(a,b,e){if(!f)return h.push(Array.prototype.slice.call(arguments)),c(),void 0;var i=g++;this._callbacks(i,!0,b,e),d.flash(function(){this.load(i,a)})},_callbacks:function(a,b,c,d){i[a]={single:b,success:c,error:d}},_onLoad:function(){var a;if(f=!0,h.length)for(a=0;a<h.length;a++)window.imgproxy.load.apply(this,h[a]);h=null},_onSuccess:function(a,b){var c=i[a].success;c&&c("data:image/png;base64,"+b),i[a].single&&delete i[a]},_onError:function(a,b){var c=i[a].error;c&&c(b),i[a].single&&delete i[a]}},a.fn.imgproxy=function(c,d){var e=g++;return this.each(function(){b(a(this),{id:e,local:!0})}),window.imgproxy._callbacks(e,!1,c,d),this}}(jQuery);