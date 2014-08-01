/*!build time : 2.0.04-07-17 11:19:54 AM*/
var JSZip=function(a,b){this.files={},this.root="",a&&this.load(a,b)};JSZip.signature={LOCAL_FILE_HEADER:"PK",CENTRAL_FILE_HEADER:"PK",CENTRAL_DIRECTORY_END:"PK",ZIP64_CENTRAL_DIRECTORY_LOCATOR:"PK",ZIP64_CENTRAL_DIRECTORY_END:"PK",DATA_DESCRIPTOR:"PK\b"},JSZip.defaults={base64:!1,binary:!1,dir:!1,date:null,compression:null},JSZip.support={arraybuffer:function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array}(),nodebuffer:function(){return"undefined"!=typeof Buffer}(),uint8array:function(){return"undefined"!=typeof Uint8Array}(),blob:function(){if("undefined"==typeof ArrayBuffer)return!1;var a=new ArrayBuffer(0);try{return 0===new Blob([a],{type:"application/zip"}).size}catch(b){}try{var c=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,d=new c;return d.append(a),0===d.getBlob("application/zip").size}catch(b){}return!1}()},JSZip.prototype=function(){var a,b;JSZip.support.uint8array&&"function"==typeof TextEncoder&&"function"==typeof TextDecoder&&(a=new TextEncoder("utf-8"),b=new TextDecoder("utf-8"));var c=function(a){if(a._data instanceof JSZip.CompressedObject&&(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,"uint8array"===JSZip.utils.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&&a._data.set(b,0)}return a._data},d=function(b){var d=c(b),e=JSZip.utils.getTypeOf(d);if("string"===e){if(!b.options.binary){if(a)return a.encode(d);if(JSZip.support.nodebuffer)return new Buffer(d,"utf-8")}return b.asBinary()}return d},e=function(a){var b=c(this);return null===b||"undefined"==typeof b?"":(this.options.base64&&(b=JSZip.base64.decode(b)),b=a&&this.options.binary?JSZip.prototype.utf8decode(b):JSZip.utils.transformTo("string",b),a||this.options.binary||(b=JSZip.prototype.utf8encode(b)),b)},f=function(a,b,c){this.name=a,this._data=b,this.options=c};f.prototype={asText:function(){return e.call(this,!0)},asBinary:function(){return e.call(this,!1)},asNodeBuffer:function(){var a=d(this);return JSZip.utils.transformTo("nodebuffer",a)},asUint8Array:function(){var a=d(this);return JSZip.utils.transformTo("uint8array",a)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var g=function(a,b){var c,d="";for(c=0;b>c;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},h=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},i=function(a){return a=a||{},a.base64===!0&&null==a.binary&&(a.binary=!0),a=h(a,JSZip.defaults),a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),a},j=function(a,b,c){var d=k(a),e=JSZip.utils.getTypeOf(b);if(d&&l.call(this,d),c=i(c),c.dir||null===b||"undefined"==typeof b)c.base64=!1,c.binary=!1,b=null;else if("string"===e)c.binary&&!c.base64&&c.optimizedBinaryString!==!0&&(b=JSZip.utils.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(e||b instanceof JSZip.CompressedObject))throw new Error("The data of '"+a+"' is in an unsupported format !");"arraybuffer"===e&&(b=JSZip.utils.transformTo("uint8array",b))}var g=new f(a,b,c);return this.files[a]=g,g},k=function(a){"/"==a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},l=function(a){return"/"!=a.slice(-1)&&(a+="/"),this.files[a]||j.call(this,a,null,{dir:!0}),this.files[a]},m=function(a,b){var c,e=new JSZip.CompressedObject;return a._data instanceof JSZip.CompressedObject?(e.uncompressedSize=a._data.uncompressedSize,e.crc32=a._data.crc32,0===e.uncompressedSize||a.options.dir?(b=JSZip.compressions.STORE,e.compressedContent="",e.crc32=0):a._data.compressionMethod===b.magic?e.compressedContent=a._data.getCompressedContent():(c=a._data.getContent(),e.compressedContent=b.compress(JSZip.utils.transformTo(b.compressInputType,c)))):(c=d(a),(!c||0===c.length||a.options.dir)&&(b=JSZip.compressions.STORE,c=""),e.uncompressedSize=c.length,e.crc32=this.crc32(c),e.compressedContent=b.compress(JSZip.utils.transformTo(b.compressInputType,c))),e.compressedSize=e.compressedContent.length,e.compressionMethod=b.magic,e},n=function(a,b,c,d){var e,f,h=(c.compressedContent,this.utf8encode(b.name)),i=h!==b.name,j=b.options;e=j.date.getHours(),e<<=6,e|=j.date.getMinutes(),e<<=5,e|=j.date.getSeconds()/2,f=j.date.getFullYear()-1980,f<<=4,f|=j.date.getMonth()+1,f<<=5,f|=j.date.getDate();var k="";k+="\n\x00",k+=i?"\x00\b":"\x00\x00",k+=c.compressionMethod,k+=g(e,2),k+=g(f,2),k+=g(c.crc32,4),k+=g(c.compressedSize,4),k+=g(c.uncompressedSize,4),k+=g(h.length,2),k+="\x00\x00";var l=JSZip.signature.LOCAL_FILE_HEADER+k+h,m=JSZip.signature.CENTRAL_FILE_HEADER+"\x00"+k+"\x00\x00\x00\x00\x00\x00"+(b.options.dir===!0?"\x00\x00\x00":"\x00\x00\x00\x00")+g(d,4)+h;return{fileRecord:l,dirRecord:m,compressedObject:c}},o=function(){this.data=[]};o.prototype={append:function(a){a=JSZip.utils.transformTo("string",a),this.data.push(a)},finalize:function(){return this.data.join("")}};var p=function(a){this.data=new Uint8Array(a),this.index=0};return p.prototype={append:function(a){0!==a.length&&(a=JSZip.utils.transformTo("uint8array",a),this.data.set(a,this.index),this.index+=a.length)},finalize:function(){return this.data}},{load:function(){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(a){var b,c,d,e,g=[];for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],e=new f(d.name,d._data,h(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&&a(c,e)&&g.push(e));return g},file:function(a,b,c){if(1===arguments.length){if(JSZip.utils.isRegExp(a)){var d=a;return this.filter(function(a,b){return!b.options.dir&&d.test(a)})}return this.filter(function(b,c){return!c.options.dir&&b===a})[0]||null}return a=this.root+a,j.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(JSZip.utils.isRegExp(a))return this.filter(function(b,c){return c.options.dir&&a.test(b)});var b=this.root+a,c=l.call(this,b),d=this.clone();return d.root=c.name,d},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!=a.slice(-1)&&(a+="/"),b=this.files[a]),b)if(b.options.dir)for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];else delete this.files[a];return this},generate:function(a){a=h(a||{},{base64:!0,compression:"STORE",type:"base64"}),JSZip.utils.checkSupport(a.type);var b,c,d=[],e=0,f=0;for(var i in this.files)if(this.files.hasOwnProperty(i)){var j=this.files[i],k=j.options.compression||a.compression.toUpperCase(),l=JSZip.compressions[k];if(!l)throw new Error(k+" is not a valid compression method !");var q=m.call(this,j,l),r=n.call(this,i,j,q,e);e+=r.fileRecord.length+q.compressedSize,f+=r.dirRecord.length,d.push(r)}var s="";switch(s=JSZip.signature.CENTRAL_DIRECTORY_END+"\x00\x00\x00\x00"+g(d.length,2)+g(d.length,2)+g(f,4)+g(e,4)+"\x00\x00",a.type.toLowerCase()){case"uint8array":case"arraybuffer":case"blob":case"nodebuffer":b=new p(e+f+s.length);break;default:b=new o(e+f+s.length)}for(c=0;c<d.length;c++)b.append(d[c].fileRecord),b.append(d[c].compressedObject.compressedContent);for(c=0;c<d.length;c++)b.append(d[c].dirRecord);b.append(s);var t=b.finalize();switch(a.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return JSZip.utils.transformTo(a.type.toLowerCase(),t);case"blob":return JSZip.utils.arrayBuffer2Blob(JSZip.utils.transformTo("arraybuffer",t));case"base64":return a.base64?JSZip.base64.encode(t):t;default:return t}},crc32:function(a,b){if("undefined"==typeof a||!a.length)return 0;var c="string"!==JSZip.utils.getTypeOf(a),d=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772.0.05230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2.0.01677639,325883990,1684777152,42.0.0122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,12.0.0953886,3579855332,2724688242.0.0006888145,1258607687,352.0.001629,2768942443,901097722.0.0119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882.0.06665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2.0.03776290,2.0.0722036,2.0.07215374,3775830040,2137656763,141376813,2439277719,38652.0.0297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532.0.06586582.0.0,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522.0.05,1591671054,702138776,2966460450,3352799412.0.0504918807,783551873,3082640443,3233442989,3988292384,2596254646,62.0.07068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,382.0.075755,2466906013,167816743,2097651377,4027552580,2265490386,503444072.0.0762050814,4150417245,2154129355,426522225,1852507879,4275313526,2.0.02.0.07920,282753626,1742555852,4189708143,2394877945,397917763,162.0.083637,3604390888,2.0.04866558,953729732.0.0340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462.0.0090812.0.02,3747672003,2825379669,82932.0.035,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,15552.0.0956,3268935591,3050360625,752459403,15413202.0.0,2607071920,3965973030,1969922972,40735498,2.0.07837225,3943577151,1913087877,83908371,2.0.02341634,3803740692,2075208622,2132.0.0112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,413932.0.015,1873836001,414664567,2282248934,4279200368,1711684554,2852.0.0116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,12.0.0636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];"undefined"==typeof b&&(b=0);var e=0,f=0,g=0;b=-1^b;for(var h=0,i=a.length;i>h;h++)g=c?a[h]:a.charCodeAt(h),f=255&(b^g),e=d[f],b=b>>>8^e;return-1^b},clone:function(){var a=new JSZip;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a},utf8encode:function(b){if(a){var c=a.encode(b);return JSZip.utils.transformTo("string",c)}if(JSZip.support.nodebuffer)return JSZip.utils.transformTo("string",new Buffer(b,"utf-8"));for(var d=[],e=0,f=0;f<b.length;f++){var g=b.charCodeAt(f);128>g?d[e++]=String.fromCharCode(g):g>127&&2048>g?(d[e++]=String.fromCharCode(g>>6|192),d[e++]=String.fromCharCode(63&g|128)):(d[e++]=String.fromCharCode(g>>12|224),d[e++]=String.fromCharCode(g>>6&63|128),d[e++]=String.fromCharCode(63&g|128))}return d.join("")},utf8decode:function(a){var c=[],d=0,e=JSZip.utils.getTypeOf(a),f="string"!==e,g=0,h=0,i=0,j=0;if(b)return b.decode(JSZip.utils.transformTo("uint8array",a));if(JSZip.support.nodebuffer)return JSZip.utils.transformTo("nodebuffer",a).toString("utf-8");for(;g<a.length;)h=f?a[g]:a.charCodeAt(g),128>h?(c[d++]=String.fromCharCode(h),g++):h>191&&224>h?(i=f?a[g+1]:a.charCodeAt(g+1),c[d++]=String.fromCharCode((31&h)<<6|63&i),g+=2):(i=f?a[g+1]:a.charCodeAt(g+1),j=f?a[g+2]:a.charCodeAt(g+2),c[d++]=String.fromCharCode((15&h)<<12|(63&i)<<6|63&j),g+=3);return c.join("")}}}(),JSZip.compressions={STORE:{magic:"\x00\x00",compress:function(a){return a},uncompress:function(a){return a},compressInputType:null,uncompressInputType:null}},function(){function a(a){return a}function b(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function c(a){var b=65536,c=[],d=a.length,e=JSZip.utils.getTypeOf(a),f=0,g=!0;try{switch(e){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));break;case"nodebuffer":String.fromCharCode.apply(null,new Buffer(0))}}catch(h){g=!1}if(!g){for(var i="",j=0;j<a.length;j++)i+=String.fromCharCode(a[j]);return i}for(;d>f&&b>1;)try{"array"===e||"nodebuffer"===e?c.push(String.fromCharCode.apply(null,a.slice(f,Math.min(f+b,d)))):c.push(String.fromCharCode.apply(null,a.subarray(f,Math.min(f+b,d)))),f+=b}catch(h){b=Math.floor(b/2)}return c.join("")}function d(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];return b}JSZip.utils={string2binary:function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(255&a.charCodeAt(c));return b},string2Uint8Array:function(a){return JSZip.utils.transformTo("uint8array",a)},uint8Array2String:function(a){return JSZip.utils.transformTo("string",a)},arrayBuffer2Blob:function(a){JSZip.utils.checkSupport("blob");try{return new Blob([a],{type:"application/zip"})}catch(b){}try{var c=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,d=new c;return d.append(a),d.getBlob("application/zip")}catch(b){}throw new Error("Bug : can't construct the Blob.")},string2Blob:function(a){var b=JSZip.utils.transformTo("arraybuffer",a);return JSZip.utils.arrayBuffer2Blob(b)}};var e={};e.string={string:a,array:function(a){return b(a,new Array(a.length))},arraybuffer:function(a){return e.string.uint8array(a).buffer},uint8array:function(a){return b(a,new Uint8Array(a.length))},nodebuffer:function(a){return b(a,new Buffer(a.length))}},e.array={string:c,array:a,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return new Buffer(a)}},e.arraybuffer={string:function(a){return c(new Uint8Array(a))},array:function(a){return d(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:a,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return new Buffer(new Uint8Array(a))}},e.uint8array={string:c,array:function(a){return d(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:a,nodebuffer:function(a){return new Buffer(a)}},e.nodebuffer={string:c,array:function(a){return d(a,new Array(a.length))},arraybuffer:function(a){return e.nodebuffer.uint8array(a).buffer},uint8array:function(a){return d(a,new Uint8Array(a.length))},nodebuffer:a},JSZip.utils.transformTo=function(a,b){if(b||(b=""),!a)return b;JSZip.utils.checkSupport(a);var c=JSZip.utils.getTypeOf(b),d=e[c][a](b);return d},JSZip.utils.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":JSZip.support.nodebuffer&&Buffer.isBuffer(a)?"nodebuffer":JSZip.support.uint8array&&a instanceof Uint8Array?"uint8array":JSZip.support.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},JSZip.utils.isRegExp=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)},JSZip.utils.checkSupport=function(a){var b=!0;switch(a.toLowerCase()){case"uint8array":b=JSZip.support.uint8array;break;case"arraybuffer":b=JSZip.support.arraybuffer;break;case"nodebuffer":b=JSZip.support.nodebuffer;break;case"blob":b=JSZip.support.blob}if(!b)throw new Error(a+" is not supported by this browser")}}(),function(){JSZip.CompressedObject=function(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null},JSZip.CompressedObject.prototype={getContent:function(){return null},getCompressedContent:function(){return null}}}(),JSZip.base64=function(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:function(b){for(var c,d,e,f,g,h,i,j="",k=0;k<b.length;)c=b.charCodeAt(k++),d=b.charCodeAt(k++),e=b.charCodeAt(k++),f=c>>2,g=(3&c)<<4|d>>4,h=(15&d)<<2|e>>6,i=63&e,isNaN(d)?h=i=64:isNaN(e)&&(i=64),j=j+a.charAt(f)+a.charAt(g)+a.charAt(h)+a.charAt(i);return j},decode:function(b){var c,d,e,f,g,h,i,j="",k=0;for(b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<b.length;)f=a.indexOf(b.charAt(k++)),g=a.indexOf(b.charAt(k++)),h=a.indexOf(b.charAt(k++)),i=a.indexOf(b.charAt(k++)),c=f<<2|g>>4,d=(15&g)<<4|h>>2,e=(3&h)<<6|i,j+=String.fromCharCode(c),64!=h&&(j+=String.fromCharCode(d)),64!=i&&(j+=String.fromCharCode(e));return j}}}();