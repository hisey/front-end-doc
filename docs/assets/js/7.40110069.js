(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(e,t,i){},295:function(e,t,i){"use strict";var a=i(173);i.n(a).a},301:function(e,t,i){"use strict";i.r(t);i(106),i(260),i(50),i(153),i(15),i(29),i(108),i(147),i(41),i(148),i(262),i(267),i(269),i(270),i(271),i(272),i(273),i(274),i(275),i(276),i(277),i(278),i(279),i(281),i(282),i(283),i(284),i(285),i(286),i(287),i(288),i(289),i(290),i(291);var a=i(298),o=i(292),n=i.n(o),r=(i(294),{name:"upload",components:{VueCropper:n.a},data:function(){return{expVisible:!1,avatar:"",isLoading:!1,cropedImg:"",visible:!1,isShowCover:!1}},component:{VueCropper:n.a},computed:{commonStyle:function(){return{width:this.imgWidth,height:this.imgHeight,borderRadius:"".concat(this.round?"50%":"0")}},avatarBoxStyle:function(){return Object(a.a)({},this.commonStyle,{borderWidth:"1px",borderColor:this.value||this.defaultImg?"#efefef":"#999",borderStyle:this.value||this.defaultImg?"solid":"dashed"})}},props:{value:String,action:{type:String,default:""},defaultImg:{type:String,default:""},allowDelete:{type:Boolean,default:!0},standardImgUrl:{type:[String,Number],default:""},imgUrl:{type:[String,Number],default:""},imgWidth:{type:[String,Number],default:""},imgHeight:{type:[String,Number],default:""},tip:{type:[String,Number],default:""},name:{type:[String,Number],default:""},round:{type:Boolean,default:!1},autoCropHeight:{type:[String,Number],default:100},autoCropWidth:{type:[String,Number],default:100},fixedNumber:{type:[Array],default:function(){return["16:9"]}},maxSize:{type:Number,default:8},isCropper:{type:Boolean,default:!1}},watch:{value:function(e){e||(this.cropedImg="")},visible:function(e){e||this.clearValue()}},methods:{changeCrop:function(e){console.log(e)},handleInput:function(){this.$refs["avatarInput".concat(this.name)].click()},clearValue:function(){this.$refs["avatarInput".concat(this.name)].value=""},changeImage:function(e){var t=this,i=e.target.files[0];if(i){if(!(i.size/1024/1024<this.maxSize))return this.$message.error("上传的图片大小不能超过 ".concat(this.maxSize,"MB!")),!1;if(this.isCropper){if(this.visible=!0,!i.type.includes("image/"))return void this.$message.warning("请选择图片文件");if("function"==typeof FileReader){var a=new FileReader;a.onload=function(e){t.cropedImg=e.target.result,t.$refs.cropper.replace(e.target.result)},a.readAsDataURL(i)}else this.handleUpload(i)}else this.handleUpload(i)}},handleUpload:function(e){var t=this;this.isLoading=!0;var i=new FormData;i.append("file",e),axios.post(this.action,i,{"Content-Type":"multipart/form-data"}).then((function(e){if(t.isLoading=!1,200==e.status&&e.data){var i=e.data;t.avatar=i.url,t.$emit("input",i.url),t.$emit("uploadSuccess",i,t.name)}}))},handleCropper:function(){this.visible=!1;var e=this.$refs.cropper.getCroppedCanvas().toDataURL("image/jpeg",.7),t=this.dataURLtoBlob(e);this.handleUpload(t)},dataURLtoBlob:function(e){for(var t=e.split(","),i=t[0].match(/:(.*?);/)[1],a=atob(t[1]),o=a.length,n=new Uint8Array(o);o--;)n[o]=a.charCodeAt(o);return new Blob([n],{type:i})},handleRemove:function(){this.isShowCover=!1,this.clearValue(),this.$emit("input",""),this.$emit("onRemove",this.name)},handleShowCover:function(){this.value||""!=this.defaultImg?this.isShowCover=!0:this.isShowCover=!1}}}),s=(i(295),i(28)),l=Object(s.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-box"},[i("div",{staticClass:"avatar-box",style:e.avatarBoxStyle},[i("input",{ref:"avatarInput"+e.name,staticClass:"input-file",style:e.commonStyle,attrs:{type:"file",name:e.name,accept:"image/gif, image/jpeg, image/jpg, image/png"},on:{mouseover:function(t){return e.handleShowCover()},change:function(t){return e.changeImage(t)}}}),e._v(" "),e.value?i("img",{style:e.commonStyle,attrs:{src:e.value,alt:""}}):""!=e.defaultImg?i("img",{style:e.commonStyle,attrs:{src:e.defaultImg,alt:""}}):i("div",{staticClass:"add-box",style:e.commonStyle},[e.isLoading?i("i",{staticClass:"el-icon-loading"}):e._e(),e._v(" "),e.isLoading?e._e():i("i",{staticClass:"el-icon-plus"})]),e._v(" "),e.isShowCover?i("div",{staticClass:"cover-box",style:e.commonStyle,on:{mouseleave:function(t){e.isShowCover=!1}}},[i("div",{staticClass:"cover-plus",style:e.commonStyle,on:{click:e.handleInput}},[i("i",{staticClass:"el-icon-plus plus"})]),e._v(" "),e.allowDelete?i("i",{staticClass:"el-icon-close close",on:{click:e.handleRemove}}):e._e()]):e._e()]),e._v(" "),i("div",{staticClass:"tip"},[i("p",{domProps:{innerHTML:e._s(e.tip)}}),e._v(" "),i("el-popover",{attrs:{placement:"bottom",title:"图片范例",width:"400",trigger:"click"}},[i("img",{attrs:{src:e.standardImgUrl,alt:""}}),e._v(" "),""!=e.standardImgUrl?i("span",{staticClass:"pic-example-btn",attrs:{slot:"reference"},slot:"reference"},[e._v("图片范例>>")]):e._e()])],1),e._v(" "),i("el-dialog",{attrs:{title:"裁剪图片",visible:e.visible,width:"750px","append-to-body":!0},on:{"update:visible":function(t){e.visible=t}}},[i("div",{staticClass:"cropper-box"},[i("vue-cropper",{ref:"cropper",attrs:{guides:!0,"view-mode":0,"drag-mode":"move",aspectRatio:e.autoCropWidth/e.autoCropHeight,"auto-crop-area":.7,"min-container-width":250,"min-container-height":180,background:!0,rotatable:!0,src:e.cropedImg,alt:"Source Image","img-style":{width:"400px",height:"300px"},cropmove:e.changeCrop}}),e._v(" "),i("div",{staticClass:"clearfix icon-box"},[i("i",{staticClass:"el-icon-circle-plus-outline icon-plus icon f-l",on:{click:function(t){return e.$refs.cropper.relativeZoom(.1)}}}),e._v(" "),i("i",{staticClass:"el-icon-remove-outline icon-outline icon f-l",on:{click:function(t){return e.$refs.cropper.relativeZoom(-.1)}}}),e._v(" "),i("i",{staticClass:"el-icon-refresh-left icon f-l",on:{click:function(t){return e.$refs.cropper.rotate(-90)}}})])],1),e._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleCropper}},[e._v("确 定")])],1)])],1)}),[],!1,null,"18f8e72a",null);t.default=l.exports}}]);