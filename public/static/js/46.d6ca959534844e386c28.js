(window.webpackJsonp=window.webpackJsonp||[]).push([[46,94],{"+1ub":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.autoTextarea=function(t,e,i,o){e=e||0;var n=!!document.getBoxObjectFor||"mozInnerScreenX"in window,s=!!window.opera&&!!window.opera.toString().indexOf("Opera"),a=function(e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i)},c=t.currentStyle?function(e){var i=t.currentStyle[e];if("height"===e&&1!==i.search(/px/i)){var o=t.getBoundingClientRect();return o.bottom-o.top-parseFloat(c("paddingTop"))-parseFloat(c("paddingBottom"))+"px"}return i}:function(e){return getComputedStyle(t,null)[e]},r=parseFloat(c("height"));t.style.resize="none";var l=function(){var a,l,d=0,u=t.style;t._length!==t.value.length&&(t._length=t.value.length,n||s||(d=parseInt(c("paddingTop"))+parseInt(c("paddingBottom"))),a=document.body.scrollTop||document.documentElement.scrollTop,t.style.height=r+"px",t.scrollHeight>r&&(i&&t.scrollHeight>i?(l=i-d,u.overflowY="auto"):(l=t.scrollHeight-d,u.overflowY="hidden"),u.height=l+e+"px",a+=parseInt(u.height)-t.currHeight,document.body.scrollTop=a,document.documentElement.scrollTop=a,t.currHeight=parseInt(u.height),o(parseInt(u.height))))};a("propertychange",l),a("input",l),a("focus",l),l()},e.debounce=function(t,e){var i=void 0;return function(){for(var o=this,n=arguments.length,s=Array(n),a=0;a<n;a++)s[a]=arguments[a];i&&clearTimeout(i),i=setTimeout((function(){t.apply(o,s)}),e||500)}}},"1m/t":function(t,e,i){"use strict";i.r(e);var o=i("9jAL"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e.default=n.a},"1nxv":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("+1ub"),n=(s(i("edxw")),s(i("UgcE")),s(i("6NK7")));function s(t){return t&&t.__esModule?t:{default:t}}var a=parseFloat(document.documentElement.style.fontSize);e.default={data:function(){return{headerTitle:"发布主题",selectSort:"选择分类",showPopup:!1,categories:[],categoriesId:[],cateId:"",content:"",showFacePanel:!1,keyboard:!1,keywordsMax:1e3,list:[],footMove:!1,faceData:[],fileList:[],fileListOne:[],uploadShow:!1,enclosureList:[],avatar:"",themeId:"",postsId:"",files:{name:"",type:""},headerImage:null,picValue:null,upImgUrl:"",enclosureShow:!1,isWeixin:!1,isPhone:!1,themeCon:!1,attriAttachment:!1,canUploadImages:"",canUploadAttachments:"",supportImgExt:"",supportImgExtRes:"",supportFileExt:"",supportFileArr:"",limitMaxLength:!0,limitMaxEncLength:!0,fileListOneLen:"",enclosureListLen:"",isiOS:!1,encuploadShow:!1,testingRes:!1,backGo:-2,formdataList:[],viewportWidth:""}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.textarea;e.focus();var i=300;e&&(0,o.autoTextarea)(e,5,0,(function(t){if((t+=20)!==i){i=t}}))})),1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth()},created:function(){console.log(this.backGo),this.viewportWidth=window.innerWidth,this.isWeixin=n.default.isWeixin().isWeixin,this.isPhone=n.default.isWeixin().isPhone;var t=navigator.userAgent;if(this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,this.isiOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),this.isiOS&&(this.encuploadShow=!0,console.log(this.encuploadShow)),this.$route.params.themeId){var e=this.$route.params.themeId,i=this.$route.params.postsId,o=this.$route.params.themeContent;this.themeId=e,this.postsId=i,this.content=o}this.loadCategories(),this.detailsLoad(),this.getInfo()},watch:{"fileListOne.length":function(t,e){this.fileListOneLen=t,this.fileListOneLen>=12?(this.limitMaxLength=!1,console.log(this.limitMaxLength)):this.limitMaxLength=!0},"enclosureList.length":function(t,e){this.enclosureListLen=t,this.enclosureListLen>=3?this.limitMaxEncLength=!1:this.limitMaxEncLength=!0,console.log(this.enclosureListLen+"sssss")}},methods:{getInfo:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);console.log(e),console.log("888887");for(var i=e.readdata._data.supportImgExt.split(","),o="",n="",s=0;s<i.length;s++)o="."+i[s]+",",n="image/"+i[s]+",",t.supportImgExt+=o,t.supportImgExtRes+=n;var a=e.readdata._data.supportFileExt.split(","),c="";for(s=0;s<a.length;s++)c="."+a[s]+",",t.supportFileExt+=c;t.canUploadImages=e.readdata._data.canUploadImages,t.canUploadAttachments=e.readdata._data.canUploadAttachments}))},detailsLoad:function(){var t=this;if(this.postsId&&this.content){var e="threads/"+this.themeId;this.appFetch({url:e,method:"get",data:{include:["firstPost","firstPost.images","firstPost.attachments","category"]}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);console.log(e),console.log("1234"),console.log(t.cateId);var i=e.readdata.category._data.id;t.selectSort=e.readdata.category._data.description,console.log(t.selectSort),t.cateId!=i&&(t.cateId=i)}))}},publish:function(){var t=this;if(this.postsId&&this.content){console.log("回复");var e="posts/"+this.postsId;this.appFetch({url:e,method:"patch",data:{data:{type:"posts",attributes:{content:this.content}}}}).then((function(e){e.errors?e.errors[0].detail?t.$toast.fail(e.errors[0].code+"\n"+e.errors[0].detail[0]):t.$toast.fail(e.errors[0].code):t.$router.push({path:"details/"+t.themeId,query:{backGo:t.backGo}})}))}else{this.attriAttachment=this.fileListOne.concat(this.enclosureList);for(var i=0;i<this.attriAttachment.length;i++)this.attriAttachment[i]={type:"attachments",id:this.attriAttachment[i].id};this.appFetch({url:"threads",method:"post",data:{data:{type:"threads",attributes:{content:this.content},relationships:{category:{data:{type:"categories",id:this.cateId}},attachments:{data:this.attriAttachment}}}}}).then((function(e){if(e.errors)e.errors[0].detail?t.$toast.fail(e.errors[0].code+"\n"+e.errors[0].detail[0]):t.$toast.fail(e.errors[0].code);else{var i=e.readdata._data.id;t.$router.push({path:"details/"+i,query:{backGo:t.backGo}})}}))}},limitWidth:function(){document.getElementById("post-topic-footer").style.width="640px";var t=window.innerWidth;document.getElementById("post-topic-footer").style.left=(t-640)/2+"px"},deleteEnclosure:function(t,e){this.fileListOne.length<1&&(this.uploadShow=!1),this.appFetch({url:"attachment",method:"delete",splice:"/"+t.id})},deleteEnc:function(t,e){var i=this;this.fileListOne.length<1&&(this.uploadShow=!1),this.appFetch({url:"attachment",method:"delete",splice:"/"+t.id}).then((function(e){var o=i.enclosureList.filter((function(e){return e.id!==t.id}));i.enclosureList=o,console.log(i.enclosureList),console.log("2567")}))},beforeHandleFile:function(){this.canUploadImages?this.limitMaxLength||this.$toast.fail("已达上传图片上限"):this.$toast.fail("没有上传图片的权限")},beforeHandleEnclosure:function(){this.canUploadAttachments?this.limitMaxEncLength||this.$toast.fail("已达上传附件上限"):this.$toast.fail("没有上传附件的权限")},handleFile:function(t){var e=this,i=[];void 0===t.length?i.push(t):i=t,this.limitMaxLength?i.map((function(t,o){e.isAndroid&&e.isWeixin?(e.testingType(t.file,e.supportImgExt),e.testingRes&&e.compressFile(t.file,15e4,!1,i.length-o)):e.compressFile(t.file,15e4,!1,i.length-o)})):this.$toast.fail("已达上传图片上限")},handleFileUp:function(t){for(var e=t.target.files.length+this.fileListOne.length<=12?t.target.files.length:12-this.fileListOne.length,i=0;i<e;i++){var o=t.target.files[i];this.isAndroid&&this.isWeixin?(this.testingType(o,this.supportImgExt),this.testingRes&&this.compressFile(o,15e4,!0)):this.compressFile(o,15e4,!0)}},handleEnclosure:function(t){if(this.testingType(t.target.files[0],this.supportFileExt),this.testingRes){var e=t.target.files[0],i=new FormData;i.append("file",e),i.append("isGallery",0),this.uploaderEnclosure(i,!1,!1,!0)}},testingType:function(t,e){var i=t.name.substring(t.name.lastIndexOf(".")).toLowerCase();"-1"==e.indexOf(i+",")?(this.$toast.fail("文件格式不正确!"),this.testingRes=!1):this.testingRes=!0},getAllEvens:function(t){},uploaderEnclosure:function(t,e,i,o,n){var s=this;console.log(t,e,o),this.appFetch({url:"attachment",method:"post",data:t}).then((function(t){if(t.errors)throw s.$toast.fail(t.errors[0].code),new Error(t.error);i&&(s.fileList.push({url:t.readdata._data.url,id:t.readdata._data.id}),s.fileListOne[s.fileListOne.length-n].id=t.data.attributes.id),e&&(s.fileListOne.push({url:t.readdata._data.url,id:t.readdata._data.id}),s.fileListOne.length>0&&(s.uploadShow=!0)),o&&(s.enclosureShow=!0,s.enclosureList.push({type:t.readdata._data.extension,name:t.readdata._data.fileName,id:t.readdata._data.id})),s.loading=!1}))},compressFile:function(t,e,i,o){var n=t.size||.8*t.length,s=(Math.max(e/n,.8),this);lrz(t,{quality:.8}).then((function(e){var n=new FormData;n.append("file",e.file,t.name),n.append("isGallery",1),s.uploaderEnclosure(n,i,!i,!1,o),s.loading=!1})).catch((function(t){})).always((function(){}))},clearKeywords:function(){this.keywords="",this.list=[];var t=this.$refs.textarea,e=40/a;t.style.height=e+"rem",e=60/a,t.focus()},searchChange:(0,o.debounce)((function(){if(this.keywords&&this.keywords.trim())this.keywords;else this.list=[]})),handleFaceChoose:function(t){var e=this.content,i=this.$refs.textarea,o=i.selectionStart,n=i.selectionEnd,s=e.substring(0,o)+t+e.substring(n,e.length);this.content=s,i.setSelectionRange&&setTimeout((function(){var e=o+t.length;i.setSelectionRange(e,e)}),0)},addExpression:function(){var t=this;this.keyboard=!this.keyboard,this.appFetch({url:"emojis",method:"get",data:{include:""}}).then((function(e){t.faceData=e.readdata})),this.showFacePanel=!this.showFacePanel,this.footMove=!this.footMove},backClick:function(){this.$router.go(-1)},dClick:function(){this.showPopup=!0},onConfirm:function(t,e){console.log(t);var i=t.id;this.cateId=i,console.log(this.cateId);t.text;this.showPopup=!1,this.selectSort=t.text},loadCategories:function(){var t=this;this.appFetch({url:"categories",method:"get",data:{include:""}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);console.log(e,"res1111");var i;i=e.readdata,console.log(e.readdata);for(var o=0,n=i.length;o<n;o++)t.categories.push({text:i[o]._data.name,id:i[o]._data.id}),t.categoriesId.push(i[o]._data.id)}))},onCancel:function(){this.showPopup=!1}}}},"6GI9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{active:0,faceIndex:0}},props:{faceData:{type:Array}},computed:{faces:function(){for(var t=this.faceData,e=(this.faceIndex,t),i=0,o=[];28*i<e.length;)o.push(e.slice(28*i,28*(i+1))),i+=1;return o},scrollWidth:function(){return this.faces.length*document.body.clientWidth},scrollPosition:function(){return this.active*document.body.clientWidth}},mounted:function(){var t=this,e=this.$refs.faceContent,i=0,o=0;e.ontouchstart=function(t){i=t.targetTouches[0].pageX},e.ontouchend=function(e){(o=e.changedTouches[0].pageX)-i>50?0!==t.active&&t.active--:o-i<-50&&t.active!==t.faces.length-1&&t.active++}},created:function(){},methods:{getUrlCode:function(){var t=this;this.code=this.$utils.getUrlKey("code"),alert(code),this.appFetch({url:"weixin",method:"get",data:{code:this.code}}).then((function(t){alert(65756765)}),(function(e){100004==e.errors[0].status&&t.$router.go(-1)}))},loginWxClick:function(){this.$router.push({path:"/wx-login-bd"})},loginPhoneClick:function(){this.$router.push({path:"/login-phone"})},onFaceClick:function(t){this.$emit("onFaceChoose",t)}}}},"9jAL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(i("QbLZ"));i("E2jd");var n=a(i("1nxv")),s=(i("+1ub"),a(i("SDcr")));function a(t){return t&&t.__esModule?t:{default:t}}e.default=(0,o.default)({name:"post-topic",components:{Expression:s.default}},n.default)},FI70:function(t,e,i){"use strict";i.r(e);var o=i("vL+5"),n=i("1m/t");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var a=i("KHd+"),c=Object(a.a)(n.default,o.a,o.b,!1,null,null,null);e.default=c.exports},SDcr:function(t,e,i){"use strict";i.r(e);var o=i("j2JY"),n=i("uwTP");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var a=i("KHd+"),c=Object(a.a)(n.default,o.a,o.b,!1,null,null,null);e.default=c.exports},j2JY:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"face-container"},[i("div",{staticClass:"scroll-wrapper"},[i("div",{ref:"faceContent",staticClass:"face-content",style:{width:t.scrollWidth+"px",marginLeft:-t.scrollPosition+"px"},on:{touchmove:function(t){t.preventDefault()}}},t._l(t.faces,(function(e,o){return i("div",{key:o,staticClass:"face-page"},t._l(e,(function(e,o){return i("a",{key:o},[i("img",{staticClass:"emoji",attrs:{src:e._data.url},on:{click:function(i){return t.onFaceClick(" "+e._data.code+" ")}}})])})),0)})),0),t._v(" "),i("div",{staticClass:"page-dot"},t._l(t.faces.length,(function(e){return i("div",{key:e,staticClass:"dot-item",class:e===t.active+1?"active":"",on:{click:function(i){t.active=e-1}}})})),0)])])},n=[];i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return n}))},uwTP:function(t,e,i){"use strict";i.r(e);var o=i("yaIx"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e.default=n.a},"vL+5":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"post-topic-box"},[i("header",{staticClass:"post-topic-header"},[i("span",{staticClass:"icon iconfont icon-back post-topic-header-icon",on:{click:t.backClick}}),t._v(" "),i("h2",{staticClass:"postHeadTit"},[t._v(t._s(t.headerTitle))]),t._v(" "),i("van-button",{attrs:{type:"primary",size:"mini"},on:{click:t.publish}},[t._v("发布")])],1),t._v(" "),i("div",{staticClass:"post-topic-form"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"textarea",staticClass:"reply-box",attrs:{id:"post-topic-form-text",name:"post-topic",placeholder:"请输入内容",maxlength:t.keywordsMax},domProps:{value:t.content},on:{change:t.searchChange,focus:function(e){t.showFacePanel=!1,t.footMove=!1,t.keyboard=!1},input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),t.isAndroid&&t.isWeixin?i("div",{staticClass:"uploadBox"},[t.uploadShow?i("div",{staticClass:"uploadBox"},[i("van-uploader",{attrs:{"max-count":12,"after-read":t.handleFile,multiple:""},on:{delete:function(e){return t.deleteEnclosure(e,"img")}},model:{value:t.fileListOne,callback:function(e){t.fileListOne=e},expression:"fileListOne"}})],1):t._e()]):i("div",{},[t.uploadShow?i("div",{staticClass:"uploadBox"},[i("van-uploader",{attrs:{"max-count":12,accept:t.supportImgExtRes,multiple:"false","after-read":t.handleFile},on:{delete:function(e){return t.deleteEnclosure(e,"img")}},model:{value:t.fileListOne,callback:function(e){t.fileListOne=e},expression:"fileListOne"}})],1):t._e()]),t._v(" "),t.enclosureShow?i("div",{staticClass:"enclosure"},t._l(t.enclosureList,(function(e,o){return i("div",{key:o,staticClass:"enclosureChi"},["rar"===e.type?i("span",{staticClass:"icon iconfont icon-rar"}):t._e(),t._v(" "),"zip"===e.type?i("span",{staticClass:"icon iconfont icon-rar"}):"docx"===e.type?i("span",{staticClass:"icon iconfont icon-word"}):"doc"===e.type?i("span",{staticClass:"icon iconfont icon-word"}):"pdf"===e.type?i("span",{staticClass:"icon iconfont icon-pdf"}):"jpg"===e.type?i("span",{staticClass:"icon iconfont icon-jpg"}):"mp"===e.type?i("span",{staticClass:"icon iconfont icon-mp3"}):"mp1"===e.type?i("span",{staticClass:"icon iconfont icon-mp4"}):"png"===e.type?i("span",{staticClass:"icon iconfont icon-PNG"}):"ppt"===e.type?i("span",{staticClass:"icon iconfont icon-ppt"}):"swf"===e.type?i("span",{staticClass:"icon iconfont icon-swf"}):"TIFF"===e.type?i("span",{staticClass:"icon iconfont icon-TIFF"}):"txt"===e.type?i("span",{staticClass:"icon iconfont icon-txt"}):"xls"===e.type?i("span",{staticClass:"icon iconfont icon-xls"}):i("span",{staticClass:"icon iconfont icon-doubt"}),t._v(" "),i("span",{staticClass:"encName"},[t._v(t._s(e.name))]),t._v(" "),i("van-icon",{staticClass:"encDelete",attrs:{name:"clear"},on:{click:function(i){return t.deleteEnc(e,"enclosure")}}})],1)})),0):t._e()]),t._v(" "),i("footer",{staticClass:"post-topic-footer",class:{footMove:t.footMove},attrs:{id:"post-topic-footer"}},[i("div",{staticClass:"post-topic-footer-left",class:{width20:t.encuploadShow}},[i("span",{staticClass:"icon iconfont icon-label post-topic-header-icon",class:{"icon-keyboard":t.keyboard},on:{click:t.addExpression}}),t._v(" "),t.canUploadImages&&t.limitMaxLength?i("span",{staticClass:"icon iconfont icon-picture post-topic-header-icon uploadIcon"},[t.isAndroid&&t.isWeixin?i("input",{staticClass:"hiddenInput",attrs:{type:"file"},on:{change:t.handleFileUp}}):i("input",{staticClass:"hiddenInput",attrs:{type:"file",accept:t.supportImgExtRes,multiple:""},on:{change:t.handleFileUp}})]):i("span",{staticClass:"icon iconfont icon-picture post-topic-header-icon uploadIcon",on:{click:t.beforeHandleFile}}),t._v(" "),t.canUploadAttachments&&t.limitMaxEncLength?i("span",{staticClass:"icon iconfont icon-enclosure post-topic-header-icon uploadIcon",class:{hide:t.encuploadShow}},[i("input",{staticClass:"hiddenInput",attrs:{type:"file"},on:{change:t.handleEnclosure}})]):i("span",{staticClass:"icon iconfont icon-enclosure post-topic-header-icon uploadIcon",class:{hide:t.encuploadShow},on:{click:t.beforeHandleEnclosure}})]),t._v(" "),i("div",{staticClass:"post-topic-footer-right",on:{click:t.dClick}},[i("span",{staticClass:"post-topic-footer-right-sort"},[t._v(t._s(t.selectSort))]),t._v(" "),i("span",{staticClass:"icon iconfont icon-down-menu post-topic-header-icon",staticStyle:{color:"#888888"}})])]),t._v(" "),t.showFacePanel?i("Expression",{staticClass:"expressionBox",style:{overflow:"hidden",width:t.isPhone||t.isWeixin?"100%":"640px",left:t.isPhone||t.isWeixin?"0":(t.viewportWidth-640)/2+"px"},attrs:{faceData:t.faceData,id:"showFacePanel"},on:{onFaceChoose:t.handleFaceChoose}}):t._e(),t._v(" "),i("div",{staticClass:"popup"},[i("van-popup",{style:{height:"50%"},attrs:{position:"bottom",round:""},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[i("van-picker",{attrs:{columns:t.categories,"show-toolbar":"",title:"选择分类"},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1)],1)],1)},n=[];i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return n}))},yaIx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(i("QbLZ")),n=s(i("6GI9"));function s(t){return t&&t.__esModule?t:{default:t}}i("E2jd"),e.default=(0,o.default)({name:"expressionView"},n.default)}}]);