"use strict";(self["webpackChunkelife_card"]=self["webpackChunkelife_card"]||[]).push([[46],{9046:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var n=function(){var t=this,e=t._self._c;return e("div",[t._e(),e("div",{staticClass:"view-box Router"},[e("div",{staticClass:"image"},[e("div",{staticClass:"van-image loading-image",staticStyle:{width:"100vw"}},[e("img",{staticClass:"van-image__img",attrs:{src:t.imgSrc,alt:""}})])]),e("van-button",{staticClass:"button",attrs:{type:"info"},on:{click:function(e){return t.clickBut()}}},[t._v("立即投保")]),e("popup",{ref:"popup"})],1)],1)},s=[],i=function(){var t=this,e=t._self._c;return e("div",[e("van-popup",{style:{height:"50%"},attrs:{closeable:"","close-icon":"close","close-on-click-overlay":!1,position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("div",{staticClass:"popup"},[e("van-form",{staticClass:"form",attrs:{"validate-first":""},on:{failed:t.onFailed,submit:t.submit}},[e("span",[t._v(" 身份证号")]),e("span",{staticStyle:{color:"red","margin-bottom":"5px"}},[t._v("*")]),e("van-field",{attrs:{name:"身份证号",label:"",placeholder:"请输入身份证",rules:[{validator:t.validator,message:"身份证号码格式错误！"}],"left-icon":"contact"},scopedSlots:t._u([{key:"button",fn:function(){return[e("van-icon",{staticClass:"scan",attrs:{name:"scan"},on:{click:t.scanIdCard}})]},proxy:!0}]),model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),e("span",[t._v(" 被保人所在学校属于以下那个类型")]),e("span",{staticStyle:{color:"red","margin-bottom":"5px"}},[t._v("*")]),e("van-field",{attrs:{name:"radio",label:"","left-icon":"home-o"},scopedSlots:t._u([{key:"input",fn:function(){return[e("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.studentList,(function(a,n){return e("van-radio",{key:n,attrs:{name:a.studentType},on:{click:function(e){return t.clickRadio(a.tab)}}},[t._v(" "+t._s(a.studentType)+" ")])})),1)]},proxy:!0}])}),e("van-button",{attrs:{round:"",block:"",type:"primary"},on:{click:function(e){e.preventDefault(),t.value1="372522198302043119"}}},[t._v('点击此按钮可以填身份证，"懒人用法"')]),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)])],1)},r=[],o=a(8848),c=a(3738),u={name:"",components:{},data(){return{show:!1,value1:"",value2:"",value3:"",pattern:!1,radio:"",studentList:[{studentType:"大学",tab:[{name:"方案一",CDPC:"111"},{name:"方案二",CDPC:"222"}]},{studentType:"小学",tab:[{name:"方案三",CDPC:"333"},{name:"方案四",CDPC:"444"}]},{studentType:"幼儿园",tab:[{name:"方案五",CDPC:"333"},{name:"方案六",CDPC:"444"}]}],newTba:""}},created(){this.radio=this.studentList[0].studentType,this.newTba=this.studentList[0].tab},mounted(){},methods:{clickRadio(t){this.newTba=t},submit(){let t=JSON.stringify(this.newTba);this.$router.push({path:"/planPage",query:{tab:t}})},scanIdCard(){this.$router.push({path:"/scanIdCard"})},showPopup(){this.show=!0},asyncValidator(t){return new Promise((e=>{o.Z.loading("验证中..."),setTimeout((()=>{o.Z.clear(),e(/\d{6}/.test(t))}),1e3)}))},onFailed(t){console.log("failed",t)},validator(t){return(0,c.Z)(t)}},watch:{},computed:{}},l=u,d=a(3736),p=(0,d.Z)(l,i,r,!1,null,"069d92e2",null),m=p.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"top"},[e("div",{staticClass:"image",staticStyle:{width:"100vw"}},[e("img",{attrs:{src:t.imgSrc,alt:""}})]),e("van-button",{staticClass:"button",attrs:{type:"info"},on:{click:function(e){return t.clickBut()}}},[t._v("立即投保")])],1)},f=[],h={name:"",components:{},data(){return{imgSrc:""}},created(){},mounted(){navigator.onLine?this.imgSrc="https://elife.ccb-life.com.cn/statics/cardTemp/cardImg/KDPC006.jpg":this.imgSrc=a(4794)},methods:{clickBut(){this.$refs.popup.showPopup()}},watch:{},computed:{}},b=h,g=(0,d.Z)(b,v,f,!1,null,"d93b5db4",null),C=g.exports,y={name:"",components:{popup:m,lianxi:C},data(){return{imgSrc:""}},created(){},mounted(){console.log(navigator.onLine,"123"),navigator.onLine?this.imgSrc="https://elife.ccb-life.com.cn/statics/cardTemp/cardImg/KDPC006.jpg":this.imgSrc=a(4794)},methods:{clickBut(){this.$refs.popup.showPopup()}},watch:{},computed:{}},w=y,k=(0,d.Z)(w,n,s,!1,null,"ae79cd1c",null),_=k.exports},3738:function(t,e,a){function n(t){var e=t;if(15==e.length){if(!/^\d{14}(\d|x)$/i.test(e))return this.message="你输入的身份证长度或格式错误",!1;e=e.substr(0,6)+"19"+e.substr(6,9),e+=a(e)}function a(t){for(var e=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1),a=new Array("1","0","X","9","8","7","6","5","4","3","2"),n=0,s=0;s<t.length;s++)n+=t.charAt(s)*e[s];var i=n%11;return a[i]}var n={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"},s=0;if(!/^\d{17}(\d|x)$/i.test(e))return!1;if(e=e.replace(/x$/i,"a"),null==n[parseInt(e.substr(0,2))])return!1;var i=e.substr(6,4)+"-"+Number(e.substr(10,2))+"-"+Number(e.substr(12,2)),r=new Date(i.replace(/-/g,"/"));if(i!=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate())return!1;for(var o=17;o>=0;o--)s+=Math.pow(2,o)%11*parseInt(e.charAt(17-o),11);return s%11==1}a.d(e,{Z:function(){return n}})},4794:function(t,e,a){t.exports=a.p+"static/img/KDPC001.562e4841.jpg"}}]);