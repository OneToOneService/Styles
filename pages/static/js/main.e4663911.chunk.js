(this.webpackJsonppages=this.webpackJsonppages||[]).push([[0],{38:function(e,t,n){e.exports=n.p+"static/media/logo.e86c6280.png"},42:function(e,t,n){e.exports=n(88)},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(22),c=n.n(l),o=n(16),i=n(4),s={brightBlue:"#3498db",darkGrayishBlue:"#8b8d94",darkRed:"#a90000",grayishBlue:"#A4A6B3",grayishBlue2:"#9fa2b4",grayishBlue3:"#bdc3c7",lightBlue:"#3751FF",lightGrayishBlue:"#F7F8FC",lightGrayishBlue2:"#DFE0EB",paleBlue:"#DDE2FF",paleBlueTransparent:"rgba(221, 226, 255, 0.08)",veryDarkGrayishBlue:"#373a47"},u={color:s,typography:{cardTitle:{fontWeight:"bold",fontSize:19,lineHeight:"24px",letterSpacing:"0.4px"},smallSubtitle:{fontSize:12,lineHeight:"16px",letterSpacing:"0.1px"},link:{fontWeight:"600",fontSize:14,lineHeight:"20px",letterSpacing:"0.2px",color:s.lightBlue,textAlign:"right",cursor:"pointer",textDecoration:"underline","&:hover":{color:s.grayishBlue}},itemTitle:{fontWeight:600,fontSize:14,lineHeight:"20px",letterSpacing:.2},title:{fontWeight:"bold",fontSize:24,lineHeight:"30px",letterSpacing:.3}}},m=n(8),b=n(2);var d=n(11),E={buttons:"/page/buttons",charts:"/page/charts",colors:"/page/colors",errormessages:"/page/error-messages",forminput:"/page/form-input",icons:"/page/icons",loaders:"/page/loader-and-loadings",logos:"/page/logos",links:"/page/notifications-and-tooltip",panels:"/page/panels",richtext:"/page/rich-text-editor",table:"/page/tables",tabs:"/page/tabs",timeline:"/page/timeline",treeview:"/page/treeview",typography:"/page/typography"};function p(e,t){var n=e;return Object.entries(t).forEach((function(e){var t=Object(m.a)(e,2),a=t[0],r=t[1];n=n.replace(":".concat(a),r)})),n}var g=n(9),h=n(38),f=n.n(h),v=function(){return r.a.createElement("img",{src:f.a,alt:"logo",width:"120"})},y=Object(i.b)((function(e){return{container:{marginLeft:32,marginRight:32},title:Object(g.a)(Object(g.a)({},e.typography.cardTitle),{},{color:e.color.grayishBlue,opacity:.7,marginLeft:12})}}));var k=function(){var e=Object(i.c)(),t=y({theme:e});return r.a.createElement(d.Row,{className:t.container,horizontal:"center",vertical:"center"},r.a.createElement(v,null),r.a.createElement("span",{className:t.title},"Styles"))},x=n(39);var w=function(e){var t=e.children,n=e.isMobile,l=function(e){var t=e.theme;return{bmBurgerButton:{position:"absolute",width:26,height:20,left:30,top:40,zIndex:19},bmBurgerBars:{background:t.color.veryDarkGrayishBlue},bmBurgerBarsHover:{background:t.color.darkRed},bmCrossButton:{display:"none"},bmCross:{background:t.color.grayishBlue3},bmMenuWrap:{position:"fixed",height:"100%",width:255,zIndex:30},bmMenu:{background:t.color.veryDarkGrayishBlue},bmItem:{outline:"none","&:focus":{outline:"none"}},bmMorphShape:{fill:t.color.veryDarkGrayishBlue},bmOverlay:{background:"rgba(0, 0, 0, 0.3)",zIndex:20}}}({theme:Object(i.c)()}),c=Object(a.useState)(!1),o=Object(m.a)(c,2),s=o[0],u=o[1];return r.a.createElement(x.slide,{isOpen:!n||s,noOverlay:!n,disableCloseOnEsc:!0,styles:l,onStateChange:function(e){return u(e.isOpen)}},t)},S=n(41),O=n(40),B="COLLAPSED",j="PRE_EXPANDED",C="EXPANDED",T="PRE_COLLAPSED";function D(e){var t,n=e.children,l=e.expanded,c=e.style,o=e.transitionDuration,i=e.transitionTimingFunction,s=e.onTransitionStart,u=e.onTransitionEnd,b=Object(S.a)(e,["children","expanded","style","transitionDuration","transitionTimingFunction","onTransitionStart","onTransitionEnd"]),d=Object(a.useRef)(null),E=Object(a.useState)(l?C:B),p=Object(m.a)(E,2),h=p[0],f=p[1],v=Object(O.a)(d,{onTransitionStart:s,onTransitionEnd:u}).scrollHeight;switch(h){case C:t={maxHeight:"100vh",transitionDuration:".001s"};break;case T:t={maxHeight:v,transitionDuration:".001s"};break;case j:t={maxHeight:v};break;case B:t={maxHeight:0};break;default:t={maxHeight:v,transitionDuration:".001s"}}return Object(a.useEffect)((function(){l?h===B?f(j):h===j&&setTimeout((function(){return f(C)}),800):l||(h===C?f(T):h===T&&setTimeout((function(){return f(B)}),100))}),[l,h]),r.a.createElement("div",Object.assign({},b,{style:Object(g.a)(Object(g.a)({overflow:"hidden",transitionProperty:"max-height",transitionTimingFunction:i,transitionDuration:o},t),c),ref:d}),n)}D.defaultProps={transitionDuration:".425s",transitionTimingFunction:"ease-in-out"};var A=D,L=Object(a.createContext)();function I(e){var t=e.children,n=e.defaultItem,l=Object(a.useState)(n),c=Object(m.a)(l,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){if(n!==o)return i(n)}),[o,n]),r.a.createElement(L.Provider,{value:{currentItem:o,setCurrentItem:i}},t)}var z=Object(i.b)({activeContainer:{backgroundColor:function(e){return e.theme.color.paleBlueTransparent}},container:{display:"flex",height:56,cursor:"pointer","&:hover":{backgroundColor:function(e){return e.theme.color.paleBlueTransparent}},paddingLeft:function(e){return 32*e.level},transition:"all 0.2s ease-in-out"},leftBar:{borderLeft:function(e){var t=e.theme;return e.level>1?"none":"3px solid ".concat(t.color.darkGrayishBlue)}},title:{fontSize:16,lineHeight:"20px",letterSpacing:"0.2px",color:function(e){var t=e.theme;return e.isActive?t.color.paleBlue:t.color.grayishBlue},marginLeft:24}});function N(e){var t=e.children,n=e.icon,l=e.id,c=e.items,o=void 0===c?[]:c,s=e.level,u=void 0===s?1:s,b=e.onClick,E=e.title,p=Object(i.c)(),h=t&&t.length>0,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isCollapsible,n=e.item,r=e.items,l=void 0===r?[]:r,c=Object(a.useContext)(L),o=c.currentItem,i=c.setCurrentItem,s=n===o||l.includes(o),u=Object(a.useState)(s),b=Object(m.a)(u,2),d=b[0],E=b[1];Object(a.useEffect)((function(){return!s&&d?E(!1):s&&!d?E(!0):void 0}),[o]);var p=function(){t||i(n),E((function(e){return!e}))};return{isExpanded:d,isActive:s,onItemClick:p}}({isCollapsible:h,item:l,items:o}),v=f.isExpanded,y=f.isActive,k=f.onItemClick,x=z({theme:p,level:u,isActive:y}),w=y?x.leftBar:"",S=[x.container,y&&x.activeContainer].join(" ");return r.a.createElement(d.Column,{key:l,className:w},r.a.createElement(d.Row,{vertical:"center",onClick:function(e){b&&b(e),k()},className:S},r.a.createElement("span",{className:x.title},n,E)),h&&r.a.createElement(A,{expanded:v},t.map((function(e){return e.type(Object(g.a)({},e.props))}))))}N.defaultProps={};var P=N;var H=function(){var e=Object(b.g)().push,t=window.innerWidth<=1080;function n(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(p(t,n))}return r.a.createElement(w,{isMobile:t},r.a.createElement("div",{style:{paddingTop:30,paddingBottom:30}},r.a.createElement(k,null)),r.a.createElement(P,{id:E.buttons,title:"Buttons",icon:"",onClick:function(){return n(E.buttons)}}),r.a.createElement(P,{id:E.charts,title:"Charts",icon:"",onClick:function(){return n(E.charts)}}),r.a.createElement(P,{id:E.colors,title:"Colors",icon:"",onClick:function(){return n(E.colors)}}),r.a.createElement(P,{id:E.errormessages,title:"Error Messages",icon:"",onClick:function(){return n(E.errormessages)}}),r.a.createElement(P,{id:E.forminput,title:"Form Input",icon:"",onClick:function(){return n(E.forminput)}}),r.a.createElement(P,{id:E.icons,title:"Icons",icon:"",onClick:function(){return n(E.icons)}}),r.a.createElement(P,{id:E.loaders,title:"Loaders and Lazy Loadings",icon:"",onClick:function(){return n(E.loaders)}}),r.a.createElement(P,{id:E.logos,title:"Logos",icon:"",onClick:function(){return n(E.logos)}}),r.a.createElement(P,{id:E.notifications,title:"Notifications and Tooltips",icon:"",onClick:function(){return n(E.notifications)}}),r.a.createElement(P,{id:E.panels,title:"Panels",icon:"",onClick:function(){return n(E.panels)}}),r.a.createElement(P,{id:E.richtext,title:"Rich Text Editor",icon:"",onClick:function(){return n(E.richtext)}}),r.a.createElement(P,{id:E.tables,title:"Tables",icon:"",onClick:function(){return n(E.tables)}}),r.a.createElement(P,{id:E.tabs,title:"Tabs",icon:"",onClick:function(){return n(E.tabs)}}),r.a.createElement(P,{id:E.timeline,title:"Timeline",icon:"",onClick:function(){return n(E.timeline)}}),r.a.createElement(P,{id:E.treeview,title:"Treeview",icon:"",onClick:function(){return n(E.treeview)}}),r.a.createElement(P,{id:E.typography,title:"Typography",icon:"",onClick:function(){return n(E.typography)}}))};var R=function(e){var t=e.children,n=Object(b.h)().pathname;return r.a.createElement(I,{defaultItem:n},t)},F=Object(i.b)((function(e){return{avatar:{height:35,width:35,minWidth:35,borderRadius:50,marginLeft:14,border:"1px solid ".concat(e.color.lightGrayishBlue2),"@media (max-width: 768px)":{marginLeft:14}},container:{height:40},name:Object(g.a)(Object(g.a)({},e.typography.itemTitle),{},{textAlign:"right","@media (max-width: 768px)":{display:"none"}}),separator:{borderLeft:"1px solid ".concat(e.color.lightGrayishBlue2),marginLeft:32,marginRight:32,height:32,width:2,"@media (max-width: 768px)":{marginLeft:14,marginRight:0}},title:Object(g.a)(Object(g.a)({},e.typography.title),{},{"@media (max-width: 1080px)":{marginLeft:50},"@media (max-width: 468px)":{fontSize:20}}),iconStyles:{cursor:"pointer",marginLeft:25,"@media (max-width: 768px)":{marginLeft:12}}}}));var W=function(){var e,t=Object(a.useContext)(L).currentItem,n=Object(i.c)(),l=F({theme:n});switch(!0){case t===E.dashboard:e="Dashboard";break;case t===E.buttons:e="Buttons";break;case t===E.charts:e="Charts";break;case t===E.colors:e="Colors";break;case t===E.errormessages:e="Error Messages";break;case t===E.forminput:e="Form Input";break;case t===E.icons:e="Icons";break;case t===E.loaders:e="Loaders";break;case t===E.logos:e="Logos";break;case t===E.notifications:e="Notifications And Tooltip";break;case t===E.panels:e="Panels";break;case t===E.richtext:e="Rich Text Editors";break;case t===E.table:e="Tables";break;case t===E.tabs:e="Tabs";break;case t===E.timeline:e="Timeline";break;case t===E.treeview:e="Treeview";break;case t===E.typography:e="Typography";break;default:e=""}return r.a.createElement(d.Row,{className:l.container,vertical:"center",horizontal:"space-between"},r.a.createElement("span",{className:l.title},e))},G=Object(i.b)({"@keyframes loadingSpin":{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},container:{backgroundColor:function(e){var t=e.theme,n=e.noTransparency,a=e.backgroundColor;return a?n?a:"".concat(a,"A0"):n?t.color.veryDarkGrayishBlue:"".concat(t.color.veryDarkGrayishBlue,"A0")},height:"100%",minHeight:function(e){return e.fullScreen?"100vh":"100%"},width:function(e){return e.fullScreen?"100vw":"100%"},position:function(e){return e.fullScreen?"fixed":"relative"},top:0,left:0,zIndex:function(e){return e.zIndex}},loading:{border:function(e){var t=e.theme;return"16px solid ".concat(t.color.lightGrayishBlue)},borderRadius:"50%",borderTop:function(e){var t=e.theme;return"16px solid ".concat(t.color.brightBlue)},width:120,height:120,animationName:"$loadingSpin",animationTimingFunction:"linear",animationDuration:"2s",animationIterationCount:"infinite"},loadingSpan:{color:"white",marginTop:10,fontSize:18}});function M(e){var t=e.backgroundColor,n=e.children,a=e.fullScreen,l=e.height,c=e.hideText,o=e.loading,s=e.noTransparency,u=e.width,m=e.zIndex,b=Object(i.c)(),E=G({theme:b,fullScreen:a,noTransparency:s,backgroundColor:t,zIndex:m});return r.a.createElement("div",{style:{position:"relative",height:l,width:u}},o&&r.a.createElement(d.Column,{className:E.container,horizontal:"center",vertical:"center"},r.a.createElement("div",{className:E.loading}),!c&&r.a.createElement("span",{className:E.loadingSpan},"Loading...")),n||r.a.createElement("div",null))}M.defaultProps={fullScreen:!0,zIndex:10};var X=M,J=function(){return r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"box box-primary"},r.a.createElement("div",{class:"box-header"},r.a.createElement("h3",{class:"box-title"}," ",r.a.createElement("i",{class:"fa fa-edit"})," Buttons ")),r.a.createElement("div",{class:"box-body  table-responsive"},r.a.createElement("table",{class:"table table-bordered text-center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Normal"),r.a.createElement("th",null,"Large ",r.a.createElement("code",null,".btn-lg")),r.a.createElement("th",null,"Small ",r.a.createElement("code",null,".btn-sm")),r.a.createElement("th",null,"X-Small ",r.a.createElement("code",null,".btn-xs")),r.a.createElement("th",null,"Disabled ",r.a.createElement("code",null,".disabled"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-default"},"Default")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-default btn-lg"},"Default")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-default btn-sm"},"Default")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-default btn-xs"},"Default")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-default disabled"},"Default"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-primary"},"Primary")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-primary btn-lg"},"Primary")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-primary btn-sm"},"Primary")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-primary btn-xs"},"Primary")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-primary disabled"},"Primary"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-success"},"Success")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-success btn-lg"},"Success")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-success btn-sm"},"Success")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-success btn-xs"},"Success")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-success disabled"},"Success"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-info"},"Info")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-info btn-lg"},"Info")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-info btn-sm"},"Info")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-info btn-xs"},"Info")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-info disabled"},"Info"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-danger"},"Danger")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-danger btn-lg"},"Danger")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-danger btn-sm"},"Danger")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-danger btn-xs"},"Danger")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-danger disabled"},"Danger"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-warning"},"Warning")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-warning btn-lg"},"Warning")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-warning btn-sm"},"Warning")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-warning btn-xs"},"Warning")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-block btn-warning disabled"},"Warning")))))))),r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"box"},r.a.createElement("div",{class:"box-header border-primary"},r.a.createElement("h3",{class:"box-title"},"Split Buttons")),r.a.createElement("div",{class:"box-body"},r.a.createElement("p",null,"Normal split buttons:"),r.a.createElement("div",{class:"margin"},r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-default"},"Action"),r.a.createElement("button",{type:"button",class:"btn btn-default dropdown-toggle","data-toggle":"dropdown"},r.a.createElement("span",{class:"caret"}),r.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),r.a.createElement("ul",{class:"dropdown-menu",role:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Another action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Something else here")),r.a.createElement("li",{class:"divider"}),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Separated link")))),r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-info"},"Action"),r.a.createElement("button",{type:"button",class:"btn btn-info dropdown-toggle","data-toggle":"dropdown"},r.a.createElement("span",{class:"caret"}),r.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),r.a.createElement("ul",{class:"dropdown-menu",role:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Another action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Something else here")),r.a.createElement("li",{class:"divider"}),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Separated link")))),r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-danger"},"Action"),r.a.createElement("button",{type:"button",class:"btn btn-danger dropdown-toggle","data-toggle":"dropdown"},r.a.createElement("span",{class:"caret"}),r.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),r.a.createElement("ul",{class:"dropdown-menu",role:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Another action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Something else here")),r.a.createElement("li",{class:"divider"}),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Separated link")))),r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-success"},"Action"),r.a.createElement("button",{type:"button",class:"btn btn-success dropdown-toggle","data-toggle":"dropdown"},r.a.createElement("span",{class:"caret"}),r.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),r.a.createElement("ul",{class:"dropdown-menu",role:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Another action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Something else here")),r.a.createElement("li",{class:"divider"}),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Separated link")))),r.a.createElement("div",{class:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-warning"},"Action"),r.a.createElement("button",{type:"button",class:"btn btn-warning dropdown-toggle","data-toggle":"dropdown"},r.a.createElement("span",{class:"caret"}),r.a.createElement("span",{class:"sr-only"},"Toggle Dropdown")),r.a.createElement("ul",{class:"dropdown-menu",role:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Another action")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Something else here")),r.a.createElement("li",{class:"divider"}),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Separated link"))))))))))};Object(a.lazy)((function(){return n.e(3).then(n.bind(null,89))}));var $=function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(X,{loading:!0})},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:E.buttons,component:J}),r.a.createElement(b.b,{exact:!0,path:E.charts,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.colors,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.errormessages,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.forminput,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.icons,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.loaders,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.logos,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.notifications,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.panels,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.richtext,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.table,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.tabs,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.timeline,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.treeview,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.b,{exact:!0,path:E.typography,render:function(){return r.a.createElement("div",null)}}),r.a.createElement(b.a,{to:E.buttons})))},_=Object(i.b)({container:{height:"100%",minHeight:850},mainBlock:{marginLeft:255,padding:15,"@media (max-width: 1080px)":{marginLeft:0}},contentBlock:{marginTop:15}});var q=function(){var e=Object(i.c)(),t=_({theme:e});return r.a.createElement(R,null,r.a.createElement(d.Row,{className:t.container},r.a.createElement(H,null),r.a.createElement(d.Column,{flexGrow:1,className:t.mainBlock},r.a.createElement(W,null),r.a.createElement("div",{className:t.contentBlock},r.a.createElement($,null)))))};var K=function(){var e=Object(b.h)().pathname,t=function(){var e=Object(a.useState)([0,0]),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useLayoutEffect)((function(){function e(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),n=Object(m.a)(t,2);return n[0],n[1],Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),r.a.createElement(q,null)};n(84),n(85),n(86),n(87),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{theme:u},r.a.createElement(o.a,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e4663911.chunk.js.map