(function(t){function s(s){for(var a,r,l=s[0],n=s[1],c=s[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);b&&b(s);while(m.length)m.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],a=!0,r=1;r<e.length;r++){var n=e[r];0!==i[n]&&(a=!1)}a&&(o.splice(s--,1),t=l(l.s=e[0]))}return t}var a={},i={app:0},o=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3e408a75"}[t]+".js"}function l(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var s=[],e=i[t];if(0!==e)if(e)s.push(e[2]);else{var a=new Promise((function(s,a){e=i[t]=[s,a]}));s.push(e[2]=a);var o,n=document.createElement("script");n.charset="utf-8",n.timeout=120,l.nc&&n.setAttribute("nonce",l.nc),n.src=r(t);var c=new Error;o=function(s){n.onerror=n.onload=null,clearTimeout(d);var e=i[t];if(0!==e){if(e){var a=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,e[1](c)}i[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:n})}),12e4);n.onerror=n.onload=o,document.head.appendChild(n)}return Promise.all(s)},l.m=t,l.c=a,l.d=function(t,s,e){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)l.d(e,a,function(s){return t[s]}.bind(null,a));return e},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/",l.oe=function(t){throw console.error(t),t};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=s,n=n.slice();for(var d=0;d<n.length;d++)s(n[d]);var b=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},o=[],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{attrs:{fluid:""}},[e("div",{staticClass:"left-container"},[e("div",{staticClass:"left-container-data"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://i.ibb.co/Lz9sjK1/iservice-logo-blue.png",alt:"logo"}})]),e("b-list-group",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy:listgroup-ex",arg:"listgroup-ex"}]},[e("b-list-group-item",{staticClass:"active",attrs:{href:"#list-item-buttons"}},[t._v(" Buttons")]),e("b-list-group-item",{attrs:{href:"#list-item-colors"}},[t._v("Colors")]),e("b-list-group-item",{attrs:{href:"#list-item-charts"}},[t._v("Charts")]),e("b-list-group-item",{attrs:{href:"#list-item-messages"}},[t._v("Error Messages")]),e("b-list-group-item",{attrs:{href:"#list-item-forminput"}},[t._v(" Form Inputs")]),e("b-list-group-item",{attrs:{href:"#list-item-icons"}},[t._v("Icons")]),e("b-list-group-item",{attrs:{href:"#list-item-loaders"}},[t._v("Loaders")]),e("b-list-group-item",{attrs:{href:"#list-item-logos"}},[t._v("Logos")]),e("b-list-group-item",{attrs:{href:"#list-item-notification"}},[t._v("Notification And Alerts")]),e("b-list-group-item",{attrs:{href:"#list-item-panels"}},[t._v("Panels")]),e("b-list-group-item",{attrs:{href:"#list-item-richtext"}},[t._v("Rich Text Editor")]),e("b-list-group-item",{attrs:{href:"#list-item-tables"}},[t._v("Tables")]),e("b-list-group-item",{attrs:{href:"#list-item-tabs"}},[t._v("Tabs")]),e("b-list-group-item",{attrs:{href:"#list-item-timeline"}},[t._v("Timeline")]),e("b-list-group-item",{attrs:{href:"#list-item-treeview"}},[t._v("Treeview")]),e("b-list-group-item",{attrs:{href:"#list-item-typography"}},[t._v("Typography")])],1)],1)]),e("div",{staticClass:"right-container"},[e("div",{staticClass:"right-container-data"},[e("div",{staticClass:"list-style",attrs:{id:"listgroup-ex"}},[e("h4",{attrs:{id:"list-item-buttons"}},[t._v("Buttons")]),e("p",[e("ButtonsComponents")],1),e("h4",{attrs:{id:"list-item-colors"}},[t._v("Colors")]),e("p",[e("ColorsComponents")],1),e("h4",{attrs:{id:"list-item-charts"}},[t._v("Charts")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-messages"}},[t._v("Error Messages")]),e("p",[e("ErrorMessagesComponents")],1),e("h4",{attrs:{id:"list-item-forminput"}},[t._v("Form Inputs")]),e("p",[e("FormsComponents")],1),e("h4",{attrs:{id:"list-item-icons"}},[t._v("Icons")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-loaders"}},[t._v("Loaders")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-logos"}},[t._v("Logos")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-notification"}},[t._v("Notifications and Alerts")]),e("p",[e("NotificationComponents")],1),e("h4",{attrs:{id:"list-item-panels"}},[t._v("Panels")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-richtext"}},[t._v("Rich Text Editors")]),e("p",[e("CKeditorComponents")],1),e("h4",{attrs:{id:"list-item-tables"}},[t._v("Tables")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-tabs"}},[t._v("Tabs")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-timeline"}},[t._v("Timeline")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-treeview"}},[t._v("Treeview")]),e("p",[t._v(t._s(t.text))]),e("h4",{attrs:{id:"list-item-typography"}},[t._v("Typography")]),e("p",[t._v(t._s(t.text))])])])])])},l=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("p",{staticClass:"action-description"},[t._v(" iService buttons are usually used in form action like save. ")]),e("div",{staticClass:"box box-primary"},[t._m(0),e("div",{staticClass:"box-body  table-responsive"},[e("table",{staticClass:"table table-bordered text-center"},[e("tbody",[t._m(1),t._m(2),e("tr",[e("td",[e("b-button",{staticClass:"btn-block btn-primary"},[t._v("Primary")])],1),e("td",[e("b-button",{staticClass:"btn-block btn-primary",attrs:{size:"sm"}},[t._v("Primary")])],1),e("td",[e("b-button",{staticClass:"btn-block btn-primary",attrs:{size:"xs"}},[t._v("Primary")])],1),e("td",[e("b-button",{staticClass:"btn-block btn-primary",attrs:{size:"xs",disabled:""}},[t._v("Primary")])],1)]),t._m(3),t._m(4),t._m(5),t._m(6)])]),t._m(7)])])]),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box"},[t._m(8),e("div",{staticClass:"box-body"},[e("p",[t._v("Normal split buttons:")]),e("div",{staticClass:"margin"},[e("div",{staticClass:"btn-group"},[e("b-button-group",[e("b-button",{staticClass:"btn-default"},[t._v("Action")]),e("b-dropdown",{staticClass:"mx-1",attrs:{right:"",variant:"default"}},[e("b-dropdown-item",[t._v("Item 1")]),e("b-dropdown-item",[t._v("Item 2")]),e("b-dropdown-item",[t._v("Item 3")])],1)],1)],1),e("div",{staticClass:"btn-group"},[e("div",{staticClass:"btn-group"},[e("b-button-group",[e("b-button",{staticClass:"btn-info"},[t._v("Action")]),e("b-dropdown",{staticClass:"mx-1",attrs:{right:"",variant:"info"}},[e("b-dropdown-item",[t._v("Item 1")]),e("b-dropdown-item",[t._v("Item 2")]),e("b-dropdown-item",[t._v("Item 3")])],1)],1)],1)]),e("div",{staticClass:"btn-group"},[e("b-button-group",[e("b-button",{staticClass:"btn-danger"},[t._v("Action")]),e("b-dropdown",{staticClass:"mx-1",attrs:{right:"",variant:"danger"}},[e("b-dropdown-item",[t._v("Item 1")]),e("b-dropdown-item",[t._v("Item 2")]),e("b-dropdown-item",[t._v("Item 3")])],1)],1)],1),e("div",{staticClass:"btn-group"},[e("b-button-group",[e("b-button",{staticClass:"btn-warning"},[t._v("Action")]),e("b-dropdown",{staticClass:"mx-1",attrs:{right:"",variant:"warning"}},[e("b-dropdown-item",[t._v("Item 1")]),e("b-dropdown-item",[t._v("Item 2")]),e("b-dropdown-item",[t._v("Item 3")])],1)],1)],1),e("div",{staticClass:"btn-group"},[e("b-button-group",[e("b-button",{staticClass:"btn-success"},[t._v("Action")]),e("b-dropdown",{staticClass:"mx-1",attrs:{right:"",variant:"success"}},[e("b-dropdown-item",[t._v("Item 1")]),e("b-dropdown-item",[t._v("Item 2")]),e("b-dropdown-item",[t._v("Item 3")])],1)],1)],1)]),t._m(9)])])])])])},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[e("i",{staticClass:"fa fa-edit"}),t._v(" Buttons ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("th",[t._v("Normal")]),e("th",[t._v("Small "),e("code",[t._v(".btn-sm")])]),e("th",[t._v("X-Small "),e("code",[t._v(".btn-xs")])]),e("th",[t._v("Disabled "),e("code",[t._v(".disabled")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",[e("button",{staticClass:"btn btn-block btn-default",attrs:{type:"button"}},[t._v("Default")])]),e("td",[e("button",{staticClass:"btn btn-block btn-default btn-sm",attrs:{type:"button"}},[t._v("Default")])]),e("td",[e("button",{staticClass:"btn btn-block btn-default btn-xs",attrs:{type:"button"}},[t._v("Default")])]),e("td",[e("button",{staticClass:"btn btn-block btn-default disabled",attrs:{type:"button"}},[t._v("Default")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",[e("button",{staticClass:"btn btn-block btn-success",attrs:{type:"button"}},[t._v("Success")])]),e("td",[e("button",{staticClass:"btn btn-block btn-success btn-sm",attrs:{type:"button"}},[t._v("Success")])]),e("td",[e("button",{staticClass:"btn btn-block btn-success btn-xs",attrs:{type:"button"}},[t._v("Success")])]),e("td",[e("button",{staticClass:"btn btn-block btn-success disabled",attrs:{type:"button"}},[t._v("Success")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",[e("button",{staticClass:"btn btn-block btn-info",attrs:{type:"button"}},[t._v("Info")])]),e("td",[e("button",{staticClass:"btn btn-block btn-info btn-sm",attrs:{type:"button"}},[t._v("Info")])]),e("td",[e("button",{staticClass:"btn btn-block btn-info btn-xs",attrs:{type:"button"}},[t._v("Info")])]),e("td",[e("button",{staticClass:"btn btn-block btn-info disabled",attrs:{type:"button"}},[t._v("Info")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",[e("button",{staticClass:"btn btn-block btn-danger",attrs:{type:"button"}},[t._v("Danger")])]),e("td",[e("button",{staticClass:"btn btn-block btn-danger btn-sm",attrs:{type:"button"}},[t._v("Danger")])]),e("td",[e("button",{staticClass:"btn btn-block btn-danger btn-xs",attrs:{type:"button"}},[t._v("Danger")])]),e("td",[e("button",{staticClass:"btn btn-block btn-danger disabled",attrs:{type:"button"}},[t._v("Danger")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",[e("button",{staticClass:"btn btn-block btn-warning",attrs:{type:"button"}},[t._v("Warning")])]),e("td",[e("button",{staticClass:"btn btn-block btn-warning btn-sm",attrs:{type:"button"}},[t._v("Warning")])]),e("td",[e("button",{staticClass:"btn btn-block btn-warning btn-xs",attrs:{type:"button"}},[t._v("Warning")])]),e("td",[e("button",{staticClass:"btn btn-block btn-warning disabled",attrs:{type:"button"}},[t._v("Warning")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("h2",{staticClass:"action-list-title"},[t._v("Example")]),e("p",{staticClass:"action-description"},[t._v(" iService includes several predefined button styles, each serving its own semantic purpose. ")]),e("ul",{staticClass:"item-actions"},[e("li",[e("div",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save")]),t._v(" Save or Add action. "),e("div",{staticClass:"code-container"},[e("p",[t._v('<b-button class="btn-block btn-primary">Primary</b-button>')])])])]),e("li",[e("div",[e("button",{staticClass:"btn btn-danger btn-delete",attrs:{type:"button"}},[t._v("Delete...")]),t._v(" Delete or Remove action "),e("div",{staticClass:"code-container"},[e("p",[t._v(' <b-button class="btn-block btn-primary">Primary</b-button>')])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header border-primary"},[e("h3",{staticClass:"box-title"},[t._v("Split Buttons")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("textarea",{staticClass:"form-control code-container",attrs:{cols:"40",rows:"5"}},[t._v('<div class="btn-group"> <b-button-group> <b-button class="btn-success">Action</b-button> <b-dropdown class="mx-1" right variant="success"> <b-dropdown-item>Item 1</b-dropdown-item> <b-dropdown-item>Item 2</b-dropdown-item> <b-dropdown-item>Item 3</b-dropdown-item> </b-dropdown> </b-button-group> </div>')])])}],d={name:"ButtonsComponents"},b=d,m=e("2877"),u=Object(m["a"])(b,n,c,!1,null,null,null),v=u.exports,p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-primary"},[t._m(0),e("div",{staticClass:"box-body  table-responsive"},[e("div",{staticClass:"box-body"},[e("h3",[t._v("Dismissable alert messages")]),e("p",[t._v("Broadcast message are global and are not dismissable and can be used with text or without text.")]),e("b-alert",{attrs:{show:"",fade:"",variant:"danger",dismissible:""}},[e("h4",[e("i",{staticClass:"icon fa fa-ban"}),t._v(" Error Alert!")]),t._v(" Danger alert preview. This alert is used or global error message.")]),e("b-alert",{attrs:{show:"",fade:"",variant:"info",dismissible:""}},[e("h4",[e("i",{staticClass:"icon fa fa-info"}),t._v(" Information Alert!")]),t._v(" Info alert preview. This alert is used for global information messages.")]),e("b-alert",{attrs:{show:"",fade:"",variant:"warning",dismissible:""}},[e("h4",[e("i",{staticClass:"icon fa fa-warning"}),t._v(" Warning Alert!")]),t._v(" Warning alert preview. This alert is used for global warning messages.")]),e("b-alert",{attrs:{show:"",fade:"",variant:"success",dismissible:""}},[e("h4",[e("i",{staticClass:"icon fa fa-check"}),t._v(" Success Alert!")]),t._v(" Success alert preview. This alert is used for global success messages.")]),t._m(1)],1)])]),e("div",{staticClass:"box box-primary"},[t._m(2),e("div",{staticClass:"box-body  table-responsive"},[e("div",{staticClass:"box-body"},[e("b-alert",{staticClass:"form-success",attrs:{variant:"success",show:""}},[t._v("Success Message")]),t._m(3),e("b-alert",{staticClass:"form-danger",attrs:{variant:"danger",show:""}},[t._v(" Error Message! ")]),t._m(4),e("b-button",{staticClass:"m-1",attrs:{variant:"info"},on:{click:t.showAlert}},[t._v(" Click to see success notice ")]),e("br"),e("br"),e("b-alert",{staticClass:"form-success",attrs:{show:t.dismissCountDown,dismissible:"",variant:"success"},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[e("span",[t._v("This alert will dismiss after 5 seconds...")])]),e("div",{staticClass:"code-container"},[e("p",[t._v('<b-alert :show="dismissCountDown"')]),e("p",[t._v(" dismissible")]),e("p",[t._v(' variant="danger"')]),e("p",[t._v(' @dismissed="dismissCountDown=0"')]),e("p",[t._v(' @dismiss-count-down="countDownChanged"')]),e("p",[t._v(" >")]),e("p",[t._v(" <p>This alert will dismiss after "+t._s(t.dismissCountDown)+" seconds...</p>")]),e("p",[t._v(" <b-progress")]),e("p",[t._v(' variant="danger"')]),e("p",[t._v(' :max="dismissSecs"')]),e("p",[t._v(' :value="dismissCountDown"')]),e("p",[t._v(' height="4px"')]),e("p",[t._v(" ></b-progress>")]),e("p",[t._v(" </b-alert>")]),t._m(5)])],1)])])])])])},f=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header"},[e("h3",{staticClass:"box-title"},[t._v(" Broadcast Error Messages ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code-container"},[e("p",[t._v('<b-alert show fade variant="success" dismissible><h4><i class="icon fa fa-check"></i> Success Alert!</h4> Success alert preview. This alert is used for global success messages.</b-alert>')]),e("p",[e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header"},[e("h3",{staticClass:"box-title"},[t._v(" Forms Action Alerts or Error Messages ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code-container"},[e("p",[t._v('<b-alert variant="success" show>Success Message</b-alert>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code-container"},[e("p",[t._v('<b-alert variant="danger" show>Error Message</b-alert>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("br")])}],_={name:"ErrorMessagesComponents",data:function(){return{dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},h=_,g=Object(m["a"])(h,p,f,!1,null,null,null),C=g.exports,x=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-default color-palette-box"},[e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[e("i",{staticClass:"fa fa-tag"}),t._v(" Color Palette")])]),e("div",{staticClass:"box-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4 col-md-2"},[e("h4",{staticClass:"text-center"},[t._v("Primary")]),e("div",{staticClass:"color-palette-set"},[e("div",{staticClass:"bg-light-blue disabled color-palette"},[e("span",[t._v("Disabled")])]),e("div",{staticClass:"bg-light-blue color-palette"},[e("span",[t._v("#3c8dbc")])]),e("div",{staticClass:"bg-light-blue-active color-palette"},[e("span",[t._v("Active")])])])]),e("div",{staticClass:"col-sm-4 col-md-2"},[e("h4",{staticClass:"text-center"},[t._v("Info")]),e("div",{staticClass:"color-palette-set"},[e("div",{staticClass:"bg-aqua disabled color-palette"},[e("span",[t._v("Disabled")])]),e("div",{staticClass:"bg-aqua color-palette"},[e("span",[t._v("#00c0ef")])]),e("div",{staticClass:"bg-aqua-active color-palette"},[e("span",[t._v("Active")])])])]),e("div",{staticClass:"col-sm-4 col-md-2"},[e("h4",{staticClass:"text-center"},[t._v("Success")]),e("div",{staticClass:"color-palette-set"},[e("div",{staticClass:"bg-green disabled color-palette"},[e("span",[t._v("Disabled")])]),e("div",{staticClass:"bg-green color-palette"},[e("span",[t._v("#00a65a")])]),e("div",{staticClass:"bg-green-active color-palette"},[e("span",[t._v("Active")])])])]),e("div",{staticClass:"col-sm-4 col-md-2"},[e("h4",{staticClass:"text-center"},[t._v("Warning")]),e("div",{staticClass:"color-palette-set"},[e("div",{staticClass:"bg-yellow disabled color-palette"},[e("span",[t._v("Disabled")])]),e("div",{staticClass:"bg-yellow color-palette"},[e("span",[t._v("#f39c12")])]),e("div",{staticClass:"bg-yellow-active color-palette"},[e("span",[t._v("Active")])])])]),e("div",{staticClass:"col-sm-4 col-md-2"},[e("h4",{staticClass:"text-center"},[t._v("Danger")]),e("div",{staticClass:"color-palette-set"},[e("div",{staticClass:"bg-red disabled color-palette"},[e("span",[t._v("Disabled")])]),e("div",{staticClass:"bg-red color-palette"},[e("span",[t._v("#f56954")])]),e("div",{staticClass:"bg-red-active color-palette"},[e("span",[t._v("Active")])])])]),e("div",{staticClass:"col-sm-4 col-md-2"},[e("h4",{staticClass:"text-center"},[t._v("Gray")]),e("div",{staticClass:"color-palette-set"},[e("div",{staticClass:"bg-gray disabled color-palette"},[e("span",[t._v("Disabled")])]),e("div",{staticClass:"bg-gray color-palette"},[e("span",[t._v("#d2d6de")])]),e("div",{staticClass:"bg-gray-active color-palette"},[e("span",[t._v("Active")])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4 col-md-2"},[e("h4",{staticClass:"text-center"},[t._v("Teal")]),e("div",{staticClass:"color-palette-set"},[e("div",{staticClass:"bg-teal disabled color-palette"},[e("span",[t._v("Disabled")])]),e("div",{staticClass:"bg-teal color-palette"},[e("span",[t._v("#39CCCC")])]),e("div",{staticClass:"bg-teal-active color-palette"},[e("span",[t._v("Active")])])])]),e("div",{staticClass:"col-sm-4 col-md-2"},[e("h4",{staticClass:"text-center"},[t._v("Black")]),e("div",{staticClass:"color-palette-set"},[e("div",{staticClass:"bg-black disabled color-palette"},[e("span",[t._v("Disabled")])]),e("div",{staticClass:"bg-black color-palette"},[e("span",[t._v("#111111")])]),e("div",{staticClass:"bg-black-active color-palette"},[e("span",[t._v("Active")])])])])]),e("div",{},[e("h2",{staticClass:"action-list-title"},[t._v("Example")]),e("p",{staticClass:"action-description"},[t._v(" iService uses above color schemes buttons, labels, text colors and backgrounds. ")]),e("ul",{staticClass:"item-actions"},[e("li",[e("div",[e("small",{staticClass:"label label-with-icon bg-blue"},[t._v("bg blue")]),e("div",{staticClass:"code-container"},[e("p",[t._v('<small class="label label-with-icon bg-blue">bg blue</small>')])])])]),e("li",[e("div",[e("small",{staticClass:"bg-green label"},[t._v("bg green")]),e("div",{staticClass:"code-container"},[e("p",[t._v('<small class="bg-green label">bg green</small>')])])])]),e("li",[e("div",[e("small",{staticClass:"bg-yellow label"},[t._v("bg yellow")]),e("div",{staticClass:"code-container"},[e("p",[t._v('<small class="bg-yellow label">bg green</small>')])])])]),e("li",[e("div",[e("small",{staticClass:"bg-red label"},[t._v("bg red")]),e("div",{staticClass:"code-container"},[e("p",[t._v('<small class="bg-red label">bg green</small>')])])])]),e("li",[e("div",[e("small",{staticClass:"bg-gray label"},[t._v("bg gray")]),e("div",{staticClass:"code-container"},[e("p",[t._v('<small class="bg-gray label">bg green</small>')])])])]),e("li",[e("div",[e("small",{staticClass:"bg-teal label"},[t._v("bg teal")]),e("div",{staticClass:"code-container"},[e("p",[t._v('<small class="bg-teal label">bg teal</small>')])])])])])])])])])])])}],w={name:"ColorsComponents"},k=w,E=Object(m["a"])(k,x,y,!1,null,null,null),I=E.exports,D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"box box-primary"},[t._m(0),e("div",{staticClass:"box-body"},[e("div",[e("b-form",[e("b-form-group",{attrs:{id:"input-group-1",label:"Email address","label-for":"input-1","label-size":"sm",description:"We'll never share your email with anyone else."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email",size:"sm"},model:{value:t.form.email,callback:function(s){t.$set(t.form,"email",s)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Your Name","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name",size:"sm"},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Discription","label-for":"textarea-2"}},[e("b-form-textarea",{attrs:{id:"textarea-1",placeholder:"Enter something...",rows:"3",size:"sm","max-rows":"6"}})],1),e("b-form-group",{attrs:{id:"input-group-3",label:"Food","label-for":"input-3"}},[e("b-form-select",{attrs:{id:"input-3",options:t.foods,required:"",size:"sm"},model:{value:t.form.food,callback:function(s){t.$set(t.form,"food",s)},expression:"form.food"}})],1),e("b-form-group",{attrs:{id:"input-group-4"}},[e("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:t.form.checked,callback:function(s){t.$set(t.form,"checked",s)},expression:"form.checked"}},[e("b-form-checkbox",{attrs:{value:"me"}},[t._v("Check me out")]),e("b-form-checkbox",{attrs:{value:"that"}},[t._v("Check that out")])],1)],1),e("b-button",{staticClass:"mright-15",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),e("b-link",{attrs:{type:"reset",variant:"info"}},[t._v("Cancel")])],1)],1)])])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"box box-primary"},[t._m(1),e("div",{staticClass:"box-body"},[e("div",[e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"4","label-cols-lg":"3",description:"Let us know your name.",label:"Enter Your Name","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-horizontal",size:"sm"}})],1),e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"4","label-cols-lg":"3",description:"Let us know your last name.",label:"Enter Last Name","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-horizontal",size:"sm"}})],1),e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"4","label-cols-lg":"3",label:"Description","label-for":"input-horizontal"}},[e("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6",size:"sm"}})],1),e("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"4","label-cols-lg":"3",label:"Food","label-for":"input-horizontal"}},[e("b-form-select",{attrs:{id:"input-3",options:t.foods,required:"",size:"sm"},model:{value:t.form.food,callback:function(s){t.$set(t.form,"food",s)},expression:"form.food"}})],1),e("b-form-group",{attrs:{id:"input-group-4"}},[e("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:t.form.checked,callback:function(s){t.$set(t.form,"checked",s)},expression:"form.checked"}},[e("b-form-checkbox",{attrs:{value:"me"}},[t._v("Check me out")]),e("b-form-checkbox",{attrs:{value:"that"}},[t._v("Check that out")])],1)],1),e("b-button",{staticClass:"mright-15",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),e("b-link",{attrs:{type:"reset",variant:"info"}},[t._v("Cancel")])],1)])])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"box box-primary"},[t._m(2),e("div",{staticClass:"box-body"},[e("h3",[t._v("Invalid Input")]),e("div",[e("b-form-group",{attrs:{id:"fieldset-1",description:"Let us know your name.",label:"Enter your name","label-for":"input-1","valid-feedback":"Thank you!","invalid-feedback":t.invalidFeedback,state:t.state}},[e("b-form-input",{attrs:{id:"input-1",state:t.state,trim:"",size:"sm"},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}})],1)],1),e("h3",[t._v("Input Group With Button")]),e("b-input-group",{staticClass:"mt-3"},[e("b-form-input"),e("b-input-group-append",[e("b-button",{attrs:{variant:"info"}},[t._v("Button")])],1)],1),e("br"),e("h3",[t._v("Radio Buttons")]),e("div",[e("b-form-group",{attrs:{label:"Individual radios"}},[e("b-form-radio",{attrs:{name:"some-radios",value:"A"}},[t._v("Option A")]),e("b-form-radio",{attrs:{name:"some-radios",value:"B"}},[t._v("Option B")])],1)],1),e("br"),e("h3",[t._v("DatePicker")]),e("div",[e("label",{attrs:{for:"example-input"}},[t._v("Choose a date")]),e("b-input-group",{staticClass:"mb-3"},[e("b-form-input",{attrs:{id:"example-input",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),e("b-input-group-append",[e("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"en-US","aria-controls":"example-input"},on:{context:t.onContext},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)],1)],1)],1)])])])])},S=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("Vertical Form Example")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("Horizontal Form Example")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("Other Form Elements")])])}],$=(e("b0c0"),{name:"FormsComponents",computed:{state:function(){return this.name.length>=4},invalidFeedback:function(){return this.name.length>0?"Enter at least 4 characters.":"Please enter something."}},data:function(){return{name:"",value:"",formatted:"",selected:"",form:{email:"",name:"",food:null,checked:[]},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var s=this;t.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){s.show=!0}))},onContext:function(t){this.formatted=t.selectedFormatted,this.selected=t.selectedYMD}}}),A=$,T=Object(m["a"])(A,D,S,!1,null,null,null),L=T.exports,z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-default"},[t._m(0),e("div",{staticClass:"box-body"},[e("ckeditor",{attrs:{editor:t.editor},model:{value:t.editorData,callback:function(s){t.editorData=s},expression:"editorData"}})],1)])])])])},O=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[e("i",{staticClass:"fa fa-tag"}),t._v(" Rich Text Editor")])])}],j=e("fb3d"),P=e.n(j),M={name:"CKeditorComponents",data:function(){return{editor:P.a,editorData:"<p>Rich-text editor content.</p>"}}},B=M,F=Object(m["a"])(B,z,O,!1,null,null,null),N=F.exports,W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-primary"},[t._m(0),e("div",{staticClass:"box-body  table-responsive"},[e("div",{staticClass:"box-body"},[e("h3",[t._v("None dismissable alert messages")]),e("p",[t._v("Broadcast message are global and are not dismissable and can be used with text or without text.")]),e("b-alert",{attrs:{show:"",fade:"",variant:"danger"}},[e("h4",[e("i",{staticClass:"icon fa fa-ban"}),t._v(" Error Alert!")]),t._v(" Danger alert preview. This alert is used or global error message.")]),e("b-alert",{attrs:{show:"",fade:"",variant:"info"}},[e("h4",[e("i",{staticClass:"icon fa fa-info"}),t._v(" Information Alert!")]),t._v(" Info alert preview. This alert is used for global information messages.")]),e("b-alert",{attrs:{show:"",fade:"",variant:"warning"}},[e("h4",[e("i",{staticClass:"icon fa fa-warning"}),t._v(" Warning Alert!")]),t._v(" Warning alert preview. This alert is used for global warning messages.")]),e("b-alert",{attrs:{show:"",fade:"",variant:"success"}},[e("h4",[e("i",{staticClass:"icon fa fa-check"}),t._v(" Success Alert!")]),t._v(" Success alert preview. This alert is used for global success messages.")]),t._m(1)],1)])])])])])},q=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box-header"},[e("h3",{staticClass:"box-title"},[t._v(" Broadcast Error Messages ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"code-container"},[e("p",[t._v('<b-alert show fade variant="success"><h4><i class="icon fa fa-check"></i> Success Alert!</h4> Success alert preview. This alert is used for global success messages.</b-alert>')]),e("p",[e("br")])])}],R={name:"NotificationComponents",data:function(){return{dismissSecs:10,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},Y=R,H=Object(m["a"])(Y,W,q,!1,null,null,null),K=H.exports,J={components:{ButtonsComponents:v,ErrorMessagesComponents:C,ColorsComponents:I,FormsComponents:L,CKeditorComponents:N,NotificationComponents:K},data:function(){return{text:"Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of  the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."}}},G=J,U=Object(m["a"])(G,r,l,!1,null,null,null),V=U.exports,X={name:"App",components:{HelloWorld:V}},Q=X,Z=Object(m["a"])(Q,i,o,!1,null,null,null),tt=Z.exports,st=(e("d3b7"),e("8c4f")),et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[t._v(" Home ")])},at=[],it={name:"Home"},ot=it,rt=Object(m["a"])(ot,et,at,!1,null,null,null),lt=rt.exports;a["default"].use(st["a"]);var nt=[{path:"/",name:"Home",component:lt},{path:"/richtext",name:"Richtext",component:function(){return e.e("about").then(e.bind(null,"4b1a"))}}],ct=new st["a"]({mode:"history",base:"/",routes:nt}),dt=ct,bt=e("2f62");a["default"].use(bt["a"]);var mt=new bt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ut=e("5f5b"),vt=e("b1e0"),pt=(e("f9e3"),e("2dd8"),e("f669"),e("3730")),ft=e.n(pt);a["default"].config.productionTip=!1,a["default"].use(ut["a"]),a["default"].use(vt["a"]),a["default"].use(ft.a),new a["default"]({router:dt,store:mt,render:function(t){return t(tt)}}).$mount("#app")},f669:function(t,s,e){}});
//# sourceMappingURL=app.1394581e.js.map