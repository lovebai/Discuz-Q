(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3AWV":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n("QbLZ"));n("v/Xo");var o=a(n("zkMY"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)({name:"login-sign-up-footer"},o.default)},Ddyq:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"login-user-footer"},["login-user"===e.pageName||"login-phone"===e.pageName?[e.qcloudSms?n("span",{on:{click:e.retrieveClick}},[e._v("忘记密码？找回")]):e._e(),e._v(" "),e.registerClose&&e.qcloudSms?n("i"):e._e(),e._v(" "),e.registerClose?n("span",{on:{click:e.signUpClick}},[e._v("注册")]):e._e()]:"wx-login-bd"===e.pageName?[n("span",{on:{click:e.wxSignUpBdClick}},[e._v("没有账号？注册，绑定微信新账号")])]:"wx-sign-up-bd"===e.pageName?[n("span",{on:{click:e.wxLoginBdClick}},[e._v("已有账号？登录，微信绑定账号")])]:"sign-up"===e.pageName?[n("span",{on:{click:e.loginClick}},[e._v("已有账号立即登录")])]:"bind-phone"===e.pageName?[n("span",{on:{click:e.homeClick}},[e._v(e._s("pay"===e.siteMode?"跳过，进入支付费用":"跳过，进入首页"))])]:(e.pageName,[n("span")])],2)},o=[];n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}))},UjaL:function(e,t,n){"use strict";n.r(t);var i=n("Ddyq"),o=n("pz4+");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var u=n("KHd+"),s=Object(u.a)(o.default,i.a,i.b,!1,null,null,null);t.default=s.exports},i4TU:function(e,t,n){},"pz4+":function(e,t,n){"use strict";n.r(t);var i=n("3AWV"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t.default=o.a},"v/Xo":function(e,t,n){},zkMY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n("VVfg"),a=(i=o)&&i.__esModule?i:{default:i};t.default={data:function(){return{pageName:"login",siteMode:"",registerClose:!0,qcloudSms:!0}},methods:{retrieveClick:function(){this.$router.push("retrieve-pwd")},signUpClick:function(){this.$router.push("sign-up")},wxSignUpBdClick:function(){this.$router.push("/wx-sign-up-bd")},wxLoginBdClick:function(){this.$router.push("/wx-login-bd")},loginClick:function(){this.$router.push("/login-user")},homeClick:function(){switch(this.siteMode){case"pay":this.$router.push({path:"pay-the-fee"});break;case"public":this.$router.push({path:"/"});break;default:console.log("参数错误，请重新刷新页面")}},getForum:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){console.log(t),e.siteMode=t.readdata._data.setsite.site_mode,e.registerClose=t.readdata._data.setreg.register_close,e.qcloudSms=t.readdata._data.qcloud.qcloud_sms,a.default.setLItem("siteInfo",t.readdata)})).catch((function(e){console.log(e)}))}},created:function(){this.pageName=this.$router.history.current.name,this.getForum()}}}}]);