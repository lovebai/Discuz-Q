(window.webpackJsonp=window.webpackJsonp||[]).push([[23,82,83],{"/Zpk":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{id:1,checked:!0,result:[],checkBoxres:[],imageShow:!1,index:1,themeListResult:[],firstpostImageListResult:[],priview:[],showScreen:[],length:0,indexlist:-1,menuStatus:!1}},props:{themeList:{type:Array},replyTag:{replyTag:!1},isTopShow:{isTopShow:!1},isMoreShow:{isMoreShow:!1},ischeckShow:{ischeckShow:!1}},created:function(){var e=this;this.loadPriviewImgList(),this.forList(),document.addEventListener("click",(function(t){console.log("444");e.$refs.screenDiv;document.contains(t.target)&&(e.indexlist=-1)}))},watch:{themeList:function(e,t){this.themeList=e,this.themeListResult=e,this.loadPriviewImgList(),this.$forceUpdate()},deep:!0},methods:{userArr:function(e){var t=[];return e.forEach((function(e){t.push('<a  href="/home-page/'+e._data.id+'">'+e._data.username+"</a>")})),t.join(",")},forList:function(){},bindScreen:function(e,t){e==this.indexlist?this.indexlist=-1:this.indexlist=e},themeOpera:function(e,t,i,s){console.log(e,t,i,s);var a=new Object;3==t?(a.isEssence=!i,this.themeOpeRequest(e,a,"3",s)):4==t?(a.isSticky=!i,this.themeOpeRequest(e,a,"4",s)):5==t?(a.isDeleted=!0,this.themeOpeRequest(e,a,"5",s)):this.$router.push({path:"/edit-topic/"+this.themeId})},themeOpeRequest:function(e,t,i,s){var a=this;console.log(e,t,i,s),console.log("7890"),this.appFetch({url:"threads",method:"patch",splice:"/"+e,data:{data:{type:"threads",attributes:t}}}).then((function(e){if(e.errors)throw a.$toast.fail(e.errors[0].code),new Error(e.error);console.log(e),console.log("01234"),"3"==i?(a.essenceStatus=e.readdata._data.isEssence,a.themeList[s]._data.isEssence=a.essenceStatus):"4"==i?(a.stickyStatus=e.readdata._data.isSticky,a.themeList[s]._data.isSticky=a.stickyStatus):"5"==i&&(a.deletedStatus=e.readdata._data.isDeleted,a.themeList.splice(s,1))}))},replyOpera:function(e,t,i){var s=this,a=new Object;a.isLiked=status,this.appFetch({url:"posts",method:"patch",splice:"/"+e,data:{data:{type:"posts",attributes:a}}}).then((function(e){if(e.errors)throw s.$toast.fail(e.errors[0].code),new Error(e.error);s.likedStatus=e.readdata._data.isLiked,s.themeList[i].firstPost._data.isLiked=s.likedStatus,s.$toast.success("修改成功"),s.$emit("changeStatus",!0)}))},loadPriviewImgList:function(){var e=this.themeListResult.length;if(""==this.themeListResult||null==this.themeListResult)return!1;for(var t=0;t<e;t++){var i=[];if(this.themeListResult[t].firstPost.images)for(var s=0;s<this.themeListResult[t].firstPost.images.length;s++)i.push(this.themeListResult[t].firstPost.images[s]._data.thumbUrl);this.themeListResult[t].firstPost.imageList=i}},imageSwiper:function(e){this.loadPriviewImgList(),this.imageShow=!0,console.log(this.priview)},onChange:function(e){this.index=e+1},checkAll:function(){console.log(this.$refs),this.$refs.checkboxGroup.toggleAll(!0)},signOutDele:function(){this.$refs.checkboxGroup.toggleAll()},deleteAllClick:function(){this.$emit("deleteAll",this.result)},jumpThemeDet:function(e,t){t?this.$router.push({path:"/details/"+e}):this.$toast.fail("没有权限，请联系站点管理员")},jumpPerDet:function(e){this.$router.push({path:"/home-page/"+e})}},mounted:function(){document.addEventListener("click",this.disappear,!1)},destroyed:function(){document.addEventListener("click",this.disappear,!1)},beforeRouteLeave:function(e,t,i){i()}}},"6JNq":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("van-popup",{staticClass:"sidebarWrap",style:{height:"100%"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[i("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?i("div",{staticClass:"headerBox"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet aaa"},[e.userInfoAvatarUrl?i("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""}}):i("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?i("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):i("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")])]),e._v(" "),e.searchIconShow||e.menuIconShow?e._e():i("div",{staticClass:"headeGap"}),e._v(" "),e.searchIconShow||e.menuIconShow?i("div",{staticClass:"headOpe"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape",attrs:{"is-link":""},on:{click:e.showPopup}})]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[e.logo?i("img",{staticClass:"logo",attrs:{src:e.logo}}):i("img",{staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}})]),e._v(" "),e.siteInfo?i("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[i("span",[e._v("主题："+e._s(e.siteInfo._data.threads))]),e._v(" "),i("span",[e._v("成员："+e._s(e.siteInfo._data.members))]),e._v(" "),e.siteInfo._data.siteAuthor?i("span",[e._v("站长："+e._s(e.siteInfo._data.siteAuthor.username))]):i("span",[e._v("站长：无")])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[i("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},e._l(e.categories,(function(t,s){return i("van-tab",{key:s},[i("span",{attrs:{slot:"title"},on:{click:function(i){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])})),1)],1)]):e._e()],1)},a=[];i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}))},CFQY:function(e,t,i){"use strict";i.r(t);var s=i("wZM+"),a=i("DhNJ");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);var o=i("KHd+"),r=Object(o.a)(a.default,s.a,s.b,!1,null,null,null);t.default=r.exports},DhNJ:function(e,t,i){"use strict";i.r(t);var s=i("xry+"),a=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,(function(){return s[e]}))}(n);t.default=a.a},Jgvg:function(e,t,i){"use strict";i.r(t);var s=i("pvnC"),a=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,(function(){return s[e]}))}(n);t.default=a.a},P674:function(e,t,i){"use strict";i.r(t);var s=i("s7by"),a=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,(function(){return s[e]}))}(n);t.default=a.a},QiNT:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,a=o(i("YEIV")),n=(i("ULRk"),o(i("+KBz")),o(i("VVfg")),o(i("6NK7")));function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:"",userId:""},(0,a.default)(e,"isfixNav",!1),(0,a.default)(e,"popupShow",!1),(0,a.default)(e,"current",0),(0,a.default)(e,"userDet",[]),(0,a.default)(e,"categories",[]),(0,a.default)(e,"siteInfo",!1),(0,a.default)(e,"username",""),(0,a.default)(e,"isPayVal",""),(0,a.default)(e,"isWeixin",!1),(0,a.default)(e,"isPhone",!1),(0,a.default)(e,"firstCategoriesId",""),(0,a.default)(e,"logo",!1),e},props:{userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1}},created:function(){this.isWeixin=n.default.isWeixin().isWeixin,this.isPhone=n.default.isWeixin().isPhone,this.loadCategories()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(s={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){e.siteInfo=t.readdata,t.readdata._data.logo&&(e.logo=t.readdata._data.logo),e.isPayVal=t.readdata._data.siteMode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,a.default)(s,"backUrl",(function(){window.history.go(-1)})),(0,a.default)(s,"LogOut",(function(){console.log("测试")})),(0,a.default)(s,"bindEvent",(function(e){1==e&&this.LogOut()})),s),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,i){window.removeEventListener("scroll",this.handleTabFix,!0),i()}}},SO9L:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,a=i("VVfg"),n=(s=a)&&s.__esModule?s:{default:s};t.default={data:function(){return{showScreen:!1,loginBtnFix:!1,loginHide:!1,fourHeader:!0,isWx:"1",themeChoList:[{typeWo:"全部主题",type:"1",themeType:"allThemes"},{typeWo:"精华主题",type:"2",themeType:"isEssence"}],themeListCon:[],themeNavListCon:[],currentData:{},replyTagShow:!1,firstpostImageListCon:[],loading:!1,finished:!1,isLoading:!1,pageIndex:1,pageLimit:20,offset:100,canEdit:!0,firstCategoriesId:"",Initialization:!1,searchStatus:!1,menuStatus:!1,categoryId:!1,filterInfo:{filterCondition:"allThemes",typeWo:"全部主题"},canCreateThread:"",canViewThreads:"",nullTip:!1,nullWord:"",allowRegister:"",loginWord:"登录 / 注册"}},created:function(){this.getInfo(),this.load()},methods:{receive:function(e){console.log(e),this.firstCategoriesId=e,this.loadThemeList()},getInfo:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){if(t.errors)throw e.$toast.fail(t.errors[0].code),new Error(t.error);console.log("44443"),console.log(t),e.siteInfo=t.readdata,e.canCreateThread=t.readdata._data.canCreateThread,e.canViewThreads=t.readdata._data.canViewThreads,e.allowRegister=t.readdata._data.allowRegister,e.allowRegister||(e.loginWord="登录"),console.log(t.readdata._data.siteMode+"请求"),e.sitePrice=t.readdata._data.sitePrice,e.isPayVal=t.readdata._data.siteMode,null!=e.isPayVal&&""!=e.isPayVal&&(e.isPayVal=t.readdata._data.siteMode,e.detailIf(e.isPayVal,!1))}))},detailIf:function(e){"public"==e?n.default.getLItem("Authorization")?(this.loadThemeList(),this.loginBtnFix=!1,this.loginHide=!0,this.canEdit=!0,this.searchStatus=!0,this.menuStatus=!0):(this.loginBtnFix=!0,this.loginHide=!1,this.canEdit=!1):(this.searchStatus=!0,this.menuStatus=!0)},load:function(){var e=this.appCommonH.isWeixin().isWeixin;return this.isWx=1==e?2:1,this.isWx},loadThemeList:function(e,t){var i=this;this.categoryId=t||this.firstCategoriesId;var s={"filter[isEssence]":"yes","filter[categoryId]":this.categoryId,"filter[isApproved]":1,"filter[isDeleted]":"no",include:["user","firstPost","firstPost.images","lastThreePosts","lastThreePosts.user","lastThreePosts.replyUser","firstPost.likedUsers","rewardedUsers"],"page[number]":this.pageIndex,"page[limit]":this.pageLimit};return"isEssence"!==e&&delete s["filter[isEssence]"],this.appFetch({url:"threads",method:"get",data:s}).then((function(e){if(console.log(e),console.log("344343"),e.errors){if("permission_denied"!=e.rawData[0].code)throw i.$toast.fail(e.errors[0].code),new Error(e.error);i.nullTip=!0,i.nullWord=e.errors[0].code}else console.log("正确请求"),i.canViewThreads?(i.themeListCon.length<0&&(i.nullTip=!0),i.themeListCon=i.themeListCon.concat(e.readdata),console.log(i.themeListCon),console.log("66544"),i.loading=!1,i.finished=e.readdata.length<i.pageLimit):(i.nullTip=!0,i.nullWord=e.errors[0].code)})).catch((function(e){i.loading&&1!==i.pageIndex&&i.pageIndex--,i.loading=!1}))},pushImgArray:function(){},footFix:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#testNavBar").offsetTop;1==this.loginBtnFix&&(this.loginHide=!0,this.loginHide=e>t)},choTheme:function(e){console.log(e),console.log("筛选"),this.filterInfo.typeWo="isEssence"===e?"精华主题":"全部主题",this.filterInfo.filterCondition=e,this.pageIndex=1,this.themeListCon=[],this.loadThemeList(this.filterInfo.filterCondition,this.categoryId)},categoriesChoice:function(e){this.pageIndex=1,this.themeListCon=[],this.loadThemeList(this.filterInfo.filterCondition,e)},loginJump:function(e){var t=this,i=this.load();this.$router.push({path:"wechat"}),1==i?this.$router.push({path:"login-user"}):2==i&&this.appFetch({url:"weixin",method:"get",data:{}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);t.$router.push({path:"wechat"})}))},postTopic:function(){this.canCreateThread?this.$router.push({path:"/post-topic"}):this.$toast.fail("没有权限，请联系站点管理员")},addClass:function(e,t){this.current=e;t.currentTarget},bindScreen:function(){this.showScreen=!this.showScreen},hideScreen:function(){this.showScreen=!1},onLoad:function(){this.loading=!0,this.pageIndex++,this.loadThemeList(this.filterCondition,this.categoryId)},onRefresh:function(){var e=this;this.pageIndex=1,this.themeListCon=[],this.nullTip=!1,this.loadThemeList(this.filterCondition,this.categoryId).then((function(){e.$toast("刷新成功"),e.finished=!1,e.isLoading=!1})).catch((function(t){e.$toast("刷新失败"),e.isLoading=!1}))}},mounted:function(){window.addEventListener("scroll",this.footFix,!0)},beforeRouteLeave:function(e,t,i){window.removeEventListener("scroll",this.footFix,!0),i()}}},nmAZ:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"circleCon"},[i("van-list",{attrs:{finished:e.finished,offset:e.offset,"finished-text":1===e.pageIndex&&0===e.themeListCon.length?"暂无数据":"没有更多了","immediate-check":!1},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[i("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[i("Header",{attrs:{searchIconShow:e.searchStatus,perDetShow:!0,logoShow:!0,menuIconShow:e.menuStatus,navShow:!0,invitePerDet:!1,headFixed:!0},on:{categoriesChoice:e.categoriesChoice,update:e.receive}}),e._v(" "),i("div",{staticClass:"padB"}),e._v(" "),i("div",{staticClass:"gap"}),e._v(" "),i("div",{staticClass:"themeTitBox"},[i("span",{staticClass:"themeTit"},[e._v(e._s(e.filterInfo.typeWo))]),e._v(" "),i("div",{staticClass:"screen",on:{click:e.bindScreen}},[i("span",[e._v("筛选")]),e._v(" "),i("span",{staticClass:"icon iconfont icon-down-menu jtGrayB"}),e._v(" "),e.showScreen?i("div",{staticClass:"themeList"},e._l(e.themeChoList,(function(t,s){return i("a",{key:s,attrs:{href:"javascript:;"},on:{click:function(i){return e.choTheme(t.themeType)}}},[e._v(e._s(t.typeWo))])})),0):e._e()])]),e._v(" "),e.themeListCon?i("div",[i("ThemeDet",{attrs:{themeList:e.themeListCon,isTopShow:!0,isMoreShow:!0},on:{"update:themeList":function(t){e.themeListCon=t},"update:theme-list":function(t){e.themeListCon=t},changeStatus:e.loadThemeList}})],1):e._e()],1)],1),e._v(" "),e.nullTip?i("div",{staticClass:"nullTip"},[i("van-icon",{staticClass:"nullIcon",attrs:{name:"warning-o",size:"1.8rem"}}),e._v(" "),i("p",{staticClass:"nullWord"},[e._v(e._s(e.nullWord))])],1):e._e(),e._v(" "),e.loginBtnFix?i("van-button",{staticClass:"loginBtnFix",class:{hide:e.loginHide},attrs:{type:"primary"},on:{click:function(t){return e.loginJump(1)}}},[e._v(e._s(e.loginWord))]):e._e(),e._v(" "),e.canEdit?i("div",{staticClass:"fixedEdit",on:{click:e.postTopic}},[i("span",{staticClass:"icon iconfont icon-publish"})]):e._e()],1)},a=[];i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}))},omtG:function(e,t,i){"use strict";i.r(t);var s=i("6JNq"),a=i("Jgvg");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);var o=i("KHd+"),r=Object(o.a)(a.default,s.a,s.b,!1,null,null,null);t.default=r.exports},pvnC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(i("QbLZ")),a=o(i("QiNT")),n=o(i("IsPG"));function o(e){return e&&e.__esModule?e:{default:e}}i("E2jd"),t.default=(0,s.default)({name:"headerView",components:{Sidebar:n.default}},a.default)},s7by:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=d(i("QbLZ")),a=d(i("SO9L")),n=d(i("QiNT")),o=d(i("omtG")),r=d(i("/Zpk")),c=d(i("CFQY"));function d(e){return e&&e.__esModule?e:{default:e}}i("E2jd"),t.default=(0,s.default)({name:"circleView",components:{Header:o.default,ThemeDet:c.default}},n.default,r.default,a.default)},v9TM:function(e,t,i){"use strict";var s=i("vovO");i.n(s).a},vovO:function(e,t,i){},vuqY:function(e,t,i){"use strict";i.r(t);var s=i("nmAZ"),a=i("P674");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("v9TM");var o=i("KHd+"),r=Object(o.a)(a.default,s.a,s.b,!1,null,null,null);t.default=r.exports},"wZM+":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",[i("van-checkbox-group",{ref:"checkboxGroup",model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},[e._l(e.themeList,(function(t,s){return i("div",{key:s},[i("div",{staticClass:"cirPostCon"},[i("div",{},[i("div",{staticClass:"postTop"},[i("div",{staticClass:"postPer"},[t.user&&t.user._data.avatarUrl?i("img",{staticClass:"postHead",attrs:{src:t.user._data.avatarUrl},on:{click:function(i){return e.jumpPerDet(t.user._data.id)}}}):i("img",{staticClass:"postHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif"},on:{click:function(i){return e.jumpPerDet(t.user._data.id)}}}),e._v(" "),i("div",{staticClass:"perDet"},[t.user?i("div",{staticClass:"perName",on:{click:function(i){return e.jumpPerDet(t.user._data.id)}}},[e._v(e._s(t.user._data.username))]):i("div",{staticClass:"perName"},[e._v("该用户已被删除")]),e._v(" "),i("div",{staticClass:"postTime"},[e._v(e._s(e.$moment(t._data.createdAt).format("YYYY-MM-DD HH:mm")))])])]),e._v(" "),i("div",{staticClass:"postOpera"},[t._data.isSticky?i("span",{directives:[{name:"show",rawName:"v-show",value:e.isTopShow,expression:"isTopShow"}],staticClass:"icon iconfont icon-top"}):e._e(),e._v(" "),e.isMoreShow&&(t._data.canEssence||t._data.canSticky||t._data.canDelete||t._data.canEdit||t.firstPost._data.canLike)?i("div",{ref:"screenDiv",refInFor:!0,staticClass:"screen",on:{click:function(t){return t.stopPropagation(),e.bindScreen(s,t)}}},[i("div",{staticClass:"moreCli"},[i("span",{staticClass:"icon iconfont icon-more"})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.indexlist==s,expression:"indexlist==index"}],staticClass:"themeList"},[t.firstPost._data.canLike&&t.firstPost._data.isLiked?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.replyOpera(t.firstPost._data.id,2,t.firstPost._data.isLiked,s)}}},[e._v("取消点赞")]):e._e(),e._v(" "),t.firstPost._data.canLike&&!t.firstPost._data.isLiked?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.replyOpera(t.firstPost._data.id,2,t.firstPost._data.isLiked,s)}}},[e._v("点赞")]):e._e(),e._v(" "),t._data.canEssence&&t._data.isEssence?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.themeOpera(t._data.id,3,t._data.isEssence,s)}}},[e._v("取消加精")]):e._e(),e._v(" "),t._data.canEssence&&!t._data.isEssence?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.themeOpera(t._data.id,3,t._data.isEssence,s)}}},[e._v("加精")]):e._e(),e._v(" "),t._data.canSticky&&t._data.isSticky?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.themeOpera(t._data.id,4,t._data.isSticky,s)}}},[e._v("取消置顶")]):e._e(),e._v(" "),t._data.canSticky&&!t._data.isSticky?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.themeOpera(t._data.id,4,t._data.isSticky,s)}}},[e._v("置顶")]):e._e(),e._v(" "),t._data.canDelete?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.themeOpera(t._data.id,5)}}},[e._v("删除")]):e._e()])]):e._e()])]),e._v(" "),t.firstPost?i("div",{staticClass:"postContent"},[i("a",{domProps:{innerHTML:e._s(t.firstPost._data.contentHtml)},on:{click:function(i){return e.jumpThemeDet(t._data.id,t._data.canViewPosts)}}})]):e._e(),e._v(" "),t.firstPost.imageList&&t.firstPost.imageList.length>0?i("div",{staticClass:"themeImgBox"},[i("div",{staticClass:"themeImgList moreImg"},e._l(t.firstPost.imageList,(function(s,a){return a<9?i("van-image",{key:a,staticClass:"themeImgChild",attrs:{fit:"cover","lazy-load":"",src:s},on:{click:function(i){return e.jumpThemeDet(t._data.id,t._data.canViewPosts)}}}):e._e()})),1)]):e._e()]),e._v(" "),i("div",{staticClass:"operaBox"},[t.firstPost.likedUsers.length>0||t.rewardedUsers.length>0?i("div",{staticClass:"isrelationGap"}):e._e(),e._v(" "),t.firstPost.likedUsers.length>0?i("div",{staticClass:"likeBox"},[i("span",{staticClass:"icon iconfont icon-praise-after"}),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.userArr(t.firstPost.likedUsers))}}),e._v(" "),t.firstPost._data.likeCount>10?i("i",[e._v(" 等"),i("span",[e._v(e._s(t.firstPost._data.likeCount))]),e._v("个人觉得很赞")]):e._e()]):e._e(),e._v(" "),t.rewardedUsers.length>0?i("div",{staticClass:"reward"},[i("span",{staticClass:"icon iconfont icon-money"}),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.userArr(t.rewardedUsers))}})]):e._e(),e._v(" "),t.lastThreePosts.length>0&&t.firstPost.likedUsers.length>0||t.lastThreePosts.length>0&&t.rewardedUsers.length>0?i("div",{staticClass:"isrelationLine"}):e._e(),e._v(" "),t.lastThreePosts.length>0?i("div",{staticClass:"replyBox"},[e._l(t.lastThreePosts,(function(t){return i("div",{staticClass:"replyCon"},[t.user?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.jumpPerDet(t.user._data.id)}}},[e._v(e._s(t.user._data.username))]):i("a",{attrs:{href:"javascript:;"}},[e._v("该用户已被删除")]),e._v(" "),t._data.replyUserId?i("span",{staticClass:"font9",on:{click:function(i){return e.jumpPerDet(t.user._data.id)}}},[e._v("回复")]):e._e(),e._v(" "),t._data.replyUserId&&t.replyUser?i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return e.jumpPerDet(t.user._data.id)}}},[e._v(e._s(t.replyUser._data.username))]):t._data.replyUserId&&!t.replyUser?i("a",{attrs:{href:"javascript:;"}},[e._v("该用户已被删除")]):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(t._data.contentHtml)}})])})),e._v(" "),t._data.postCount>4?i("a",{staticClass:"allReply",on:{click:function(i){return e.jumpThemeDet(t._data.id,t._data.canViewPosts)}}},[e._v("全部"+e._s(t._data.postCount-1)+"条回复"),i("span",{staticClass:"icon iconfont icon-right-arrow"})]):e._e()],2):e._e()]),e._v(" "),e.ischeckShow?i("van-checkbox",{ref:"checkboxes",refInFor:!0,staticClass:"memberCheck",attrs:{name:t._data.id}}):e._e()],1),e._v(" "),i("div",{staticClass:"gap"})])})),e._v(" "),e.ischeckShow?i("div",{staticClass:"manageFootFixed choFixed"},[i("a",{attrs:{href:"javascript:;"},on:{click:e.checkAll}},[e._v("全选")]),e._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:e.signOutDele}},[e._v("取消全选")]),e._v(" "),i("button",{staticClass:"checkSubmit",on:{click:e.deleteAllClick}},[e._v("删除选中")])]):e._e()],2)],1),e._v(" "),i("van-image-preview",{attrs:{images:e.priview},on:{change:e.onChange},scopedSlots:e._u([{key:"index",fn:function(){return[e._v("第"+e._s(e.index)+"页")]},proxy:!0}]),model:{value:e.imageShow,callback:function(t){e.imageShow=t},expression:"imageShow"}})],1)},a=[];i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a}))},"xry+":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(i("QbLZ")),a=n(i("/Zpk"));function n(e){return e&&e.__esModule?e:{default:e}}i("E2jd"),t.default=(0,s.default)({name:"themeDetView"},a.default)}}]);