(window.webpackJsonp=window.webpackJsonp||[]).push([[51,95],{FQ8C:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=i("VVfg"),s=(a=o)&&a.__esModule?a:{default:a};t.default={data:function(){return{showScreen:!1,themeListCon:[],userInfoAvatarUrl:"",userInfoName:"",invitationShow:!1,loginBtnFix:!0,loginHide:!1,loginWord:"登录 / 注册",themeChoList:[{typeWo:"全部主题",type:"1",themeType:""},{typeWo:"精华主题",type:"2",themeType:"isEssence"}],loading:!1,finished:!1,isLoading:!1,pageIndex:1,pageLimit:20,offset:100}},created:function(){this.loadThemeList(),this.getUserInfo(),s.default.getLItem("Authorization")?(this.loginBtnFix=!1,this.loginHide=!0):(this.loginBtnFix=!0,this.loginHide=!1)},computed:{userId:function(){return this.$route.params.userId}},methods:{getUserInfo:function(){var e=this;this.appFetch({url:"users",method:"get",splice:"/"+this.userId,data:{}}).then((function(t){console.log(t,"用户信息请求"),e.userInfoName=t.readdata._data.username,e.userInfoAvatarUrl=t.readdata._data.avatarUrl,e.userInfoName&&(e.invitationShow=!0)}))},loadThemeList:function(e,t){var i=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return"isEssence"==e?this.appFetch({url:"threads",method:"get",data:{"filter[isEssence]":t,include:["user","firstPost","firstPost.images","lastThreePosts","lastThreePosts.user","lastThreePosts.replyUser","firstPost.likedUsers","rewardedUsers"],"page[number]":this.pageIndex,"page[limit]":this.pageLimit}}).then((function(e){if(e.errors)throw i.$toast.fail(e.errors[0].code),new Error(e.error);a&&(i.themeListCon=[]),console.log(e,"邀请人"),i.themeListCon=i.themeListCon.concat(e.readdata),i.loading=!1,i.finished=e.data.length<i.pageLimit})).catch((function(e){i.loading&&1!==i.pageIndex&&i.pageIndex--,i.loading=!1})):"categoryId"==e?this.appFetch({url:"threads",method:"get",data:{"filter[categoryId]":t,include:["user","firstPost","firstPost.images","lastThreePosts","lastThreePosts.user","lastThreePosts.replyUser","firstPost.likedUsers","rewardedUsers"],"page[number]":this.pageIndex,"page[limit]":this.pageLimit}}).then((function(e){if(e.errors)throw i.$toast.fail(e.errors[0].code),new Error(e.error);a&&(i.themeListCon=[]),i.themeListCon=i.themeListCon.concat(e.readdata),i.loading=!1,i.finished=e.data.length<i.pageLimit})).catch((function(e){i.loading&&1!==i.pageIndex&&i.pageIndex--,i.loading=!1})):this.appFetch({url:"threads",method:"get",data:{filterValue:t,include:["user","firstPost","firstPost.images","lastThreePosts","lastThreePosts.user","lastThreePosts.replyUser","firstPost.likedUsers","rewardedUsers"],"page[number]":this.pageIndex,"page[limit]":this.pageLimit}}).then((function(e){if(e.errors)throw i.$toast.fail(e.errors[0].code),new Error(e.error);a&&(i.themeListCon=[]),i.themeListCon=i.themeListCon.concat(e.readdata),console.log(i.themeListCon),i.loading=!1,i.finished=e.data.length<i.pageLimit})).catch((function(e){i.loading&&1!==i.pageIndex&&i.pageIndex--,i.loading=!1}))},footFix:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#testNavBar").offsetTop;1==this.loginBtnFix&&(this.loginHide=!0,this.loginHide=e>t)},choTheme:function(e){this.loadThemeList("isEssence",e)},categoriesChoice:function(e){this.loadThemeList("categoryId",e)},bindScreen:function(){this.showScreen=!this.showScreen},hideScreen:function(){this.showScreen=!1},loginJump:function(){this.$router.push({path:"/login-user"})},registerJump:function(){this.$router.push({path:"sign-up"})},addClass:function(e,t){this.current=e;t.currentTarget},onLoad:function(){this.loading=!0,this.pageIndex++,this.loadThemeList()},onRefresh:function(){var e=this;this.pageIndex=1,this.loadThemeList(!0).then((function(){e.$toast("刷新成功"),e.finished=!1,e.isLoading=!1})).catch((function(t){e.$toast("刷新失败"),e.isLoading=!1}))}},mounted:function(){},beforeRouteLeave:function(e,t,i){i()}}},Jgvg:function(e,t,i){"use strict";i.r(t);var a=i("pvnC"),o=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t.default=o.a},"K+yw":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(i("QbLZ")),o=l(i("FQ8C")),s=l(i("QiNT")),n=l(i("omtG")),r=l(i("CFQY")),d=l(i("/Zpk"));function l(e){return e&&e.__esModule?e:{default:e}}i("iUmJ"),i("N960"),t.default=(0,a.default)({name:"openCircleView",components:{Header:n.default,ThemeDet:r.default}},s.default,d.default,o.default)},MAhi:function(e,t,i){"use strict";i.r(t);var a=i("V14d"),o=i("Z9+6");for(var s in o)"default"!==s&&function(e){i.d(t,e,(function(){return o[e]}))}(s);var n=i("KHd+"),r=Object(n.a)(o.default,a.a,a.b,!1,null,null,null);t.default=r.exports},QiNT:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(i("YEIV")),s=(i("ULRk"),n(i("+KBz")),n(i("VVfg")),n(i("6NK7")));function n(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:"",userId:""},(0,o.default)(e,"isfixNav",!1),(0,o.default)(e,"popupShow",!1),(0,o.default)(e,"current",0),(0,o.default)(e,"userDet",[]),(0,o.default)(e,"categories",[]),(0,o.default)(e,"siteInfo",!1),(0,o.default)(e,"username",""),(0,o.default)(e,"isPayVal",""),(0,o.default)(e,"isWeixin",!1),(0,o.default)(e,"isPhone",!1),(0,o.default)(e,"firstCategoriesId",""),(0,o.default)(e,"logo",!1),(0,o.default)(e,"viewportWidth",""),e},props:{userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1}},created:function(){this.viewportWidth=window.innerWidth,this.isWeixin=s.default.isWeixin().isWeixin,this.isPhone=s.default.isWeixin().isPhone,this.loadCategories()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(a={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){e.siteInfo=t.readdata,t.readdata._data.logo&&(e.logo=t.readdata._data.logo),e.isPayVal=t.readdata._data.siteMode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,o.default)(a,"backUrl",(function(){window.history.go(-1)})),(0,o.default)(a,"LogOut",(function(){console.log("测试")})),(0,o.default)(a,"bindEvent",(function(e){1==e&&this.LogOut()})),a),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,i){window.removeEventListener("scroll",this.handleTabFix,!0),i()}}},V14d:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"circleCon"},[i("van-list",{attrs:{finished:e.finished,offset:e.offset,"finished-text":"没有更多了","immediate-check":!1},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[i("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[i("Header",{attrs:{searchIconShow:!1,perDetShow:!0,logoShow:!0,menuIconShow:!1,navShow:!0,invitePerDet:!0,headFixed:!1,userInfoAvatarUrl:e.userInfoAvatarUrl,userInfoName:e.userInfoName,invitationShow:e.invitationShow},on:{categoriesChoice:e.categoriesChoice}}),e._v(" "),i("div",{staticClass:"gap"}),e._v(" "),i("div",{staticClass:"themeTitBox"},[i("span",{staticClass:"themeTit"},[e._v("全部主题")]),e._v(" "),i("div",{staticClass:"screen",on:{click:e.bindScreen}},[i("span",[e._v("筛选")]),e._v(" "),i("span",{staticClass:"icon iconfont icon-down-menu jtGrayB"}),e._v(" "),e.showScreen?i("div",{staticClass:"themeList"},e._l(e.themeChoList,(function(t,a){return i("a",{key:a,attrs:{href:"javascript:;"},on:{click:function(i){return e.choTheme(t.themeType)}}},[e._v(e._s(t.typeWo))])})),0):e._e()])]),e._v(" "),e.themeListCon?i("div",[i("ThemeDet",{attrs:{themeList:e.themeListCon,isTopShow:!0,isMoreShow:!0}})],1):e._e()],1)],1),e._v(" "),e.loginBtnFix?i("van-button",{staticClass:"loginBtnFix",class:{hide:e.loginHide},attrs:{type:"primary"},on:{click:e.loginJump}},[e._v(e._s(e.loginWord))]):e._e(),e._v(" "),i("div",{staticClass:"gap"})],1)},o=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o}))},"Z9+6":function(e,t,i){"use strict";i.r(t);var a=i("K+yw"),o=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t.default=o.a},nb5d:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("van-popup",{staticClass:"sidebarWrap",style:{height:"100%",right:e.isPhone||e.isWeixin?"0":(e.viewportWidth-640)/2+"px"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[i("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?i("div",{staticClass:"headerBox"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet aaa"},[e.userInfoAvatarUrl?i("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""}}):i("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?i("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):i("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")])]),e._v(" "),e.searchIconShow||e.menuIconShow?e._e():i("div",{staticClass:"headeGap"}),e._v(" "),e.searchIconShow||e.menuIconShow?i("div",{staticClass:"headOpe"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:e.showPopup}})]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[e.logo?i("img",{staticClass:"logo",attrs:{src:e.logo}}):i("img",{staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}})]),e._v(" "),e.siteInfo?i("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[i("span",[e._v("主题："+e._s(e.siteInfo._data.threads))]),e._v(" "),i("span",[e._v("成员："+e._s(e.siteInfo._data.members))]),e._v(" "),e.siteInfo._data.siteAuthor?i("span",[e._v("站长："+e._s(e.siteInfo._data.siteAuthor.username))]):i("span",[e._v("站长：无")])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[i("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},e._l(e.categories,(function(t,a){return i("van-tab",{key:a},[i("span",{attrs:{slot:"title"},on:{click:function(i){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])})),1)],1)]):e._e()],1)},o=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o}))},omtG:function(e,t,i){"use strict";i.r(t);var a=i("nb5d"),o=i("Jgvg");for(var s in o)"default"!==s&&function(e){i.d(t,e,(function(){return o[e]}))}(s);var n=i("KHd+"),r=Object(n.a)(o.default,a.a,a.b,!1,null,null,null);t.default=r.exports},pvnC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(i("QbLZ")),o=n(i("QiNT")),s=n(i("IsPG"));function n(e){return e&&e.__esModule?e:{default:e}}i("E2jd"),t.default=(0,a.default)({name:"headerView",components:{Sidebar:s.default}},o.default)}}]);