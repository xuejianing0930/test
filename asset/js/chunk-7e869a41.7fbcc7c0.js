(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e869a41"],{"11cb":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[1==e.radio?a("div",[a("singlePage")],1):a("div",[a("morePage")],1)])},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top"},[e._m(0),a("div",{staticClass:"form"},[a("van-form",{attrs:{onkeydown:"if(event.keyCode==13)return false;"},on:{submit:e.onSubmit,failed:e.failed}},[a("van-field",{attrs:{name:"userName",maxlength:"20",label:"",disabled:e.userNameDisabled,placeholder:"被保人姓名",rules:[{required:!0,message:"请输入被保人姓名"},{validator:e.userNameValidator,message:"姓名格式不正确"}],"left-icon":"friends-o"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}}),a("van-field",{attrs:{name:"idCard",label:"",maxlength:"18",disabled:e.idCardDisabled,placeholder:"身份证号码",rules:[{required:!0,message:"请输入被保人身份证号码"},{validator:e.idCardValidator,message:"身份证号码格式不正确"}],"left-icon":"idcard"},model:{value:e.form.idCard,callback:function(t){e.$set(e.form,"idCard",t)},expression:"form.idCard"}}),a("van-field",{attrs:{readonly:"",clickable:"",name:"dateTime",value:e.form.dateTime,label:"",placeholder:"请选择身份证有效期",rules:[{required:!0,message:"请选择身份证有效期"}],"left-icon":"tosend","right-icon":"arrow"},on:{click:function(t){e.DateShowPicker=!0}},scopedSlots:e._u([{key:"button",fn:function(){return[a("div",{staticClass:"longTime",on:{click:function(t){return t.stopPropagation(),e.longTime(t)}}},[e._v("长期")])]},proxy:!0}])}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.DateShowPicker,callback:function(t){e.DateShowPicker=t},expression:"DateShowPicker"}},[a("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":e.cardDate,"max-date":e.maxDate},on:{confirm:e.DateOnConfirm,cancel:function(t){e.DateShowPicker=!1}},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),a("van-field",{attrs:{name:"phone",label:"",disabled:e.phoneDisabled,placeholder:"手机号码",type:"digit",maxlength:"11",rules:[{required:!0,message:"请输入手机号码"},{validator:e.phoneValidator,message:"手机号码格式不正确"}],"left-icon":"phone-o"},on:{change:e.formPhoenChange},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),a("van-field",{attrs:{name:"SMSCode",label:"",type:"digit",maxlength:"6",placeholder:"6位短信验证码",rules:[{required:!0,message:"请输入6位短信验证码"},{validator:e.SMSCodeValidator,message:"请输入6位短信验证码"}],"left-icon":"chat-o"},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{plain:"",size:"small",disabled:e.SMSCodeDisable,type:"info"},on:{click:function(t){return t.preventDefault(),e.getSMSCode(t)}}},[e._v(" "+e._s(e.SMSCodeButText))])]},proxy:!0}]),model:{value:e.form.SMSCode,callback:function(t){e.$set(e.form,"SMSCode",t)},expression:"form.SMSCode"}}),a("van-overlay",{attrs:{show:e.showOverlay},on:{click:function(t){e.showJigsaw&&(e.showOverlay=!1)}}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.showJigsaw?a("jigsaw",{on:{success:e.jigsawSuccess}}):e._e()],1)],1),"true"!=e.judgeParam?[a("van-field",{attrs:{name:"school",label:"",disabled:!0,placeholder:"请输入学校",rules:[{required:!0,message:"请输入学校"}],"left-icon":"wap-home-o"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}}),a("van-field",{attrs:{readonly:"",clickable:"",name:"gradeChoose",value:e.form.gradeChoose,label:"",placeholder:"请选择年级",rules:[{required:!0,message:"请选择年级"}],"left-icon":"user-o"},on:{click:function(t){e.gradeChooseShowPicker=!0}},scopedSlots:e._u([this.form.gradeChoose?null:{key:"button",fn:function(){return[a("span",{staticClass:"chioce"},[e._v("请选择 ")]),e._v(" "),a("van-icon",{attrs:{name:"arrow"}})]},proxy:!0}],null,!0)}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.gradeChooseShowPicker,callback:function(t){e.gradeChooseShowPicker=t},expression:"gradeChooseShowPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.gradeColumns},on:{confirm:e.gradeChooseOnConfirm,cancel:function(t){e.gradeChooseShowPicker=!1}}})],1),a("van-field",{attrs:{readonly:"",clickable:"",name:"classChoose",value:e.form.classChoose,rules:[{required:!0,message:"请选择班级"}],label:"",placeholder:"请选择班级","left-icon":"cluster-o"},on:{click:function(t){e.form.gradeChoose?e.classChooseShowPicker=!0:(e.classChooseShowPicker=!1,e.$toast("请选择年级！"))}},scopedSlots:e._u([this.form.classChoose?null:{key:"button",fn:function(){return[a("div",[a("span",{staticClass:"chioce"},[e._v("请选择 ")]),e._v(" "),a("van-icon",{attrs:{name:"arrow"}})],1)]},proxy:!0}],null,!0)}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.classChooseShowPicker,callback:function(t){e.classChooseShowPicker=t},expression:"classChooseShowPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.classColumns},on:{confirm:e.classChooseOnConfirm,cancel:function(t){e.classChooseShowPicker=!1}}})],1)]:e._e(),a("van-field",{attrs:{name:"email",disabled:e.emailDisabled,label:"",maxlength:"30",placeholder:"常用邮箱",rules:[{validator:e.emailValidator,message:"邮箱格式不正确"}],"left-icon":"envelop-o"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),a("eArea",{attrs:{areaJude:e.areaJude,value:e.productData.plchdDistrictCode,cityCode:e.productData.plchdCityCode,readonly:!0}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("下一步")])],1)],2)],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticStyle:{display:"flex","justify-content":"left","align-items":"center"}},[a("span",{staticClass:"top_blue"}),e._v(" 被保人信息 ")])}],i=(a("99af"),a("4de4"),a("4160"),a("a15b"),a("d81d"),a("b0c0"),a("b64b"),a("07ac"),a("ac1f"),a("5319"),a("159b"),a("96cf"),a("c964")),c=(a("e7e5"),a("d399")),l=(a("8bbf"),a("1d2f")),u=a("6ffc"),d=a("04b7"),m=a("7168"),h=a("6f2f5"),f={name:"",components:{jigsaw:d["a"],eArea:m["a"]},data:function(){return{areaJude:!0,showOverlay:!1,showJigsaw:!1,gradeColumnsClass:[],classColumnsClass:[],classArray:[],dataList:{},productData:{},batchno:"",cardDate:new Date(+new Date+864e5),form:{classId:"",userName:"",idCard:"",dateTime:"",phone:"",SMSCode:"",school:"",gradeChoose:"",classChoose:"",email:"",area:""},DateShowPicker:!1,minDate:new Date(1900,1,1),maxDate:new Date(2100,1,1),currentDate:"",slideVerifyShow:!1,slideVerifyText:"滑动完成拼图",SMSCodeDisable:!1,SMSCodeButText:"发送验证码",idCardDisabled:!1,userNameDisabled:!1,phoneDisabled:!1,emailDisabled:!1,gradeColumns:[],gradeChooseShowPicker:!1,classColumns:[],classChooseShowPicker:!1,showArea:!1,areaList:h["a"],imageCode:"",judgeParam:JSON.parse(sessionStorage.getItem("planPage")).judgeParam}},created:function(){this.productData=JSON.parse(sessionStorage.getItem("productData")),JSON.parse(sessionStorage.getItem("SINGE_PAGE_from"))&&(this.form=JSON.parse(sessionStorage.getItem("SINGE_PAGE_from"))),JSON.parse(sessionStorage.getItem("whiteList_json")).IDcard&&(this.idCardDisabled=!0,this.form.idCard=JSON.parse(sessionStorage.getItem("whiteList_json")).IDcard),JSON.parse(sessionStorage.getItem("productData")).plchdNm&&(this.userNameDisabled=!0,this.form.userName=JSON.parse(sessionStorage.getItem("productData")).plchdNm),JSON.parse(sessionStorage.getItem("productData")).plchdMoveTelNo&&(this.phoneDisabled=!0,this.form.phone=JSON.parse(sessionStorage.getItem("productData")).plchdMoveTelNo),JSON.parse(sessionStorage.getItem("productData")).plchdEmailAdr&&(this.emailDisabled=!0,this.form.email=JSON.parse(sessionStorage.getItem("productData")).plchdEmailAdr),this.batchno=JSON.parse(sessionStorage.getItem("planPage")).KDPC,console.log("批次号",this.batchno),this.judgeParam||this.getClassInfo();var e=new Date,t=e.getFullYear(),a=e.getMonth(),o=e.getDate();this.currentDate=new Date(t,a,o)},mounted:function(){},methods:{formPhoenChange:function(){return this.phoneValidator()},onSubmit:function(e){this.checkCaptcha(),console.log("成功的values",e),console.log("form的值",this.form),sessionStorage.setItem("SINGE_PAGE_from",JSON.stringify(this.form))},failed:function(e){console.log("failed",e)},userNameValidator:function(){return l["b"].checkName(this.form.userName)},idCardValidator:function(){return Object(u["a"])(this.form.idCard)},phoneValidator:function(){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.form.phone)},SMSCodeValidator:function(){return!(this.form.SMSCode&&this.form.SMSCode.length<6)},emailValidator:function(){var e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return!this.form.email||e.test(this.form.email)},DateOnConfirm:function(e){var t=e.getMonth()+1;t>=1&&t<=9&&(t="0"+t);var a=e.getDate();a<10&&(a="0"+a),this.form.dateTime="".concat(e.getFullYear(),"-").concat(t,"-").concat(a),this.DateShowPicker=!1},longTime:function(){this.form.dateTime="长期有效"},SMSCodeCountdown:function(){var e=this,t=60,a=setInterval((function(){t--,e.SMSCodeButText=t+"秒后重试",0==t&&(e.SMSCodeButText="重新获取",e.SMSCodeDisable=!1,clearInterval(a))}),1e3)},getSMSCode:function(){this.formPhoenChange()?(this.getGenerateImgDragVerify(),this.showOverlay=!0,this.slideVerifyShow=!0,this.showJigsaw=!0):this.$toast("手机号格式错误！")},getRandomId:function(){return this.randomId=+new Date+1e5*Math.random()+1e5,this.randomId},getGenerateImgDragVerify:function(e){var t=this;this.$api.common.getGenerateImgDragVerify({randomId:this.getRandomId()}).then((function(e){console.log(e,"imgcode"),t.$loading.hide(),"1"===e.status?(t.imageCode=e.data.dragWidth/3-10,t.showOverlay=!0):"0"===e.status&&t.$toast(e.error.message)}))},onSuccess:function(){var e=this;this.slideVerifyShow=!1;var t={mobileNo:this.form.phone.replace(/\s/g,""),imageCode:this.imageCode,random:this.randomId,txCode:"CCBSB100"};this.$api.common.getCaptcha(t).then((function(t){console.log(t,"短信"),e.$loading.hide(),"1"===t.status?(e.showOverlay=!1,c["a"].success("验证码获取成功")):(e.$toast(t.error.message),e.showOverlay=!1)})),this.SMSCodeDisable=!0,this.SMSCodeCountdown()},checkCaptcha:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={smsCode:e.form.SMSCode,prdId:JSON.parse(sessionStorage.getItem("productData")).prd_id,mobileNo:e.form.phone.replace(/\s/g,"")},console.log(a),t.next=4,e.$api.common.checkCaptcha(a);case 4:o=t.sent,o&&(e.$loading.hide(),"1"===o.status?(sessionStorage.setItem("SINGE_PAGE_orderfode",o.data.orderCode),e.$router.push({path:"/productTerms"})):e.$toast(o.error.message));case 6:case"end":return t.stop()}}),t)})))()},changeSlideVerifyShow:function(){this.onSuccess()},jigsawSuccess:function(){this.showJigsaw=!1,this.onSuccess()},gradeChooseOnConfirm:function(e,t){var a=this;this.classArray=[],this.classColumnsClass=[],this.form.gradeChoose=e,this.gradeChooseShowPicker=!1,this.classColumns=this.dataList.mapList;var o=Object.values(this.dataList.mapList[t]);console.log(o,"wwwwwwwwwwwwww"),o[0].forEach((function(e){a.classArray.push(e),a.classColumnsClass.push(e.className)})),this.classColumns=this.classColumnsClass},classChooseOnConfirm:function(e,t){this.form.classChoose=e,this.classChooseShowPicker=!1,this.form.classId=this.classArray[t].id},getClassInfo:function(){var e=this,t={batchno:this.batchno};this.$api.common.getClassInfo(t).then((function(t){"1"===t.status?t.data&&(e.dataList=t.data,e.form.school=e.dataList.schoolName,e.dataList.mapList.forEach((function(t){e.gradeColumnsClass.push(Object.keys(t)[0])})),e.gradeColumns=e.gradeColumnsClass):e.$toast(t.error.message)}))},AreaonConfirm:function(e){console.log("地区",e),this.form.area=e.filter((function(e){return!!e})).map((function(e){return e.name})).join("/"),this.showArea=!1}},watch:{},computed:{}},g=f,p=(a("82a1"),a("2877")),C=Object(p["a"])(g,r,n,!1,null,"ea316a22",null),v=C.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top"},[a("div",{staticClass:"insured-people"},[e._m(0),a("div",{staticClass:"form"},[a("van-form",{attrs:{onkeydown:"if(event.keyCode==13)return false;"},on:{submit:e.onSubmit}},[a("van-field",{attrs:{name:"userName",label:"",maxlength:"20",disabled:e.userNameDisabled,placeholder:"投保人姓名",rules:[{required:!0,message:"请输入投保人姓名"},{validator:e.userNameValidator,message:"姓名格式不正确"}],"left-icon":"friends-o"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}}),a("van-field",{attrs:{name:"idCard",label:"",maxlength:"18",disabled:e.idCardDisabled,placeholder:"身份证号码",rules:[{required:!0,message:"请输入身份证号码"},{validator:e.idCardValidator,message:"身份证号码格式不正确"}],"left-icon":"idcard"},model:{value:e.form.idCard,callback:function(t){e.$set(e.form,"idCard",t)},expression:"form.idCard"}}),a("van-field",{attrs:{readonly:"",clickable:"",name:"dateTime",value:e.form.dateTime,label:"",placeholder:"请选择身份证有效期",rules:[{required:!0,message:"请选择身份证有效期"}],"left-icon":"tosend","right-icon":"arrow"},on:{click:function(t){e.DateShowPicker=!0}},scopedSlots:e._u([{key:"button",fn:function(){return[a("div",{staticClass:"longTime",on:{click:function(t){return t.stopPropagation(),e.longTime(t)}}},[e._v("长期")])]},proxy:!0}])}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.DateShowPicker,callback:function(t){e.DateShowPicker=t},expression:"DateShowPicker"}},[a("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":e.cardDate,"max-date":e.maxDate},on:{confirm:e.DateOnConfirm,cancel:function(t){e.DateShowPicker=!1}},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),a("van-field",{attrs:{name:"phone",label:"",maxlength:"11",type:"digit",placeholder:"手机号码",disabled:e.phoneDisabled,rules:[{required:!0,message:"请输入手机号码"},{validator:e.phoneValidator,message:"手机号码格式不正确"}],"left-icon":"phone-o"},on:{change:e.formPhoenChange},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),a("van-field",{attrs:{name:"SMSCode",label:"",type:"digit",maxlength:"6",placeholder:"6位短信验证码",rules:[{required:!0,message:"请输入6位短信验证码"},{validator:e.SMSCodeValidator,message:"请输入6位短信验证码"}],"left-icon":"chat-o"},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{type:"info",size:"small",plain:"",disabled:e.SMSCodeDisable},on:{click:function(t){return t.preventDefault(),e.getSMSCode(t)}}},[e._v(e._s(e.SMSCodeButText))])]},proxy:!0}]),model:{value:e.form.SMSCode,callback:function(t){e.$set(e.form,"SMSCode",t)},expression:"form.SMSCode"}}),a("van-overlay",{attrs:{show:e.showOverlay},on:{click:function(t){e.showJigsaw&&(e.showOverlay=!1)}}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.showJigsaw?a("jigsaw",{on:{success:e.jigsawSuccess}}):e._e()],1)],1),a("van-field",{attrs:{disabled:e.emailDisabled,name:"email",maxlength:"30",label:"",placeholder:"常用邮箱",rules:[{validator:e.emailValidator,message:"邮箱格式不正确"}],"left-icon":"envelop-o"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),a("div",{staticClass:"be-people"},[a("h3",{staticStyle:{display:"flex","justify-content":"left","align-items":"center"}},[a("span",{staticClass:"top_blue"}),e._v(" 被保人信息 ")]),a("van-field",{attrs:{name:"userNameInsured",label:"",disabled:e.userNameInsuredDisabled,placeholder:"被保人姓名",maxlength:"20",rules:[{required:!0,message:"请输入被保人姓名"},{validator:e.userNameInsuredValidator,message:"姓名格式不正确"}],"left-icon":"friends-o"},model:{value:e.form.userNameInsured,callback:function(t){e.$set(e.form,"userNameInsured",t)},expression:"form.userNameInsured"}}),a("van-field",{attrs:{name:"idCardInsured",label:"",placeholder:"身份证号码",disabled:e.idCardInsuredDisabled,maxlength:"18",rules:[{required:!0,message:"请输入被保人身份证号码"},{validator:e.idCardValidatorInsured,message:"身份证号码格式不正确"}],"left-icon":"idcard"},model:{value:e.form.idCardInsured,callback:function(t){e.$set(e.form,"idCardInsured",t)},expression:"form.idCardInsured"}}),a("van-field",{attrs:{readonly:"",clickable:"",name:"dateTimeInsured",value:e.form.dateTimeInsured,label:"",placeholder:"请选择身份证有效期",rules:[{required:!0,message:"请选择身份证有效期"}],"left-icon":"tosend","right-icon":"arrow"},on:{click:function(t){e.DateShowPickerInsured=!0}},scopedSlots:e._u([{key:"button",fn:function(){return[a("div",{staticClass:"longTime",on:{click:function(t){return t.stopPropagation(),e.longTimeInsured(t)}}},[e._v("长期")])]},proxy:!0}])}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.DateShowPickerInsured,callback:function(t){e.DateShowPickerInsured=t},expression:"DateShowPickerInsured"}},[a("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":e.cardDate,"max-date":e.maxDate},on:{confirm:e.DateOnConfirmInsured,cancel:function(t){e.DateShowPickerInsured=!1}},model:{value:e.currentDateInsured,callback:function(t){e.currentDateInsured=t},expression:"currentDateInsured"}})],1)],1),"true"!=e.judgeParam?[a("van-field",{attrs:{name:"school",disabled:!0,label:"",placeholder:"请输入学校",rules:[{required:!0,message:"请输入学校"}],"left-icon":"wap-home-o"},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}}),a("van-field",{attrs:{readonly:"",clickable:"",name:"gradeChoose",value:e.form.gradeChoose,label:"",placeholder:"请选择年级",rules:[{required:!0,message:"请选择年级"}],"left-icon":"user-o"},on:{click:function(t){e.gradeChooseShowPicker=!0}},scopedSlots:e._u([this.form.gradeChoose?null:{key:"button",fn:function(){return[a("span",{staticClass:"chioce"},[e._v("请选择 ")]),e._v(" "),a("van-icon",{attrs:{name:"arrow"}})]},proxy:!0}],null,!0)}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.gradeChooseShowPicker,callback:function(t){e.gradeChooseShowPicker=t},expression:"gradeChooseShowPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.gradeColumns},on:{confirm:e.gradeChooseOnConfirm,cancel:function(t){e.gradeChooseShowPicker=!1}}})],1),a("van-field",{attrs:{readonly:"",clickable:"",name:"classChoose",value:e.form.classChoose,rules:[{required:!0,message:"请选择班级"}],label:"",placeholder:"请选择班级","left-icon":"cluster-o"},on:{click:function(t){e.form.gradeChoose?e.classChooseShowPicker=!0:(e.classChooseShowPicker=!1,e.$toast("请选择年级！"))}},scopedSlots:e._u([this.form.classChoose?null:{key:"button",fn:function(){return[a("div",[a("span",{staticClass:"chioce"},[e._v("请选择 ")]),e._v(" "),a("van-icon",{attrs:{name:"arrow"}})],1)]},proxy:!0}],null,!0)}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.classChooseShowPicker,callback:function(t){e.classChooseShowPicker=t},expression:"classChooseShowPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.classColumns},on:{confirm:e.classChooseOnConfirm,cancel:function(t){e.classChooseShowPicker=!1}}})],1)]:e._e()],2)],1)])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticStyle:{display:"flex","justify-content":"left","align-items":"center"}},[a("span",{staticClass:"top_blue"}),e._v(" 投保人信息 ")])}],w=a("4c1f"),D=a.n(w),k=a("36dd"),I=a.n(k),y={name:"",components:{jigsaw:d["a"],eArea:m["a"]},data:function(){return{areaJude:!0,cardDate:new Date(+new Date+864e5),slideImgs:[D.a,I.a],showOverlay:!1,showJigsaw:!1,gradeColumnsClass:[],classColumnsClass:[],classArray:[],dataList:{},productData:{},batchno:"",form:{classId:"",userName:"",idCard:"",dateTime:"",userNameInsured:"",idCardInsured:"",dateTimeInsured:"",phone:"",SMSCode:"",school:"",gradeChoose:"",classChoose:"",email:"",area:""},DateShowPicker:!1,DateShowPickerInsured:!1,minDate:new Date(1900,1,1),maxDate:new Date(2100,1,1),currentDate:"",currentDateInsured:"",slideVerifyShow:!1,slideVerifyText:"滑动完成拼图",SMSCodeDisable:!1,SMSCodeButText:"发送验证码",idCardDisabled:!1,userNameDisabled:!1,userNameInsuredDisabled:!1,phoneDisabled:!1,emailDisabled:!1,gradeColumns:[],gradeChooseShowPicker:!1,classColumns:[],classChooseShowPicker:!1,showArea:!1,areaList:h["a"],imageCode:"",judgeParam:JSON.parse(sessionStorage.getItem("planPage")).judgeParam}},created:function(){this.productData=JSON.parse(sessionStorage.getItem("productData")),console.log(this.productData.plchdCityCode,"----",this.productData.plchdDistrictCode),JSON.parse(sessionStorage.getItem("MORE_PAGE_from"))&&(this.form=JSON.parse(sessionStorage.getItem("MORE_PAGE_from"))),JSON.parse(sessionStorage.getItem("whiteList_json")).IDcard&&(this.idCardInsuredDisabled=!0,this.form.idCardInsured=JSON.parse(sessionStorage.getItem("whiteList_json")).IDcard),JSON.parse(sessionStorage.getItem("productData")).plchdNm&&(this.userNameInsuredDisabled=!0,this.form.userNameInsured=JSON.parse(sessionStorage.getItem("productData")).plchdNm),this.batchno=JSON.parse(sessionStorage.getItem("planPage")).KDPC,console.log("批次号",this.batchno),this.judgeParam||this.getClassInfo();var e=new Date,t=e.getFullYear(),a=e.getMonth(),o=e.getDate();console.log(t,a,o),this.currentDate=new Date(t,a,o),this.currentDateInsured=new Date(t,a,o)},mounted:function(){},methods:{formPhoenChange:function(){return this.phoneValidator()},onSubmit:function(e){console.log("成功的values",e),console.log("form的值",this.form),sessionStorage.setItem("MORE_PAGE_from",JSON.stringify(this.form)),this.checkCaptcha()},checkCaptcha:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={smsCode:e.form.SMSCode,prdId:JSON.parse(sessionStorage.getItem("productData")).prd_id,mobileNo:e.form.phone.replace(/\s/g,"")},console.log(a),t.next=4,e.$api.common.checkCaptcha(a);case 4:o=t.sent,o&&(e.$loading.hide(),"1"===o.status?(sessionStorage.setItem("SINGE_PAGE_orderfode",o.data.orderCode),e.$router.push({path:"/productTerms"})):e.$toast(o.error.message));case 6:case"end":return t.stop()}}),t)})))()},userNameValidator:function(){return l["b"].checkName(this.form.userName)},userNameInsuredValidator:function(){return l["b"].checkName(this.form.userNameInsured)},idCardValidator:function(){return Object(u["a"])(this.form.idCard)},idCardValidatorInsured:function(){return Object(u["a"])(this.form.idCardInsured)},phoneValidator:function(){return/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.form.phone)},SMSCodeValidator:function(){return!(this.form.SMSCode&&this.form.SMSCode.length<6)},emailValidator:function(){var e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return!this.form.email||e.test(this.form.email)},DateOnConfirm:function(e){console.log(e.getFullYear());var t=e.getDate();t<10&&(t="0"+t);var a=e.getMonth()+1;a>=1&&a<=9&&(a="0"+a),this.form.dateTime="".concat(e.getFullYear(),"-").concat(a,"-").concat(t),this.DateShowPicker=!1},DateOnConfirmInsured:function(e){var t=e.getDate();t<10&&(t="0"+t);var a=e.getMonth()+1;a>=1&&a<=9&&(a="0"+a),this.form.dateTimeInsured="".concat(e.getFullYear(),"-").concat(a,"-").concat(t),this.DateShowPickerInsured=!1},longTime:function(){this.form.dateTime="长期有效"},longTimeInsured:function(){this.form.dateTimeInsured="长期有效"},SMSCodeCountdown:function(){var e=this,t=60,a=setInterval((function(){t--,e.SMSCodeButText=t+"秒后重试",0==t&&(e.SMSCodeButText="重新获取",e.SMSCodeDisable=!1,clearInterval(a))}),1e3)},changeSlideVerifyShow:function(){this.onSuccess()},getGenerateImgDragVerify:function(e){var t=this;this.$api.common.getGenerateImgDragVerify({randomId:this.getRandomId()}).then((function(e){console.log(e,"imgcode"),t.$loading.hide(),"1"===e.status?(t.imageCode=e.data.dragWidth/3-10,t.showOverlay=!0):"0"===e.status&&t.$toast(e.error.message)}))},getSMSCode:function(){this.formPhoenChange()?(this.getGenerateImgDragVerify(),this.slideVerifyShow=!0,this.showOverlay=!0,this.slideVerifyShow=!0,this.showJigsaw=!0):this.$toast("手机号格式错误！")},getRandomId:function(){return this.randomId=+new Date+1e5*Math.random()+1e5,this.randomId},onSuccess:function(){var e=this;this.slideVerifyShow=!1;var t={mobileNo:this.form.phone.replace(/\s/g,""),imageCode:this.imageCode,random:this.randomId,txCode:"CCBSB100"};this.$api.common.getCaptcha(t).then((function(t){console.log(t,"短信"),e.$loading.hide(),"1"===t.status?(c["a"].success("验证码获取成功"),e.showOverlay=!1):(e.$toast(t.error.message),e.showOverlay=!1)})),this.SMSCodeDisable=!0,this.SMSCodeCountdown()},onFail:function(){console.log("获取短信验证码失败")},onRefresh:function(){console.log("点击刷新滑块")},jigsawSuccess:function(){this.showJigsaw=!1,this.onSuccess()},gradeChooseOnConfirm:function(e,t){var a=this;this.classArray=[],this.classColumnsClass=[],this.form.gradeChoose=e,this.gradeChooseShowPicker=!1,this.classColumns=this.dataList.mapList;var o=Object.values(this.dataList.mapList[t]);o[0].forEach((function(e){a.classArray.push(e),a.classColumnsClass.push(e.className)})),this.classColumns=this.classColumnsClass},classChooseOnConfirm:function(e,t){this.form.classChoose=e,this.classChooseShowPicker=!1,this.form.classId=this.classArray[t].id},getClassInfo:function(){var e=this,t={batchno:this.batchno};this.$api.common.getClassInfo(t).then((function(t){"1"===t.status?t.data&&(e.dataList=t.data,e.form.school=e.dataList.schoolName,e.dataList.mapList.forEach((function(t){e.gradeColumnsClass.push(Object.keys(t)[0])})),e.gradeColumns=e.gradeColumnsClass):e.$toast(t.error.message)}))},AreaonConfirm:function(e){console.log("地区",e),this.form.area=e.filter((function(e){return!!e})).map((function(e){return e.name})).join("/"),this.showArea=!1},scanIdCard:function(){this.$router.push({path:"/scanIdCard"})},gotoInsuranceApplication:function(){}},watch:{},computed:{}},P=y,x=(a("c8c4"),a("cd87")),N=a.n(x),_=a("7fe5"),O=a.n(_),M=Object(p["a"])(P,S,b,!1,null,"5ffe2ad6",null);"function"===typeof N.a&&N()(M),"function"===typeof O.a&&O()(M);var $=M.exports,j={name:"",components:{singlePage:v,morePage:$},data:function(){return{}},created:function(){},mounted:function(){sessionStorage.setItem("route_radio",this.radio)},methods:{},watch:{},computed:{radio:function(){return this.$route.query.radio}}},A=j,V=Object(p["a"])(A,o,s,!1,null,"f223403e",null);t["default"]=V.exports},"1d2f":function(e,t,a){"use strict";a.d(t,"h",(function(){return i})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return h})),a.d(t,"f",(function(){return f})),a.d(t,"d",(function(){return g})),a.d(t,"g",(function(){return p}));a("99af"),a("7db0"),a("4160"),a("d81d"),a("fb6a"),a("b64b"),a("ac1f"),a("5319"),a("159b");var o={getAge:function(e){if(e=e.replace(/\s/g,""),e.length<18)return null;var t=new Date,a=t.getMonth()+1,o=t.getDate(),s=t.getFullYear()-e.substring(6,10)-1,r=e.substring(12,14),n=e.substring(10,12);return(n<a||n==a&&r<o+1)&&s++,s},getSex:function(e){return e=e.replace(/\s/g,""),e.length<18?null:1==parseInt(e.substr(16,1)%2)?"01":"02"},getSexOld:function(e){return e=e.replace(/\s/g,""),e.length<18?null:(parseInt(e.substr(16,1))+1)%2+1},getBirthday:function(e){e=e.replace(/\s/g,"");var t=e.substring(6,10)+"/"+e.substring(10,12)+"/"+e.substring(12,14);return t}},s=function(e){var t=/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],o=[1,0,"X",9,8,7,6,5,4,3,2],s=e.substring(17);if(t.test(e)){for(var r=0,n=0;n<17;n++)r+=e[n]*a[n];if(o[r%11]==s.toUpperCase())return!0}return!1},r=function(e){var t=/^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;if(t.test(e)){var a=e.substring(0,4),o=e.substring(4,6),s=e.substring(6,8),r=new Date(a+"-"+o+"-"+s);if(r&&r.getMonth()==parseInt(o)-1)return!0}return!1},n=function(e){var t=/^[1-9][0-9]/,a={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"};return!(!t.test(e)||!a[e])};function i(e,t){var a=t.maps;a.forEach((function(a){var o=c(a),s=o.key,r=o.value;"function"===typeof r?e[s]=r(t.value):"string"===typeof r&&(e[s]=t[r])}))}function c(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=e[t];return{key:t,value:a}}}function l(e,t,a){return"string"===typeof e[0]?(+new Date-+new Date(a))/864e5>e[0]&&t<e[1]:t>=e[0]&&t<=e[1]}function u(e,t,a){console.log(a);var o=!0;return e.forEach((function(e){var s=t[e],r=a[e];switch(s.type){case"agescope":l(s.value,r,a.birthday)||(o=!1);break;case"string":s.value!==r&&(o=!1);break;case"number":s.value!==r&&(o=!1);break;default:break}})),o}function d(e,t){return e.find((function(e){return u(Object.keys(e.map),e.map,t)&&e}))}function m(e){return e+="",e.replace(/\s|-|\//g,"")}function h(e,t,a){return"01"==e?"01":"01"==t&&"01"==a?"06":"01"==t&&"01"!==a?"07":"01"!==t&&"01"==a?"08":"01"!==t&&"01"!==a?"09":void 0}function f(e){var t=new Date(+new Date(e.replace(/-/g,"/"))-864e5),a=t.getFullYear(),o=t.getMonth()+1,s=t.getDate();return a+"-"+(o>9?o:"0".concat(o))+"-"+(s>9?s:"0".concat(s))}function g(e){var t=new Date(+new Date(e.replace(/-/g,"/"))),a=t.getFullYear(),o=t.getMonth()+1,s=t.getDate(),r=t.getHours();return a+"-"+(o>9?o:"0".concat(o))+"-"+(s>9?s:"0".concat(s))+" "+(r>9?r:"0".concat(r))+":00:00"}function p(e,t){return(e.slice(t)||[]).concat(e.slice(0,t)||[])}o.checkIdCard=function(e){if(e=e.replace(/\s/g,""),s(e)){var t=e.substring(6,14);if(r(t)&&n(e.substring(0,2)))return!0}return!1},o.checkEmail=function(e){var t=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;return t.test(e)},o.checkPhone=function(e){var t=/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;return e=e.replace(/\s/g,""),t.test(e)},o.checkName=function(e){var t=/^[a-zA-Z\u4e00-\u9fa5\s\.\*·]{2,}$/;return t.test(e)},o.safeValue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new Proxy((function(){}),{get:function(a,s){return o.safeValue(e,t.concat(s))},apply:function(a,o,s){for(var r=e,n=0;n<t.length;n++){if(null==r)break;r=r[t[n]]}return void 0===r&&(r=""),r}})},o.getArea=function(e,t){if(e&&t){var a=[],o=t.substr(0,2)+"0000",s=t.substr(0,4)+"00",r=e.province_list[o],n=e.city_list[s],i=e.county_list[t];return a.push({code:o,name:r},{code:s,name:n},{code:t,name:i}),a}},o.debounce=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){var o=this,s=arguments;t&&clearTimeout(t),t=setTimeout((function(){e&&e.apply(o,s)}),a)}},o.throttel=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){var o=arguments;t||(e&&e.apply(this,o),t=!0,setTimeout((function(){t=!1}),a))}},t["b"]=o},3067:function(e,t,a){},"36dd":function(e,t,a){e.exports=a.p+"asset/img/img2.491a6170.jpg"},"4c1f":function(e,t,a){e.exports=a.p+"asset/img/img.8e167436.jpg"},"6ffc":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("a9e3"),a("ac1f"),a("5319");function o(e){var t=e;if(15==t.length){if(!/^\d{14}(\d|x)$/i.test(t))return this.message="你输入的身份证长度或格式错误",!1;t=t.substr(0,6)+"19"+t.substr(6,9),t+=a(t)}function a(e){for(var t=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1),a=new Array("1","0","X","9","8","7","6","5","4","3","2"),o=0,s=0;s<e.length;s++)o+=e.charAt(s)*t[s];var r=o%11;return a[r]}var o={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"},s=0;if(!/^\d{17}(\d|x)$/i.test(t))return!1;if(t=t.replace(/x$/i,"a"),null==o[parseInt(t.substr(0,2))])return!1;var r=t.substr(6,4)+"-"+Number(t.substr(10,2))+"-"+Number(t.substr(12,2)),n=new Date(r.replace(/-/g,"/"));if(r!=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate())return!1;for(var i=17;i>=0;i--)s+=Math.pow(2,i)%11*parseInt(t.charAt(17-i),11);return s%11==1}},"7fe5":function(e,t){},"82a1":function(e,t,a){"use strict";var o=a("3067"),s=a.n(o);s.a},a0d5:function(e,t,a){},a15b:function(e,t,a){"use strict";var o=a("23e7"),s=a("44ad"),r=a("fc6a"),n=a("a640"),i=[].join,c=s!=Object,l=n("join",",");o({target:"Array",proto:!0,forced:c||!l},{join:function(e){return i.call(r(this),void 0===e?",":e)}})},c8c4:function(e,t,a){"use strict";var o=a("a0d5"),s=a.n(o);s.a},cd87:function(e,t){}}]);
//# sourceMappingURL=chunk-7e869a41.7fbcc7c0.js.map