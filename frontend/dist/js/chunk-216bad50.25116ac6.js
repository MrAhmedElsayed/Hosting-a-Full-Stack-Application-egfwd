(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-216bad50"],{"0c97":function(t,a,e){},"8b48":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"auth-wrapper auth-v1"},[s("div",{staticClass:"auth-inner"},[s("v-card",{staticClass:"auth-card"},[s("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[s("router-link",{staticClass:"d-flex align-center",attrs:{to:"/"}},[s("v-img",{staticClass:"me-3",attrs:{src:e("5331"),"max-height":"30px","max-width":"30px",alt:"logo",contain:""}}),s("h2",{staticClass:"text-2xl font-weight-semibold"},[t._v("Store Front")])],1)],1),s("v-card-text",[s("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[t._v(" Welcome to Store Front! 👋🏻 ")]),s("p",{staticClass:"mb-2"},[t._v(" Please sign-in to your account and start the adventure ")])]),s("v-card-text",[s("v-form",{on:{submit:function(a){return a.preventDefault(),t.login.apply(null,arguments)}}},[s("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Username",placeholder:"ahmed123","hide-details":""},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),s("v-text-field",{attrs:{outlined:"",type:t.isPasswordVisible?"text":"password",label:"Password",placeholder:"············","append-icon":t.isPasswordVisible?t.icons.mdiEyeOffOutline:t.icons.mdiEyeOutline,"hide-details":""},on:{"click:append":function(a){t.isPasswordVisible=!t.isPasswordVisible}},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),s("div",{staticClass:"d-flex align-center justify-space-between flex-wrap"},[s("v-checkbox",{staticClass:"me-3 mt-1",attrs:{label:"Remember Me","hide-details":""}}),s("a",{staticClass:"mt-1",attrs:{href:"javascript:void(0)"}},[t._v(" Forgot Password? ")])],1),s("v-btn",{staticClass:"mt-6",attrs:{block:"",color:"primary",type:"submit",loading:t.login_loading}},[t._v(" Login ")])],1)],1),s("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[s("span",{staticClass:"me-2"},[t._v(" New on our platform? ")]),s("router-link",{attrs:{to:{name:"pages-register"}}},[t._v(" Create an account ")])],1),s("v-card-text",{staticClass:"d-flex align-center mt-2"},[s("v-divider"),s("span",{staticClass:"mx-5"},[t._v("or")]),s("v-divider")],1),s("v-card-actions",{staticClass:"d-flex justify-center"},t._l(t.socialLink,(function(a){return s("v-btn",{key:a.icon,staticClass:"ms-1",attrs:{icon:""}},[s("v-icon",{attrs:{color:t.$vuetify.theme.dark?a.colorInDark:a.color}},[t._v(" "+t._s(a.icon)+" ")])],1)})),1)],1)],1),s("img",{staticClass:"auth-mask-bg",attrs:{height:"173",src:e("89a6")("./mask-"+(t.$vuetify.theme.dark?"dark":"light")+".png"),alt:"theme-change"}}),s("v-img",{staticClass:"auth-tree",attrs:{width:"247",height:"185",src:e("e28d")}}),s("v-img",{staticClass:"auth-tree-3",attrs:{width:"377",height:"289",src:e("0670")}}),s("v-snackbar",{attrs:{color:"error","multi-line":""},scopedSlots:t._u([{key:"action",fn:function(a){var e=a.attrs;return[s("v-btn",t._b({attrs:{color:"red",text:""},on:{click:function(a){t.snackbar=!1}}},"v-btn",e,!1),[s("v-icon",{attrs:{dark:""}},[t._v(t._s(t.icons.mdiClose))])],1)]}}]),model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" ")])],1)},r=[],n=e("c7eb"),i=e("1da1"),o=e("5530"),c=(e("e9c4"),e("94ed")),l=e("bc3a"),d=e.n(l),u=e("2f62");d.a.defaults.baseURL="http://storefront-env.eba-mm2w3dke.us-east-1.elasticbeanstalk.com";var b={data:function(){return{username:"",password:"",isPasswordVisible:!1,socialLink:[{icon:c["sb"],color:"#3b5998",colorInDark:"#3b5998"},{icon:c["Rb"],color:"#1da1f2",colorInDark:"#1da1f2"},{icon:c["yb"],color:"#333",colorInDark:"#333"},{icon:c["zb"],color:"#dd4b39",colorInDark:"#dd4b39"}],icons:{mdiEyeOutline:c["rb"],mdiEyeOffOutline:c["qb"],mdiClose:c["ab"]},snackbar:!1,snackbarText:"",login_loading:!1}},computed:Object(o["a"])({},Object(u["b"])(["isLoggedIn"])),methods:Object(o["a"])(Object(o["a"])({},Object(u["c"])(["setUser","setToken"])),{},{login:function(t){var a=this;return Object(i["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.username||!a.password){e.next=7;break}return a.login_loading=!0,e.next=5,d.a.post("/users/login",{username:a.username,password:a.password}).then((function(t){var e=t.data["user"],s=t.data["token"];a.setUser(e),a.setToken(s),localStorage.setItem("user",JSON.stringify(e)),localStorage.setItem("token",s),a.login_loading=!1,a.$store.dispatch("user",e),a.$router.push("/")})).catch((function(t){a.snackbar=!0,a.snackbarText="error login server",console.log(t),a.login_loading=!1}));case 5:e.next=10;break;case 7:a.snackbar=!0,a.snackbarText="Please fill in all the fields",a.login_loading=!1;case 10:case"end":return e.stop()}}),e)})))()}})},m=b,f=(e("f499"),e("2877")),v=e("6544"),p=e.n(v),k=e("8336"),g=e("b0af"),h=e("99d9"),x=e("ac7c"),w=e("ce7e"),C=e("4bd4"),_=e("132d"),y=e("adda"),V=e("2db4"),O=e("8654"),j=Object(f["a"])(m,s,r,!1,null,null,null);a["default"]=j.exports;p()(j,{VBtn:k["a"],VCard:g["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCheckbox:x["a"],VDivider:w["a"],VForm:C["a"],VIcon:_["a"],VImg:y["a"],VSnackbar:V["a"],VTextField:O["a"]})},f499:function(t,a,e){"use strict";e("0c97")}}]);
//# sourceMappingURL=chunk-216bad50.25116ac6.js.map