(this.webpackJsonppages=this.webpackJsonppages||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),o=a(16),i=a(4),s={brightBlue:"#3498db",darkGrayishBlue:"#8b8d94",darkRed:"#a90000",grayishBlue:"#A4A6B3",grayishBlue2:"#9fa2b4",grayishBlue3:"#bdc3c7",lightBlue:"#3751FF",lightGrayishBlue:"#F7F8FC",lightGrayishBlue2:"#DFE0EB",paleBlue:"#DDE2FF",paleBlueTransparent:"rgba(221, 226, 255, 0.08)",veryDarkGrayishBlue:"#373a47"},m={color:s,typography:{cardTitle:{fontWeight:"bold",fontSize:19,lineHeight:"24px",letterSpacing:"0.4px"},smallSubtitle:{fontSize:12,lineHeight:"16px",letterSpacing:"0.1px"},link:{fontWeight:"600",fontSize:14,lineHeight:"20px",letterSpacing:"0.2px",color:s.lightBlue,textAlign:"right",cursor:"pointer",textDecoration:"underline","&:hover":{color:s.grayishBlue}},itemTitle:{fontWeight:600,fontSize:14,lineHeight:"20px",letterSpacing:.2},title:{fontWeight:"bold",fontSize:24,lineHeight:"30px",letterSpacing:.3}}},u=a(8),b=a(2);var d=a(11),E={buttons:"/page/buttons",charts:"/page/charts",colors:"/page/colors",errormessages:"/page/error-messages",forminput:"/page/form-input",icons:"/page/icons",loaders:"/page/loader-and-loadings",logos:"/page/logos",links:"/page/notifications-and-tooltip",panels:"/page/panels",richtext:"/page/rich-text-editor",table:"/page/tables",tabs:"/page/tabs",timeline:"/page/timeline",treeview:"/page/treeview",typography:"/page/typography"};function p(e,t){var a=e;return Object.entries(t).forEach((function(e){var t=Object(u.a)(e,2),n=t[0],l=t[1];a=a.replace(":".concat(n),l)})),a}var g=a(9),h=a(50),f=a.n(h),v=function(){return l.a.createElement("img",{src:f.a,alt:"logo",width:"120"})},y=Object(i.b)((function(e){return{container:{marginLeft:32,marginRight:32},title:Object(g.a)(Object(g.a)({},e.typography.cardTitle),{},{color:e.color.grayishBlue,opacity:.7,marginLeft:12})}}));var x=function(){var e=Object(i.c)(),t=y({theme:e});return l.a.createElement(d.Row,{className:t.container,horizontal:"center",vertical:"center"},l.a.createElement(v,null),l.a.createElement("span",{className:t.title},"Styles"))},k=a(51);var w=function(e){var t=e.children,a=e.isMobile,r=function(e){var t=e.theme;return{bmBurgerButton:{position:"absolute",width:26,height:20,left:30,top:40,zIndex:19},bmBurgerBars:{background:t.color.veryDarkGrayishBlue},bmBurgerBarsHover:{background:t.color.darkRed},bmCrossButton:{display:"none"},bmCross:{background:t.color.grayishBlue3},bmMenuWrap:{position:"fixed",height:"100%",width:255,zIndex:30},bmMenu:{background:t.color.veryDarkGrayishBlue},bmItem:{outline:"none","&:focus":{outline:"none"}},bmMorphShape:{fill:t.color.veryDarkGrayishBlue},bmOverlay:{background:"rgba(0, 0, 0, 0.3)",zIndex:20}}}({theme:Object(i.c)()}),c=Object(n.useState)(!1),o=Object(u.a)(c,2),s=o[0],m=o[1];return l.a.createElement(k.slide,{isOpen:!a||s,noOverlay:!a,disableCloseOnEsc:!0,styles:r,onStateChange:function(e){return m(e.isOpen)}},t)},S=a(55),C=a(52),O="COLLAPSED",B="PRE_EXPANDED",D="EXPANDED",j="PRE_COLLAPSED";function T(e){var t,a=e.children,r=e.expanded,c=e.style,o=e.transitionDuration,i=e.transitionTimingFunction,s=e.onTransitionStart,m=e.onTransitionEnd,b=Object(S.a)(e,["children","expanded","style","transitionDuration","transitionTimingFunction","onTransitionStart","onTransitionEnd"]),d=Object(n.useRef)(null),E=Object(n.useState)(r?D:O),p=Object(u.a)(E,2),h=p[0],f=p[1],v=Object(C.a)(d,{onTransitionStart:s,onTransitionEnd:m}).scrollHeight;switch(h){case D:t={maxHeight:"100vh",transitionDuration:".001s"};break;case j:t={maxHeight:v,transitionDuration:".001s"};break;case B:t={maxHeight:v};break;case O:t={maxHeight:0};break;default:t={maxHeight:v,transitionDuration:".001s"}}return Object(n.useEffect)((function(){r?h===O?f(B):h===B&&setTimeout((function(){return f(D)}),800):r||(h===D?f(j):h===j&&setTimeout((function(){return f(O)}),100))}),[r,h]),l.a.createElement("div",Object.assign({},b,{style:Object(g.a)(Object(g.a)({overflow:"hidden",transitionProperty:"max-height",transitionTimingFunction:i,transitionDuration:o},t),c),ref:d}),a)}T.defaultProps={transitionDuration:".425s",transitionTimingFunction:"ease-in-out"};var A=T,I=Object(n.createContext)();function L(e){var t=e.children,a=e.defaultItem,r=Object(n.useState)(a),c=Object(u.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){if(a!==o)return i(a)}),[o,a]),l.a.createElement(I.Provider,{value:{currentItem:o,setCurrentItem:i}},t)}var z=Object(i.b)({activeContainer:{backgroundColor:function(e){return e.theme.color.paleBlueTransparent}},container:{display:"flex",height:56,cursor:"pointer","&:hover":{backgroundColor:function(e){return e.theme.color.paleBlueTransparent}},paddingLeft:function(e){return 32*e.level},transition:"all 0.2s ease-in-out"},leftBar:{borderLeft:function(e){var t=e.theme;return e.level>1?"none":"3px solid ".concat(t.color.darkGrayishBlue)}},title:{fontSize:16,lineHeight:"20px",letterSpacing:"0.2px",color:function(e){var t=e.theme;return e.isActive?t.color.paleBlue:t.color.grayishBlue},marginLeft:24}});function N(e){var t=e.children,a=e.icon,r=e.id,c=e.items,o=void 0===c?[]:c,s=e.level,m=void 0===s?1:s,b=e.onClick,E=e.title,p=Object(i.c)(),h=t&&t.length>0,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isCollapsible,a=e.item,l=e.items,r=void 0===l?[]:l,c=Object(n.useContext)(I),o=c.currentItem,i=c.setCurrentItem,s=a===o||r.includes(o),m=Object(n.useState)(s),b=Object(u.a)(m,2),d=b[0],E=b[1];Object(n.useEffect)((function(){return!s&&d?E(!1):s&&!d?E(!0):void 0}),[o]);var p=function(){t||i(a),E((function(e){return!e}))};return{isExpanded:d,isActive:s,onItemClick:p}}({isCollapsible:h,item:r,items:o}),v=f.isExpanded,y=f.isActive,x=f.onItemClick,k=z({theme:p,level:m,isActive:y}),w=y?k.leftBar:"",S=[k.container,y&&k.activeContainer].join(" ");return l.a.createElement(d.Column,{key:r,className:w},l.a.createElement(d.Row,{vertical:"center",onClick:function(e){b&&b(e),x()},className:S},l.a.createElement("span",{className:k.title},a,E)),h&&l.a.createElement(A,{expanded:v},t.map((function(e){return e.type(Object(g.a)({},e.props))}))))}N.defaultProps={};var P=N;var F=function(){var e=Object(b.g)().push,t=window.innerWidth<=1080;function a(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(p(t,a))}return l.a.createElement(w,{isMobile:t},l.a.createElement("div",{style:{paddingTop:30,paddingBottom:30}},l.a.createElement(x,null)),l.a.createElement(P,{id:E.buttons,title:"Buttons",icon:"",onClick:function(){return a(E.buttons)}}),l.a.createElement(P,{id:E.richtext,title:"Rich Text Editor",icon:"",onClick:function(){return a(E.richtext)}}),l.a.createElement(P,{id:E.colors,title:"Colors",icon:"",onClick:function(){return a(E.colors)}}),l.a.createElement(P,{id:E.errormessages,title:"Error Messages",icon:"",onClick:function(){return a(E.errormessages)}}),l.a.createElement(P,{id:E.charts,title:"Charts",icon:"",onClick:function(){return a(E.charts)}}),l.a.createElement(P,{id:E.forminput,title:"Form Input",icon:"",onClick:function(){return a(E.forminput)}}),l.a.createElement(P,{id:E.icons,title:"Icons",icon:"",onClick:function(){return a(E.icons)}}),l.a.createElement(P,{id:E.loaders,title:"Loaders and Lazy Loadings",icon:"",onClick:function(){return a(E.loaders)}}),l.a.createElement(P,{id:E.logos,title:"Logos",icon:"",onClick:function(){return a(E.logos)}}),l.a.createElement(P,{id:E.notifications,title:"Notifications and Tooltips",icon:"",onClick:function(){return a(E.notifications)}}),l.a.createElement(P,{id:E.panels,title:"Panels",icon:"",onClick:function(){return a(E.panels)}}),l.a.createElement(P,{id:E.tables,title:"Tables",icon:"",onClick:function(){return a(E.tables)}}),l.a.createElement(P,{id:E.tabs,title:"Tabs",icon:"",onClick:function(){return a(E.tabs)}}),l.a.createElement(P,{id:E.timeline,title:"Timeline",icon:"",onClick:function(){return a(E.timeline)}}),l.a.createElement(P,{id:E.treeview,title:"Treeview",icon:"",onClick:function(){return a(E.treeview)}}),l.a.createElement(P,{id:E.typography,title:"Typography",icon:"",onClick:function(){return a(E.typography)}}))};var H=function(e){var t=e.children,a=Object(b.h)().pathname;return l.a.createElement(L,{defaultItem:a},t)},R=Object(i.b)((function(e){return{avatar:{height:35,width:35,minWidth:35,borderRadius:50,marginLeft:14,border:"1px solid ".concat(e.color.lightGrayishBlue2),"@media (max-width: 768px)":{marginLeft:14}},container:{height:40},name:Object(g.a)(Object(g.a)({},e.typography.itemTitle),{},{textAlign:"right","@media (max-width: 768px)":{display:"none"}}),separator:{borderLeft:"1px solid ".concat(e.color.lightGrayishBlue2),marginLeft:32,marginRight:32,height:32,width:2,"@media (max-width: 768px)":{marginLeft:14,marginRight:0}},title:Object(g.a)(Object(g.a)({},e.typography.title),{},{"@media (max-width: 1080px)":{marginLeft:50},"@media (max-width: 468px)":{fontSize:20}}),iconStyles:{cursor:"pointer",marginLeft:25,"@media (max-width: 768px)":{marginLeft:12}}}}));var W=function(){var e,t=Object(n.useContext)(I).currentItem,a=Object(i.c)(),r=R({theme:a});switch(!0){case t===E.dashboard:e="Dashboard";break;case t===E.buttons:e="Buttons";break;case t===E.charts:e="Charts";break;case t===E.colors:e="Colors";break;case t===E.errormessages:e="Error Messages";break;case t===E.forminput:e="Form Input";break;case t===E.icons:e="Icons";break;case t===E.loaders:e="Loaders";break;case t===E.logos:e="Logos";break;case t===E.notifications:e="Notifications And Tooltip";break;case t===E.panels:e="Panels";break;case t===E.richtext:e="Rich Text Editors";break;case t===E.table:e="Tables";break;case t===E.tabs:e="Tabs";break;case t===E.timeline:e="Timeline";break;case t===E.treeview:e="Treeview";break;case t===E.typography:e="Typography";break;default:e=""}return l.a.createElement(d.Row,{className:r.container,vertical:"center",horizontal:"space-between"},l.a.createElement("span",{className:r.title},e))},G=Object(i.b)({"@keyframes loadingSpin":{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},container:{backgroundColor:function(e){var t=e.theme,a=e.noTransparency,n=e.backgroundColor;return n?a?n:"".concat(n,"A0"):a?t.color.veryDarkGrayishBlue:"".concat(t.color.veryDarkGrayishBlue,"A0")},height:"100%",minHeight:function(e){return e.fullScreen?"100vh":"100%"},width:function(e){return e.fullScreen?"100vw":"100%"},position:function(e){return e.fullScreen?"fixed":"relative"},top:0,left:0,zIndex:function(e){return e.zIndex}},loading:{border:function(e){var t=e.theme;return"16px solid ".concat(t.color.lightGrayishBlue)},borderRadius:"50%",borderTop:function(e){var t=e.theme;return"16px solid ".concat(t.color.brightBlue)},width:120,height:120,animationName:"$loadingSpin",animationTimingFunction:"linear",animationDuration:"2s",animationIterationCount:"infinite"},loadingSpan:{color:"white",marginTop:10,fontSize:18}});function M(e){var t=e.backgroundColor,a=e.children,n=e.fullScreen,r=e.height,c=e.hideText,o=e.loading,s=e.noTransparency,m=e.width,u=e.zIndex,b=Object(i.c)(),E=G({theme:b,fullScreen:n,noTransparency:s,backgroundColor:t,zIndex:u});return l.a.createElement("div",{style:{position:"relative",height:r,width:m}},o&&l.a.createElement(d.Column,{className:E.container,horizontal:"center",vertical:"center"},l.a.createElement("div",{className:E.loading}),!c&&l.a.createElement("span",{className:E.loadingSpan},"Loading...")),a||l.a.createElement("div",null))}M.defaultProps={fullScreen:!0,zIndex:10};var q=M,X=function(){return l.a.createElement("div",{class:"content"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement("p",{class:"action-description"},"iService buttons are usually used in form action like save."),l.a.createElement("div",{class:"box box-primary"},l.a.createElement("div",{class:"box-header"},l.a.createElement("h3",{class:"box-title"}," ",l.a.createElement("i",{class:"fa fa-edit"})," Buttons ")),l.a.createElement("div",{class:"box-body  table-responsive"},l.a.createElement("table",{class:"table table-bordered text-center"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Normal"),l.a.createElement("th",null,"Large ",l.a.createElement("code",null,".btn-lg")),l.a.createElement("th",null,"Small ",l.a.createElement("code",null,".btn-sm")),l.a.createElement("th",null,"X-Small ",l.a.createElement("code",null,".btn-xs")),l.a.createElement("th",null,"Disabled ",l.a.createElement("code",null,".disabled"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-default"},"Default")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-default btn-lg"},"Default")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-default btn-sm"},"Default")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-default btn-xs"},"Default")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-default disabled"},"Default"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-primary"},"Primary")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-primary btn-lg"},"Primary")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-primary btn-sm"},"Primary")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-primary btn-xs"},"Primary")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-primary disabled"},"Primary"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-success"},"Success")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-success btn-lg"},"Success")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-success btn-sm"},"Success")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-success btn-xs"},"Success")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-success disabled"},"Success"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-info"},"Info")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-info btn-lg"},"Info")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-info btn-sm"},"Info")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-info btn-xs"},"Info")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-info disabled"},"Info"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-danger"},"Danger")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-danger btn-lg"},"Danger")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-danger btn-sm"},"Danger")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-danger btn-xs"},"Danger")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-danger disabled"},"Danger"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-warning"},"Warning")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-warning btn-lg"},"Warning")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-warning btn-sm"},"Warning")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-warning btn-xs"},"Warning")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-block btn-warning disabled"},"Warning"))))),l.a.createElement("div",{class:""},l.a.createElement("h2",{class:"action-list-title"},"Example"),l.a.createElement("p",{class:"action-description"},"iService includes several predefined button styles, each serving its own semantic purpose."),l.a.createElement("ul",{class:"item-actions"},l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("button",{class:"btn btn-primary",type:"button"},"Save"),"  Save or Add action.")),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("button",{class:"btn btn-danger btn-delete",type:"button"},"Delete..."),"  Delete or Remove action"))))))),l.a.createElement("div",{class:"col-md-12"},l.a.createElement("div",{class:"box"},l.a.createElement("div",{class:"box-header border-primary"},l.a.createElement("h3",{class:"box-title"},"Split Buttons")),l.a.createElement("div",{class:"box-body"},l.a.createElement("p",null,"Normal split buttons:"),l.a.createElement("div",{class:"margin"},l.a.createElement("div",{class:"btn-group"},l.a.createElement("button",{type:"button",class:"btn btn-default"},"Action"),l.a.createElement("button",{type:"button",class:"btn btn-default dropdown-toggle","data-toggle":"dropdown"},l.a.createElement("span",{class:"caret"}),l.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),l.a.createElement("ul",{class:"dropdown-menu",role:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Another action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Something else here")),l.a.createElement("li",{class:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Separated link")))),l.a.createElement("div",{class:"btn-group"},l.a.createElement("button",{type:"button",class:"btn btn-info"},"Action"),l.a.createElement("button",{type:"button",class:"btn btn-info dropdown-toggle","data-toggle":"dropdown"},l.a.createElement("span",{class:"caret"}),l.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),l.a.createElement("ul",{class:"dropdown-menu",role:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Another action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Something else here")),l.a.createElement("li",{class:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Separated link")))),l.a.createElement("div",{class:"btn-group"},l.a.createElement("button",{type:"button",class:"btn btn-danger"},"Action"),l.a.createElement("button",{type:"button",class:"btn btn-danger dropdown-toggle","data-toggle":"dropdown"},l.a.createElement("span",{class:"caret"}),l.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),l.a.createElement("ul",{class:"dropdown-menu",role:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Another action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Something else here")),l.a.createElement("li",{class:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Separated link")))),l.a.createElement("div",{class:"btn-group"},l.a.createElement("button",{type:"button",class:"btn btn-success"},"Action"),l.a.createElement("button",{type:"button",class:"btn btn-success dropdown-toggle","data-toggle":"dropdown"},l.a.createElement("span",{class:"caret"}),l.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),l.a.createElement("ul",{class:"dropdown-menu",role:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Another action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Something else here")),l.a.createElement("li",{class:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Separated link")))),l.a.createElement("div",{class:"btn-group"},l.a.createElement("button",{type:"button",class:"btn btn-warning"},"Action"),l.a.createElement("button",{type:"button",class:"btn btn-warning dropdown-toggle","data-toggle":"dropdown"},l.a.createElement("span",{class:"caret"}),l.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),l.a.createElement("ul",{class:"dropdown-menu",role:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Another action")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Something else here")),l.a.createElement("li",{class:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Separated link"))))))))))},J=a(53),$=a.n(J),_=a(54),K=a.n(_),Q=function(){return l.a.createElement("div",{class:"content"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement("div",{class:"box box-primary"},l.a.createElement("div",{class:"box-header"},l.a.createElement("h3",{class:"box-title"}," ",l.a.createElement("i",{class:"fa fa-edit"})," Ckeditor ")),l.a.createElement("div",{class:"box-body  table-responsive"},l.a.createElement($.a,{editor:K.a,data:"<p>Hi</p>",onInit:function(e){console.log("Editor is ready to use!",e)},onChange:function(e,t){var a=t.getData();console.log({event:e,editor:t,data:a})},onBlur:function(e,t){console.log("Blur.",t)},onFocus:function(e,t){console.log("Focus.",t)}}))))))},U=function(){return l.a.createElement("div",{class:"content"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-12"},l.a.createElement("div",{class:"box box-default color-palette-box"},l.a.createElement("div",{class:"box-header with-border"},l.a.createElement("h3",{class:"box-title"},l.a.createElement("i",{class:"fa fa-tag"})," Color Palette")),l.a.createElement("div",{class:"box-body"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-sm-4 col-md-2"},l.a.createElement("h4",{class:"text-center"},"Primary"),l.a.createElement("div",{class:"color-palette-set"},l.a.createElement("div",{class:"bg-light-blue disabled color-palette"},l.a.createElement("span",null,"Disabled")),l.a.createElement("div",{class:"bg-light-blue color-palette"},l.a.createElement("span",null,"#3c8dbc")),l.a.createElement("div",{class:"bg-light-blue-active color-palette"},l.a.createElement("span",null,"Active")))),l.a.createElement("div",{class:"col-sm-4 col-md-2"},l.a.createElement("h4",{class:"text-center"},"Info"),l.a.createElement("div",{class:"color-palette-set"},l.a.createElement("div",{class:"bg-aqua disabled color-palette"},l.a.createElement("span",null,"Disabled")),l.a.createElement("div",{class:"bg-aqua color-palette"},l.a.createElement("span",null,"#00c0ef")),l.a.createElement("div",{class:"bg-aqua-active color-palette"},l.a.createElement("span",null,"Active")))),l.a.createElement("div",{class:"col-sm-4 col-md-2"},l.a.createElement("h4",{class:"text-center"},"Success"),l.a.createElement("div",{class:"color-palette-set"},l.a.createElement("div",{class:"bg-green disabled color-palette"},l.a.createElement("span",null,"Disabled")),l.a.createElement("div",{class:"bg-green color-palette"},l.a.createElement("span",null,"#00a65a")),l.a.createElement("div",{class:"bg-green-active color-palette"},l.a.createElement("span",null,"Active")))),l.a.createElement("div",{class:"col-sm-4 col-md-2"},l.a.createElement("h4",{class:"text-center"},"Warning"),l.a.createElement("div",{class:"color-palette-set"},l.a.createElement("div",{class:"bg-yellow disabled color-palette"},l.a.createElement("span",null,"Disabled")),l.a.createElement("div",{class:"bg-yellow color-palette"},l.a.createElement("span",null,"#f39c12")),l.a.createElement("div",{class:"bg-yellow-active color-palette"},l.a.createElement("span",null,"Active")))),l.a.createElement("div",{class:"col-sm-4 col-md-2"},l.a.createElement("h4",{class:"text-center"},"Danger"),l.a.createElement("div",{class:"color-palette-set"},l.a.createElement("div",{class:"bg-red disabled color-palette"},l.a.createElement("span",null,"Disabled")),l.a.createElement("div",{class:"bg-red color-palette"},l.a.createElement("span",null,"#f56954")),l.a.createElement("div",{class:"bg-red-active color-palette"},l.a.createElement("span",null,"Active")))),l.a.createElement("div",{class:"col-sm-4 col-md-2"},l.a.createElement("h4",{class:"text-center"},"Gray"),l.a.createElement("div",{class:"color-palette-set"},l.a.createElement("div",{class:"bg-gray disabled color-palette"},l.a.createElement("span",null,"Disabled")),l.a.createElement("div",{class:"bg-gray color-palette"},l.a.createElement("span",null,"#d2d6de")),l.a.createElement("div",{class:"bg-gray-active color-palette"},l.a.createElement("span",null,"Active"))))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-sm-4 col-md-2"},l.a.createElement("h4",{class:"text-center"},"Teal"),l.a.createElement("div",{class:"color-palette-set"},l.a.createElement("div",{class:"bg-teal disabled color-palette"},l.a.createElement("span",null,"Disabled")),l.a.createElement("div",{class:"bg-teal color-palette"},l.a.createElement("span",null,"#39CCCC")),l.a.createElement("div",{class:"bg-teal-active color-palette"},l.a.createElement("span",null,"Active")))),l.a.createElement("div",{class:"col-sm-4 col-md-2"},l.a.createElement("h4",{class:"text-center"},"Black"),l.a.createElement("div",{class:"color-palette-set"},l.a.createElement("div",{class:"bg-black disabled color-palette"},l.a.createElement("span",null,"Disabled")),l.a.createElement("div",{class:"bg-black color-palette"},l.a.createElement("span",null,"#111111")),l.a.createElement("div",{class:"bg-black-active color-palette"},l.a.createElement("span",null,"Active"))))),l.a.createElement("p",null,"iService uses following button styling for different action"))))))};var V=function(){return l.a.createElement(n.Suspense,{fallback:l.a.createElement(q,{loading:!0})},l.a.createElement(b.d,null,l.a.createElement(b.b,{exact:!0,path:E.buttons,component:X}),l.a.createElement(b.b,{exact:!0,path:E.colors,component:U}),l.a.createElement(b.b,{exact:!0,path:E.richtext,component:Q}),l.a.createElement(b.b,{exact:!0,path:E.errormessages,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.forminput,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.icons,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.loaders,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.logos,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.notifications,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.panels,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.table,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.tabs,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.timeline,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.treeview,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.b,{exact:!0,path:E.typography,render:function(){return l.a.createElement("div",null)}}),l.a.createElement(b.a,{to:E.buttons})))},Y=Object(i.b)({container:{height:"100%",minHeight:850},mainBlock:{marginLeft:255,padding:15,"@media (max-width: 1080px)":{marginLeft:0}},contentBlock:{marginTop:15}});var Z=function(){var e=Object(i.c)(),t=Y({theme:e});return l.a.createElement(H,null,l.a.createElement(d.Row,{className:t.container},l.a.createElement(F,null),l.a.createElement(d.Column,{flexGrow:1,className:t.mainBlock},l.a.createElement(W,null),l.a.createElement("div",{className:t.contentBlock},l.a.createElement(V,null)))))};var ee=function(){var e=Object(b.h)().pathname,t=function(){var e=Object(n.useState)([0,0]),t=Object(u.a)(e,2),a=t[0],l=t[1];return Object(n.useLayoutEffect)((function(){function e(){l([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),a=Object(u.a)(t,2);return a[0],a[1],Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),l.a.createElement(Z,null)};a(115),a(116),a(117),a(118),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,{theme:m},l.a.createElement(o.a,null,l.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){e.exports=a.p+"static/media/logo.e86c6280.png"},56:function(e,t,a){e.exports=a(119)}},[[56,1,2]]]);
//# sourceMappingURL=main.3a8942ed.chunk.js.map