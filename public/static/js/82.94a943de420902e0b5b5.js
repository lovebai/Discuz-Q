(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"/NNm":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(s("QbLZ")),i=n(s("JZuw")),o=n(s("dWbn"));function n(t){return t&&t.__esModule?t:{default:t}}s("E2jd"),e.default=(0,a.default)({name:"detailsView",components:{comHeader:i.default}},o.default)},"6BJd":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circleCon"},[s("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[s("comHeader",{attrs:{title:"详情",menuIconShow:!0}}),t._v(" "),t.themeShow?s("div",{staticClass:"content marBfixed"},[s("div",{staticClass:"cirPostCon"},[s("div",{staticClass:"postTop"},[s("div",{staticClass:"postPer"},[""==t.themeCon.user._data.avatarUrl&&null==t.themeCon.user._data.avatarUrl?s("img",{staticClass:"postHead",attrs:{src:t.themeCon.user._data.avatarUrl,alt:""}}):s("img",{staticClass:"postHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"}}),t._v(" "),s("div",{staticClass:"perDet"},[s("div",{staticClass:"perName"},[t._v(t._s(t.themeCon.user._data.username))]),t._v(" "),s("div",{staticClass:"postTime"},[t._v(t._s(t.themeCon.user._data.createdAt))])])]),t._v(" "),s("div",{staticClass:"postOpera"},[s("span",{staticClass:"icon iconfont icon-top"})])]),t._v(" "),s("div",{staticClass:"postContent"},[t.themeCon.firstPost._data.content?s("a",{attrs:{href:"javascript:;"},domProps:{innerHTML:t._s(t.themeCon.firstPost._data.content)}},[t._v("22222")]):t._e()]),t._v(" "),s("div",{staticClass:"postImgBox"},[s("div",{staticClass:"postImgList"},[s("img",{staticClass:"postPictures",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"}}),t._v(" "),s("img",{staticClass:"postPictures",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"}})])]),t._v(" "),s("div",{staticClass:"uploadFileList"},[s("a",{staticClass:"fileChi",attrs:{href:"javascript:;"}},[s("span",{staticClass:"icon iconfont icon-pdf"}),t._v(" "),s("span",{staticClass:"fileName"},[t._v("文档名称.doc")])])]),t._v(" "),s("div",{staticClass:"postDetBot"},[s("span",{staticClass:"readNum"},[t._v(t._s(t.themeCon._data.viewCount)+" 阅读")]),t._v(" "),s("div",{staticClass:"screen",on:{click:t.bindScreen}},[s("span",[t._v("管理")]),t._v(" "),s("span",{staticClass:"icon iconfont icon-down-menu jtGrayB"}),t._v(" "),t.showScreen?s("div",{staticClass:"themeList"},t._l(t.themeChoList,(function(e,a){return s("a",{key:a,attrs:{href:"javascript:;"},on:{click:function(s){return t.themeOpera(t.themeCon.firstPost._data.id,e.type,t.themeCon.category._data.id,t.themeCon.firstPost._data.content)}}},[t._v(t._s(e.typeWo))])})),0):t._e()]),t._v(" "),s("a",{staticClass:"postDetR",attrs:{href:"javascript:;"},on:{click:function(e){return t.themeOpera(t.themeCon.firstPost._data.id,1,t.themeCon.category._data.id,t.themeCon.firstPost._data.content)}}},[t._v("收藏")]),t._v(" "),s("a",{staticClass:"postDetR",attrs:{href:"javascript:;"},on:{click:t.shareTheme}},[t._v("分享")])])]),t._v(" "),s("div",{staticClass:"gap"}),t._v(" "),s("div",{staticClass:"commentBox"},[t.themeCon.firstPost.likedUsers?s("div",{staticClass:"likeBox"},[s("span",{staticClass:"icon iconfont icon-praise-after"}),t._v(" "),t._l(t.themeCon.firstPost.likedUsers,(function(e){return s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.jumpPerDet(e.id)}}},[t._v(t._s(e._data.username+","))])})),t._v(" 等"),s("span",[t._v(t._s(t.themeCon.firstPost._data.likeCount))]),t._v("个人觉得很赞\n          ")],2):t._e(),t._v(" "),t.themeCon.rewardedUsers?s("div",{staticClass:"payPer"},[s("span",{staticClass:"icon iconfont icon-money"}),t._v(" "),t._l(t.themeCon.rewardedUsers,(function(e){return e.avatarUrl?s("img",{staticClass:"payPerHead",attrs:{src:e._data.avatarUrl}}):s("img",{staticClass:"payPerHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"}})}))],2):t._e(),t._v(" "),t._l(t.themeCon.posts,(function(e){return s("div",[s("div",{staticClass:"commentPostDet"},[s("div",{staticClass:"postTop"},[s("div",{staticClass:"postPer"},[e.user._data.avatarUrl?s("img",{staticClass:"postHead",attrs:{src:e.user._data.avatarUrl}}):s("img",{staticClass:"postHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"}}),t._v(" "),s("div",{staticClass:"perDet"},[s("div",{staticClass:"perName"},[t._v(t._s(e.user._data.username))]),t._v(" "),s("div",{staticClass:"postTime"},[t._v(t._s(e._data.updatedAt))])])])]),t._v(" "),s("div",{staticClass:"postContent"},[s("a",{attrs:{href:"javascript:;"},domProps:{innerHTML:t._s(e._data.content)}})])]),t._v(" "),s("div",{staticClass:"commentOpera padT22"},[e._data.isLiked?s("a",{on:{click:function(s){return t.replyOpera(e._data.id,"2",e._data.isLiked)}}},[s("span",{staticClass:"icon iconfont icon-praise-after",class:{"icon-like":t.likedClass}}),t._v(t._s(e._data.likeCount))]):s("a",{on:{click:function(s){return t.replyOpera(e._data.id,"2",e._data.isLiked)}}},[s("span",{staticClass:"icon iconfont icon-like",class:{"icon-praise-after":t.likedClass}}),t._v(t._s(e._data.likeCount))]),t._v(" "),s("a",{staticClass:"icon iconfont icon-review",on:{click:function(s){return t.replyToJump(t.themeCon._data.id,e._data.id,e._data.content)}}})])])}))],2)]):t._e()],1)],1)},i=[];s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return i}))},dWbn:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(s("y0A3"));var a=o(s("VVfg")),i=o(s("6NK7"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{headBackShow:!0,rewardShow:!1,themeCon:!1,themeShow:!1,examineNum:"qqqq",rewardNumList:[{rewardNum:"0.01"},{rewardNum:"2"},{rewardNum:"5"},{rewardNum:"10"},{rewardNum:"20"},{rewardNum:"50"},{rewardNum:"88"},{rewardNum:"128"},{rewardNum:"666"}],qrcodeShow:!1,amountNum:"",codeUrl:"",showScreen:!1,request:!1,isliked:"",likedClass:"",imageShow:!1,index:1,firstpostImageList:[],isPayVal:"",isPaid:"",situation1:!1,loginBtnFix:!1,loginHide:!1,siteInfo:!1,siteUsername:"",joinedAt:"",sitePrice:"",username:"",roleList:[],loading:!1,finished:!1,isLoading:!1,pageIndex:1,pageLimit:5,offset:100,groupId:"",menuStatus:!1,collectStatus:!1,collectFlag:"",postCount:0,isAndroid:!1,isiOS:!1}},created:function(){var t=navigator.userAgent;this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,this.isiOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),this.isWeixin=i.default.isWeixin().isWeixin,this.isPhone=i.default.isWeixin().isPhone,this.getInfo(),this.getUser(),this.detailsLoad(),this.themeCon?this.themeShow=!0:this.themeShow=!1,this.collectStatus?this.collectFlag="已收藏":this.collectFlag="收藏"},computed:{themeId:function(){return this.$route.params.themeId}},updated:function(){1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth("detailsFooter")},methods:{downAttachment:function(t){console.log(t),this.isiOS&&this.$message("因iphone系统限制，您的手机无法下载文件。请使用安卓手机或电脑访问下载")},userArr:function(t){var e=[];return t.forEach((function(t){e.push(t._data.username)})),e.join(",")},limitWidth:function(t){console.log(t);var e=window.innerWidth;document.getElementById(t).style.width="640px",document.getElementById(t).style.marginLeft=(e-640)/2+"px"},getInfo:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(e){console.log(e),t.siteInfo=e.readdata,t.isPayVal=e.readdata._data.siteMode,null!=t.isPayVal&&""!=t.isPayVal&&(t.isPayVal=e.readdata._data.siteMode,t.detailIf(t.isPayVal,!1))}))},getUser:function(){var t=this,e=a.default.getLItem("tokenId");this.appFetch({url:"users",method:"get",splice:"/"+e,data:{include:"groups"}}).then((function(e){t.groupId=e.readdata.groups[0]._data.id,console.log(t.groupId)}))},detailIf:function(t){var e=a.default.getLItem("Authorization",e);this.token=e,"public"==t&&(console.log("公开"),e?(console.log("公开，已登录2222s"),this.loginBtnFix=!1,this.loginHide=!0,this.menuStatus=!0):(console.log("公开，未登录"),this.loginBtnFix=!0,this.loginHide=!1))},footFix:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;1==this.loginBtnFix&&(this.loginHide=!0,this.loginHide=t>80)},detailsLoad:function(){var t=this,e="threads/"+this.themeId;return this.appFetch({url:e,method:"get",data:{"filter[isDeleted]":"no",include:["user","posts","posts.user","posts.likedUsers","posts.images","firstPost","firstPost.likedUsers","firstPost.images","firstPost.attachments","rewardedUsers","category"],"page[number]":this.pageIndex,"page[limit]":this.pageLimit}}).then((function(e){if(e.error)throw new Error(e.error);if(console.log(e.readdata),console.log("1234"),t.loading)0===e.readdata.posts.length&&(t.finished=!0),t.themeCon.posts=t.themeCon.posts.concat(e.readdata.posts);else{t.collectStatus=e.readdata._data.isFavorite,t.themeShow=!0,t.themeCon=e.readdata;var s=t.themeCon.firstPost.images.length;if(0===s)return;for(var a=[],i=0;i<s;i++)a.push(t.themeCon.firstPost.images[i]._data.thumbUrl);t.firstpostImageList=a}})).catch((function(e){t.loading&&1!==t.pageIndex&&t.pageIndex--})).finally((function(){console.log("22222222222222"),t.loading=!1}))},imageSwiper:function(){this.imageShow=!0},onChange:function(t){this.index=t+1},shareTheme:function(){var t="http://10.0.10.210:8883/pay-circle-con/"+this.themeId+"/"+this.groupId;console.log(t);var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.className="oInput",e.style.display="none",this.$toast.success("分享链接已复制成功")},signOut:function(){a.default.removeLItem("tokenId"),a.default.removeLItem("Authorization"),this.$router.push({path:"/login-user"})},loginJump:function(){this.$router.push({path:"/login-user"}),a.default.setLItem("themeId",this.themeId)},registerJump:function(){this.$router.push({path:"/sign-up"}),a.default.setLItem("themeId",this.themeId)},jumpPerDet:function(t){this.$router.push({path:"/home-page/"+t})},sitePayClick:function(t){var e=this;this.appFetch({url:"orderList",method:"post",data:{type:"1",thread_id:this.themeId,amount:t}}).then((function(s){var a=s.data.attributes.order_sn;e.orderPay(a,t)}))},bindScreen:function(){this.showScreen=!this.showScreen},themeOpera:function(t,e,s,a){var i=new Object;1==e?(this.collectStatus=!this.collectStatus,1==this.collectStatus?this.collectFlag="已收藏":0==this.collectStatus&&(this.collectFlag="收藏"),i.isFavorite=!0,"",this.themeOpeRequest(i,s)):2==e?("",this.themeOpeRequest(i,s),i.isEssence=!0):3==e?("",i.isSticky=!0,this.themeOpeRequest(i,s)):4==e?(i.isDeleted=!0,"",this.themeOpeRequest(i,s),this.$router.push({path:"/circle",name:"circle"})):this.$router.push({path:"/edit-topic/"+this.themeId})},themeOpeRequest:function(t,e){var s="threads/"+this.themeId;this.appFetch({url:s,method:"patch",data:{data:{type:"threads",attributes:t},relationships:{category:{data:{type:"categories",id:e}}}}}).then((function(t){}))},replyOpera:function(t,e,s){var a=this,i=new Object;1==e?i.isDeleted=!0:2==e&&(i.isLiked=!s);var o="posts/"+t;this.appFetch({url:o,method:"patch",data:{data:{type:"posts",attributes:i}}}).then((function(t){a.$message("修改成功"),a.detailsLoad()}))},showRewardPopup:function(){this.token?(this.rewardShow=!0,1!=this.isWeixin&&1!=this.isPhone&&this.rewardShow):this.$router.push({path:"/login-user",name:"login-user"})},replyToJump:function(t,e,s){this.$router.push({path:"/reply-to-topic",name:"reply-to-topic",params:{themeId:t,replyQuote:s,replyId:e}})},rewardPay:function(t){var e=this;this.appFetch({url:"orderList",method:"post",data:{type:"2",thread_id:this.themeId,amount:t}}).then((function(s){var a=s.data.attributes.order_sn;e.orderPay(a,t)}))},orderPay:function(t,e){var s=this,a=this.appCommonH.isWeixin().isWeixin,i=this.appCommonH.isWeixin().isPhone,o="";1==a?(alert("微信支付"),o="12"):o=1==i?"11":"10";var n="trade/pay/order/"+t;this.appFetch({url:n,method:"post",data:{payment_type:o}}).then((function(t){a||(i?window.location.href=t.data.attributes.wechat_h5_link:(s.qrcodeShow=!0,s.amountNum=e,s.codeUrl=t.data.attributes.wechat_qrcode))}))},onLoad:function(){this.loading=!0,this.finished=!1,this.pageIndex++,this.detailsLoad()},onRefresh:function(){var t=this;this.pageIndex=1,this.finished=!1,this.themeCon.posts=[],this.detailsLoad().then((function(){t.$toast("刷新成功")})).catch((function(e){t.$toast("刷新失败")}))}},mounted:function(){},beforeRouteLeave:function(t,e,s){s()}}},t3ll:function(t,e,s){"use strict";s.r(e);var a=s("6BJd"),i=s("uxeJ");for(var o in i)"default"!==o&&function(t){s.d(e,t,(function(){return i[t]}))}(o);var n=s("KHd+"),r=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},uxeJ:function(t,e,s){"use strict";s.r(e);var a=s("/NNm"),i=s.n(a);for(var o in a)"default"!==o&&function(t){s.d(e,t,(function(){return a[t]}))}(o);e.default=i.a}}]);