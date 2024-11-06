(function(){"use strict";var e={9984:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a={name:"App",components:{},data(){return{}},methods:{}},u=a,c=n(3736),f=(0,c.Z)(u,o,i,!1,null,null,null),l=f.exports,s=n(2631);r.ZP.use(s.ZP);var d=new s.ZP({routes:[{redirect:"/whiteList",path:"",name:""},{path:"/whiteList",name:"whiteList",component:()=>n.e(46).then(n.bind(n,9046)),meta:{title:"学平险"}},{path:"/scanIdCard",name:"scanIdCard",component:()=>n.e(473).then(n.bind(n,7473)),meta:{title:"证件上传"}},{path:"/insuranceInformation",name:"insuranceInformation",component:()=>n.e(416).then(n.bind(n,5416)),meta:{title:"学平险详情"}},{path:"/errPages",name:"errPages",component:()=>n.e(613).then(n.bind(n,7613)),meta:{title:"错误页面"}},{path:"/healthInform",name:"healthInform",component:()=>n.e(548).then(n.bind(n,548)),meta:{title:"健康告知"}},{path:"/insuredObject",name:"insuredObject",component:()=>n.e(396).then(n.bind(n,4396)),meta:{title:"为谁投保"}},{path:"/informationEntry",name:"informationEntry",component:()=>n.e(336).then(n.bind(n,7336)),meta:{title:"信息录入"}},{path:"/insuranceApplication",name:"insuranceApplication",component:()=>n.e(255).then(n.bind(n,6255)),meta:{title:"信息录入"}},{path:"/signature",name:"signature",component:()=>n.e(748).then(n.bind(n,9748)),meta:{title:"签名"}},{path:"/insuranceSynthetic",name:"insuranceSynthetic",component:()=>n.e(405).then(n.bind(n,3405)),meta:{title:"投保单合成"}},{path:"/productTerms",name:"productTerms",component:()=>n.e(612).then(n.bind(n,6840)),meta:{title:"产品条款"}},{path:"/cardResults",name:"cardResults",component:()=>n.e(315).then(n.bind(n,8315)),meta:{title:"结果页面"}},{path:"/planPage",name:"planPage",component:()=>n.e(325).then(n.bind(n,6325)),meta:{title:"方案页面"}}]});d.beforeEach((async(e,t,n)=>{document.title=e.meta.title,n()}));var p=n(6856),m=(n(5110),n(2980),n(6387)),h=n.n(m),b=n(9883),v=n(8848),g=n(5428),y=n.n(g);r.ZP.config.productionTip=!1,r.ZP.use(h()),r.ZP.use(b.Z),r.ZP.use(v.Z),r.ZP.use(y()),r.ZP.use(p.ZP),new r.ZP({render:e=>e(l),router:d}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+"."+{46:"c4ebe5f8",255:"30c80e5f",315:"fb54af36",325:"6f94c16c",336:"a43cf18f",396:"4e0818a2",405:"f28779c4",416:"fc0d2f3f",473:"fc7fb67c",548:"baaa5f02",612:"eb3d227b",613:"699cd1a2",748:"4951a1f7"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"static/css/"+e+"."+{46:"032a4051",255:"46515797",315:"fb10cfd3",325:"86ac3276",336:"9124097e",396:"8526f9df",405:"8a6492bf",416:"08f2464e",548:"e98ae70d",612:"f580d595",613:"f74d3cc6",748:"c995cb28"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="elife-card:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={46:1,255:1,315:1,325:1,336:1,396:1,405:1,416:1,548:1,612:1,613:1,748:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);f<a.length;f++)i=a[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkelife_card"]=self["webpackChunkelife_card"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9984)}));r=n.O(r)})();
//# sourceMappingURL=app.dca4a344.js.map