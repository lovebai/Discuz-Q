(window.webpackJsonp=window.webpackJsonp||[]).push([[22,76,77],{"/Zpk":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{id:1,checked:!0,result:[],checkBoxres:[],imageShow:!1,index:1,themeListResult:[],firstpostImageListResult:[],priview:[]}},props:{themeList:{type:Array},replyTag:{replyTag:!1},isTopShow:{isTopShow:!1},isMoreShow:{isMoreShow:!1},ischeckShow:{ischeckShow:!1}},created:function(){this.loadPriviewImgList()},beforeDestroy:function(){},watch:{themeList:function(e,t){this.themeListResult=e,this.loadPriviewImgList()}},methods:{loadPriviewImgList:function(){var e=this.themeListResult.length;if(""==this.themeListResult||null==this.themeListResult)return!1;for(var t=0;t<e;t++){var s=[];if(this.themeListResult[t].firstPost.images)for(var i=0;i<this.themeListResult[t].firstPost.images.length;i++)s.push("https://2020.comsenz-service.com/api/attachments/"+this.themeListResult[t].firstPost.images[i]._data.uuid);this.themeListResult[t].firstPost.imageList=s}},imageSwiper:function(e){this.loadPriviewImgList(),this.imageShow=!0,console.log(this.priview)},onChange:function(e){this.index=e+1},checkAll:function(){console.log(this.$refs),this.$refs.checkboxGroup.toggleAll(!0)},signOutDele:function(){this.$refs.checkboxGroup.toggleAll()},deleteAllClick:function(){this.$emit("deleteAll",this.result)},jumpThemeDet:function(e){this.$router.push({path:"details/"+e})},jumpPerDet:function(e){this.$router.push({path:"home-page/"+e})}},beforeRouteLeave:function(e,t,s){}}},"4Njt":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(s("QbLZ"));s("Cpqr");var a=l(s("omtG")),n=(l(s("QiNT")),l(s("JZuw"))),o=l(s("CFQY")),r=l(s("aSTm")),c=l(s("/Zpk"));function l(e){return e&&e.__esModule?e:{default:e}}s("E2jd"),t.default=(0,i.default)({name:"my-collection-view",components:{comHeader:n.default,Header:a.default,ThemeDet:o.default}},r.default,{mSiteThemeDet:c.default})},B7mw:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reply-my-box my-info-money-header"},[s("comHeader",{attrs:{title:"我的收藏"}}),e._v(" "),s("van-list",{attrs:{finished:e.finished,offset:e.offset,"finished-text":"没有更多了","immediate-check":!1},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[s("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"gap"}),e._v(" "),s("ThemeDet",{attrs:{themeList:e.collectionList}})],1)])],1)],1)},a=[];s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return a}))},CFQY:function(e,t,s){"use strict";s.r(t);var i=s("nC1V"),a=s("DhNJ");for(var n in a)"default"!==n&&function(e){s.d(t,e,(function(){return a[e]}))}(n);var o=s("KHd+"),r=Object(o.a)(a.default,i.a,i.b,!1,null,null,null);t.default=r.exports},DhNJ:function(e,t,s){"use strict";s.r(t);var i=s("xry+"),a=s.n(i);for(var n in i)"default"!==n&&function(e){s.d(t,e,(function(){return i[e]}))}(n);t.default=a.a},Jgvg:function(e,t,s){"use strict";s.r(t);var i=s("pvnC"),a=s.n(i);for(var n in i)"default"!==n&&function(e){s.d(t,e,(function(){return i[e]}))}(n);t.default=a.a},QiNT:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=o(s("YEIV")),n=(s("ULRk"),o(s("+KBz")),o(s("VVfg")),o(s("6NK7")));function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:"",userId:""},(0,a.default)(e,"isfixNav",!1),(0,a.default)(e,"popupShow",!1),(0,a.default)(e,"current",0),(0,a.default)(e,"userDet",[]),(0,a.default)(e,"categories",[]),(0,a.default)(e,"siteInfo",!1),(0,a.default)(e,"username",""),(0,a.default)(e,"isPayVal",""),(0,a.default)(e,"isWeixin",!1),(0,a.default)(e,"isPhone",!1),(0,a.default)(e,"firstCategoriesId",""),e},props:{personInfo:{type:!1},userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1}},created:function(){this.isWeixin=n.default.isWeixin().isWeixin,this.isPhone=n.default.isWeixin().isPhone,this.loadCategories()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(i={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){e.siteInfo=t.readdata,e.isPayVal=t.readdata._data.siteMode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,a.default)(i,"backUrl",(function(){window.history.go(-1)})),(0,a.default)(i,"LogOut",(function(){console.log("测试")})),(0,a.default)(i,"bindEvent",(function(e){1==e&&this.LogOut()})),i),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,s){window.removeEventListener("scroll",this.handleTabFix,!0),s()}}},YRWR:function(e,t,s){"use strict";s.r(t);var i=s("4Njt"),a=s.n(i);for(var n in i)"default"!==n&&function(e){s.d(t,e,(function(){return i[e]}))}(n);t.default=a.a},aSTm:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(s("JZuw")),i(s("STKU")),i(s("/uo3")),i(s("3YLv"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{collectionList:[],list:[],loading:!1,finished:!1,isLoading:!1,pageIndex:1,pageLimit:20,offset:100}},created:function(){this.imgUrl="../../../../../../../static/images/mytx.png",this.myCollection()},methods:{myCollection:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.appFetch({url:"collection",method:"get",data:{include:["user","firstPost","lastThreePosts","lastThreePosts.user","firstPost.likedUsers","rewardedUsers"],"page[number]":this.pageIndex,"page[limit]":this.pageLimit}}).then((function(s){t&&(e.collectionList=[]),e.collectionList=e.collectionList.concat(s.readdata),e.loading=!1,e.finished=res.data.length<e.pageLimit})).catch((function(t){e.loading&&1!==e.pageIndex&&e.pageIndex--,e.loading=!1}))},onLoad:function(){this.loading=!0,this.pageIndex++,this.myCollection()},onRefresh:function(){var e=this;this.pageIndex=1,this.myCollection(!0).then((function(){e.$toast("刷新成功"),e.finished=!1,e.isLoading=!1})).catch((function(t){e.$toast("刷新失败"),e.isLoading=!1}))}}}},chKZ:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("van-popup",{staticClass:"sidebarWrap",style:{height:"100%"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[s("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?s("div",{staticClass:"headerBox"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet"},[e.personInfo?s("div",{},[e.userInfoAvatarUrl?s("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""},model:{value:e.userInfoAvataUrl,callback:function(t){e.userInfoAvataUrl=t},expression:"userInfoAvataUrl"}}):s("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?s("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):s("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")])]):e._e()]),e._v(" "),e.searchIconShow||e.menuIconShow?s("div",{staticClass:"headOpe"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:e.showPopup}})]):e._e(),e._v(" "),e.siteInfo._data.logo?s("img",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logo",attrs:{src:e.siteInfo._data.logo}}):s("img",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}}),e._v(" "),e.siteInfo?s("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[s("span",[e._v("主题："+e._s(e.siteInfo._data.threads))]),e._v(" "),s("span",[e._v("成员："+e._s(e.siteInfo._data.members))]),e._v(" "),e.siteInfo._data.siteAuthor?s("span",[e._v("站长："+e._s(e.siteInfo._data.siteAuthor.username))]):s("span",[e._v("站长：无")])]):e._e(),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[s("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},e._l(e.categories,(function(t,i){return s("van-tab",{key:i},[s("span",{attrs:{slot:"title"},on:{click:function(s){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])})),1)],1)]):e._e()],1)},a=[];s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return a}))},gX8P:function(e,t,s){"use strict";s.r(t);var i=s("B7mw"),a=s("YRWR");for(var n in a)"default"!==n&&function(e){s.d(t,e,(function(){return a[e]}))}(n);var o=s("KHd+"),r=Object(o.a)(a.default,i.a,i.b,!1,null,null,null);t.default=r.exports},nC1V:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("div",[s("van-checkbox-group",{ref:"checkboxGroup",model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},[e._l(e.themeList,(function(t,i){return s("div",{},[s("div",{staticClass:"cirPostCon"},[s("div",{},[s("div",{staticClass:"postTop"},[s("div",{staticClass:"postPer"},[t.postHead?s("img",{staticClass:"postHead",attrs:{src:t.postHead}}):s("img",{staticClass:"postHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif"}}),e._v(" "),s("div",{staticClass:"perDet"},[t.user?s("div",{staticClass:"perName"},[e._v(e._s(t.user._data.username))]):s("div",{staticClass:"perName"},[e._v("该用户已被删除")]),e._v(" "),s("div",{staticClass:"postTime"},[e._v(e._s(e._f("timeAgo")(t._data.createdAt)))])])]),e._v(" "),s("div",{staticClass:"postOpera"},[t._data.isSticky?s("span",{directives:[{name:"show",rawName:"v-show",value:e.isTopShow,expression:"isTopShow"}],staticClass:"icon iconfont icon-top"}):e._e()])]),e._v(" "),t.firstPost?s("div",{staticClass:"postContent"},[s("a",{on:{click:function(s){return e.jumpThemeDet(t._data.id)}}},[e._v(e._s(t.firstPost._data.content))])]):e._e(),e._v(" "),t.firstPost.imageList&&t.firstPost.imageList.length>0?s("div",{staticClass:"themeImgBox"},[s("div",{staticClass:"themeImgList moreImg"},e._l(t.firstPost.imageList,(function(t,i){return s("van-image",{staticClass:"themeImgChild",attrs:{fit:"cover",width:"113px",height:"113px","lazy-load":"",src:t},on:{click:e.imageSwiper}})})),1)]):e._e()]),e._v(" "),s("div",{staticClass:"operaBox"},[t.firstPost.likedUsers.length>0||t.rewardedUsers.length>0?s("div",{staticClass:"isrelationGap"}):e._e(),e._v(" "),t.firstPost.likedUsers.length>0?s("div",{staticClass:"likeBox"},[s("span",{staticClass:"icon iconfont icon-praise-after"}),e._v(" "),s("i"),e._v(" "),e._l(t.firstPost.likedUsers,(function(t){return s("a",{on:{click:function(s){return e.jumpPerDet(t._data.id)}}},[e._v(e._s(t._data.username+","))])})),e._v(" 等"),s("span",[e._v(e._s(t._data.likeCount))]),e._v("个人觉得很赞\n            ")],2):e._e(),e._v(" "),t.rewardedUsers.length>0?s("div",{staticClass:"reward"},[s("span",{staticClass:"icon iconfont icon-money"}),e._v(" "),e._l(t.rewardedUsers,(function(t){return s("a",{attrs:{href:"javascript:;"}},[e._v(e._s(t._data.username+","))])}))],2):e._e(),e._v(" "),t.firstPost.likedUsers.length>0||t.rewardedUsers.length>0?s("div",{staticClass:"isrelationLine"}):e._e(),e._v(" "),t.lastThreePosts.length>0?s("div",{staticClass:"replyBox"},[e._l(t.lastThreePosts,(function(t){return s("div",{staticClass:"replyCon"},[t.user?s("a",{attrs:{href:"javascript:;"}},[e._v(e._s(t.user._data.username))]):s("a",{attrs:{href:"javascript:;"}},[e._v("该用户已被删除")]),e._v(" "),t._data.replyUserId?s("span",{staticClass:"font9"},[e._v("回复")]):e._e(),e._v(" "),t._data.replyUserId&&t.replyUser?s("a",{attrs:{href:"javascript:;"}},[e._v(e._s(t.replyUser._data.username))]):t._data.replyUserId&&!t.replyUser?s("a",{attrs:{href:"javascript:;"}},[e._v("该用户已被删除")]):e._e(),e._v(" "),s("span",{domProps:{innerHTML:e._s(t._data.content)}})])})),e._v(" "),t._data.postCount>4?s("a",{staticClass:"allReply",attrs:{href:"javascript;"}},[e._v("全部"+e._s(t._data.postCount-1)+"条回复"),s("span",{staticClass:"icon iconfont icon-right-arrow"})]):e._e()],2):e._e()]),e._v(" "),e.ischeckShow?s("van-checkbox",{ref:"checkboxes",refInFor:!0,staticClass:"memberCheck",attrs:{name:t._data.id}}):e._e()],1),e._v(" "),s("div",{staticClass:"gap"})])})),e._v(" "),e.ischeckShow?s("div",{staticClass:"manageFootFixed choFixed"},[s("a",{attrs:{href:"javascript:;"},on:{click:e.checkAll}},[e._v("全选")]),e._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:e.signOutDele}},[e._v("取消全选")]),e._v(" "),s("button",{staticClass:"checkSubmit",on:{click:e.deleteAllClick}},[e._v("删除选中")])]):e._e()],2)],1),e._v(" "),s("van-image-preview",{attrs:{images:e.priview},on:{change:e.onChange},scopedSlots:e._u([{key:"index",fn:function(){return[e._v("第"+e._s(e.index)+"页")]},proxy:!0}]),model:{value:e.imageShow,callback:function(t){e.imageShow=t},expression:"imageShow"}})],1)},a=[];s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return a}))},omtG:function(e,t,s){"use strict";s.r(t);var i=s("chKZ"),a=s("Jgvg");for(var n in a)"default"!==n&&function(e){s.d(t,e,(function(){return a[e]}))}(n);var o=s("KHd+"),r=Object(o.a)(a.default,i.a,i.b,!1,null,null,null);t.default=r.exports},pvnC:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(s("QbLZ")),a=o(s("QiNT")),n=o(s("IsPG"));function o(e){return e&&e.__esModule?e:{default:e}}s("E2jd"),t.default=(0,i.default)({name:"headerView",components:{Sidebar:n.default}},a.default)},"xry+":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(s("QbLZ")),a=n(s("/Zpk"));function n(e){return e&&e.__esModule?e:{default:e}}s("E2jd"),t.default=(0,i.default)({name:"themeDetView"},a.default)}}]);