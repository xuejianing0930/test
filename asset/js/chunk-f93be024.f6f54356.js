(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f93be024"],{"0b37":function(t,s,a){"use strict";var i=a("512b"),n=a.n(i);n.a},"512b":function(t,s,a){},8953:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"top"},[a("div",[a("van-row",{attrs:{type:"left",gutter:"20",justify:"space-between"}},[a("van-col",{staticStyle:{"text-align":"left"},attrs:{span:"12"}},[a("span",{staticClass:"blue_line"}),a("span",{staticClass:"plan_title"},[t._v("被保险人信息")])])],1)],1),t.InformationFormJSON?t._e():a("div",{staticClass:"underwriter"},[a("div",{staticClass:"information",on:{click:t.informationModify}},[a("div",{staticClass:"information_name"},[t._v("被保险人1")]),a("div",{staticClass:"information_Modify"},[t._v(" 填写信息 "),a("span",[a("van-icon",{staticStyle:{"vertical-align":"bottom"},attrs:{size:"20px",color:"#4CA2FE ",name:"arrow"}})],1)])])]),t._l(t.InformationFormJSON,(function(s,i){return a("div",{key:i,staticClass:"underwriter"},[a("div",{staticClass:"information"},[a("div",{staticClass:"information_name"},[t._v(t._s(s.userName))]),a("div",{staticClass:"information_self"},[a("span",[t._v(" "+t._s(s.ChoosePlan)+" ")])]),a("div",{staticClass:"information_plan"},[a("span",[t._v(" "+t._s(s.whomInsure)+" ")])]),a("div",{staticClass:"information_Modify"},[t._v(" 修改信息 "),a("span",[a("van-icon",{staticStyle:{"vertical-align":"bottom"},attrs:{size:"20px",color:"#4CA2FE ",name:"arrow"}})],1)])]),a("div",{staticClass:"Card_Information"},[a("div",{staticClass:"card_Font"},[t._v("身份证号")]),a("div",{staticClass:"card_num"},[t._v(t._s(s.idCard))])])])})),a("div",{staticClass:"add_but"},[a("van-button",{staticClass:"button_immediately",attrs:{type:"info",icon:"plus",plain:""},on:{click:t.addInsured}},[t._v(" 添加被保险人")])],1),a("div",{staticClass:"Contact_Information"},[a("van-row",{attrs:{type:"left",gutter:"20",justify:"space-between"}},[a("van-col",{staticStyle:{"text-align":"left"},attrs:{span:"12"}},[a("span",{staticClass:"blue_line"}),a("span",{staticClass:"plan_title"},[t._v("联系信息")])])],1),a("div",{staticClass:"van_row"},[a("van-row",{attrs:{type:"left",gutter:"20",justify:"space-between"}},[a("van-col",{staticStyle:{"text-align":"left"},attrs:{span:"12"}},[t._v("居住地区")]),a("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"},on:{click:t.FillInformation}},[a("div",{staticClass:"information_Modify"},[a("span",{class:["请选择"==t.Addform.ResidentialAddress?"ResidentialAddressClass2":"ResidentialAddressClass"]},[t._v(" "+t._s(t.Addform.ResidentialAddress))]),a("span",["请选择"==t.Addform.ResidentialAddress?a("van-icon",{staticStyle:{"vertical-align":"bottom"},attrs:{size:"20px",color:"#4CA2FE ",name:"arrow"}}):t._e()],1)])])],1)],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showResidentialAddress,callback:function(s){t.showResidentialAddress=s},expression:"showResidentialAddress"}},[a("van-area",{attrs:{"area-list":t.areaList},on:{confirm:t.onConfirm,cancel:function(s){t.showResidentialAddress=!1}}})],1),a("div",{staticClass:"Full_address"},[a("div",{staticClass:"address"},[t._v(" 详细地址 "),a("van-popup",{model:{value:t.showAddress,callback:function(s){t.showAddress=s},expression:"showAddress"}},[t._v("上海市浦东新区金海路1000号")]),a("van-icon",{staticStyle:{"vertical-align":"bottom","margin-left":"1vh"},attrs:{name:"question-o",size:"20px",color:"#4CA2FE "},on:{click:t.showAddressClick}})],1),a("van-field",{attrs:{label:"",placeholder:"请输入详细地址"},model:{value:t.Addform.inputValue,callback:function(s){t.$set(t.Addform,"inputValue",s)},expression:"Addform.inputValue"}})],1)],1),a("div",{staticClass:"bomm_but"},[a("van-button",{staticClass:"button_Insurance",attrs:{type:"info"},on:{click:t.nexSttep}},[t._v("下一步")])],1)],2)},n=[],e=(a("4de4"),a("a15b"),a("d81d"),a("b0c0"),a("6f2f5")),o={name:"",components:{},data:function(){return{InformationFormJSON:JSON.parse(sessionStorage.getItem("InformationForm_confirm")),showAddress:!1,Addform:{ResidentialAddress:"请选择",inputValue:""},showResidentialAddress:!1,areaList:e["a"]}},created:function(){},mounted:function(){JSON.parse(sessionStorage.getItem("Addform"))&&(this.Addform=JSON.parse(sessionStorage.getItem("Addform")))},methods:{informationModify:function(){this.$router.push({path:"/card/InformationForm"})},showAddressClick:function(){this.showAddress=!0},addInsured:function(){this.$router.push({path:"/card/InformationForm"})},FillInformation:function(){this.showResidentialAddress=!0},nexSttep:function(){""!=this.Addform.ResidentialAddress&&"请选择"!=this.Addform.ResidentialAddress?this.Addform.inputValue?this.InformationFormJSON?(sessionStorage.setItem("Addform",JSON.stringify(this.Addform)),this.$router.push({path:"/card/cardProductTerms"})):this.$toast("请添加被保险人！"):this.$toast("请填写详细地址"):this.$toast("请选择居住地址")},onConfirm:function(t){this.value=t.filter((function(t){return!!t})).map((function(t){return t.name})).join("-"),this.Addform.ResidentialAddress=this.value,this.showResidentialAddress=!1}},watch:{},computed:{}},r=o,d=(a("0b37"),a("2877")),l=Object(d["a"])(r,i,n,!1,null,"388374fe",null);s["default"]=l.exports},a15b:function(t,s,a){"use strict";var i=a("23e7"),n=a("44ad"),e=a("fc6a"),o=a("a640"),r=[].join,d=n!=Object,l=o("join",",");i({target:"Array",proto:!0,forced:d||!l},{join:function(t){return r.call(e(this),void 0===t?",":t)}})}}]);
//# sourceMappingURL=chunk-f93be024.f6f54356.js.map