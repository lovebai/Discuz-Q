(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{Ibkn:function(t,a,s){"use strict";s.r(a);var e=s("x4PX"),i=s("SyFs");for(var o in i)"default"!==o&&function(t){s.d(a,t,(function(){return i[t]}))}(o);var r=s("KHd+"),n=Object(r.a)(i.default,e.a,e.b,!1,null,null,null);a.default=n.exports},SyFs:function(t,a,s){"use strict";s.r(a);var e=s("lytT"),i=s.n(e);for(var o in e)"default"!==o&&function(t){s.d(a,t,(function(){return e[t]}))}(o);a.default=i.a},VGvU:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});i(s("+KBz"));var e=i(s("VVfg"));function i(t){return t&&t.__esModule?t:{default:t}}a.default={data:function(){return{siteInfo:!1,username:"",joinedAt:"",expiredAt:"",isLoading:!1,roleList:[],groupId:"",limitList:"",moreMemberShow:""}},beforeCreate:function(){},created:function(){this.loadSite();e.default.getLItem("tokenId")},beforeMount:function(){},methods:{loadSite:function(){var t=this,a=e.default.getLItem("tokenId");this.appFetch({url:"users",method:"get",splice:"/"+a,data:{include:"groups"}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(console.log(a),t.roleList=a.readdata.groups,t.groupId=a.readdata.groups[0]._data.id,""==a.readdata._data.joinedAt||null==a.readdata._data.joinedAt?t.joinedAt=a.readdata._data.createdAt:t.joinedAt=a.readdata._data.joinedAt,""==a.readdata._data.expiredAt||a.readdata._data.expiredAt,t.expiredAt=a.readdata._data.expiredAt),t.appFetch({url:"groups",method:"get",splice:"/"+t.groupId,data:{include:["permission"]}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(console.log(a),t.limitList=a.readdata)}))})),this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(console.log(a),t.siteInfo=a.readdata,t.moreMemberShow=a.readdata._data.canViewUserList,console.log(t.siteInfo._data.logo),a.readdata._data.siteAuthor&&(t.username=a.readdata._data.siteAuthor.username))}))},moreCilrcleMembers:function(){this.$router.push({path:"circle-members"})},membersJump:function(t){console.log("2222"),this.$router.push({path:"/home-page/"+t})},onRefresh:function(){var t=this;this.loadSite().then((function(a){t.$toast("刷新成功"),t.isLoading=!1,t.finished=!0})).catch((function(a){t.$toast("刷新失败"),t.isLoading=!1}))}},mounted:function(){},beforeRouteLeave:function(t,a,s){s()}}},lytT:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=r(s("QbLZ")),i=r(s("JZuw")),o=r(s("VGvU"));function r(t){return t&&t.__esModule?t:{default:t}}s("E2jd"),a.default=(0,e.default)({name:"circleInfoView",components:{comHeader:i.default}},o.default)},x4PX:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"circleCon"},[s("comHeader",{attrs:{title:"站点信息"}}),t._v(" "),s("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(a){t.isLoading=a},expression:"isLoading"}},[s("div",{staticClass:"content"},[t.siteInfo?s("div",[s("div",{staticClass:"circlePL"},[s("div",{staticClass:"infoItem"},[s("span",{staticClass:"infoItemLeft"},[t._v("站点名称")]),t._v(" "),s("span",{staticClass:"infoItemRight"},[t._v(t._s(t.siteInfo._data.siteName))])])]),t._v(" "),s("div",{staticClass:"circlePL"},[s("div",{staticClass:"circleLoBox"},[s("span",{staticClass:"circleIcon"},[t._v("站点图标")]),t._v(" "),t.siteInfo._data.logo?s("img",{staticClass:"circleLogo",attrs:{src:t.siteInfo._data.logo}}):t._e()])]),t._v(" "),s("div",{staticClass:"circleInfo padB0 lastBorNone"},[s("h1",{staticClass:"cirInfoTit"},[t._v("站点简介")]),t._v(" "),s("p",{staticClass:"cirInfoWord"},[t._v(t._s(t.siteInfo._data.siteIntroduction))]),t._v(" "),s("div",{staticClass:"infoItem"},[s("span",{staticClass:"infoItemLeft"},[t._v("创建时间")]),t._v(" "),s("span",{staticClass:"infoItemRight"},[t._v(t._s(t.siteInfo._data.siteInstall))])]),t._v(" "),t.siteInfo._data.sitePrice||t.siteInfo._data.siteExpir?s("div",{staticClass:"infoItem"},[s("span",{staticClass:"infoItemLeft"},[t._v("加入方式")]),t._v(" "),s("span",{staticClass:"infoItemRight"},[t._v("付费"+t._s(t.siteInfo._data.sitePrice)+"元，有效期自加入起"+t._s(t.siteInfo._data.siteExpire)+"天")])]):t._e(),t._v(" "),s("div",{staticClass:"infoItem"},[s("span",{staticClass:"infoItemLeft"},[t._v("站长")]),t._v(" "),t.siteInfo._data.siteAuthor?s("span",{staticClass:"infoItemRight"},[t._v(t._s(t.username))]):s("span",{staticClass:"infoItemRight"},[t._v("无")])]),t._v(" "),s("div",{staticClass:"infoItem"},[s("div",{staticClass:"overHide"},[s("span",{staticClass:"infoItemLeft"},[t._v("站点成员")]),t._v(" "),t.moreMemberShow?s("a",{staticClass:"infoItemRight lookMore",on:{click:t.moreCilrcleMembers}},[t._v("查看更多"),s("span",{staticClass:"icon iconfont icon-right-arrow"})]):t._e()]),t._v(" "),s("div",{staticClass:"circleMemberList"},t._l(t.siteInfo.users,(function(a,e){return""==a._data.avatarUrl&&null==a._data.avatarUrl?s("img",{key:e,staticClass:"circleMember",attrs:{src:a._data.avatarUrl,alt:""},on:{click:function(s){return t.membersJump(a._data.id)}}}):s("img",{staticClass:"circleMember",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"},on:{click:function(s){return t.membersJump(a._data.id)}}})})),0)])]),t._v(" "),s("div",{staticClass:"gap"}),t._v(" "),s("div",{staticClass:"circleInfo padT0"},[s("div",{staticClass:"infoItem"},[s("span",{staticClass:"infoItemLeft"},[t._v("我的角色")]),t._v(" "),t._l(t.roleList,(function(a,e){return s("span",{staticClass:"infoItemRight"},[t._v(t._s(a._data.name))])}))],2),t._v(" "),s("div",{staticClass:"infoItem"},[s("span",{staticClass:"infoItemLeft"},[t._v("加入时间")]),t._v(" "),s("span",{staticClass:"infoItemRight"},[t._v(t._s(t.$moment(t.joinedAt).format("YYYY-MM-DD")))])]),t._v(" "),t.expiredAt?s("div",{staticClass:"infoItem"},[s("span",{staticClass:"infoItemLeft"},[t._v("有效期至")]),t._v(" "),s("span",{staticClass:"infoItemRight"},[t._v(t._s(t.$moment(t.expiredAt).format("YYYY-MM-DD")))])]):t._e()]),t._v(" "),t.limitList?s("div",{staticClass:"powerListBox"},[s("div",{staticClass:"powerTit"},[t._v("作为"+t._s(t.limitList._data.name)+"，您将获得以下权限")]),t._v(" "),s("div",{staticClass:"powerList"},[s("div",{staticClass:"powerClassify"},[t._v("权限列表")]),t._v(" "),t._l(t.limitList.permission,(function(a,e){return s("div",{},[a._data.permission&&"viewThreads"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("查看主题列表")]):t._e(),t._v(" "),a._data.permission&&"thread.viewPosts"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("查看主题")]):t._e(),t._v(" "),a._data.permission&&"createThread"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("发表主题")]):t._e(),t._v(" "),a._data.permission&&"thread.reply"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("回复主题")]):t._e(),t._v(" "),a._data.permission&&"attachment.create.0"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("上传附件")]):t._e(),t._v(" "),a._data.permission&&"attachment.create.1"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("上传图片")]):t._e(),t._v(" "),a._data.permission&&"attachment.view.0"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("查看附件")]):t._e(),t._v(" "),a._data.permission&&"attachment.view.1"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("查看图片")]):t._e(),t._v(" "),a._data.permission&&"viewUserList"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("站点会员列表")]):t._e(),t._v(" "),a._data.permission&&"attachment.delete"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("删除附件")]):t._e(),t._v(" "),a._data.permission&&"cash.create"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("cash.create")]):t._e(),t._v(" "),a._data.permission&&"order.create"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("order.create")]):t._e(),t._v(" "),a._data.permission&&"thread.deletePosts"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("删除回复")]):t._e(),t._v(" "),a._data.permission&&"thread.favorite"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("帖子收藏")]):t._e(),t._v(" "),a._data.permission&&"thread.likePosts"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("帖子点赞")]):t._e(),t._v(" "),a._data.permission&&"user.view"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("user.view")]):t._e(),t._v(" "),a._data.permission&&"viewSiteInfo"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("站点信息")]):t._e(),t._v(" "),a._data.permission&&"user.edit"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("编辑用户状态（例如：禁用）")]):t._e(),t._v(" "),a._data.permission&&"group.edit"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("编辑用户组")]):t._e(),t._v(" "),a._data.permission&&"createInvite"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("管理-邀请加入")]):t._e(),t._v(" "),a._data.permission&&"thread.hide"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("批量删除帖子")]):t._e(),t._v(" "),a._data.permission&&"thread.editPosts"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("编辑")]):t._e(),t._v(" "),a._data.permission&&"thread.essence"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("加精")]):t._e(),t._v(" "),a._data.permission&&"thread.sticky"==a._data.permission?s("p",{staticClass:"powerChi"},[t._v("置顶")]):t._e()])}))],2)]):t._e()]):t._e()])])],1)},i=[];s.d(a,"a",(function(){return e})),s.d(a,"b",(function(){return i}))}}]);