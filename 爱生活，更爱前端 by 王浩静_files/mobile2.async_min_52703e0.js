define("page/mobile/mobile2.async",function(n){(function(){var e,o,i,t,r,c,d,a,p,s;n("animation/page-animation.async.css"),n("page/mobile/mobile2.async.less"),c=n("qrCode/zepto.qrCode"),e=n("zepto"),r=n("common"),o=e(document.documentElement),t=e("#wrapper"),i=e("#desktop-entrance"),s=function(){return window.isPC&&!r.bom.getHash("no-qr-code")?(p(),d(),a()):void 0},p=function(){var n,o;return o=e('<div id="qr-code-wrapper" class="qr-code-wrapper"><div id="qr-code" class="qr-code"></div><p>世界这么大<br/>扫一扫有惊喜</p>'),o.appendTo(t),n=o.find(".qr-code"),n.qrcode({text:location.href,width:n.width(),height:n.height()})},d=function(){var n;return n=e('<div id="control-panel-wrapper" class="control-panel-wrapper"><div class="btn btn-prev"></div><div class="btn btn-next"></div></div>'),n.appendTo(t),n.on("click",".btn-prev",function(){return"function"==typeof window.prevPage?window.prevPage():void 0}),n.on("click",".btn-next",function(){return"function"==typeof window.nextPage?window.nextPage():void 0})},a=function(){return i.show()},s()}).call(this)});
;define('animation/page-animation.async.css', function(require, exports, module){function importStyle(css, id) {    var ele = document.createElement('style');    ele.id = id;    document.getElementsByTagName('head')[0].appendChild(ele);    if (ele.styleSheet) {        ele.styleSheet.cssText = css;    } else {        ele.appendChild(document.createTextNode(css));    }}; importStyle(".pt-page-onTop{z-index:10}.pt-page-moveOutUp{-webkit-animation:page-moveOutUp .8s ease both;animation:page-moveOutUp .8s ease both}.pt-page-moveInUp{-webkit-animation:page-moveInUp .8s ease both;animation:page-moveInUp .8s ease both}.pt-page-moveOutDown{-webkit-animation:page-moveOutDown .8s ease both;animation:page-moveOutDown .8s ease both}.pt-page-moveInDown{-webkit-animation:page-moveInDown .8s ease both;animation:page-moveInDown .8s ease both}@-webkit-keyframes page-moveInUp{from{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes page-moveInUp{from{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes page-moveOutUp{to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes page-moveOutUp{to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes page-moveOutDown{to{-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes page-moveOutDown{to{-webkit-transform:translateY(100%);transform:translateY(100%)}}@-webkit-keyframes page-moveInDown{from{-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes page-moveInDown{from{-webkit-transform:translateY(100%);transform:translateY(100%)}}.pt-page-fadeOutUp{-webkit-animation:page-fadeOutUp .8s ease both;animation:page-fadeOutUp .8s ease both}.pt-page-fadeInUp{-webkit-animation:page-fadeInUp .8s ease both;animation:page-fadeInUp .8s ease both}.pt-page-fadeOutDown{-webkit-animation:page-fadeOutDown .8s ease both;animation:page-fadeOutDown .8s ease both}.pt-page-fadeInDown{-webkit-animation:page-fadeInDown .8s ease both;animation:page-fadeInDown .8s ease both}@-webkit-keyframes page-fadeOutUp{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes page-fadeOutUp{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes page-fadeInUp{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes page-fadeInUp{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes page-fadeOutDown{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes page-fadeOutDown{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(100%);transform:translateY(100%)}}@-webkit-keyframes page-fadeInDown{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes page-fadeInDown{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(100%);transform:translateY(100%)}}.pt-page-carouselOutUp{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:rotateCarouselTopOut .8s both ease;animation:rotateCarouselTopOut .8s both ease}.pt-page-carouselInDown{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:rotateCarouselTopIn .8s both ease;animation:rotateCarouselTopIn .8s both ease}.pt-page-carouselOutDown{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:rotateCarouselBottomOut .8s both ease;animation:rotateCarouselBottomOut .8s both ease}.pt-page-carouselInUp{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:rotateCarouselBottomIn .8s both ease;animation:rotateCarouselBottomIn .8s both ease}@-webkit-keyframes rotateCarouselTopOut{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-200%) scale(.4);transform:translateY(-200%) scale(.4)}}@keyframes rotateCarouselTopOut{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-200%) scale(.4);transform:translateY(-200%) scale(.4)}}@-webkit-keyframes rotateCarouselTopIn{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(200%) scale(.4);transform:translateY(200%) scale(.4)}}@keyframes rotateCarouselTopIn{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(200%) scale(.4);transform:translateY(200%) scale(.4)}}@-webkit-keyframes rotateCarouselBottomOut{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(200%) scale(.4);transform:translateY(200%) scale(.4)}}@keyframes rotateCarouselBottomOut{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(200%) scale(.4);transform:translateY(200%) scale(.4)}}@-webkit-keyframes rotateCarouselBottomIn{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-200%) scale(.4);transform:translateY(-200%) scale(.4)}}@keyframes rotateCarouselBottomIn{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-200%) scale(.4);transform:translateY(-200%) scale(.4)}}.pt-page-scaleOutUp{-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation:page-scale .8s ease both;animation:page-scale .8s ease both}.pt-page-scaleInUp{-webkit-animation:page-moveInUp .8s ease both;animation:page-moveInUp .8s ease both}.pt-page-scaleOutDown{-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation:page-scale .8s ease both;animation:page-scale .8s ease both}.pt-page-scaleInDown{-webkit-animation:page-moveInDown .8s ease both;animation:page-moveInDown .8s ease both}@-webkit-keyframes page-scale{to{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale(.8)}}@keyframes page-scale{to{opacity:0;filter:alpha(opacity=0);-webkit-transform:scale(.8)}}.pt-page-glueOutUp{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:rotateBottomSideFirst .8s ease both;animation:rotateBottomSideFirst .8s ease both}.pt-page-glueInDown{-webkit-animation:page-moveInDown .8s ease .2s both;animation:page-moveInDown .8s ease .2s both}.pt-page-glueInUp{-webkit-animation:page-moveInUp .8s ease .2s both;animation:page-moveInUp .8s ease .2s both}.pt-page-glueOutDown{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:rotateTopSideFirst .8s ease both;animation:rotateTopSideFirst .8s ease both}@-webkit-keyframes rotateTopSideFirst{30%{opacity:.8;filter:alpha(opacity=80)}100%{-webkit-transform:translateZ(200px) scale(.8) rotateX(20deg);transform:translateZ(200px) scale(.8) rotateX(20deg);opacity:0;filter:alpha(opacity=0)}}@keyframes rotateTopSideFirst{30%{opacity:.8;filter:alpha(opacity=80)}100%{-webkit-transform:translateZ(200px) scale(.8) rotateX(20deg);transform:translateZ(200px) scale(.8) rotateX(20deg);opacity:0;filter:alpha(opacity=0)}}@-webkit-keyframes rotateBottomSideFirst{30%{opacity:.8;filter:alpha(opacity=80)}100%{-webkit-transform:translateZ(200px) scale(.6) rotateX(-20deg);transform:translateZ(200px) scale(.6) rotateX(-20deg);opacity:0;filter:alpha(opacity=0)}}@keyframes rotateBottomSideFirst{30%{opacity:.8;filter:alpha(opacity=80)}100%{-webkit-transform:translateZ(200px) scale(.6) rotateX(-20deg);transform:translateZ(200px) scale(.6) rotateX(-20deg);opacity:0;filter:alpha(opacity=0)}}.pt-page-cvbeOutUp{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:rotateCubeTopOut .8s ease-in both;animation:rotateCubeTopOut .8s ease-in both}.pt-page-cvbeInDown{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:rotateCubeTopIn .8s ease-in both;animation:rotateCubeTopIn .8s ease-in both}@-webkit-keyframes rotateCubeTopIn{0%{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(100%) rotateX(-90deg);transform:translateY(100%) rotateX(-90deg)}50%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:translateY(50%) translateZ(-200px) rotateX(-45deg);transform:translateY(50%) translateZ(-200px) rotateX(-45deg)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateY(0) rotateX(0);transform:translateY(0) rotateX(0)}}@keyframes rotateCubeTopIn{0%{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(100%) rotateX(-90deg);transform:translateY(100%) rotateX(-90deg)}50%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:translateY(50%) translateZ(-200px) rotateX(-45deg);transform:translateY(50%) translateZ(-200px) rotateX(-45deg)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateY(0) rotateX(0);transform:translateY(0) rotateX(0)}}@-webkit-keyframes rotateCubeTopOut{50%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:translateY(-50%) translateZ(-200px) rotateX(45deg);transform:translateY(-50%) translateZ(-200px) rotateX(45deg)}100%{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-100%) rotateX(90deg);transform:translateY(-100%) rotateX(90deg)}}@keyframes rotateCubeTopOut{50%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:translateY(-50%) translateZ(-200px) rotateX(45deg);transform:translateY(-50%) translateZ(-200px) rotateX(45deg)}100%{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-100%) rotateX(90deg);transform:translateY(-100%) rotateX(90deg)}}.pt-page-cvbeInUp{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:rotateCubeBottomIn .8s ease-in both;animation:rotateCubeBottomIn .8s ease-in both}.pt-page-cvbeOutDown{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:rotateCubeBottomOut .8s ease-in both;animation:rotateCubeBottomOut .8s ease-in both}@-webkit-keyframes rotateCubeBottomOut{50%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:translateY(50%) translateZ(-200px) rotateX(-45deg);transform:translateY(50%) translateZ(-200px) rotateX(-45deg)}100%{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(100%) rotateX(-90deg);transform:translateY(100%) rotateX(-90deg)}}@keyframes rotateCubeBottomOut{50%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:translateY(50%) translateZ(-200px) rotateX(-45deg);transform:translateY(50%) translateZ(-200px) rotateX(-45deg)}100%{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(100%) rotateX(-90deg);transform:translateY(100%) rotateX(-90deg)}}@-webkit-keyframes rotateCubeBottomIn{0%{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-100%) rotateX(90deg);transform:translateY(-100%) rotateX(90deg)}50%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:translateY(-50%) translateZ(-200px) rotateX(45deg);transform:translateY(-50%) translateZ(-200px) rotateX(45deg)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateY(0) rotateX(0);transform:translateY(0) rotateX(0)}}@keyframes rotateCubeBottomIn{0%{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-100%) rotateX(90deg);transform:translateY(-100%) rotateX(90deg)}50%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:translateY(-50%) translateZ(-200px) rotateX(45deg);transform:translateY(-50%) translateZ(-200px) rotateX(45deg)}100%{opacity:1;filter:alpha(opacity=100);-webkit-transform:translateY(0) rotateX(0);transform:translateY(0) rotateX(0)}}.pt-page-pushInDown{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:rotatePullTop .8s ease .2s both;animation:rotatePullTop .8s ease .2s both}.pt-page-pushOutUp{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:rotatePushBottom .8s ease both;animation:rotatePushBottom .8s ease both}@-webkit-keyframes rotatePushBottom{to{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}}@keyframes rotatePushBottom{to{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}}@-webkit-keyframes rotatePullTop{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotateX(90deg);transform:rotateX(90deg)}}@keyframes rotatePullTop{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotateX(90deg);transform:rotateX(90deg)}}.pt-page-pushInUp{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:rotatePullBottom .8s ease .2s both;animation:rotatePullBottom .8s ease .2s both}.pt-page-pushOutDown{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:rotatePushTop .8s ease both;animation:rotatePushTop .8s ease both}@-webkit-keyframes rotatePushTop{to{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotateX(90deg);transform:rotateX(90deg)}}@keyframes rotatePushTop{to{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotateX(90deg);transform:rotateX(90deg)}}@-webkit-keyframes rotatePullBottom{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}}@keyframes rotatePullBottom{from{opacity:0;filter:alpha(opacity=0);-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}}.pt-page-threedInDown{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:threeTopIn .8s ease both;animation:threeTopIn .8s ease both}.pt-page-threedOutUp{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:threeTopOut .8s ease both;animation:threeTopOut .8s ease both}@-webkit-keyframes threeTopOut{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-200%) scale(.4) rotateX(65deg);transform:translateY(-200%) scale(.4) rotateX(65deg)}}@keyframes threeTopOut{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-200%) scale(.4) rotateX(65deg);transform:translateY(-200%) scale(.4) rotateX(65deg)}}@-webkit-keyframes threeTopIn{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(200%) scale(.4) rotateX(-65deg);transform:translateY(200%) scale(.4) rotateX(-65deg)}}@keyframes threeTopIn{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(200%) scale(.4) rotateX(-65deg);transform:translateY(200%) scale(.4) rotateX(-65deg)}}.pt-page-threedInUp{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:threeBottomIn .8s ease both;animation:threeBottomIn .8s ease both}.pt-page-threedOutDown{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-animation:threeBottomOut .8s ease both;animation:threeBottomOut .8s ease both}@-webkit-keyframes threeBottomOut{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(200%) scale(.4) rotateX(65deg);transform:translateY(200%) scale(.4) rotateX(65deg)}}@keyframes threeBottomOut{to{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(200%) scale(.4) rotateX(65deg);transform:translateY(200%) scale(.4) rotateX(65deg)}}@-webkit-keyframes threeBottomIn{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-200%) scale(.4) rotateX(-65deg);transform:translateY(-200%) scale(.4) rotateX(-65deg)}}@keyframes threeBottomIn{from{opacity:.3;filter:alpha(opacity=30);-webkit-transform:translateY(-200%) scale(.4) rotateX(-65deg);transform:translateY(-200%) scale(.4) rotateX(-65deg)}}", "animation/page-animation.async.css"); }); require("animation/page-animation.async.css")
;define('page/mobile/mobile2.async.less', function(require, exports, module){function importStyle(css, id) {    var ele = document.createElement('style');    ele.id = id;    document.getElementsByTagName('head')[0].appendChild(ele);    if (ele.styleSheet) {        ele.styleSheet.cssText = css;    } else {        ele.appendChild(document.createTextNode(css));    }}; importStyle(".qr-code-wrapper{position:absolute;right:-172px;width:102px;height:150px;top:20px;padding:26px;border:1px solid #d9dadc;background-color:#fff;font-size:14px}.qr-code-wrapper .qr-code{width:102px;height:102px}.qr-code-wrapper .qr-code canvas{width:102px;height:102px}.qr-code-wrapper p{text-align:center;margin-top:8px}.control-panel-wrapper{position:absolute;right:-172px;width:102px;height:150px;bottom:110px;padding:26px}.control-panel-wrapper .btn-prev,.control-panel-wrapper .btn-next{position:absolute;width:60px;height:60px;left:50%;margin-left:-30px;top:10px;background:#15b1b5;border-radius:35px;cursor:pointer}.control-panel-wrapper .btn-prev:hover,.control-panel-wrapper .btn-next:hover{background:#169fbf}.control-panel-wrapper .btn-prev:before,.control-panel-wrapper .btn-next:before,.control-panel-wrapper .btn-prev:after,.control-panel-wrapper .btn-next:after{content:'';position:absolute;width:23px;height:5px;left:12px;top:27px;background:#fff;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.control-panel-wrapper .btn-prev:after,.control-panel-wrapper .btn-next:after{left:25px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.control-panel-wrapper .btn-next{top:120px}.control-panel-wrapper .btn-next:before,.control-panel-wrapper .btn-next:after{top:30px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.control-panel-wrapper .btn-next:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}", "page/mobile/mobile2.async.less"); }); require("page/mobile/mobile2.async.less")
;define("qrCode/zepto.qrCode",function(e){var t=e("qrCode");!function(e){e.fn.qrcode=function(r){"string"==typeof r&&(r={text:r}),r=e.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:QRErrorCorrectLevel.H,background:"#ffffff",foreground:"#000000"},r);var o=function(){var e=new t(r.typeNumber,r.correctLevel);e.addData(r.text),e.make();var o=document.createElement("canvas");o.width=r.width,o.height=r.height;for(var n=o.getContext("2d"),a=r.width/e.getModuleCount(),d=r.height/e.getModuleCount(),c=0;c<e.getModuleCount();c++)for(var u=0;u<e.getModuleCount();u++){n.fillStyle=e.isDark(c,u)?r.foreground:r.background;var h=Math.ceil((u+1)*a)-Math.floor(u*a),i=Math.ceil((c+1)*a)-Math.floor(c*a);n.fillRect(Math.round(u*a),Math.round(c*d),h,i)}return o},n=function(){var o=new t(r.typeNumber,r.correctLevel);o.addData(r.text),o.make();for(var n=e("<table></table>").css("width",r.width+"px").css("height",r.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",r.background),a=r.width/o.getModuleCount(),d=r.height/o.getModuleCount(),c=0;c<o.getModuleCount();c++)for(var u=e("<tr></tr>").css("height",d+"px").appendTo(n),h=0;h<o.getModuleCount();h++)e("<td></td>").css("width",a+"px").css("background-color",o.isDark(c,h)?r.foreground:r.background).appendTo(u);return n};return this.each(function(){var t="canvas"==r.render?o():n();e(t).appendTo(this)})}}(Zepto)});
;define("qrCode",function(t,e,r){function n(t){this.mode=u.MODE_8BIT_BYTE,this.data=t}function o(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}function i(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function a(t,e){this.totalCount=t,this.dataCount=e}function s(){this.buffer=new Array,this.length=0}n.prototype={getLength:function(){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},o.prototype={addData:function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;40>t;t++){for(var e=a.getRSBlocks(t,this.errorCorrectLevel),r=new s,n=0,o=0;o<e.length;o++)n+=e[o].dataCount;for(var o=0;o<this.dataList.length;o++){var i=this.dataList[o];r.put(i.mode,4),r.put(i.getLength(),g.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;7>=r;r++)if(!(-1>=t+r||this.moduleCount<=t+r))for(var n=-1;7>=n;n++)-1>=e+n||this.moduleCount<=e+n||(this.modules[t+r][e+n]=r>=0&&6>=r&&(0==n||6==n)||n>=0&&6>=n&&(0==r||6==r)||r>=2&&4>=r&&n>=2&&4>=n?!0:!1)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;8>r;r++){this.makeImpl(!0,r);var n=g.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,s=0;s<this.modules[i].length;s++){var u=s*o,h=this.modules[i][s];h&&(n.beginFill(0,100),n.moveTo(u,a),n.lineTo(u+o,a),n.lineTo(u+o,a+o),n.lineTo(u,a+o),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=g.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;2>=i;i++)for(var a=-2;2>=a;a++)this.modules[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a?!0:!1}},setupTypeNumber:function(t){for(var e=g.getBCHTypeNumber(this.typeNumber),r=0;18>r;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(var r=0;18>r;r++){var n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=g.getBCHTypeInfo(r),o=0;15>o;o++){var i=!t&&1==(n>>o&1);6>o?this.modules[o][8]=i:8>o?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(var o=0;15>o;o++){var i=!t&&1==(n>>o&1);8>o?this.modules[8][this.moduleCount-o-1]=i:9>o?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[n][a-s]){var u=!1;i<t.length&&(u=1==(t[i]>>>o&1));var h=g.getMask(e,n,a-s);h&&(u=!u),this.modules[n][a-s]=u,o--,-1==o&&(i++,o=7)}if(n+=r,0>n||this.moduleCount<=n){n-=r,r=-r;break}}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,e,r){for(var n=a.getRSBlocks(t,e),i=new s,u=0;u<r.length;u++){var h=r[u];i.put(h.mode,4),i.put(h.getLength(),g.getLengthInBits(h.mode,t)),h.write(i)}for(var l=0,u=0;u<n.length;u++)l+=n[u].dataCount;if(i.getLengthInBits()>8*l)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*l+")");for(i.getLengthInBits()+4<=8*l&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;;){if(i.getLengthInBits()>=8*l)break;if(i.put(o.PAD0,8),i.getLengthInBits()>=8*l)break;i.put(o.PAD1,8)}return o.createBytes(i,n)},o.createBytes=function(t,e){for(var r=0,n=0,o=0,a=new Array(e.length),s=new Array(e.length),u=0;u<e.length;u++){var h=e[u].dataCount,l=e[u].totalCount-h;n=Math.max(n,h),o=Math.max(o,l),a[u]=new Array(h);for(var f=0;f<a[u].length;f++)a[u][f]=255&t.buffer[f+r];r+=h;var d=g.getErrorCorrectPolynomial(l),c=new i(a[u],d.getLength()-1),m=c.mod(d);s[u]=new Array(d.getLength()-1);for(var f=0;f<s[u].length;f++){var v=f+m.getLength()-s[u].length;s[u][f]=v>=0?m.get(v):0}}for(var E=0,f=0;f<e.length;f++)E+=e[f].totalCount;for(var T=new Array(E),B=0,f=0;n>f;f++)for(var u=0;u<e.length;u++)f<a[u].length&&(T[B++]=a[u][f]);for(var f=0;o>f;f++)for(var u=0;u<e.length;u++)f<s[u].length&&(T[B++]=s[u][f]);return T};for(var u={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},h={L:1,M:0,Q:3,H:2},l={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;g.getBCHDigit(e)-g.getBCHDigit(g.G15)>=0;)e^=g.G15<<g.getBCHDigit(e)-g.getBCHDigit(g.G15);return(t<<10|e)^g.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;g.getBCHDigit(e)-g.getBCHDigit(g.G18)>=0;)e^=g.G18<<g.getBCHDigit(e)-g.getBCHDigit(g.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return g.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case l.PATTERN000:return(e+r)%2==0;case l.PATTERN001:return e%2==0;case l.PATTERN010:return r%3==0;case l.PATTERN011:return(e+r)%3==0;case l.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case l.PATTERN101:return e*r%2+e*r%3==0;case l.PATTERN110:return(e*r%2+e*r%3)%2==0;case l.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new i([1],0),r=0;t>r;r++)e=e.multiply(new i([1,f.gexp(r)],0));return e},getLengthInBits:function(t,e){if(e>=1&&10>e)switch(t){case u.MODE_NUMBER:return 10;case u.MODE_ALPHA_NUM:return 9;case u.MODE_8BIT_BYTE:return 8;case u.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case u.MODE_NUMBER:return 12;case u.MODE_ALPHA_NUM:return 11;case u.MODE_8BIT_BYTE:return 16;case u.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case u.MODE_NUMBER:return 14;case u.MODE_ALPHA_NUM:return 13;case u.MODE_8BIT_BYTE:return 16;case u.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;e>n;n++)for(var o=0;e>o;o++){for(var i=0,a=t.isDark(n,o),s=-1;1>=s;s++)if(!(0>n+s||n+s>=e))for(var u=-1;1>=u;u++)0>o+u||o+u>=e||(0!=s||0!=u)&&a==t.isDark(n+s,o+u)&&i++;i>5&&(r+=3+i-5)}for(var n=0;e-1>n;n++)for(var o=0;e-1>o;o++){var h=0;t.isDark(n,o)&&h++,t.isDark(n+1,o)&&h++,t.isDark(n,o+1)&&h++,t.isDark(n+1,o+1)&&h++,(0==h||4==h)&&(r+=3)}for(var n=0;e>n;n++)for(var o=0;e-6>o;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(var o=0;e>o;o++)for(var n=0;e-6>n;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);for(var l=0,o=0;e>o;o++)for(var n=0;e>n;n++)t.isDark(n,o)&&l++;var g=Math.abs(100*l/e/e-50)/5;return r+=10*g}},f={glog:function(t){if(1>t)throw new Error("glog("+t+")");return f.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return f.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},d=0;8>d;d++)f.EXP_TABLE[d]=1<<d;for(var d=8;256>d;d++)f.EXP_TABLE[d]=f.EXP_TABLE[d-4]^f.EXP_TABLE[d-5]^f.EXP_TABLE[d-6]^f.EXP_TABLE[d-8];for(var d=0;255>d;d++)f.LOG_TABLE[f.EXP_TABLE[d]]=d;i.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=f.gexp(f.glog(this.get(r))+f.glog(t.get(n)));return new i(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=f.glog(this.get(0))-f.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(var n=0;n<t.getLength();n++)r[n]^=f.gexp(f.glog(t.get(n))+e);return new i(r,0).mod(t)}},a.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],a.getRSBlocks=function(t,e){var r=a.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=new Array,i=0;n>i;i++)for(var s=r[3*i+0],u=r[3*i+1],h=r[3*i+2],l=0;s>l;l++)o.push(new a(u,h));return o},a.getRsBlockTable=function(t,e){switch(e){case h.L:return a.RS_BLOCK_TABLE[4*(t-1)+0];case h.M:return a.RS_BLOCK_TABLE[4*(t-1)+1];case h.Q:return a.RS_BLOCK_TABLE[4*(t-1)+2];case h.H:return a.RS_BLOCK_TABLE[4*(t-1)+3];default:return void 0}},s.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;e>r;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},window.QRCode=o,window.QRErrorCorrectLevel=h,r.exports=o});