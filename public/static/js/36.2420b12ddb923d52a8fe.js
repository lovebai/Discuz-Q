(window.webpackJsonp=window.webpackJsonp||[]).push([[36,81],{"+fa4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=a("VVfg"),o=(i=s)&&i.__esModule?i:{default:i};t.default={data:function(){return{isfixNav:!1,siteInfo:!1,username:"",limitList:!1}},created:function(){this.loadSite();o.default.getLItem("tokenId")},methods:{loadSite:function(){var e=this,t=o.default.getLItem("tokenId");this.appFetch({url:"users",method:"get",splice:"/"+t,data:{include:"groups"}}).then((function(t){if(t.errors)throw e.$toast.fail(t.errors[0].code),new Error(t.error);e.roleList=t.readdata.groups,""==t.readdata._data.joinedAt||null==t.readdata._data.joinedAt?e.joinedAt=t.readdata._data.createdAt:e.joinedAt=t.readdata._data.joinedAt})),this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){if(t.errors)throw e.$toast.fail(t.errors[0].code),new Error(t.error);console.log(t),e.siteInfo=t.readdata,console.log(t.readdata._data.siteIntroduction)})),this.appFetch({url:"groups",method:"get",data:{include:["permission"],"filter[isDefault]":1}}).then((function(t){if(t.errors)throw e.$toast.fail(t.errors[0].code),new Error(t.error);e.limitList=t.readdata[0]}))},moreCilrcleMembers:function(){this.$router.push({path:"circle-members"})},membersJump:function(e){console.log("2222"),this.$router.push({path:"/home-page/"+e})},loginJump:function(){this.$router.push({path:"/login-user"})},registerJump:function(){this.$router.push({path:"/sign-up"})}},mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,a){window.removeEventListener("scroll",this.handleTabFix,!0),a()}}},"53J7":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(a("QbLZ")),s=n(a("+fa4")),o=n(a("QiNT")),r=n(a("omtG"));function n(e){return e&&e.__esModule?e:{default:e}}a("E2jd"),t.default=(0,i.default)({name:"circleInviteView",components:{Header:r.default}},o.default,s.default)},"6JNq":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-popup",{staticClass:"sidebarWrap",style:{height:"100%"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[a("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?a("div",{staticClass:"headerBox"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet aaa"},[e.userInfoAvatarUrl?a("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""}}):a("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?a("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):a("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")])]),e._v(" "),e.searchIconShow||e.menuIconShow?e._e():a("div",{staticClass:"headeGap"}),e._v(" "),e.searchIconShow||e.menuIconShow?a("div",{staticClass:"headOpe"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:e.showPopup}})]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[e.logo?a("img",{staticClass:"logo",attrs:{src:e.logo}}):a("img",{staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}})]),e._v(" "),e.siteInfo?a("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[a("span",[e._v("主题："+e._s(e.siteInfo._data.threads))]),e._v(" "),a("span",[e._v("成员："+e._s(e.siteInfo._data.members))]),e._v(" "),e.siteInfo._data.siteAuthor?a("span",[e._v("站长："+e._s(e.siteInfo._data.siteAuthor.username))]):a("span",[e._v("站长：无")])]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[a("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},e._l(e.categories,(function(t,i){return a("van-tab",{key:i},[a("span",{attrs:{slot:"title"},on:{click:function(a){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])})),1)],1)]):e._e()],1)},s=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}))},IBtZU:function(e,t,a){"use strict";a.r(t);var i=a("53J7"),s=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t.default=s.a},Jgvg:function(e,t,a){"use strict";a.r(t);var i=a("pvnC"),s=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t.default=s.a},QiNT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(a("YEIV")),o=(a("ULRk"),r(a("+KBz")),r(a("VVfg")),r(a("6NK7")));function r(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:"",userId:""},(0,s.default)(e,"isfixNav",!1),(0,s.default)(e,"popupShow",!1),(0,s.default)(e,"current",0),(0,s.default)(e,"userDet",[]),(0,s.default)(e,"categories",[]),(0,s.default)(e,"siteInfo",!1),(0,s.default)(e,"username",""),(0,s.default)(e,"isPayVal",""),(0,s.default)(e,"isWeixin",!1),(0,s.default)(e,"isPhone",!1),(0,s.default)(e,"firstCategoriesId",""),(0,s.default)(e,"logo",!1),e},props:{userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1}},created:function(){this.isWeixin=o.default.isWeixin().isWeixin,this.isPhone=o.default.isWeixin().isPhone,this.loadCategories()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(i={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){e.siteInfo=t.readdata,t.readdata._data.logo&&(e.logo=t.readdata._data.logo),e.isPayVal=t.readdata._data.siteMode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,s.default)(i,"backUrl",(function(){window.history.go(-1)})),(0,s.default)(i,"LogOut",(function(){console.log("测试")})),(0,s.default)(i,"bindEvent",(function(e){1==e&&this.LogOut()})),i),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,a){window.removeEventListener("scroll",this.handleTabFix,!0),a()}}},j7rN:function(e,t,a){"use strict";a.r(t);var i=a("k5hS"),s=a("IBtZU");for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);var r=a("KHd+"),n=Object(r.a)(s.default,i.a,i.b,!1,null,null,null);t.default=n.exports},k5hS:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.siteInfo?a("div",{staticClass:"circleCon"},[a("Header",{attrs:{searchIconShow:!1,perDetShow:!0,logoShow:!0,menuIconShow:!1,navShow:!1,invitePerDet:!0}}),e._v(" "),a("div",{staticClass:"gap"}),e._v(" "),a("div",{staticClass:"circleInfo padB0 lastBorNone"},[a("h1",{staticClass:"cirInfoTit"},[e._v("站点简介")]),e._v(" "),a("p",{staticClass:"cirInfoWord"},[e._v(e._s(e.siteInfo._data.siteIntroduction))])]),e._v(" "),a("div",{staticClass:"gap"}),e._v(" "),e.limitList?a("div",{staticClass:"powerListBox"},[a("div",{staticClass:"powerTit"},[e._v("作为"+e._s(e.limitList._data.name)+"，您将获得以下权限")]),e._v(" "),a("div",{staticClass:"powerList"},[a("div",{staticClass:"powerClassify"},[e._v("权限列表")]),e._v(" "),e._l(e.limitList.permission,(function(t,i){return a("div",{key:i},[t._data.permission&&"viewThreads"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("查看主题列表")]):e._e(),e._v(" "),t._data.permission&&"thread.viewPosts"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("查看主题")]):e._e(),e._v(" "),t._data.permission&&"createThread"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("发表主题")]):e._e(),e._v(" "),t._data.permission&&"thread.reply"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("回复主题")]):e._e(),e._v(" "),t._data.permission&&"attachment.create.0"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("上传附件")]):e._e(),e._v(" "),t._data.permission&&"attachment.create.1"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("上传图片")]):e._e(),e._v(" "),t._data.permission&&"attachment.view.0"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("查看附件")]):e._e(),e._v(" "),t._data.permission&&"attachment.view.1"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("查看图片")]):e._e(),e._v(" "),t._data.permission&&"viewUserList"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("站点会员列表")]):e._e(),e._v(" "),t._data.permission&&"attachment.delete"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("删除附件")]):e._e(),e._v(" "),t._data.permission&&"cash.create"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("cash.create")]):e._e(),e._v(" "),t._data.permission&&"order.create"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("order.create")]):e._e(),e._v(" "),t._data.permission&&"thread.deletePosts"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("删除回复")]):e._e(),e._v(" "),t._data.permission&&"thread.favorite"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("帖子收藏")]):e._e(),e._v(" "),t._data.permission&&"thread.likePosts"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("帖子点赞")]):e._e(),e._v(" "),t._data.permission&&"user.view"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("user.view")]):e._e(),e._v(" "),t._data.permission&&"viewSiteInfo"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("站点信息")]):e._e(),e._v(" "),t._data.permission&&"user.edit"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("编辑用户状态（例如：禁用）")]):e._e(),e._v(" "),t._data.permission&&"group.edit"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("编辑用户组")]):e._e(),e._v(" "),t._data.permission&&"createInvite"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("管理-邀请加入")]):e._e(),e._v(" "),t._data.permission&&"thread.hide"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("批量删除帖子")]):e._e(),e._v(" "),t._data.permission&&"thread.editPosts"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("编辑")]):e._e(),e._v(" "),t._data.permission&&"thread.essence"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("加精")]):e._e(),e._v(" "),t._data.permission&&"thread.sticky"==t._data.permission?a("p",{staticClass:"powerChi"},[e._v("置顶")]):e._e()])}))],2)]):e._e(),e._v(" "),a("div",{staticClass:"gap"}),e._v(" "),a("div",{staticClass:"loginOpera"},[a("a",{staticClass:"mustLogin",attrs:{href:"javascript:;"},on:{click:e.loginJump}},[e._v("已注册，登录")]),e._v(" "),a("a",{staticClass:"regiJoin",attrs:{href:"javascript:;"},on:{click:e.registerJump}},[e._v("接受邀请，注册")]),e._v(" "),a("p",{staticClass:"payMoney"},[e._v("￥"+e._s(e.siteInfo._data.sitePrice)+" / 永久有效")])])],1):e._e()},s=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}))},omtG:function(e,t,a){"use strict";a.r(t);var i=a("6JNq"),s=a("Jgvg");for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);var r=a("KHd+"),n=Object(r.a)(s.default,i.a,i.b,!1,null,null,null);t.default=n.exports},pvnC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(a("QbLZ")),s=r(a("QiNT")),o=r(a("IsPG"));function r(e){return e&&e.__esModule?e:{default:e}}a("E2jd"),t.default=(0,i.default)({name:"headerView",components:{Sidebar:o.default}},s.default)}}]);