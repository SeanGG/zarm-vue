webpackJsonp([0],{220:function(e,t,n){var r=n(1)(n(249),n(330),null,null,null);e.exports=r.exports},221:function(e,t,n){var r=n(149)("wks"),i=n(151),a=n(3).Symbol,o="function"==typeof a;(e.exports=function(e){return r[e]||(r[e]=o&&a[e]||(o?a:i)("Symbol."+e))}).store=r},224:function(e,t){e.exports={}},225:function(e,t,n){var r=n(139).f,i=n(137),a=n(221)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,a)&&r(e,a,{configurable:!0,value:t})}},249:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(251),a=r(i),o=n(133),s=r(o),l=n(135),u=r(l),c=n(134),p=r(c);n(300),t.default={components:{Container:s.default,PageHeader:u.default,PageFooter:p.default},data:function(){return{files:[],fileList:[],visible:!1}},methods:{handleChange:function(e){console.log(e),this.files.push(e)},handleChangeMulti:function(e){if(e.length+this.fileList.length>5){var t;alert("超过5张"),this.fileList=(t=this.fileList).concat.apply(t,(0,a.default)(e.slice(0,5-this.fileList.length)))}else{var n;this.fileList=(n=this.fileList).concat.apply(n,(0,a.default)(e))}},remove:function(e){this.files.splice(e,1),this.visible=!0},remove2:function(e){this.fileList.splice(e,1),this.visible=!0},beforeChange:function(){if(this.fileList.length>5)return alert("超过5张"),!1;alert("before change")}}}},250:function(e,t,n){e.exports={default:n(252),__esModule:!0}},251:function(e,t,n){"use strict";t.__esModule=!0;var r=n(250),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,i.default)(e)}},252:function(e,t,n){n(269),n(268),e.exports=n(8).Array.from},253:function(e,t,n){var r=n(144),i=n(221)("toStringTag"),a="Arguments"==r(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=o(t=Object(e),i))?n:a?r(t):"Object"==(s=r(t))&&"function"==typeof t.callee?"Arguments":s}},254:function(e,t,n){"use strict";var r=n(139),i=n(141);e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},255:function(e,t,n){var r=n(3).document;e.exports=r&&r.documentElement},256:function(e,t,n){var r=n(224),i=n(221)("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||a[i]===e)}},257:function(e,t,n){var r=n(136);e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(t){var a=e.return;throw void 0!==a&&r(a.call(e)),t}}},258:function(e,t,n){"use strict";var r=n(262),i=n(141),a=n(225),o={};n(138)(o,n(221)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(o,{next:i(1,n)}),a(e,t+" Iterator")}},259:function(e,t,n){"use strict";var r=n(261),i=n(140),a=n(265),o=n(138),s=n(137),l=n(224),u=n(258),c=n(225),p=n(264),f=n(221)("iterator"),d=!([].keys&&"next"in[].keys()),A=function(){return this};e.exports=function(e,t,n,g,h,v,m){u(n,t,g);var b,x,y,C=function(e){if(!d&&e in z)return z[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},B=t+" Iterator",w="values"==h,_=!1,z=e.prototype,k=z[f]||z["@@iterator"]||h&&z[h],j=k||C(h),O=h?w?C("entries"):j:void 0,L="Array"==t?z.entries||k:k;if(L&&(y=p(L.call(new e)))!==Object.prototype&&y.next&&(c(y,B,!0),r||s(y,f)||o(y,f,A)),w&&k&&"values"!==k.name&&(_=!0,j=function(){return k.call(this)}),r&&!m||!d&&!_&&z[f]||o(z,f,j),l[t]=j,l[B]=A,h)if(b={values:w?j:C("values"),keys:v?j:C("keys"),entries:O},m)for(x in b)x in z||a(z,x,b[x]);else i(i.P+i.F*(d||_),t,b);return b}},260:function(e,t,n){var r=n(221)("iterator"),i=!1;try{var a=[7][r]();a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var a=[7],o=a[r]();o.next=function(){return{done:n=!0}},a[r]=function(){return o},e(a)}catch(e){}return n}},261:function(e,t){e.exports=!0},262:function(e,t,n){var r=n(136),i=n(263),a=n(147),o=n(142)("IE_PROTO"),s=function(){},l=function(){var e,t=n(146)("iframe"),r=a.length;for(t.style.display="none",n(255).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;r--;)delete l.prototype[a[r]];return l()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[o]=e):n=l(),void 0===t?n:i(n,t)}},263:function(e,t,n){var r=n(139),i=n(136),a=n(148);e.exports=n(4)?Object.defineProperties:function(e,t){i(e);for(var n,o=a(t),s=o.length,l=0;s>l;)r.f(e,n=o[l++],t[n]);return e}},264:function(e,t,n){var r=n(137),i=n(143),a=n(142)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},265:function(e,t,n){e.exports=n(138)},266:function(e,t,n){var r=n(10),i=n(9);e.exports=function(e){return function(t,n){var a,o,s=String(i(t)),l=r(n),u=s.length;return l<0||l>=u?e?"":void 0:(a=s.charCodeAt(l),a<55296||a>56319||l+1===u||(o=s.charCodeAt(l+1))<56320||o>57343?e?s.charAt(l):a:e?s.slice(l,l+2):o-56320+(a-55296<<10)+65536)}}},267:function(e,t,n){var r=n(253),i=n(221)("iterator"),a=n(224);e.exports=n(8).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||a[r(e)]}},268:function(e,t,n){"use strict";var r=n(145),i=n(140),a=n(143),o=n(257),s=n(256),l=n(150),u=n(254),c=n(267);i(i.S+i.F*!n(260)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,p,f=a(e),d="function"==typeof this?this:Array,A=arguments.length,g=A>1?arguments[1]:void 0,h=void 0!==g,v=0,m=c(f);if(h&&(g=r(g,A>2?arguments[2]:void 0,2)),void 0==m||d==Array&&s(m))for(t=l(f.length),n=new d(t);t>v;v++)u(n,v,h?g(f[v],v):f[v]);else for(p=m.call(f),n=new d;!(i=p.next()).done;v++)u(n,v,h?o(p,g,[i.value,v],!0):i.value);return n.length=v,n}})},269:function(e,t,n){"use strict";var r=n(266)(!0);n(259)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},287:function(e,t,n){t=e.exports=n(196)(!0),t.push([e.i,".uploader-page .za-panel-body{padding:15px 0 0 15px}.uploader-page .uploader-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.uploader-page .uploader-btn,.uploader-page .uploader-item{width:74px;height:74px;margin-bottom:15px}.uploader-page .uploader-item{display:inline-block;border:2px solid #ddd;margin-right:15px}.uploader-page .uploader-item-img{width:100%;height:100%;overflow:hidden}.uploader-page .uploader-item-img img{max-width:100%;height:auto}.uploader-page .uploader-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:2px dashed #ddd;color:#ddd}.uploader-page .uploader-btn .za-icon{font-size:30px}","",{version:3,sources:["/Users/chrisHchen/git-project/zarm-vue/example/styles/pages/UploaderPage.scss","/Users/chrisHchen/git-project/zarm-vue/example/styles/core/func.scss"],names:[],mappings:"AAEA,8BAEI,qBCHe,CDIhB,AAHH,iCAOM,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,mBAAe,AAAf,cAAe,CAChB,AATL,2DAaM,WCda,ADeb,YCfa,ADgBb,kBChBa,CDiBd,AAhBL,8BAmBM,qBAAqB,AACrB,sBAAuB,AACvB,iBCtBa,CDkCd,AAjCL,kCAwBQ,WAAW,AACX,YAAY,AACZ,eAAgB,CAMjB,AAhCP,sCA6BU,eAAe,AACf,WAAY,CACb,AA/BT,6BAoCM,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AACnB,wBAAuB,AAAvB,qBAAuB,AAAvB,uBAAuB,AACvB,uBAAwB,AACxB,UAAW,CAKZ,AA7CL,sCA2CQ,cC5CW,CD6CZ",file:"UploaderPage.scss",sourcesContent:['@import "../core/func";\n\n.uploader-page {\n  .za-panel-body {\n    padding: r(15) 0 0 r(15);\n  }\n\n  .uploader {\n    &-wrapper {\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    &-item,\n    &-btn {\n      width: r(74);\n      height: r(74);\n      margin-bottom: r(15);\n    }\n\n    &-item {\n      display: inline-block;\n      border: r(2) solid #ddd;\n      margin-right: r(15);\n\n      &-img {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n\n        img {\n          max-width: 100%;\n          height: auto;\n        }\n      }\n    }\n\n    &-btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border: r(2) dashed #ddd;\n      color: #ddd;\n\n      .za-icon {\n        font-size: r(30);\n      }\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},300:function(e,t,n){var r=n(287);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(197)("5dfcfb91",r,!0)},330:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Container",{staticClass:"uploader-page"},[n("PageHeader",{attrs:{title:"上传组件 Uploader"}}),e._v(" "),n("main",[n("div",[n("za-panel",[n("za-panel-header",{attrs:{title:"点击一次选择单张"}}),e._v(" "),n("za-panel-body",[n("div",{staticClass:"uploader-wrapper"},[e._l(e.files,function(t,r){return n("za-badge",{key:r,staticClass:"uploader-item",attrs:{sup:"",shape:"circle"},on:{click:function(t){e.remove(r)}}},[n("za-icon",{attrs:{type:"wrong"},slot:"text"}),e._v(" "),n("div",{staticClass:"uploader-item-img"},[n("a",{attrs:{href:t.thumbnail,target:"_blank"}},[n("img",{attrs:{src:t.thumbnail,alt:""}})])])],1)}),e._v(" "),n("div",{staticClass:"uploader-wrapper"},[n("za-uploader",{staticClass:"uploader-btn",attrs:{accept:"image/jpg, image/jpeg, image/gif, image/png"},on:{change:e.handleChange}},[n("za-icon",{attrs:{type:"add"}})],1)],1)],2)])],1),e._v(" "),n("za-panel",[n("za-panel-header",{attrs:{title:"点击一次选择多张"}}),e._v(" "),n("za-panel-body",[n("div",{staticClass:"uploader-wrapper"},[e._l(e.fileList,function(t,r){return n("za-badge",{key:r,staticClass:"uploader-item",attrs:{sup:"",shape:"circle"},on:{click:function(t){e.remove2(r)}}},[n("za-icon",{attrs:{type:"wrong"},slot:"text"}),e._v(" "),n("div",{staticClass:"uploader-item-img"},[n("a",{attrs:{href:t.thumbnail,target:"_blank"}},[n("img",{attrs:{src:t.thumbnail,alt:""}})])])],1)}),e._v(" "),n("div",{staticClass:"uploader-wrapper"},[e.fileList.length<5?n("za-uploader",{staticClass:"uploader-btn",attrs:{multiple:"","before-change":e.beforeChange,accept:"image/jpg, image/jpeg, image/gif, image/png"},on:{change:e.handleChangeMulti}},[n("za-icon",{attrs:{type:"add"}})],1):e._e()],1)],2)])],1)],1),e._v(" "),n("za-toast",{attrs:{visible:e.visible,duration:1e3},on:{"update:visible":function(t){e.visible=t}}},[e._v("删除成功")])],1),e._v(" "),n("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.bd5ebf596cfb424ae93b.js.map