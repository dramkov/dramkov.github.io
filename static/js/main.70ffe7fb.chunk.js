(this["webpackJsonpmarketprofit-front"]=this["webpackJsonpmarketprofit-front"]||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),r=a(29),l=a.n(r),i=a(11),j=a(10),d=a(13),b=a(12),o=a(5),h=a(31),m=a(32),O=a(33),u=a(35),x=a(34),p=a(131),g=a(133),f=a(134),N=a(132),v=function(e){Object(u.a)(a,e);var t=Object(x.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).toggle=c.toggle.bind(Object(O.a)(c)),c.state={dropdownOpen:!1},c}return Object(m.a)(a,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"render",value:function(){return Object(c.jsxs)(p.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,className:"dropdown",tag:"li",children:[Object(c.jsx)(g.a,{className:"f-s-14",tag:"a",children:Object(c.jsx)("i",{className:"fa fa-bell"})}),Object(c.jsx)(f.a,{className:"media-list dropdown-menu-right",tag:"ul",children:Object(c.jsx)(N.a,{className:"dropdown-header",tag:"li",header:!0,children:"NOTIFICATIONS (0)"})})]})}}]),a}(n.a.Component),w=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(p.a,{isOpen:a,toggle:function(){n(!a)},className:"dropdown navbar-user",tag:"li",children:[Object(c.jsxs)(g.a,{tag:"a",children:[Object(c.jsx)("img",{src:"../assets/img/user/user-12.jpg",alt:""}),Object(c.jsx)("span",{className:"d-none d-md-inline",children:"Adam Schwartz"}),Object(c.jsx)("b",{className:"caret"})]}),Object(c.jsxs)(f.a,{className:"dropdown-menu dropdown-menu-right",tag:"ul",children:[Object(c.jsx)(N.a,{children:"Edit Profile"}),Object(c.jsx)(N.a,{children:"Setting"}),Object(c.jsx)("div",{className:"dropdown-divider"}),Object(c.jsx)(N.a,{children:"Log Out"})]})]})},y=function(e){Object(u.a)(a,e);var t=Object(x.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(c.jsx)("li",{className:"navbar-form",children:Object(c.jsx)("form",{action:"",method:"POST",name:"search_form",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter keyword"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-search",children:Object(c.jsx)("i",{className:"fa fa-search"})})]})})})}}]),a}(n.a.Component),k=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(b.c)((function(e){return!!e.auth.token}));return Object(c.jsxs)("div",{id:"header",className:"header navbar-default",children:[Object(c.jsxs)("div",{className:"navbar-header",children:[Object(c.jsxs)("div",{className:"navbar-brand",children:[Object(c.jsx)("span",{className:"navbar-logo"})," ",Object(c.jsx)("b",{children:"Market"})," Profit"]}),Object(c.jsx)("button",{type:"button",className:"navbar-toggle pt-0 pb-0 mr-0",onClick:function(){n(!a)},children:Object(c.jsxs)("span",{className:"fa-stack fa-lg text-inverse",children:[Object(c.jsx)("i",{className:"far fa-square fa-stack-2x"}),Object(c.jsx)("i",{className:"fa fa-cog fa-stack-1x"})]})}),Object(c.jsxs)("button",{type:"button",className:"navbar-toggle",children:[Object(c.jsx)("span",{className:"icon-bar"}),Object(c.jsx)("span",{className:"icon-bar"}),Object(c.jsx)("span",{className:"icon-bar"})]})]}),Object(c.jsxs)("ul",{className:"navbar-nav navbar-right",children:[Object(c.jsx)(y,{}),Object(c.jsx)(v,{}),r?Object(c.jsx)(w,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)(o.a,{to:"/login",children:Object(c.jsx)("button",{className:"btn btn-success btn-lg m-1",children:"Login"})}),Object(c.jsx)(o.a,{to:"/register",children:Object(c.jsx)("button",{className:"btn btn-success btn-lg m-1",children:"Register"})})]})]})]})},S=a(66),E=a.n(S),P=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{className:"nav",children:[Object(c.jsx)("li",{className:"nav-profile "+(a?"expand ":""),children:Object(c.jsxs)("div",{onClick:function(e){e.preventDefault(),n(!a)},children:[Object(c.jsx)("div",{className:"cover with-shadow"}),Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:"/assets/img/user/user-13.jpg",alt:""})}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("b",{className:"caret pull-right"}),"Sean Ngu",Object(c.jsx)("small",{children:"Front end developer"})]})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("ul",{className:"nav nav-profile "+(a?"d-block ":""),children:[Object(c.jsx)("li",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"fa fa-cog"})," Settings"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"fa fa-pencil-alt"})," Send Feedback"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("i",{className:"fa fa-question-circle"})," Helps"]})})]})})]})})},A=function e(t){var a=Object(s.useState)(-1),n=Object(i.a)(a,2),r=n[0],l=n[1],d=Object(s.useState)(-1),b=Object(i.a)(d,2),h=b[0],m=b[1],O=t.data.icon&&Object(c.jsx)("i",{className:t.data.icon}),u=t.data.img&&Object(c.jsx)("div",{className:"icon-img",children:Object(c.jsx)("img",{src:t.data.img,alt:""})}),x=t.data.children&&!t.data.badge&&Object(c.jsx)("b",{className:"caret"}),p=t.data.label&&Object(c.jsx)("span",{className:"label label-theme m-l-5",children:t.data.label}),g=t.data.badge&&Object(c.jsx)("span",{className:"badge pull-right",children:t.data.badge}),f=t.data.title&&Object(c.jsxs)("span",{children:[t.data.title," ",p]}),N=t.data.highlight&&Object(c.jsx)("i",{className:"fa fa-paper-plane text-theme"});return Object(c.jsx)(j.a,{path:t.data.path,exact:t.data.exact,children:function(a){var s=a.match;return Object(c.jsxs)("li",{className:(s?"active ":"")+(r||-1===h&&s||t.data.search?"expand ":"closed ")+(t.data.children?"has-sub ":""),children:[t.data.children?Object(c.jsxs)(o.a,{to:t.data.path,onClick:t.expand,children:[x," ",g," ",u," ",O," ",f," ",N]}):Object(c.jsxs)(o.a,{to:t.data.path,children:[x," ",u," ",O," ",g," ",f," ",N]}),t.data.children&&Object(c.jsx)("ul",{className:"sub-menu "+(r||-1===h&&s||t.data.search),children:t.data.children&&t.data.children.map((function(t,a){return Object(c.jsx)(e,{data:t,expand:function(e){return function(e,t,a){e.preventDefault(),l(r===t?-1:t),m(1)}(e,a)},active:a===r,clicked:h},a)}))})]})}})},F=[{path:"/",icon:"ion-md-stats",title:"Wildberries",children:[{path:"/wildberries/brands",title:"\u0411\u0440\u0435\u043d\u0434\u044b"},{path:"/wildberries/brands",title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"},{path:"/wildberries/brands",title:"\u0422\u043e\u0432\u0430\u0440\u044b"},{path:"/wildberries/brands",title:"\u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0442\u043e\u0432\u0430\u0440\u0430\u0445"}]}],C=function(){var e=Object(s.useState)(-1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(-1),l=Object(i.a)(r,2),d=l[0],b=l[1],o=Object(s.useState)(F),h=Object(i.a)(o,2),m=h[0];h[1];return Object(c.jsxs)("ul",{className:"nav",children:[Object(c.jsx)("li",{className:"nav-header",children:"Navigation"}),m.map((function(e,t){return Object(c.jsx)(j.a,{path:e.path,exact:e.exact,children:function(s){var r=s.match;return Object(c.jsx)(A,{data:e,expand:function(e){return function(e,t,c){e.preventDefault(),-1===d&&c?(n(-1),b(1)):(n(a===t?-1:t),b(1))}(e,t,r)},active:t===a,clicked:d},t)}},t)}))]})},T=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:"sidebar",className:"sidebar ",children:Object(c.jsxs)(E.a,{className:"height-full",options:{suppressScrollX:!0},children:[Object(c.jsx)(P,{}),Object(c.jsx)(C,{})]})}),Object(c.jsx)("div",{className:"sidebar-bg"}),Object(c.jsx)("div",{className:"sidebar-mobile-dismiss"})]})},D=function(){var e=new Date;return Object(c.jsxs)("div",{id:"footer",className:"footer",children:["\xa9 ",e.getFullYear()," MarketProfit All Rights Reserved"]})},I=function(){return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("ol",{className:"breadcrumb float-xl-right",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)(o.a,{to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"breadcrumb-item active",children:"Dashboard"})]}),Object(c.jsxs)("h1",{className:"page-header",children:["Dashboard v2 ",Object(c.jsx)("small",{children:"header small text goes here..."})]})]})},L="SETPAGESIDEBAR",R="SETPAGEHEADER",q="SETPAGECONTENTFULLWIDTH",H="SETPAGEFOOTER",M=function(e){return{type:L,payload:e}},_=function(e){return{type:R,payload:e}},U=function(e){return{type:q,payload:e}},W=function(e){return{type:H,payload:e}},B=function(){var e=Object(b.b)();return Object(s.useEffect)((function(){return e(M(!1)),e(_(!1)),e(W(!1)),e(U(!0)),function(){e(M(!0)),e(_(!0)),e(W(!0)),e(U(!1))}}),[]),Object(c.jsxs)("div",{className:"error",children:[Object(c.jsx)("div",{className:"error-code m-b-10",children:"404"}),Object(c.jsxs)("div",{className:"error-content",children:[Object(c.jsx)("div",{className:"error-message",children:"We couldn't find it..."}),Object(c.jsxs)("div",{className:"error-desc m-b-30",children:["The page you're looking for doesn't exist. ",Object(c.jsx)("br",{}),"Perhaps, there pages will help find what you're looking for."]}),Object(c.jsx)("div",{children:Object(c.jsx)(o.a,{to:"/",className:"btn btn-success p-l-20 p-r-20",children:"Go Home"})})]})]})},G=a(45),Y=a.n(G),J=a(67),z=a(68),V=a.n(z).a.create({baseURL:"https://api.marketprofit.ru"}),X="SIGNIN",K=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),j=l[0],d=l[1],h=Object(b.b)();Object(s.useEffect)((function(){return h(M(!1)),h(_(!1)),h(W(!1)),h(U(!0)),function(){h(M(!0)),h(_(!0)),h(W(!0)),h(U(!1))}}),[]);var m=function(e){e.preventDefault(),h(function(e,t){return function(){var a=Object(J.a)(Y.a.mark((function a(c){var s,n,r,l;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,V.post("/login",{email:e,password:t});case 2:if((s=a.sent).ok){a.next=11;break}return a.next=6,s.json();case 6:throw n=a.sent,r=n.error.message,l="Something went wrong!","EMAIL_NOT_FOUND"===r?l="This email could not be found!":"INVALID_PASSWORD"===r&&(l="This password is not valid!"),new Error(l);case 11:console.log(s),c({type:X,payload:s.data});case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a,j))};return Object(c.jsx)("div",{className:"login login-v1",children:Object(c.jsxs)("div",{className:"login-container",children:[Object(c.jsxs)("div",{className:"login-header",children:[Object(c.jsxs)("div",{className:"brand",children:[Object(c.jsx)(o.a,{to:"/",children:Object(c.jsx)("span",{className:"logo"})}),Object(c.jsx)("b",{children:"Market"})," Profit",Object(c.jsx)("small",{children:Object(c.jsx)(o.a,{to:"/register",children:Object(c.jsx)("button",{className:"btn btn-success",children:Object(c.jsx)("i",{className:"icon-user-follow ",children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})})]}),Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{className:"fa fa-lock"})})]}),Object(c.jsx)("div",{className:"login-body",children:Object(c.jsx)("div",{className:"login-content",children:Object(c.jsxs)("form",{className:"margin-bottom-0",onSubmit:m,children:[Object(c.jsx)("div",{className:"form-group m-b-20",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg inverse-mode",placeholder:"Email Address",value:a,onChange:function(e){n(e.target.value)},required:!0})}),Object(c.jsx)("div",{className:"form-group m-b-20",children:Object(c.jsx)("input",{type:"password",className:"form-control form-control-lg inverse-mode",placeholder:"Password",value:j,onChange:function(e){d(e.target.value)},required:!0})}),Object(c.jsxs)("div",{className:"checkbox checkbox-css m-b-20",children:[Object(c.jsx)("input",{type:"checkbox",id:"remember_checkbox"}),Object(c.jsx)("label",{htmlFor:"remember_checkbox",children:"Remember Me"})]}),Object(c.jsx)("div",{className:"login-buttons",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-success btn-block btn-lg",onSubmit:m,children:"Sign me in"})})]})})})]})})},Q=function(){var e=Object(b.b)(),t=new Date;return Object(s.useEffect)((function(){return e(M(!1)),e(_(!1)),e(W(!1)),e(U(!0)),function(){e(M(!0)),e(_(!0)),e(W(!0)),e(U(!1))}}),[]),Object(c.jsxs)("div",{className:"register register-with-news-feed",children:[Object(c.jsxs)("div",{className:"news-feed",children:[Object(c.jsx)("div",{className:"news-image",style:{backgroundImage:"url(/assets/img/login-bg/login-bg-9.jpg)"}}),Object(c.jsxs)("div",{className:"news-caption",children:[Object(c.jsxs)("h4",{className:"caption-title",children:[Object(c.jsx)("b",{children:"Market"})," Profit App"]}),Object(c.jsx)("p",{})]})]}),Object(c.jsxs)("div",{className:"right-content",children:[Object(c.jsxs)("h1",{className:"register-header",children:["Sign Up",Object(c.jsx)(o.a,{to:"/",children:Object(c.jsx)("span",{className:"float-right",children:Object(c.jsx)("button",{className:"btn btn-primary",children:Object(c.jsx)("i",{className:"fas fa-home fa-fw"})})})}),Object(c.jsx)("small",{children:"Create your MarketProfit Account. It\u2019s free and always will be."})]}),Object(c.jsx)("div",{className:"register-content",children:Object(c.jsxs)("form",{className:"margin-bottom-0",children:[Object(c.jsxs)("label",{className:"control-label",children:["Name ",Object(c.jsx)("span",{className:"text-danger",children:"*"})]}),Object(c.jsxs)("div",{className:"row row-space-10",children:[Object(c.jsx)("div",{className:"col-md-6 m-b-15",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",required:!0})}),Object(c.jsx)("div",{className:"col-md-6 m-b-15",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",required:!0})})]}),Object(c.jsxs)("label",{className:"control-label",children:["Email ",Object(c.jsx)("span",{className:"text-danger",children:"*"})]}),Object(c.jsx)("div",{className:"row m-b-15",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Email address",required:!0})})}),Object(c.jsxs)("label",{className:"control-label",children:["Re-enter Email ",Object(c.jsx)("span",{className:"text-danger",children:"*"})]}),Object(c.jsx)("div",{className:"row m-b-15",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Re-enter email address",required:!0})})}),Object(c.jsxs)("label",{className:"control-label",children:["Password ",Object(c.jsx)("span",{className:"text-danger",children:"*"})]}),Object(c.jsx)("div",{className:"row m-b-15",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0})})}),Object(c.jsx)("div",{className:"checkbox checkbox-css m-b-30",children:Object(c.jsxs)("div",{className:"checkbox checkbox-css m-b-30",children:[Object(c.jsx)("input",{type:"checkbox",id:"agreement_checkbox",value:""}),Object(c.jsxs)("label",{htmlFor:"agreement_checkbox",children:["By clicking Sign Up, you agree to our",Object(c.jsx)(o.a,{to:"/user/register-v3",children:"Terms"})," and that you have read our ",Object(c.jsx)(o.a,{to:"/user/register-v3",children:"Data Policy"}),", including our ",Object(c.jsx)(o.a,{to:"/user/register-v3",children:"Cookie Use"}),"."]})]})}),Object(c.jsx)("div",{className:"register-buttons",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",children:"Sign Up"})}),Object(c.jsxs)("div",{className:"m-t-20 m-b-40 p-b-40 text-inverse",children:["Already a member? Click ",Object(c.jsx)(o.a,{to:"/login",children:"here"})," to login."]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("p",{className:"text-center",children:["\xa9 MarketProfit All Right Reserved ",t.getFullYear()]})]})})]})]})},Z=function(){return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("ol",{className:"breadcrumb float-xl-right",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)(o.a,{to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"breadcrumb-item active",children:" Brands Page"})]}),Object(c.jsxs)("h1",{className:"page-header",children:["Brands Page ",Object(c.jsx)("small",{children:"header small text goes here..."})]})]})},$=Object(d.a)(),ee=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(b.c)((function(e){return!!e.dspl.pageSidebar})),l=Object(b.c)((function(e){return!!e.dspl.pageHeader})),d=Object(b.c)((function(e){return!!e.dspl.pageContentFullWidth})),o=Object(b.c)((function(e){return!!e.dspl.pageFooter}));Object(s.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[]);var h=function(){window.scrollY>0?n(!0):n(!1);for(var e=document.getElementsByClassName("nvtooltip"),t=0;t<e.length;t++)e[t].classList.add("d-none")};return Object(c.jsx)("div",{className:"fade page-sidebar-fixed show page-container \n                    ".concat(l?"page-header-fixed ":"","\n\t\t\t\t\t").concat(r?"":"page-without-sidebar ","\n\t\t\t\t\t").concat(d?"page-content-full-height ":"","\n\t\t\t\t\t").concat(a?"has-scroll ":"","\n\t\t\t\t"),children:Object(c.jsx)(j.b,{history:$,children:Object(c.jsxs)("div",{children:[l&&Object(c.jsx)(k,{}),r&&Object(c.jsx)(T,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,component:I}),Object(c.jsx)(j.a,{path:"/login",exact:!0,component:K}),Object(c.jsx)(j.a,{path:"/register",exact:!0,component:Q}),Object(c.jsx)(j.a,{path:"/wildberries/brands",exact:!0,component:Z}),Object(c.jsx)(j.a,{exact:!0,component:B})]}),o&&Object(c.jsx)(D,{})]})})})},te=a(23),ae=a(69),ce=a(17),se={token:null,isLogin:!1,id:null},ne={pageSidebar:!0,pageHeader:!0,pageContentFullWidth:!1,pageFooter:!0},re=(a(117),a(118),a(119),a(120),a(121),a(122),a(123),a(124),a(125),a(126),a(127),a(128),a(129),Object(te.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(ce.a)(Object(ce.a)({},e),{},{isLogin:t.success,id:t.id});default:return e}},dspl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(ce.a)(Object(ce.a)({},e),{},{pageSidebar:t.payload});case R:return Object(ce.a)(Object(ce.a)({},e),{},{pageHeader:t.payload});case q:return Object(ce.a)(Object(ce.a)({},e),{},{pageContentFullWidth:t.payload});case H:return Object(ce.a)(Object(ce.a)({},e),{},{pageFooter:t.payload});default:return e}}})),le=Object(te.d)(re,Object(te.a)(ae.a));l.a.render(Object(c.jsx)(b.a,{store:le,children:Object(c.jsx)(ee,{})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.70ffe7fb.chunk.js.map