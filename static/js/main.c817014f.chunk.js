(this["webpackJsonpmarketprofit-front"]=this["webpackJsonpmarketprofit-front"]||[]).push([[0],{227:function(e,t,c){},228:function(e,t,c){},231:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),r=c.n(s),n=c(37),l=c.n(n),i=c(7),j=c(14),o=c(8),d=c(91),b=c(5),m=c(39),h=c(40),u=c(41),O=c(43),x=c(42),p=c(232),f=c(234),g=c(235),v=c(233),N=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var a;return Object(m.a)(this,c),(a=t.call(this,e)).toggle=a.toggle.bind(Object(u.a)(a)),a.state={dropdownOpen:!1},a}return Object(h.a)(c,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"render",value:function(){return Object(a.jsxs)(p.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,className:"dropdown",tag:"li",children:[Object(a.jsx)(f.a,{className:"f-s-14",tag:"a",children:Object(a.jsx)("i",{className:"fa fa-bell"})}),Object(a.jsx)(g.a,{className:"media-list dropdown-menu-right",tag:"ul",children:Object(a.jsx)(v.a,{className:"dropdown-header",tag:"li",header:!0,children:"NOTIFICATIONS (0)"})})]})}}]),c}(r.a.Component),w=c(16),y=c.n(w),k=c(21),S=c(89),A=c.n(S).a.create({baseURL:"https://api.marketprofit.ru",withCredentials:!0,headers:{}}),C="SIGNUP",E="LOGIN",P="LOGOUT",M="FETCH_USER",_=function(e,t){return function(){var c=Object(k.a)(y.a.mark((function c(a){var s,r;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return(s=new FormData).append("email",e),s.append("password",t),c.next=5,A.post("/login",s);case 5:(r=c.sent).data.success&&(console.log(r.data),a({type:E,payload:r.data}));case 7:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},T=function(){return function(){var e=Object(k.a)(y.a.mark((function e(t){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.post("/logout");case 2:c=e.sent,console.log(c.data),t({type:P});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(e,t,c,a,s){return function(){var r=Object(k.a)(y.a.mark((function r(n){var l,i;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(l=new FormData).append("email",e),l.append("phone",t),l.append("title",c),l.append("password",a),l.append("password2",s),r.next=8,A.put("/me",l);case 8:(i=r.sent).data.success&&(console.log(i.data),n({type:C,payload:i.data}));case 10:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},F=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(o.b)();return Object(a.jsxs)(p.a,{isOpen:c,toggle:function(){r(!c)},className:"dropdown navbar-user",tag:"li",children:[Object(a.jsxs)(f.a,{tag:"a",children:[Object(a.jsx)("img",{src:"../assets/img/user/user-12.jpg",alt:""}),Object(a.jsx)("span",{className:"d-none d-md-inline",children:"Adam Schwartz"}),Object(a.jsx)("b",{className:"caret"})]}),Object(a.jsxs)(g.a,{className:"dropdown-menu dropdown-menu-right",tag:"ul",children:[Object(a.jsx)(v.a,{children:"Edit Profile"}),Object(a.jsx)(v.a,{children:"Setting"}),Object(a.jsx)("div",{className:"dropdown-divider"}),Object(a.jsx)(v.a,{children:Object(a.jsx)("div",{onClick:function(){n(T())},children:"Log Out"})})]})]})},H=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(){return Object(m.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(a.jsx)("li",{className:"navbar-form",children:Object(a.jsx)("form",{action:"",method:"POST",name:"search_form",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter keyword"}),Object(a.jsx)("button",{type:"submit",className:"btn btn-search",children:Object(a.jsx)("i",{className:"fa fa-search"})})]})})})}}]),c}(r.a.Component),L=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(o.c)((function(e){return!!e.auth.isLogin}));return Object(a.jsxs)("div",{id:"header",className:"header navbar-default",children:[Object(a.jsxs)("div",{className:"navbar-header",children:[Object(a.jsx)(b.a,{to:"/",style:{textDecoration:"none"},children:Object(a.jsxs)("div",{className:"navbar-brand",children:[Object(a.jsx)("span",{className:"navbar-logo"})," ",Object(a.jsx)("b",{children:"Market"})," Profit"]})}),Object(a.jsx)("button",{type:"button",className:"navbar-toggle pt-0 pb-0 mr-0",onClick:function(){r(!c)},children:Object(a.jsxs)("span",{className:"fa-stack fa-lg text-inverse",children:[Object(a.jsx)("i",{className:"far fa-square fa-stack-2x"}),Object(a.jsx)("i",{className:"fa fa-cog fa-stack-1x"})]})}),Object(a.jsxs)("button",{type:"button",className:"navbar-toggle",children:[Object(a.jsx)("span",{className:"icon-bar"}),Object(a.jsx)("span",{className:"icon-bar"}),Object(a.jsx)("span",{className:"icon-bar"})]})]}),Object(a.jsxs)("ul",{className:"navbar-nav navbar-right",children:[Object(a.jsx)(H,{}),Object(a.jsx)(N,{}),n?Object(a.jsx)(F,{}):Object(a.jsxs)("div",{className:"buttons__group",children:[Object(a.jsx)(b.a,{to:"/login",children:Object(a.jsx)("button",{className:"btn btn-success   buttons__group-btn",children:"Login"})}),Object(a.jsx)(b.a,{to:"/register",children:Object(a.jsx)("button",{className:"btn btn-success   buttons__group-btn",children:"Register"})})]})]})]})},R=c(90),U=c.n(R),D=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(o.b)();return Object(a.jsxs)("ul",{className:"nav",children:[Object(a.jsx)("li",{className:"nav-profile "+(c?"expand ":""),children:Object(a.jsxs)(b.a,{to:"/",onClick:function(e){e.preventDefault(),r(!c)},children:[Object(a.jsx)("div",{className:"cover with-shadow"}),Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:"/assets/img/user/user-12.jpg",alt:""})}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("b",{className:"caret pull-right"}),"User"]})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("ul",{className:"nav nav-profile "+(c?"d-block ":""),children:[Object(a.jsx)("li",{children:Object(a.jsxs)(b.a,{to:"/",children:[Object(a.jsx)("i",{className:"fa fa-cog"})," Settings"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(b.a,{to:"/",onClick:function(){n(T())},children:[Object(a.jsx)("i",{className:"icon-logout"})," Logout"]})})]})})]})},G=function e(t){var c=Object(s.useState)(-1),r=Object(i.a)(c,2),n=r[0],l=r[1],o=Object(s.useState)(-1),d=Object(i.a)(o,2),m=d[0],h=d[1],u=t.data.icon&&Object(a.jsx)("i",{className:t.data.icon}),O=t.data.img&&Object(a.jsx)("div",{className:"icon-img",children:Object(a.jsx)("img",{src:t.data.img,alt:""})}),x=t.data.children&&!t.data.badge&&Object(a.jsx)("b",{className:"caret"}),p=t.data.label&&Object(a.jsx)("span",{className:"label label-theme m-l-5",children:t.data.label}),f=t.data.badge&&Object(a.jsx)("span",{className:"badge pull-right",children:t.data.badge}),g=t.data.title&&Object(a.jsxs)("span",{children:[t.data.title," ",p]}),v=t.data.highlight&&Object(a.jsx)("i",{className:"fa fa-paper-plane text-theme"});return Object(a.jsx)(j.a,{path:t.data.path,exact:t.data.exact,children:function(c){var s=c.match;return Object(a.jsxs)("li",{className:(s?"active ":"")+(t.active||-1===t.clicked&&s||t.data.search?"expand ":"closed ")+(t.data.children?"has-sub ":""),children:[t.data.children?Object(a.jsxs)(b.a,{to:t.data.path,onClick:t.expand,children:[x," ",f," ",O," ",u," ",g," ",v]}):Object(a.jsxs)(b.a,{to:t.data.path,children:[x," ",O," ",u," ",f," ",g," ",v]}),t.data.children&&Object(a.jsx)("ul",{className:"sub-menu "+(t.active||-1===t.clicked&&s||t.data.search?"d-block ":"d-none"),children:t.data.children&&t.data.children.map((function(t,c){return Object(a.jsx)(e,{data:t,expand:function(e){return function(e,t,c){e.preventDefault(),l(n===t?-1:t),h(1)}(e,c)},active:c===n,clicked:m},c)}))})]})}})},W=[{path:"/wildberries",icon:"ion-md-stats",title:"Wildberries",children:[{path:"/wildberries/brands",title:"\u0411\u0440\u0435\u043d\u0434\u044b"},{path:"/wildberries/categories",title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"},{path:"/wildberries/products",title:"\u0422\u043e\u0432\u0430\u0440\u044b"},{path:"/wildberries/history",title:"\u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0442\u043e\u0432\u0430\u0440\u0430\u0445"}]}],I=function(){var e=Object(s.useState)(-1),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(-1),l=Object(i.a)(n,2),o=l[0],d=l[1],b=Object(s.useState)(W),m=Object(i.a)(b,2),h=m[0];m[1];return Object(a.jsxs)("ul",{className:"nav",children:[Object(a.jsx)("li",{className:"nav-header",children:"Navigation"}),h.map((function(e,t){return Object(a.jsx)(j.a,{path:e.path,exact:e.exact,children:function(s){var n=s.match;return Object(a.jsx)(G,{data:e,expand:function(e){return function(e,t,a){e.preventDefault(),-1===o&&a?(r(-1),d(1)):(r(c===t?-1:t),d(1))}(e,t,n)},active:t===c,clicked:o},t)}},t)}))]})},B=function(){var e=Object(o.c)((function(e){return!!e.auth.isLogin}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"sidebar",className:"sidebar ",children:Object(a.jsxs)(U.a,{className:"height-full",options:{suppressScrollX:!0},children:[e?Object(a.jsx)(D,{}):null,Object(a.jsx)(I,{})]})}),Object(a.jsx)("div",{className:"sidebar-bg"}),Object(a.jsx)("div",{className:"sidebar-mobile-dismiss"})]})},Q=function(){var e=new Date;return Object(a.jsxs)("div",{id:"footer",className:"footer",children:["\xa9 ",e.getFullYear()," MarketProfit All Rights Reserved"]})},V=function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("ol",{className:"breadcrumb float-xl-right",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(b.a,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumb-item active",children:"Main"})]}),Object(a.jsxs)("h1",{className:"page-header",children:["Main Page ",Object(a.jsx)("small",{children:"header small text goes here..."})]})]})},X="SETPAGESIDEBAR",Z="SETPAGEHEADER",J="SETPAGECONTENTFULLWIDTH",K="SETPAGECONTENTFULLHEIGHT",z="SETPAGEFOOTER",Y=function(e){return{type:X,payload:e}},$=function(e){return{type:Z,payload:e}},ee=function(e){return{type:J,payload:e}},te=function(e){return{type:z,payload:e}},ce=function(e){return{type:K,payload:e}},ae=function(){var e=Object(o.b)();return Object(s.useEffect)((function(){return e(Y(!1)),e($(!1)),e(te(!1)),e(ee(!0)),function(){e(Y(!0)),e($(!0)),e(te(!0)),e(ee(!1))}}),[]),Object(a.jsxs)("div",{className:"error",children:[Object(a.jsx)("div",{className:"error-code m-b-10",children:"404"}),Object(a.jsxs)("div",{className:"error-content",children:[Object(a.jsx)("div",{className:"error-message",children:"We couldn't find it..."}),Object(a.jsxs)("div",{className:"error-desc m-b-30",children:["The page you're looking for doesn't exist. ",Object(a.jsx)("br",{}),"Perhaps, there pages will help find what you're looking for."]}),Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{to:"/",className:"btn btn-success p-l-20 p-r-20",children:"Go Home"})})]})]})},se=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(""),l=Object(i.a)(n,2),j=l[0],d=l[1],m=Object(s.useState)(),h=Object(i.a)(m,2),u=h[0],O=h[1],x=Object(o.b)();Object(s.useEffect)((function(){return x(Y(!1)),x($(!1)),x(te(!1)),x(ee(!0)),function(){x(Y(!0)),x($(!0)),x(te(!0)),x(ee(!1))}}),[]),Object(s.useEffect)((function(){u&&console.log(u)}),[u]);var p=function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x(_(c,j));case 4:me.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O("Wrong email or password");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"login login-v1",children:Object(a.jsxs)("div",{className:"login-container",children:[Object(a.jsxs)("div",{className:"login-header",children:[Object(a.jsx)(b.a,{to:"/",style:{textDecoration:"none"},children:Object(a.jsxs)("div",{className:"brand",children:[Object(a.jsx)("span",{className:"logo"}),Object(a.jsx)("b",{children:"Market"})," Profit",Object(a.jsx)("small",{children:Object(a.jsx)(b.a,{to:"/register",children:Object(a.jsx)("button",{className:"btn btn-success",children:Object(a.jsx)("i",{className:"icon-user-follow ",children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})})]})}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)("i",{className:"fa fa-lock"})})]}),Object(a.jsx)("div",{className:"login-body",children:Object(a.jsx)("div",{className:"login-content",children:Object(a.jsxs)("form",{className:"margin-bottom-0",onSubmit:p,children:[Object(a.jsx)("div",{className:"form-group m-b-20",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg inverse-mode",placeholder:"Email Address",value:c,onChange:function(e){r(e.target.value)},required:!0})}),Object(a.jsx)("div",{className:"form-group m-b-20",children:Object(a.jsx)("input",{type:"password",className:"form-control form-control-lg inverse-mode",placeholder:"Password",value:j,onChange:function(e){d(e.target.value)},required:!0})}),Object(a.jsxs)("div",{className:"checkbox checkbox-css m-b-20",children:[Object(a.jsx)("input",{type:"checkbox",id:"remember_checkbox"}),Object(a.jsx)("label",{htmlFor:"remember_checkbox",children:"Remember Me"})]}),Object(a.jsx)("div",{className:"login-buttons",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success btn-block btn-lg",onSubmit:p,children:"Sign me in"})})]})})})]})})},re=c(44),ne=c.n(re),le=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(""),l=Object(i.a)(n,2),j=l[0],d=l[1],m=Object(s.useState)(""),h=Object(i.a)(m,2),u=h[0],O=h[1],x=Object(s.useState)(""),p=Object(i.a)(x,2),f=p[0],g=p[1],v=Object(s.useState)(""),N=Object(i.a)(v,2),w=N[0],S=N[1],A=Object(s.useState)(""),C=Object(i.a)(A,2),E=C[0],P=C[1],M=Object(s.useState)(!1),_=Object(i.a)(M,2),T=_[0],F=_[1],H=Object(s.useState)(),L=Object(i.a)(H,2),R=L[0],U=L[1],D=Object(o.b)(),G=new Date;Object(s.useEffect)((function(){return D(Y(!1)),D($(!1)),D(te(!1)),D(ee(!0)),function(){D(Y(!0)),D($(!0)),D(te(!0)),D(ee(!1))}}),[]),Object(s.useEffect)((function(){R&&console.log(R)}),[R]);var W=function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),U(),ne.a.isAlpha(c)&&ne.a.isAlpha(j)){e.next=6;break}U("Only strings inside the names"),e.next=35;break;case 6:if(ne.a.isEmail(u)){e.next=10;break}U("Enter real email"),e.next=35;break;case 10:if(f===w){e.next=14;break}U("Passwords must be the same"),e.next=35;break;case 14:if(!(E.length<11)){e.next=18;break}U("Need a real phone number"),e.next=35;break;case 18:if(!(f.length<7)){e.next=22;break}U("Password is too short"),e.next=35;break;case 22:if(T){e.next=26;break}U("Need  agreement"),e.next=35;break;case 26:return e.prev=26,e.next=29,D(q(u,E,"".concat(c," ").concat(j),f,w));case 29:me.push("/"),e.next=35;break;case 32:e.prev=32,e.t0=e.catch(26),U("User with such email already exists");case 35:case"end":return e.stop()}}),e,null,[[26,32]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"register register-with-news-feed",children:[Object(a.jsxs)("div",{className:"news-feed",children:[Object(a.jsx)("div",{className:"news-image",style:{backgroundImage:"url(/assets/img/login-bg/login-bg-9.jpg)"}}),Object(a.jsxs)("div",{className:"news-caption",children:[Object(a.jsxs)("h4",{className:"caption-title",children:[Object(a.jsx)("b",{children:"Market"})," Profit App"]}),Object(a.jsx)("p",{})]})]}),Object(a.jsxs)("div",{className:"right-content",children:[Object(a.jsxs)("h1",{className:"register-header",children:["Sign Up",Object(a.jsx)(b.a,{to:"/",children:Object(a.jsx)("span",{className:"float-right",children:Object(a.jsx)("button",{className:"btn btn-primary",children:Object(a.jsx)("i",{className:"fas fa-home fa-fw"})})})}),R?Object(a.jsx)("small",{children:Object(a.jsx)("div",{class:"alert alert-danger fade show",children:R})}):null]}),Object(a.jsx)("div",{className:"register-content",children:Object(a.jsxs)("form",{className:"margin-bottom-0",onSubmit:W,children:[Object(a.jsxs)("label",{className:"control-label",children:["Name ",Object(a.jsx)("span",{className:"text-danger",children:"*"})]}),Object(a.jsxs)("div",{className:"row row-space-10",children:[Object(a.jsx)("div",{className:"col-md-6 m-b-15",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",value:c,onChange:function(e){r(e.target.value)},required:!0})}),Object(a.jsx)("div",{className:"col-md-6 m-b-15",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",value:j,onChange:function(e){d(e.target.value)},required:!0})})]}),Object(a.jsxs)("label",{className:"control-label",children:["Email ",Object(a.jsx)("span",{className:"text-danger",children:"*"})]}),Object(a.jsx)("div",{className:"row m-b-15",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Email address",value:u,onChange:function(e){O(e.target.value)},required:!0})})}),Object(a.jsxs)("label",{className:"control-label",children:["Phone ",Object(a.jsx)("span",{className:"text-danger",children:"*"})]}),Object(a.jsx)("div",{className:"row m-b-15",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Phone",value:E,onChange:function(e){return""===e.target.value||/^[0-9\b]+$/.test(e.target.value)?P(e.target.value):void 0},required:!0})})}),Object(a.jsxs)("label",{className:"control-label",children:["Password ",Object(a.jsx)("span",{className:"text-danger",children:"*"})]}),Object(a.jsx)("div",{className:"row m-b-15",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",value:f,onChange:function(e){g(e.target.value)},required:!0})})}),Object(a.jsxs)("label",{className:"control-label",children:["Re-enter Password ",Object(a.jsx)("span",{className:"text-danger",children:"*"})]}),Object(a.jsx)("div",{className:"row m-b-15",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Re-enter Password",value:w,onChange:function(e){S(e.target.value)},required:!0})})}),Object(a.jsx)("div",{className:"checkbox checkbox-css m-b-30",children:Object(a.jsxs)("div",{className:"checkbox checkbox-css m-b-30",children:[Object(a.jsx)("input",{type:"checkbox",id:"agreement_checkbox",value:T,onChange:function(){F(!T)}}),console.log(T),Object(a.jsxs)("label",{htmlFor:"agreement_checkbox",children:["By clicking Sign Up, you agree to our",Object(a.jsx)(b.a,{to:"/user/register-v3",children:"Terms"})," and that you have read our ",Object(a.jsx)(b.a,{to:"/user/register-v3",children:"Data Policy"}),", including our ",Object(a.jsx)(b.a,{to:"/user/register-v3",children:"Cookie Use"}),"."]})]})}),Object(a.jsx)("div",{className:"register-buttons",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",onSubmit:W,children:"Sign Up"})}),Object(a.jsxs)("div",{className:"m-t-20 m-b-40 p-b-40 text-inverse",children:["Already a member? Click ",Object(a.jsx)(b.a,{to:"/login",children:"here"})," to login."]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{className:"text-center",children:["\xa9 MarketProfit All Right Reserved ",G.getFullYear()]})]})})]})]})},ie=function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("ol",{className:"breadcrumb float-xl-right",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(b.a,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumb-item active",children:" Brands Page"})]}),Object(a.jsxs)("h1",{className:"page-header",children:["Brands Page ",Object(a.jsx)("small",{children:"header small text goes here..."})]})]})},je=function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("ol",{className:"breadcrumb float-xl-right",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(b.a,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumb-item active",children:" Categories Page"})]}),Object(a.jsxs)("h1",{className:"page-header",children:["Categories Page ",Object(a.jsx)("small",{children:"header small text goes here..."})]})]})},oe=function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("ol",{className:"breadcrumb float-xl-right",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(b.a,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumb-item active",children:" Products Page"})]}),Object(a.jsxs)("h1",{className:"page-header",children:["Products Page ",Object(a.jsx)("small",{children:"header small text goes here..."})]})]})},de=function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("ol",{className:"breadcrumb float-xl-right",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(b.a,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumb-item active",children:" History Page"})]}),Object(a.jsxs)("h1",{className:"page-header",children:["History Page ",Object(a.jsx)("small",{children:"header small text goes here..."})]})]})},be=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(!1),l=Object(i.a)(n,2),j=l[0],d=l[1],m=Object(o.b)();Object(s.useEffect)((function(){return m(ee(!0)),m(ce(!0)),function(){m(ce(!1)),m(ee(!1))}}),[]);var h=function(e,t){e.preventDefault(),r("about"===t),d("tariff"===t)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"profile",children:Object(a.jsxs)("div",{className:"profile-header",children:[Object(a.jsx)("div",{className:"profile-header-cover"}),Object(a.jsxs)("div",{className:"profile-header-content",children:[Object(a.jsx)("div",{className:"profile-header-img",children:Object(a.jsx)("img",{src:"/assets/img/user/user-13.jpg",alt:""})}),Object(a.jsxs)("div",{className:"profile-header-info",children:[Object(a.jsx)("h4",{className:"m-t-10 m-b-5",children:"Test User"}),Object(a.jsx)("p",{className:"m-b-10",children:"test text"}),Object(a.jsx)(b.a,{to:"/extra/profile",className:"btn btn-xs btn-yellow",children:"Edit Profile"})]})]}),Object(a.jsxs)("ul",{className:"profile-header-tab nav nav-tabs",children:[Object(a.jsx)("li",{className:"nav-item"}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.a,{to:"/extra/profile",onClick:function(e){return h(e,"about")},className:"nav-link "+(c?"active ":""),children:"ABOUT"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.a,{to:"/extra/profile",onClick:function(e){return h(e,"tariff")},className:"nav-link "+(j?"active ":""),children:"TARIFF"})})]})]})}),Object(a.jsx)("div",{className:"profile-content",children:Object(a.jsxs)("div",{className:"tab-content p-0",children:[Object(a.jsx)("div",{className:"tab-pane fade "+(c?"show active ":""),children:Object(a.jsx)("div",{className:"table-responsive form-inline",children:Object(a.jsxs)("table",{className:"table table-profile",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{}),Object(a.jsx)("th",{children:Object(a.jsxs)("h4",{children:["Micheal Meyer ",Object(a.jsx)("small",{children:"Lorraine Stokes"})]})})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{className:"highlight",children:[Object(a.jsx)("td",{className:"field",children:"Mood"}),Object(a.jsx)("td",{children:Object(a.jsx)(b.a,{to:"/extra/profile",children:"Add Mood Message"})})]}),Object(a.jsx)("tr",{className:"divider",children:Object(a.jsx)("td",{colSpan:"2"})}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field",children:"Mobile"}),Object(a.jsxs)("td",{children:[Object(a.jsx)("i",{className:"fa fa-mobile fa-lg m-r-5"})," +1-(847)- 367-8924"," ",Object(a.jsx)(b.a,{to:"/extra/profile",className:"m-l-5",children:"Edit"})]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field",children:"Home"}),Object(a.jsx)("td",{children:Object(a.jsx)(b.a,{to:"/extra/profile",children:"Add Number"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field",children:"Office"}),Object(a.jsx)("td",{children:Object(a.jsx)(b.a,{to:"/extra/profile",children:"Add Number"})})]}),Object(a.jsx)("tr",{className:"divider",children:Object(a.jsx)("td",{colSpan:"2"})}),Object(a.jsxs)("tr",{className:"highlight",children:[Object(a.jsx)("td",{className:"field",children:"About Me"}),Object(a.jsx)("td",{children:Object(a.jsx)(b.a,{to:"/extra/profile",children:"Add Description"})})]}),Object(a.jsx)("tr",{className:"divider",children:Object(a.jsx)("td",{colSpan:"2"})}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field valign-middle",children:"Country/Region"}),Object(a.jsx)("td",{children:Object(a.jsxs)("select",{className:"form-control form-control-sm",name:"region",defaultValue:"US",children:[Object(a.jsx)("option",{value:"US",children:"United State"}),Object(a.jsx)("option",{value:"AF",children:"Afghanistan"}),Object(a.jsx)("option",{value:"AL",children:"Albania"}),Object(a.jsx)("option",{value:"DZ",children:"Algeria"}),Object(a.jsx)("option",{value:"AS",children:"American Samoa"}),Object(a.jsx)("option",{value:"AD",children:"Andorra"}),Object(a.jsx)("option",{value:"AO",children:"Angola"}),Object(a.jsx)("option",{value:"AI",children:"Anguilla"}),Object(a.jsx)("option",{value:"AQ",children:"Antarctica"}),Object(a.jsx)("option",{value:"AG",children:"Antigua and Barbuda"})]})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field",children:"City"}),Object(a.jsx)("td",{children:"Los Angeles"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field",children:"State"}),Object(a.jsx)("td",{children:Object(a.jsx)(b.a,{to:"/extra/profile",children:"Add State"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field",children:"Website"}),Object(a.jsx)("td",{children:Object(a.jsx)(b.a,{to:"/extra/profile",children:"Add Webpage"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field valign-middle",children:"Gender"}),Object(a.jsx)("td",{children:Object(a.jsxs)("select",{className:"form-control form-control-sm",name:"gender",children:[Object(a.jsx)("option",{value:"male",children:"Male"}),Object(a.jsx)("option",{value:"female",children:"Female"})]})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field valign-middle",children:"Birthdate"}),Object(a.jsxs)("td",{children:[Object(a.jsx)("select",{className:"form-control form-control-sm mr-2",name:"day",children:Object(a.jsx)("option",{value:"04",children:"04"})}),"-",Object(a.jsx)("select",{className:"form-control form-control-sm mr-2 ml-2",name:"month",children:Object(a.jsx)("option",{value:"11",children:"11"})}),"-",Object(a.jsx)("select",{className:"form-control form-control-sm ml-2",name:"year",children:Object(a.jsx)("option",{value:"1989",children:"1989"})})]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"field",children:"Language"}),Object(a.jsx)("td",{children:Object(a.jsx)("select",{className:"form-control form-control-sm",name:"language",children:Object(a.jsx)("option",{value:"",children:"English"})})})]}),Object(a.jsx)("tr",{className:"divider",children:Object(a.jsx)("td",{colSpan:"2"})}),Object(a.jsxs)("tr",{className:"highlight",children:[Object(a.jsx)("td",{className:"field",children:"\xa0"}),Object(a.jsxs)("td",{className:"p-t-10 p-b-10",children:[Object(a.jsx)("button",{type:"submit",className:"btn btn-primary width-150",children:"Update"}),Object(a.jsx)("button",{type:"submit",className:"btn btn-white btn-white-without-border width-150 m-l-5",children:"Cancel"})]})]})]})]})})}),Object(a.jsxs)("div",{className:"tab-pane fade "+(j?"show active ":""),children:[Object(a.jsx)("h4",{className:"m-t-0 m-b-20",children:"Videos (16)"}),Object(a.jsxs)("div",{className:"row row-space-2",children:[Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=RQ5ljyGg-ig",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/RQ5ljyGg-ig/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=5lWkZ-JaEOc",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/5lWkZ-JaEOc/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=9ZfN87gSjvI",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/9ZfN87gSjvI/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=w2H07DRv2_M",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/w2H07DRv2_M/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=PntG8KEVjR8",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/PntG8KEVjR8/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=q8kxKvSQ7MI",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/q8kxKvSQ7MI/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=cutu3Bw4ep4",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/cutu3Bw4ep4/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=gCspUXGrraM",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/gCspUXGrraM/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=COtpTM1MpAA",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/COtpTM1MpAA/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=8NVkGHVOazc",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/8NVkGHVOazc/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=QgQ7MWLsw1w",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/QgQ7MWLsw1w/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=Dmw0ucCv8aQ",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/Dmw0ucCv8aQ/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=r1d7ST2TG2U",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/r1d7ST2TG2U/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=WUR-XWBcHvs",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/WUR-XWBcHvs/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=A7sQ8RWj0Cw",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/A7sQ8RWj0Cw/mqdefault.jpg",className:"width-full",alt:""})})}),Object(a.jsx)("div",{className:"col-md-3 col-sm-4 m-b-2",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=IMN2VfiXls4",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"https://img.youtube.com/vi/IMN2VfiXls4/mqdefault.jpg",className:"width-full",alt:""})})})]})]})]})})]})},me=Object(d.a)(),he=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(o.c)((function(e){return!!e.dspl.pageSidebar})),l=Object(o.c)((function(e){return!!e.dspl.pageHeader})),d=Object(o.c)((function(e){return!!e.dspl.pageFooter})),b=Object(o.c)((function(e){return!!e.dspl.pageContentFullWidth})),m=Object(o.c)((function(e){return!!e.dspl.pageContentFullHeight}));Object(o.b)();Object(s.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[]);var h=function(){window.scrollY>0?r(!0):r(!1);for(var e=document.getElementsByClassName("nvtooltip"),t=0;t<e.length;t++)e[t].classList.add("d-none")};return Object(a.jsx)("div",{className:"fade page-sidebar-fixed show page-container \n          ".concat(l?"page-header-fixed ":"","\n\t\t\t\t\t").concat(n?"":"page-without-sidebar ","\n          ").concat(b?"page-content-full-height ":"","\n          ").concat(m?"page-content-full-height ":"","\n\t\t\t\t\t").concat(c?"has-scroll ":"","\n\t\t\t\t"),children:Object(a.jsx)(j.b,{history:me,children:Object(a.jsxs)("div",{children:[l&&Object(a.jsx)(L,{}),n&&Object(a.jsx)(B,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/",exact:!0,component:V}),Object(a.jsx)(j.a,{path:"/login",component:se}),Object(a.jsx)(j.a,{path:"/register",component:le}),Object(a.jsx)(j.a,{path:"/user",component:be}),Object(a.jsx)(j.a,{path:"/wildberries/brands",component:ie}),Object(a.jsx)(j.a,{path:"/wildberries/categories",component:je}),Object(a.jsx)(j.a,{path:"/wildberries/products",component:oe}),Object(a.jsx)(j.a,{path:"/wildberries/history",component:de}),Object(a.jsx)(j.a,{exact:!0,component:ae})]}),d&&Object(a.jsx)(Q,{})]})})})},ue=c(28),Oe=c(92),xe=c(11),pe={token:null,isLogin:!1,user:{id:null}},fe={pageSidebar:!0,pageHeader:!0,pageFooter:!0,pageContentFullWidth:!1,pageContentFullHeight:!1},ge=(c(218),c(219),c(220),c(221),c(222),c(223),c(224),c(225),c(226),c(227),c(228),c(229),c(230),Object(ue.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(xe.a)(Object(xe.a)({},e),{},{isLogin:t.payload.success,user:Object(xe.a)(Object(xe.a)({},e.user),{},{id:t.payload.id})});case P:return Object(xe.a)({},pe);case C:return Object(xe.a)(Object(xe.a)({},e),{},{isLogin:t.success,user:{id:t.payload.id}});case M:return Object(xe.a)(Object(xe.a)({},e),{},{isLogin:t.success,user:Object(xe.a)(Object(xe.a)({},e.user),t.payload.user)});default:return e}},dspl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(xe.a)(Object(xe.a)({},e),{},{pageSidebar:t.payload});case Z:return Object(xe.a)(Object(xe.a)({},e),{},{pageHeader:t.payload});case z:return Object(xe.a)(Object(xe.a)({},e),{},{pageFooter:t.payload});case J:return Object(xe.a)(Object(xe.a)({},e),{},{pageContentFullWidth:t.payload});case K:return Object(xe.a)(Object(xe.a)({},e),{},{pageContentFullHeight:t.payload});default:return e}}})),ve=Object(ue.d)(ge,Object(ue.a)(Oe.a));l.a.render(Object(a.jsx)(o.a,{store:ve,children:Object(a.jsx)(he,{})}),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.c817014f.chunk.js.map