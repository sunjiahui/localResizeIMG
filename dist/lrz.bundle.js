!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(i,o){for(var a,s,l=0,u=[];l<i.length;l++)s=i[l],r[s]&&u.push.apply(u,r[s]),r[s]=0;for(a in o)e[a]=o[a];for(n&&n(i,o);u.length;)u.shift().call(null,t)};var i={},r={0:0};return t.e=function(e,n){if(0===r[e])return n.call(null,t);if(void 0!==r[e])r[e].push(n);else{r[e]=[n];var i=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=t.p+""+({}[e]||e)+".chunk.js",i.appendChild(o)}},t.m=e,t.c=i,t.p="",t(0)}([function(e,t,n){function i(e,t){var n=this;if(!e)throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");t=t||{},n.defaults={width:null,height:null,minWidth:null,minHeight:null,customSize:null,fieldName:"file",quality:.7,wxLocalFile:!1,imageType:"jpeg",reserveOpacity:!1},n.file=e;for(var i in t)t.hasOwnProperty(i)&&(n.defaults[i]=t[i]);return this.init()}function r(e){var t=null;return t=e?[].filter.call(document.scripts,function(t){return t.src.indexOf(e)!==-1})[0]:document.scripts[document.scripts.length-1],t?t.src.substr(0,t.src.lastIndexOf("/")):null}function o(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],i=new Uint8Array(t.length),r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return new s.Blob([i.buffer],{type:n})}n.p=r("lrz")+"/",window.URL=window.URL||window.webkitURL;var a=n(1),s=n(4),l=n(5),u=function(e){var t=/OS (\d)_.* like Mac OS X/g.exec(e),n=/Android (\d.*?);/g.exec(e)||/Android\/(\d.*?) /g.exec(e);return{oldIOS:!!t&&+t.pop()<8,oldAndroid:!!n&&+n.pop().substr(0,3)<4.5,iOS:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e),android:/Android/g.test(e),mQQBrowser:/MQQBrowser/g.test(e)}}(navigator.userAgent);i.prototype.init=function(){var e=this,t=e.file,n="string"==typeof t,i=/^data:/.test(t),r=new Image,l=document.createElement("canvas"),u=n?t:URL.createObjectURL(t);if(e.img=r,e.blob=u,e.canvas=l,n?e.fileName=i?"base64.jpg":t.split("/").pop():e.fileName=t.name,!document.createElement("canvas").getContext)throw new Error("浏览器不支持canvas");return new a(function(n,a){r.onerror=function(){throw new Error("加载图片文件失败")},r.onload=function(){e._getBase64().then(function(e){return e.length<10&&a("生成base64失败"),e}).then(function(i){var r=null;"object"==typeof e.file&&i.length>e.file.size?(r=new FormData,t=e.file):(r=new s.FormData,t=o(i)),r.append(e.defaults.fieldName,t,e.fileName.replace(/\..+/g,".jpg")),n({formData:r,fileLen:+t.size,base64:i,base64Len:i.length,origin:e.file,file:t});for(var a in e)e.hasOwnProperty(a)&&(e[a]=null);URL.revokeObjectURL(e.blob)})},!i&&!e.defaults.wxLocalFile&&(r.crossOrigin="*"),r.src=u})},i.prototype._getBase64=function(){var e=this,t=e.defaults,n=e.img,i=e.file,r=e.canvas;return new a(function(o){try{l.getData("object"==typeof i?i:n,function(){e.orientation=l.getTag(this,"Orientation"),e.resize=e._getResize(),e.ctx=r.getContext("2d"),r.width=e.resize.width,r.height=e.resize.height,t.reserveOpacity||(e.ctx.fillStyle="#fff",e.ctx.fillRect(0,0,r.width,r.height)),u.oldIOS?e._createBase64ForOldIOS().then(o):e._createBase64().then(o)})}catch(a){throw new Error(a)}})},i.prototype._createBase64ForOldIOS=function(){var e=this,t=e.img,i=e.canvas,r=e.defaults,o=e.orientation;return new a(function(e){n.e(1,function(n){var a=[n(6)];(function(n){var a=new n(t);"5678".indexOf(o)>-1?a.render(i,{width:i.height,height:i.width,orientation:o}):a.render(i,{width:i.width,height:i.height,orientation:o}),e(i.toDataURL("image/"+r.imageType,r.quality))}).apply(null,a)})})},i.prototype._createBase64=function(){var e=this,t=e.resize,i=e.img,r=e.canvas,o=e.ctx,s=e.defaults,l=e.orientation;switch(l){case 3:o.rotate(180*Math.PI/180),o.drawImage(i,-t.width,-t.height,t.width,t.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(i,0,-t.width,t.height,t.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(i,-t.height,0,t.height,t.width);break;case 2:o.translate(t.width,0),o.scale(-1,1),o.drawImage(i,0,0,t.width,t.height);break;case 4:o.translate(t.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(i,-t.width,-t.height,t.width,t.height);break;case 5:o.translate(t.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(i,0,-t.width,t.height,t.width);break;case 7:o.translate(t.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(i,-t.height,0,t.height,t.width);break;default:o.drawImage(i,0,0,t.width,t.height)}return new a(function(e){"png"==s.imageType?e(r.toDataURL("image/png")):u.oldAndroid||u.mQQBrowser||!navigator.userAgent?n.e(2,function(t){var n=[t(7)];(function(t){var n=new t,i=o.getImageData(0,0,r.width,r.height);e(n.encode(i,100*s.quality))}).apply(null,n)}):e(r.toDataURL("image/"+s.imageType,s.quality))})},i.prototype._getMaxSize=function(e,t,n){var i={width:e,height:t},r=n.width,o=n.height;if(i.width<r||i.height<o)return i;var a=i.width/i.height;for(r&&o?a>=r/o?i.width>r&&(i.width=r,i.height=Math.ceil(r/a)):i.height>o&&(i.height=o,i.width=Math.ceil(o*a)):r?r<i.width&&(i.width=r,i.height=Math.ceil(r/a)):o&&o<i.height&&(i.width=Math.ceil(o*a),i.height=o);i.width>=3264||i.height>=2448;)i.width*=.8,i.height*=.8;return i},i.prototype._getMinSize=function(e,t,n){var i={width:e,height:t},r=n.minWidth,o=n.minHeight,a=i.width/i.height;for(r&&o?a>=r/o?(i.height=o,i.width=Math.ceil(i.height*a)):(i.width=r,i.height=Math.ceil(i.width/a)):r?(i.width=r,i.height=Math.ceil(i.width/a)):o&&(i.height=o,i.width=Math.ceil(i.height*a));i.width>=3264||i.height>=2448;)i.width*=.8,i.height*=.8;return i},i.prototype._getResize=function(){var e=this,t=e.img,n=e.defaults,i=n.width,r=n.height,o=e.orientation,a={width:t.width,height:t.height};if("5678".indexOf(o)>-1&&(a.width=t.height,a.height=t.width),i||r?a=this._getMaxSize(a.width,a.height,n):n.minWidth||n.minHeight?a=this._getMinSize(a.width,a.height,n):n.customSize&&(a=n.customSize(a.width,a.height,n)),a.width<i||a.height<r)return a;var s=a.width/a.height;for(i&&r?s>=i/r?a.width>i&&(a.width=i,a.height=Math.ceil(i/s)):a.height>r&&(a.height=r,a.width=Math.ceil(r*s)):i?i<a.width&&(a.width=i,a.height=Math.ceil(i/s)):r&&r<a.height&&(a.width=Math.ceil(r*s),a.height=r);a.width>=3264||a.height>=2448;)a.width*=.8,a.height*=.8;return a},window.lrz=function(e,t){return new i(e,t)},window.lrz.version="4.9.36",e.exports=window.lrz},function(e,t,n){(function(t){!function(n){function i(e,t){return function(){e.apply(t,arguments)}}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],c(e,i(a,this),i(s,this))}function o(e){var t=this;return null===this._state?void this._deferreds.push(e):void h(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var i;try{i=n(t._value)}catch(r){return void e.reject(r)}e.resolve(i)})}function a(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void c(i(t,e),i(a,this),i(s,this))}this._state=!0,this._value=e,l.call(this)}catch(n){s.call(this,n)}}function s(e){this._state=!1,this._value=e,l.call(this)}function l(){for(var e=0,t=this._deferreds.length;e<t;e++)o.call(this,this._deferreds[e]);this._deferreds=null}function u(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function c(e,t,n){var i=!1;try{e(function(e){i||(i=!0,t(e))},function(e){i||(i=!0,n(e))})}catch(r){if(i)return;i=!0,n(r)}}var h="function"==typeof t&&t||function(e){setTimeout(e,1)},d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};r.prototype["catch"]=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=this;return new r(function(i,r){o.call(n,new u(e,t,i,r))})},r.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&d(arguments[0])?arguments[0]:arguments);return new r(function(t,n){function i(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){i(o,e)},n)}e[o]=a,0===--r&&t(e)}catch(l){n(l)}}if(0===e.length)return t([]);for(var r=e.length,o=0;o<e.length;o++)i(o,e[o])})},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var i=0,r=e.length;i<r;i++)e[i].then(t,n)})},r._setImmediateFn=function(e){h=e},r.prototype.always=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},"undefined"!=typeof e&&e.exports?e.exports=r:n.Promise||(n.Promise=r)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){(function(e,i){function r(e,t){this._id=e,this._clearFn=t}var o=n(3).nextTick,a=Function.prototype.apply,s=Array.prototype.slice,l={},u=0;t.setTimeout=function(){return new r(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=u++,i=!(arguments.length<2)&&s.call(arguments,1);return l[n]=!0,o(function(){l[n]&&(i?e.apply(null,i):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof i?i:function(e){delete l[e]}}).call(t,n(2).setImmediate,n(2).clearImmediate)},function(e,t){function n(e){if(l===setTimeout)return setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(u===clearTimeout)return clearTimeout(e);try{return u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}function r(){f&&h&&(f=!1,h.length?d=h.concat(d):g=-1,d.length&&o())}function o(){if(!f){var e=n(r);f=!0;for(var t=d.length;t;){for(h=d,d=[];++g<t;)h&&h[g].run();g=-1,t=d.length}h=null,f=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function s(){}var l,u,c=e.exports={};!function(){try{l=setTimeout}catch(e){l=function(){throw new Error("setTimeout is not defined")}}try{u=clearTimeout}catch(e){u=function(){throw new Error("clearTimeout is not defined")}}}();var h,d=[],f=!1,g=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];d.push(new a(e,t)),1!==d.length||f||n(o)},a.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(e,t){function n(){var e=~navigator.userAgent.indexOf("Android")&&~navigator.vendor.indexOf("Google")&&!~navigator.userAgent.indexOf("Chrome");return e&&navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop()<=534||/MQQBrowser/g.test(navigator.userAgent)}var i=function(){try{return new Blob,!0}catch(e){return!1}}()?window.Blob:function(e,t){var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.MozBlobBuilder);return e.forEach(function(e){n.append(e)}),n.getBlob(t?t.type:void 0)},r=function(){var e=0;return function(){var t=this,n=[],r=Array(21).join("-")+(+new Date*(1e16*Math.random())).toString(36),o=XMLHttpRequest.prototype.send;this.getParts=function(){return n.toString()},this.append=function(e,t,i){n.push("--"+r+'\r\nContent-Disposition: form-data; name="'+e+'"'),t instanceof Blob?(n.push('; filename="'+(i||"blob")+'"\r\nContent-Type: '+t.type+"\r\n\r\n"),n.push(t)):n.push("\r\n\r\n"+t),n.push("\r\n")},e++,XMLHttpRequest.prototype.send=function(a){var s,l,u=this;a===t?(n.push("--"+r+"--\r\n"),l=new i(n),s=new FileReader,s.onload=function(){o.call(u,s.result)},s.onerror=function(e){throw e},s.readAsArrayBuffer(l),this.setRequestHeader("Content-Type","multipart/form-data; boundary="+r),e--,0==e&&(XMLHttpRequest.prototype.send=o)):o.call(this,a)}}}();e.exports={Blob:i,FormData:n()?r:FormData}},function(e,t,n){var i,r;(function(){function n(e){return!!e.exifdata}function o(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),i=n.length,r=new ArrayBuffer(i),o=new Uint8Array(r),a=0;a<i;a++)o[a]=n.charCodeAt(a);return r}function a(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}function s(e,t){function n(n){var i=l(n),r=u(n);e.exifdata=i||{},e.iptcdata=r||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var i=o(e.src);n(i)}else if(/^blob\:/i.test(e.src)){var r=new FileReader;r.onload=function(e){n(e.target.result)},a(e.src,function(e){r.readAsArrayBuffer(e)})}else{var s=new XMLHttpRequest;s.onload=function(){200==this.status||0===this.status?n(s.response):t(new Error("Could not load image")),s=null},s.open("GET",e.src,!0),s.responseType="arraybuffer",s.send(null)}else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var r=new FileReader;r.onload=function(e){p&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},r.readAsArrayBuffer(e)}}function l(e){var t=new DataView(e);if(p&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return p&&console.log("Not a valid JPEG"),!1;for(var n,i=2,r=e.byteLength;i<r;){if(255!=t.getUint8(i))return p&&console.log("Not a valid marker at offset "+i+", found: "+t.getUint8(i)),!1;if(n=t.getUint8(i+1),p&&console.log(n),225==n)return p&&console.log("Found 0xFFE1 marker"),g(t,i+4,t.getUint16(i+2)-2);i+=2+t.getUint16(i+2)}}function u(e){var t=new DataView(e);if(p&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return p&&console.log("Not a valid JPEG"),!1;for(var n=2,i=e.byteLength,r=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};n<i;){if(r(t,n)){var o=t.getUint8(n+7);o%2!==0&&(o+=1),0===o&&(o=4);var a=n+8+o,s=t.getUint16(n+6+o);return c(e,a,s)}n++}}function c(e,t,n){for(var i,r,o,a,s,l=new DataView(e),u={},c=t;c<t+n;)28===l.getUint8(c)&&2===l.getUint8(c+1)&&(a=l.getUint8(c+2),a in b&&(o=l.getInt16(c+3),s=o+5,r=b[a],i=f(l,c+5,o),u.hasOwnProperty(r)?u[r]instanceof Array?u[r].push(i):u[r]=[u[r],i]:u[r]=i)),c++;return u}function h(e,t,n,i,r){var o,a,s,l=e.getUint16(n,!r),u={};for(s=0;s<l;s++)o=n+12*s+2,a=i[e.getUint16(o,!r)],!a&&p&&console.log("Unknown tag: "+e.getUint16(o,!r)),u[a]=d(e,o,t,n,r);return u}function d(e,t,n,i,r){var o,a,s,l,u,c,h=e.getUint16(t+2,!r),d=e.getUint32(t+4,!r),g=e.getUint32(t+8,!r)+n;switch(h){case 1:case 7:if(1==d)return e.getUint8(t+8,!r);for(o=d>4?g:t+8,a=[],l=0;l<d;l++)a[l]=e.getUint8(o+l);return a;case 2:return o=d>4?g:t+8,f(e,o,d-1);case 3:if(1==d)return e.getUint16(t+8,!r);for(o=d>2?g:t+8,a=[],l=0;l<d;l++)a[l]=e.getUint16(o+2*l,!r);return a;case 4:if(1==d)return e.getUint32(t+8,!r);for(a=[],l=0;l<d;l++)a[l]=e.getUint32(g+4*l,!r);return a;case 5:if(1==d)return u=e.getUint32(g,!r),c=e.getUint32(g+4,!r),s=new Number(u/c),s.numerator=u,s.denominator=c,s;for(a=[],l=0;l<d;l++)u=e.getUint32(g+8*l,!r),c=e.getUint32(g+4+8*l,!r),a[l]=new Number(u/c),a[l].numerator=u,a[l].denominator=c;return a;case 9:if(1==d)return e.getInt32(t+8,!r);for(a=[],l=0;l<d;l++)a[l]=e.getInt32(g+4*l,!r);return a;case 10:if(1==d)return e.getInt32(g,!r)/e.getInt32(g+4,!r);for(a=[],l=0;l<d;l++)a[l]=e.getInt32(g+8*l,!r)/e.getInt32(g+4+8*l,!r);return a}}function f(e,t,n){var i,r="";for(i=t;i<t+n;i++)r+=String.fromCharCode(e.getUint8(i));return r}function g(e,t){if("Exif"!=f(e,t,4))return p&&console.log("Not valid EXIF data! "+f(e,t,4)),!1;var n,i,r,o,a,s=t+6;if(18761==e.getUint16(s))n=!1;else{if(19789!=e.getUint16(s))return p&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(s+2,!n))return p&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var l=e.getUint32(s+4,!n);if(l<8)return p&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(s+4,!n)),!1;if(i=h(e,s,s+l,y,n),i.ExifIFDPointer){o=h(e,s,s+i.ExifIFDPointer,w,n);for(r in o){switch(r){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[r]=S[r][o[r]];break;case"ExifVersion":case"FlashpixVersion":o[r]=String.fromCharCode(o[r][0],o[r][1],o[r][2],o[r][3]);break;case"ComponentsConfiguration":o[r]=S.Components[o[r][0]]+S.Components[o[r][1]]+S.Components[o[r][2]]+S.Components[o[r][3]]}i[r]=o[r]}}if(i.GPSInfoIFDPointer){a=h(e,s,s+i.GPSInfoIFDPointer,v,n);for(r in a){switch(r){case"GPSVersionID":a[r]=a[r][0]+"."+a[r][1]+"."+a[r][2]+"."+a[r][3]}i[r]=a[r]}}return i}var p=!1,m=function(e){return e instanceof m?e:this instanceof m?void(this.EXIFwrapped=e):new m(e)};"undefined"!=typeof e&&e.exports&&(t=e.exports=m),t.EXIF=m;var w=m.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},y=m.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},v=m.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},S=m.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},b={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};m.getData=function(e,t){return!((e instanceof Image||e instanceof HTMLImageElement)&&!e.complete)&&(n(e)?t&&t.call(e):s(e,t),!0)},m.getTag=function(e,t){if(n(e))return e.exifdata[t]},m.getAllTags=function(e){if(!n(e))return{};var t,i=e.exifdata,r={};for(t in i)i.hasOwnProperty(t)&&(r[t]=i[t]);return r},m.pretty=function(e){if(!n(e))return"";var t,i=e.exifdata,r="";for(t in i)i.hasOwnProperty(t)&&(r+="object"==typeof i[t]?i[t]instanceof Number?t+" : "+i[t]+" ["+i[t].numerator+"/"+i[t].denominator+"]\r\n":t+" : ["+i[t].length+" values]\r\n":t+" : "+i[t]+"\r\n");return r},m.readFromBinaryFile=function(e){return l(e)},i=[],r=function(){return m}.apply(t,i),!(void 0!==r&&(e.exports=r))}).call(this)}])});
//# sourceMappingURL=lrz.bundle.js.map