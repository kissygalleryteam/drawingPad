/*!build time : 2013-11-22 3:05:16 PM*/
KISSY.add("gallery/drawingPad/1.0/index",function(a,b,c,d){function e(c){var d=this;d.addAttrs({img:{setter:function(a){return a},getter:function(a){return a}},centerX:{value:null,setter:function(a){return a},getter:function(a){return a}},centerY:{value:null,setter:function(a){return a},getter:function(a){return a}},rotate:{value:0,setter:function(a){return a},getter:function(a){return a}},scale:{value:1,setter:function(a){return a},getter:function(a){return a}},"class":{value:null,setter:function(a){return a},getter:function(a){return a}}}),e.superclass.constructor.call(d,c);var f=b('<div class="_drawingPad_canvasLayer"><canvas></canvas><div>').css("position","absolute").css("top","0px").css("left","0px"),h=f.one("canvas"),i=b(c.wrapper),j=i.one("."+g);f.one("canvas").css("background","none"),j?j.before(f):i.append(f),c.class&&f.addClass(c.class),d.fatherPad=c.father,d.canvasEl=h.getDOMNode(),d.canvasCtx=d.canvasEl.getContext("2d"),d.img=c.img,d.img?(d.imgWidth=c.img.width,d.imgHeight=c.img.height):(d.imgWidth=d.fatherPad.width,d.imgHeight=d.fatherPad.height),d.cordX=a.isNumber(d.get("centerX"))?d.get("centerX"):.5*d.imgWidth,d.cordY=a.isNumber(d.get("centerY"))?d.get("centerY"):.5*d.imgHeight,d.canvasEl.width=c.width,d.canvasEl.height=c.height}function f(a){function c(a,b){function c(a,b,c,d){return Math.sqrt((a-c)*(a-c)+(b-d)*(b-d))}function e(a,b,c){return[a*Math.cos(c)-b*Math.sin(c),a*Math.sin(c)+b*Math.cos(c)]}var f=d.interactDoingLayer;if(!f)return null;var g,h={position:null,info:null},i=f.get("scale"),j=f.cordX-.5*f.imgWidth*i,k=f.cordX+.5*f.imgWidth*i,l=f.cordY-.5*f.imgHeight*i,m=f.cordY+.5*f.imgHeight*i,n=f.get("rotate"),o=0-n*Math.PI/180,p=a-f.cordX,q=b-f.cordY,r=e(p,q,o),s=r[0],t=r[1],u=f.cordX+s,v=f.cordY+t,w=["ul","t","ur","r","lr","b","ll","l"];if(c(u,v,j,l)<10?g=0:c(u,v,k,l)<10?g=2:c(u,v,k,m)<10?g=4:c(u,v,j,m)<10?g=6:h.position=u>=j&&k>=u&&m>=v&&v>=l?"in":c(0,-30-.5*f.imgHeight*i,s,t)<10?"dot":"out",void 0!==g){var x,y=0;rotationRate=n/90,y=Math.floor(rotationRate)==rotationRate?2*rotationRate:2*Math.floor(rotationRate)+1,x=g+y,x=x>=8?x-8:x,h.position=w[x]}return h.shadowMouse=r,h}if(a.height&&a.width&&a.wrapper){var d=this;d.addAttrs({height:{value:0,setter:function(a){return a},getter:function(a){return a}},width:{value:0,setter:function(a){return a},getter:function(a){return a}},wrapper:{value:null,setter:function(a){return a},getter:function(a){return a}}}),f.superclass.constructor.call(d,a),d.layers=[],d.interactDoingLayer=null,d.interactCaptureLayer=null,b(d.get("wrapper")).empty().css("position","relative").css("height",d.get("height")+"px").css("width",d.get("width")+"px"),d.interactCaptureLayer=d.addLayer({img:null,"class":g});var e,h,i;b.one(document).on("mouseup",function(){e=null}),b(d.interactCaptureLayer.canvasEl).on("mousedown",function(a){var b=d.interactDoingLayer;if(b){var f=a.offsetX,g=a.offsetY,j=c(f,g).position;switch(e=!0,j){case"in":e="move",h=f,i=g;break;case"dot":e="rotate";break;case"ul":case"t":case"ur":case"r":case"lr":case"b":case"ll":case"l":e="scale";break;default:e=null}}}).on("mousemove",function(a){var f=d.interactDoingLayer;if(f){var g=a.offsetX,j=a.offsetY,k=c(g,j),l=k.position,m=(k.info,k.shadowMouse),n=d.interactCaptureLayer.canvasEl,o="auto",p={"in":"move",out:"auto",dot:"url('icon_rotate.gif'),pointer",ul:"nw-resize",ur:"ne-resize",ll:"ne-resize",lr:"nw-resize",t:"n-resize",b:"n-resize",l:"e-resize",r:"e-resize"};if("move"==e)f.cordX+=a.offsetX-h,f.cordY+=a.offsetY-i,f.render(),d._updateController(),h=g,i=j;else if("scale"==e){var q,r,s=f.imgWidth,t=f.imgHeight,u=(f.cordX,f.cordY,1),q=Math.abs(m[0]/(.5*s));r=Math.abs(m[1]/(.5*t)),u=Math.min(q,r),f.set("scaleRate",u),f.render(),d._updateController()}else if("rotate"==e){var v,w=g-f.cordX,x=-j+f.cordY;v=0==x&&0>=w?270:0==x&&w>0?90:x>0?180*Math.atan(w/x)/Math.PI:180*Math.atan(w/x)/Math.PI+180,f.set("rotateDeg",v),f.render(),d._updateController()}else o=p[l]||o,b(n).css("cursor",o)}})}}var g="_drawingPad_interact";return a.extend(e,d,{render:function(){var a=this,b=a.canvasCtx,c=a.img,d=a.get("scale"),e=a.get("rotate");return b.setTransform(1,0,0,1,0,0),b.clearRect(0,0,a.canvasEl.width,a.canvasEl.height),b.setTransform(1,0,0,1,a.cordX,a.cordY),b.rotate(e*Math.PI/180),"undefined"!=typeof FlashCanvas?b.loadImage(c,function(){b.drawImage(c,0,0,a.imgWidth,a.imgHeight,-.5*a.imgWidth*d,-.5*a.imgHeight*d,a.imgWidth*d,a.imgHeight*d)}):b.drawImage(c,0,0,a.imgWidth,a.imgHeight,-.5*a.imgWidth*d,-.5*a.imgHeight*d,a.imgWidth*d,a.imgHeight*d),a},activeInteract:function(){this.fatherPad.interactDoingLayer=this,this.fatherPad._updateController()},deactiveInteract:function(){this.fatherPad.interactDoingLayer==this&&(this.fatherPad.interactDoingLayer=null,this.fatherPad._updateController())}}),a.extend(f,d,{addLayer:function(b){var c=new e(a.mix(b,{father:this,height:this.get("height"),width:this.get("width"),wrapper:this.get("wrapper")}));return this.layers.push(c),c},deactiveInteract:function(){this.interactDoingLayer=null,this._updateController()},_clearCapture:function(){var a=this.interactCaptureLayer.canvasCtx;a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.get("width"),this.get("height"))},_updateController:function(){function a(a,b,c,d){a.fillRect(c-b/2,d-b/2,b,b)}var b=this,c=b.interactCaptureLayer.canvasCtx;if(b.interactDoingLayer){var d=6,e="#7777FF",f="#7777FF",g=2,h="square",i=b.interactDoingLayer.get("rotate"),j=b.interactDoingLayer.get("scale"),k=b.interactDoingLayer.cordX,l=b.interactDoingLayer.cordY,m=b.interactDoingLayer.imgWidth*j,n=b.interactDoingLayer.imgHeight*j,o=0-.5*m,p=0+.5*m,q=0-.5*n,r=0+.5*n;b._clearCapture(),c.setTransform(1,0,0,1,k,l),c.rotate(i*Math.PI/180),c.beginPath(),c.lineWidth=g,c.strokeStyle=e,c.lineCap=h,c.fillStyle=f,c.moveTo(o,q),c.lineTo(p,q),c.lineTo(p,r),c.lineTo(o,r),c.lineTo(o,q),c.stroke(),c.closePath(),a(c,d,o,q),a(c,d,p,q),a(c,d,p,r),a(c,d,o,r),a(c,d,o,q);var s=4;c.beginPath(),c.moveTo(0,q),c.lineTo(0,q-30),c.stroke(),c.closePath(),c.beginPath(),c.arc(0,q-30,s,0,2*Math.PI),c.fill(),c.closePath()}else b._clearCapture()},getMergedData:function(){var a,b=this.interactCaptureLayer.canvasEl,c=this.interactCaptureLayer.canvasCtx;this.deactiveInteract();for(var d=1;d<this.layers.length;d++){var e=this.layers[d].canvasEl;c.drawImage(e,0,0)}return a=b.toDataURL("image/png"),this._clearCapture(),a}},{}),f},{requires:["node","dom","base"]});