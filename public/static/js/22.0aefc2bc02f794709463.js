(window.webpackJsonp=window.webpackJsonp||[]).push([[22,80],{DrXK:function(e,t,a){"use strict";a.r(t);var i=a("Yoo9"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t.default=n.a},Ey7k:function(e,t,a){"use strict";a.r(t);var i=a("xt30"),n=a("DrXK");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("HiHo");var s=a("KHd+"),r=Object(s.a)(n.default,i.a,i.b,!1,null,"115a1fa2",null);t.default=r.exports},FYko:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=c(a("FyfS")),o=c(a("14Xm")),s=c(a("D3Ub")),r=c(a("JZuw"));function c(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{inviteList:[],choiceShow:!1,checkOperaStatus:!1,choList:[],getGroupNameById:{},choiceRes:{attributes:{name:"选择操作"}},loading:!1,finished:!1,isLoading:!1,pageIndex:1,offset:100,query:{},pageLimit:15}},components:{myInviteJoinHeader:r.default},created:(i=(0,s.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getOperaType();case 2:this.query=this.$route.query;case 3:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)}),methods:{toggle:function(e){this.$refs.checkboxes[e].toggle()},showChoice:function(){this.choiceShow=!this.choiceShow},setSelectVal:function(e){this.choiceShow=!1,this.checkOperaStatus=!0,this.choiceRes=e},getOperaType:function(){var e=this;return(0,s.default)(o.default.mark((function t(){var a,i,s,r,c,u,d;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.appFetch({url:"groups",method:"get"});case 3:for(a=t.sent,e.choList=a.data,i=!0,s=!1,r=void 0,t.prev=8,c=(0,n.default)(e.choList);!(i=(u=c.next()).done);i=!0)d=u.value,e.getGroupNameById[d.id]=d.attributes.name;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),s=!0,r=t.t0;case 16:t.prev=16,t.prev=17,!i&&c.return&&c.return();case 19:if(t.prev=19,!s){t.next=22;break}throw r;case 22:return t.finish(19);case 23:return t.finish(16);case 24:t.next=30;break;case 26:t.prev=26,t.t1=t.catch(0),console.error(t.t1,"membersManagementCon.js getOperaType"),e.$toast("邀请码类型获取失败，请刷新重试");case 30:case"end":return t.stop()}}),t,e,[[0,26],[8,12,16,24],[17,,19,23]])})))()},getInviteList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,s.default)(o.default.mark((function a(){return o.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.appFetch({url:"invite",method:"get",data:{data:{type:"invite",attributes:{group_id:parseInt(e.choiceRes.id)}},"page[number]":e.pageIndex,"page[limit]":e.pageLimit}}).then((function(a){t&&(e.inviteList=[]),e.loading=!1,e.inviteList=e.inviteList.concat(a.readdata),e.finished=a.readdata.length<e.pageLimit}));case 3:a.next=10;break;case 5:a.prev=5,a.t0=a.catch(0),console.error(a.t0,"邀请码列表获取失败"),e.$toast("邀请列表获取失败"),e.loading&&1!==e.pageIndex&&e.pageIndex--;case 10:case"end":return a.stop()}}),a,e,[[0,5]])})))()},checkSubmit:function(){var e=this;return(0,s.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.checkOperaStatus){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.appFetch({url:"invite",method:"post",data:{data:{type:"invite",attributes:{group_id:parseInt(e.choiceRes.id)}}}});case 5:e.pageIndex=1,e.finished=!1,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0,"checkSubmit");case 12:case"end":return t.stop()}}),t,e,[[2,9]])})))()},copyToClipBoard:function(e){if(0!==e._data.status){var t=document.createElement("textarea");t.style.position="absolute",t.style.opacity="0",t.style.height="0",t.textContent=window.location.href+"?code="+e._data.code+"&group_id="+e._data.group_id,document.body.appendChild(t),t.select(t,"链接链接");try{return document.execCommand("copy")}finally{document.body.removeChild(t)}}},resetDelete:function(e){var t=this;return(0,s.default)(o.default.mark((function a(){var i;return o.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==e._data.status){a.next=2;break}return a.abrupt("return");case 2:return i=e._data.id,a.prev=3,a.next=6,t.appFetch({url:"invite",method:"delete",splice:"/"+i});case 6:t.checkSubmit(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(3),t.$toast("邀请码操作失败！");case 12:case"end":return a.stop()}}),a,t,[[3,9]])})))()},onLoad:function(){this.loading=!0,this.pageIndex++,this.getInviteList()},onRefresh:function(){var e=this;setTimeout((function(){e.pageIndex=1,e.getInviteList(!0),e.$toast("刷新成功"),e.isLoading=!1,e.finished=!1}),200)}},mounted:function(){},beforeRouteLeave:function(e,t,a){a()}}},FyfS:function(e,t,a){e.exports={default:a("Rp86"),__esModule:!0}},HiHo:function(e,t,a){"use strict";var i=a("fUT9");a.n(i).a},Jgvg:function(e,t,a){"use strict";a.r(t);var i=a("pvnC"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t.default=n.a},QiNT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=s(a("YEIV")),o=(a("ULRk"),s(a("+KBz")),s(a("VVfg")),s(a("6NK7")));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:"",userId:""},(0,n.default)(e,"isfixNav",!1),(0,n.default)(e,"popupShow",!1),(0,n.default)(e,"current",0),(0,n.default)(e,"userDet",[]),(0,n.default)(e,"categories",[]),(0,n.default)(e,"siteInfo",!1),(0,n.default)(e,"username",""),(0,n.default)(e,"isPayVal",""),(0,n.default)(e,"isWeixin",!1),(0,n.default)(e,"isPhone",!1),(0,n.default)(e,"firstCategoriesId",""),(0,n.default)(e,"logo",!1),e},props:{personInfo:{type:!1},userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1}},created:function(){this.isWeixin=o.default.isWeixin().isWeixin,this.isPhone=o.default.isWeixin().isPhone,this.loadCategories()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(i={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){e.siteInfo=t.readdata,t.readdata._data.logo&&(e.logo=t.readdata._data.logo),e.isPayVal=t.readdata._data.siteMode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,n.default)(i,"backUrl",(function(){window.history.go(-1)})),(0,n.default)(i,"LogOut",(function(){console.log("测试")})),(0,n.default)(i,"bindEvent",(function(e){1==e&&this.LogOut()})),i),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,a){window.removeEventListener("scroll",this.handleTabFix,!0),a()}}},Rp86:function(e,t,a){a("bBy9"),a("FlQf"),e.exports=a("fXsU")},Yoo9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(a("QbLZ")),n=r(a("omtG")),o=r(a("QiNT")),s=r(a("FYko"));function r(e){return e&&e.__esModule?e:{default:e}}a("E2jd"),t.default=(0,i.default)({name:"managementCirclesView",components:{Header:n.default}},o.default,s.default)},fUT9:function(e,t,a){},fXsU:function(e,t,a){var i=a("5K7Z"),n=a("fNZA");e.exports=a("WEpk").getIterator=function(e){var t=n(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}},iT2n:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-popup",{staticClass:"sidebarWrap",style:{height:"100%"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[a("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?a("div",{staticClass:"headerBox"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet"},[e.personInfo?a("div",{},[e.userInfoAvatarUrl?a("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""}}):a("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?a("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):a("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")])]):e._e()]),e._v(" "),e.searchIconShow||e.menuIconShow?e._e():a("div",{staticClass:"headeGap"}),e._v(" "),e.searchIconShow||e.menuIconShow?a("div",{staticClass:"headOpe"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:e.showPopup}})]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[e.logo?a("img",{staticClass:"logo",attrs:{src:e.logo}}):a("img",{staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}})]),e._v(" "),e.siteInfo?a("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[a("span",[e._v("主题："+e._s(e.siteInfo._data.threads))]),e._v(" "),a("span",[e._v("成员："+e._s(e.siteInfo._data.members))]),e._v(" "),e.siteInfo._data.siteAuthor?a("span",[e._v("站长："+e._s(e.siteInfo._data.siteAuthor.username))]):a("span",[e._v("站长：无")])]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[a("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},e._l(e.categories,(function(t,i){return a("van-tab",{key:i},[a("span",{attrs:{slot:"title"},on:{click:function(a){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])})),1)],1)]):e._e()],1)},n=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}))},omtG:function(e,t,a){"use strict";a.r(t);var i=a("iT2n"),n=a("Jgvg");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);var s=a("KHd+"),r=Object(s.a)(n.default,i.a,i.b,!1,null,null,null);t.default=r.exports},pvnC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(a("QbLZ")),n=s(a("QiNT")),o=s(a("IsPG"));function s(e){return e&&e.__esModule?e:{default:e}}a("E2jd"),t.default=(0,i.default)({name:"headerView",components:{Sidebar:o.default}},n.default)},xt30:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("myInviteJoinHeader",{attrs:{title:"邀请加入"}}),e._v(" "),a("div",{staticClass:"content"},[a("van-list",{attrs:{finished:e.finished,offset:e.offset,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[a("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[a("div",{staticClass:"inviteBox"},[a("table",{staticClass:"inviteTable"},[a("tr",[a("th",[e._v("编号")]),e._v(" "),a("th",[e._v("邀请为")]),e._v(" "),a("th",[e._v("链接状态")]),e._v(" "),a("th",[e._v("链接操作")])]),e._v(" "),e._l(e.inviteList,(function(t,i){return a("tr",{key:i},[a("td",[e._v(e._s(t._data.id))]),e._v(" "),a("td",[e._v(e._s(e.getGroupNameById[t._data.group_id]))]),e._v(" "),a("td",[e._v(e._s(0===t._data.status?"已失效":"使用中"))]),e._v(" "),a("td",[a("a",{class:["copyA",0===t._data.status&&"font9"],attrs:{href:"javascript:;"},on:{click:function(a){return e.copyToClipBoard(t)}}},[e._v("复制")]),e._v(" "),a("a",{class:["invalidA",0===t._data.status&&"font9"],attrs:{href:"javascript:;"},on:{click:function(a){return e.resetDelete(t)}}},[e._v("置为无效")])])])}))],2)])])],1)],1),e._v(" "),a("div",{staticClass:"manageFootFixed"},[a("div",{staticClass:"operaCho"},[a("div",{staticClass:"operaWo",on:{click:e.showChoice}},[a("span",[e._v(e._s(e.checkOperaStatus?e.choiceRes.attributes.name+" 邀请链接":e.choiceRes.attributes.name))]),e._v(" "),a("i",{staticClass:"icon iconfont icon-choice-item"})]),e._v(" "),e.choiceShow?a("ul",{staticClass:"operaChoList"},e._l(e.choList,(function(t,i){return a("li",{key:i,staticClass:"operaChoLi",on:{click:function(a){return a.stopPropagation(),e.setSelectVal(t)}}},[e._v(e._s(t.attributes.name)+" 邀请链接")])})),0):e._e()]),e._v(" "),a("button",{staticClass:"checkSubmit",on:{click:e.checkSubmit}},[e._v("生成")])])],1)},n=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}))}}]);