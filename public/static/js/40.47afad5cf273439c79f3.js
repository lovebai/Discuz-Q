(window.webpackJsonp=window.webpackJsonp||[]).push([[40,80],{"2Imn":function(t,e,a){"use strict";a.r(e);var i=a("Efns"),s=a("PFY0");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var o=a("KHd+"),r=Object(o.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports},Efns:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"circleCon"},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.siteInfo?a("div",[a("Header",{attrs:{logoShow:!0,perDetShow:!0}}),t._v(" "),a("div",{staticClass:"gap"}),t._v(" "),a("div",{staticClass:"circlePL"},[a("div",{staticClass:"circleLoBox"},[a("span",{staticClass:"circleIcon"},[t._v("站点图标")]),t._v(" "),t.siteInfo.logo?a("img",{staticClass:"circleLogo",attrs:{src:t.siteInfo._data.logo}}):a("img",{staticClass:"circleLogo",attrs:{src:t.appConfig.staticBaseUrl+"/images/logo.png"}})])]),t._v(" "),a("div",{staticClass:"circleInfo padB0 lastBorNone"},[a("h1",{staticClass:"cirInfoTit"},[t._v("站点简介")]),t._v(" "),a("p",{staticClass:"cirInfoWord"},[t._v(t._s(t.siteInfo._data.siteIntroduction))]),t._v(" "),a("div",{staticClass:"infoItem"},[a("span",{staticClass:"infoItemLeft"},[t._v("创建时间")]),t._v(" "),a("span",{staticClass:"infoItemRight"},[t._v(t._s(t.siteInfo._data.siteInstall))])]),t._v(" "),a("div",{staticClass:"infoItem"},[a("span",{staticClass:"infoItemLeft"},[t._v("加入方式")]),t._v(" "),a("span",{staticClass:"infoItemRight"},[t._v("付费"+t._s(t.siteInfo._data.sitePrice)+"元，有效期自加入起"+t._s(t.siteInfo._data.siteExpire)+"天")])]),t._v(" "),a("div",{staticClass:"infoItem"},[a("span",{staticClass:"infoItemLeft"},[t._v("站长")]),t._v(" "),a("span",{staticClass:"infoItemRight"},[t._v(t._s(t.siteUsername))])]),t._v(" "),a("div",{staticClass:"infoItem"},[a("div",{staticClass:"overHide"},[a("span",{staticClass:"infoItemLeft"},[t._v("站点成员")])]),t._v(" "),a("div",{staticClass:"circleMemberList"},t._l(t.siteInfo.users,(function(e,i){return""==e._data.avatarUrl&&null==e._data.avatarUrl?a("img",{key:i,staticClass:"circleMember",attrs:{src:e._data.avatarUrl,alt:""}}):a("img",{staticClass:"circleMember",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"}})})),0)])]),t._v(" "),a("div",{staticClass:"gap"}),t._v(" "),a("div",{staticClass:"loginOpera"},[a("p",{staticClass:"welcomeUser"},[t._v("欢迎您，"+t._s(t.username)),a("a",{staticClass:"signOut",attrs:{href:"javascript:;"},on:{click:t.signOut}},[t._v("退出")])]),t._v(" "),a("a",{staticClass:"regiJoin",attrs:{href:"javascript:;"},on:{click:function(e){return t.sitePayClick(t.sitePrice)}}},[t._v("付费，获得成员权限")]),t._v(" "),a("p",{staticClass:"payMoney"},[t._v("￥"+t._s(t.sitePrice)+" / 永久有效")])])],1):t._e()])],1)},s=[];a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}))},"F1+Y":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=a("omtG"),n=(i=s)&&i.__esModule?i:{default:i};e.default={data:function(){return{headOpeShow:!1,isfixNav:!1,current:0,siteInfo:!1,siteUsername:"",joinedAt:"",sitePrice:"",username:"",loading:!1,finished:!1,isLoading:!1,pageIndex:1,pageLimit:20,offset:100}},components:{Header:n.default},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(a){e&&(t.siteInfo=[]),console.log(a),t.siteInfo=a.readdata,console.log(a.readdata._data.siteMode+"请求"),a.readdata._data.siteAuthor?t.siteUsername=a.readdata._data.siteAuthor.username:t.siteUsername="暂无站长信息",t.sitePrice=a.readdata._data.sitePrice}))},signOut:function(){browserDb.removeLItem("tokenId"),browserDb.removeLItem("Authorization"),this.$router.push({path:"/login-user"})},sitePayClick:function(t){var e=this;this.appFetch({url:"orderList",method:"post",data:{type:"1",thread_id:this.themeId,amount:t}}).then((function(a){var i=a.data.attributes.order_sn;e.orderPay(i,t)}))},orderPay:function(t,e){var a=this,i=this.appCommonH.isWeixin().isWeixin,s=this.appCommonH.isWeixin().isPhone,n="";1==i?(alert("微信支付"),n="12"):n=1==s?"11":"10";var o="trade/pay/order/"+t;this.appFetch({url:o,method:"post",data:{payment_type:n}}).then((function(t){i||(s?window.location.href=t.data.attributes.wechat_h5_link:(a.qrcodeShow=!0,a.amountNum=e,a.codeUrl=t.data.attributes.wechat_qrcode))}))},loginJump:function(){this.$router.push({path:"login-user"})},registerJump:function(){this.$router.push({path:"sign-up"})},onRefresh:function(){var t=this;this.pageIndex=1,this.getInfo(!0).then((function(){t.$toast("刷新成功"),t.finished=!1,t.isLoading=!1})).catch((function(e){t.$toast("刷新失败"),t.isLoading=!1}))}},mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(t,e,a){window.removeEventListener("scroll",this.handleTabFix,!0),a()}}},Jgvg:function(t,e,a){"use strict";a.r(e);var i=a("pvnC"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e.default=s.a},PFY0:function(t,e,a){"use strict";a.r(e);var i=a("uwtL"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e.default=s.a},QiNT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=o(a("YEIV")),n=(a("ULRk"),o(a("+KBz")),o(a("VVfg")),o(a("6NK7")));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){var t;return t={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:"",userId:""},(0,s.default)(t,"isfixNav",!1),(0,s.default)(t,"popupShow",!1),(0,s.default)(t,"current",0),(0,s.default)(t,"userDet",[]),(0,s.default)(t,"categories",[]),(0,s.default)(t,"siteInfo",!1),(0,s.default)(t,"username",""),(0,s.default)(t,"isPayVal",""),(0,s.default)(t,"isWeixin",!1),(0,s.default)(t,"isPhone",!1),(0,s.default)(t,"firstCategoriesId",""),(0,s.default)(t,"logo",!1),t},props:{personInfo:{type:!1},userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1}},created:function(){this.isWeixin=n.default.isWeixin().isWeixin,this.isPhone=n.default.isWeixin().isPhone,this.loadCategories()},watch:{isfixNav:function(t,e){this.isfixNav=t}},methods:(i={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var t=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(t-640)/2+"px"},loadCategories:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(e){t.siteInfo=e.readdata,e.readdata._data.logo&&(t.logo=e.readdata._data.logo),t.isPayVal=e.readdata._data.siteMode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(e){console.log("2222"),console.log(e),t.categories=e.readdata,t.firstCategoriesId=e.readdata[0]._data.id,console.log(t.firstCategoriesId),t.$emit("update",t.firstCategoriesId),console.log("3456")}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(t){this.$emit("categoriesChoice",t)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,s.default)(i,"backUrl",(function(){window.history.go(-1)})),(0,s.default)(i,"LogOut",(function(){console.log("测试")})),(0,s.default)(i,"bindEvent",(function(t){1==t&&this.LogOut()})),i),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(t,e,a){window.removeEventListener("scroll",this.handleTabFix,!0),a()}}},iT2n:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("van-popup",{staticClass:"sidebarWrap",style:{height:"100%"},attrs:{position:"right"},model:{value:t.popupShow,callback:function(e){t.popupShow=e},expression:"popupShow"}},[a("sidebar",{attrs:{isPayVal:t.isPayVal}})],1),t._v(" "),t.$route.meta.oneHeader?a("div",{staticClass:"headerBox"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet"},[t.personInfo?a("div",{},[t.userInfoAvatarUrl?a("img",{staticClass:"inviteHead",attrs:{src:t.userInfoAvatarUrl,alt:""}}):a("img",{staticClass:"inviteHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),t._v(" "),t.invitePerDet&&t.userInfoName?a("div",{staticClass:"inviteName",model:{value:t.userInfoName,callback:function(e){t.userInfoName=e},expression:"userInfoName"}},[t._v(t._s(t.userInfoName))]):a("div",{staticClass:"inviteName"},[t._v("该用户已被删除")]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[t._v("邀请您加入")])]):t._e()]),t._v(" "),t.searchIconShow||t.menuIconShow?t._e():a("div",{staticClass:"headeGap"}),t._v(" "),t.searchIconShow||t.menuIconShow?a("div",{staticClass:"headOpe"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:t.searchJump}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:t.showPopup}})]):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[t.logo?a("img",{staticClass:"logo",attrs:{src:t.logo}}):a("img",{staticClass:"logo",attrs:{src:t.appConfig.staticBaseUrl+"/images/logo.png"}})]),t._v(" "),t.siteInfo?a("div",{directives:[{name:"show",rawName:"v-show",value:t.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[a("span",[t._v("主题："+t._s(t.siteInfo._data.threads))]),t._v(" "),a("span",[t._v("成员："+t._s(t.siteInfo._data.members))]),t._v(" "),t.siteInfo._data.siteAuthor?a("span",[t._v("站长："+t._s(t.siteInfo._data.siteAuthor.username))]):a("span",[t._v("站长：无")])]):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:t.isfixNav},attrs:{id:"testNavBar"}},[a("van-tabs",{model:{value:t.navActi,callback:function(e){t.navActi=e},expression:"navActi"}},t._l(t.categories,(function(e,i){return a("van-tab",{key:i},[a("span",{attrs:{slot:"title"},on:{click:function(a){return t.categoriesCho(e._data.id)}},slot:"title"},[t._v("\n              "+t._s(e._data.name)+"\n          ")])])})),1)],1)]):t._e()],1)},s=[];a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}))},omtG:function(t,e,a){"use strict";a.r(e);var i=a("iT2n"),s=a("Jgvg");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var o=a("KHd+"),r=Object(o.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports},pvnC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(a("QbLZ")),s=o(a("QiNT")),n=o(a("IsPG"));function o(t){return t&&t.__esModule?t:{default:t}}a("E2jd"),e.default=(0,i.default)({name:"headerView",components:{Sidebar:n.default}},s.default)},uwtL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(a("QbLZ")),s=r(a("QiNT")),n=r(a("F1+Y")),o=r(a("omtG"));function r(t){return t&&t.__esModule?t:{default:t}}a("E2jd"),e.default=(0,i.default)({name:"payCircleView",components:{Header:o.default}},s.default,n.default)}}]);