(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aed94"],{"0c8c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[e._v("Orders")]),a("v-card-text",[e._v(" You can "),a("code",[e._v("add")]),e._v(", "),a("code",[e._v("modify")]),e._v(" and even "),a("code",[e._v("delete")]),e._v(" an order ")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.orders,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("My Orders Control")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),i),[e._v(" New Order ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Order Status",placeholder:"example: open"},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-5",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.listOrders}},[e._v(" Reset ")])]},proxy:!0}])})],1)],1)],1)},s=[],d=(a("a434"),a("bc3a")),r=a.n(d);r.a.defaults.baseURL="http://localhost:3000";var o={name:"OrdersDetail",data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Order Number",align:"start",sortable:!1,value:"id"},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1}],orders:[],editedIndex:-1,editedItem:{status:""},defaultItem:{status:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Order":"Edit Order"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.listOrders()},methods:{listOrders:function(){var e=this;r.a.get("/orders").then((function(t){e.orders=t.data}))},editItem:function(e){this.editedIndex=this.orders.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.orders.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.orders.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;if(this.editedIndex>-1)Object.assign(this.orders[this.editedIndex],this.editedItem);else{this.orders.push(this.editedItem);var t=JSON.parse(localStorage.getItem("user"));r.a.post("/user/".concat(t.id,"/create-order"),this.editedItem).then((function(t){console.log(t.data),e.listOrders()}))}this.close()}}},n=o,l=a("2877"),c=a("6544"),v=a.n(c),u=a("8336"),f=a("b0af"),m=a("99d9"),h=a("62ad"),x=a("a523"),b=a("8fea"),p=a("169a"),I=a("ce7e"),g=a("132d"),_=a("0fd9"),k=a("2fa4"),O=a("8654"),C=a("71d9"),V=a("2a7f"),w=Object(l["a"])(n,i,s,!1,null,null,null);t["default"]=w.exports;v()(w,{VBtn:u["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:h["a"],VContainer:x["a"],VDataTable:b["a"],VDialog:p["a"],VDivider:I["a"],VIcon:g["a"],VRow:_["a"],VSpacer:k["a"],VTextField:O["a"],VToolbar:C["a"],VToolbarTitle:V["a"]})}}]);
//# sourceMappingURL=chunk-2d0aed94.d349a205.js.map