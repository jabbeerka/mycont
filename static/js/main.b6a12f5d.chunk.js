(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[1],{140:function(e,t,n){e.exports=n(227)},20:function(e,t,n){e.exports={nav:"Nav_nav__3bXF_",link:"Nav_link__2wZpX",active:"Nav_active__3umKr",wrap:"Nav_wrap__UT9e4",img_wrap:"Nav_img_wrap__29dRk",header:"Nav_header__2Tv_h"}},227:function(e,t,n){"use strict";n.r(t);n(65);var r=n(0),a=n.n(r),u=n(45),c=n.n(u),i=n(24),o=n(25),s=n(27),l=n(26),f=n(84),d=n.n(f),p=n(20),m=n.n(p),b=function(e){var t=e.links,n=e.friends;return a.a.createElement("div",{className:m.a.nav},t,a.a.createElement("div",{className:m.a.header},a.a.createElement("hr",null),"Friends online:"),a.a.createElement("div",{className:m.a.wrap},n))},g=n(17),h=n(16),_=Object(h.b)((function(e){return{friends:e.navPage.friends.map((function(e){return a.a.createElement("div",{className:m.a.img_wrap,key:e.id},a.a.createElement("img",{src:e.img,alt:"p_icon"}),a.a.createElement("span",null,e.name))})),links:e.navPage.links.map((function(e){return a.a.createElement("div",{className:m.a.link,key:e.id},a.a.createElement(g.b,{to:e.link,activeClassName:m.a.active},e.name))}))}}))(b),O=n(6),v=n(37),E=n.n(v),j=n(86),w=n.n(j),y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isAuth,n=e.userId,r=e.login,u=e.userLogout;return a.a.createElement("div",{className:E.a.header},a.a.createElement("img",{src:w.a,className:E.a.logo,alt:"header"}),a.a.createElement("div",{className:E.a.login_block},t?a.a.createElement(g.b,{to:"/profile/"+n}," ",r," ",a.a.createElement("button",{onClick:u,className:E.a.login_block_btn},"Logout")):a.a.createElement(g.b,{to:"/login"}," Login ")))}}]),n}(a.a.Component),k=n(30),S=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement(y,this.props)}}]),n}(a.a.Component),A=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId}}),{userLogout:k.d})(S),P=n(4),T=n.n(P),I=n(7),x=n(2),N={initializate:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZING_APP":return Object(x.a)(Object(x.a)({},e),{},{initializate:!0});default:return e}},C=n(50),F=n(21),U=n(89),R=n(59),G=n(76),D={links:[{id:1,link:"/profile",name:"Profile"},{id:2,link:"/dialogs",name:"Dialogs"},{id:3,link:"/news",name:"News"},{id:4,link:"/musics",name:"Musics"},{id:5,link:"/settings",name:"Settings"},{id:6,link:"/users",name:"Users"}],friends:[{id:1,name:"Jahon",img:"https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"},{id:2,name:"Julia",img:"https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"},{id:3,name:"Miron",img:"https://b.radikal.ru/b28/2006/45/b905d323ec3f.png"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return Object(x.a)({},e)},H={imgs:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;return Object(x.a)({},e)},M=n(77),J=n(90),q=n(83),Z=Object(F.combineReducers)({headers:W,profilePage:R.b,messagesPage:G.b,navPage:z,usersPage:M.a,auth:k.a,form:q.a,app:L}),V=Object(F.createStore)(Z,Object(U.composeWithDevTools)(Object(F.applyMiddleware)(J.a)));window.store=V;var B=V,K=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,321))})),X=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,320))})),Y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,323))})),Q=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,324))})),$=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,325))})),ee=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,322))})),te=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,326))})),ne=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initialized()}},{key:"render",value:function(){return this.props.initializate?a.a.createElement(g.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(C.a,null)},a.a.createElement("div",{className:d.a.body},a.a.createElement(A,null),a.a.createElement(_,null),a.a.createElement(O.d,null,a.a.createElement(O.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(X,null)}}),a.a.createElement(O.b,{path:"/dialogs",render:function(){return a.a.createElement(K,null)}}),a.a.createElement(O.b,{path:"/news",render:function(){return a.a.createElement(te,null)}}),a.a.createElement(O.b,{path:"/musics",render:function(){return a.a.createElement($,null)}}),a.a.createElement(O.b,{path:"/settings",render:function(){return a.a.createElement(Q,null)}}),a.a.createElement(O.b,{path:"/users",render:function(){return a.a.createElement(ee,null)}}),a.a.createElement(O.b,{path:"/login",render:function(){return a.a.createElement(Y,null)}}),a.a.createElement(O.a,{from:"/",to:"/profile"}))))):a.a.createElement(C.a,null)}}]),n}(a.a.Component),re=Object(h.b)((function(e){return{initializate:e.app.initializate}}),{initialized:function(){return function(){var e=Object(I.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t(Object(k.b)())]);case 2:t({type:"INITIALIZING_APP"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ne),ae=function(){return a.a.createElement(g.a,null,a.a.createElement(h.a,{store:B},a.a.createElement(re,null)))};c.a.render(a.a.createElement(ae,null),document.getElementById("root"))},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b}));var r=n(4),a=n.n(r),u=n(7),c=n(2),i=n(8),o=n(32),s={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},l=function(e,t,n,r){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:r}}},f=function(e){return{type:"GET_CAPTCHA_URL",data:{captchaUrl:e}}},d=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,u=r.id,c=r.email,o=r.login,t(l(u,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n,r){return function(){var c=Object(u.a)(a.a.mark((function u(c){var s;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.userLogin(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(d()):(10===s.data.resultCode&&c(m()),c(Object(o.a)("login",{_error:s.data.messages[0]})));case 4:case"end":return a.stop()}}),u)})));return function(e){return c.apply(this,arguments)}}()},m=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptcha();case 2:n=e.sent,r=n.data.url,t(f(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.userLogout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"GET_CAPTCHA_URL":return Object(c.a)(Object(c.a)({},e),t.data);default:return e}}},37:function(e,t,n){e.exports={header:"Header_header__JleW2",logo:"Header_logo__3Yyyg",login_block:"Header_login_block__1Foxk",login_block_btn:"Header_login_block_btn__3BwAo"}},50:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(58),c=n.n(u),i=n(88),o=n.n(i);t.a=function(e){return a.a.createElement("img",{src:o.a,alt:"perloader",className:c.a.preloader})}},58:function(e,t,n){e.exports={preloader:"Elements_preloader__2_cjC",field__error:"Elements_field__error__2NV_o",field:"Elements_field__AZaa_",field__message_error:"Elements_field__message_error__2_hIG",field__message_warning:"Elements_field__message_warning__a7mWT"}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return _}));var r=n(4),a=n.n(r),u=n(7),c=n(23),i=n(2),o=n(8),s=n(32),l={postsArr:[{id:1,message:"Hello, Are you watch me ?",likes:5},{id:2,message:"I'm start learning to React!",likes:6}],inputArea:"",profile:null,status:""},f=function(e){return{type:"ADD_POST",post:e}},d=function(e){return{type:"SET_USER_STATUS",status:e}},p=function(e){return{type:"SAVE_PROFILE_INFO",formData:e}},m=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,o.b.getProfile(r);case 3:u=t.sent,n({type:"SET_USER_PROFILE",profile:u.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.sendPhoto(e);case 2:r=t.sent,n({type:"SET_PHOTO",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateProfile(e);case 2:if(0!==(r=t.sent).data.resultCode){t.next=7;break}n(p(e)),t.next=10;break;case 7:return u=r.data.messages.length>0?r.data.messages[0]:"Some error",n(Object(s.a)("edit-profile",{_error:u})),t.abrupt("return",Promise.reject(r.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:3,message:t.post,likes:0};return Object(i.a)(Object(i.a)({},e),{},{postsArr:[].concat(Object(c.a)(e.postsArr),[n])});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET_USER_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SET_PHOTO":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case"SAVE_PROFILE_INFO":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)(Object(i.a)({},e.profile),t.formData),t.formData.contacts)});default:return e}}},65:function(e,t,n){},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(23),a=n(2),u={namesArr:[{id:1,name:"Eugeniy"},{id:2,name:"Julia"},{id:3,name:"Miron"},{id:4,name:"Amir"},{id:5,name:"Jahon"}],messagesArr:[{id:1,message:"Hello, my Dear!"},{id:2,message:"I like you!"},{id:3,message:"What are you doing?"},{id:4,message:"Whats Happened"},{id:5,message:"Where is my daughter?"}]},c=function(e){return{type:"ADD_MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var n={id:7,message:t.message};return Object(a.a)(Object(a.a)({},e),{},{messagesArr:[].concat(Object(r.a)(e.messagesArr),[n])});default:return e}}},77:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return h}));var r=n(4),a=n.n(r),u=n(7),c=n(23),i=n(2),o=n(8),s={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowingProgress:[]},l=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},p=function(e,t){return{type:"FOLLOW_IS_FETCHING",isFollowingProgress:e,userId:t}},m=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(d(!0)),r({type:"SET_PAGE",currentPage:e}),n.next=4,o.b.usersAPI(e,t);case 4:u=n.sent,r(d(!1)),r({type:"GET_USERS",users:u.data.items}),r({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:u.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(p(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(u(n)),t(p(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(n,e,o.b.followRequest.bind(o.b),l);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(t){b(t,e,o.b.unfollowRequest.bind(o.b),f)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case"FOLLOW_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFollowingProgress:t.isFollowingProgress?[].concat(Object(c.a)(e.isFollowingProgress),[t.userId]):e.isFollowingProgress.filter((function(e){return e!==t.userId}))});case"GET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:Object(c.a)(t.users)});case"SET_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});default:return e}}},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(87),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"91d62374-c2f1-4539-a2e2-f40791faea06"}}),u={usersAPI:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e}))},getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e}))},unfollowRequest:function(e){return a.delete("follow/".concat(e)).then((function(e){return e}))},followRequest:function(e){return a.post("follow/".concat(e)).then((function(e){return e}))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},userLogin:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},userLogout:function(){return a.delete("auth/login")},sendPhoto:function(e){var t=new FormData;return t.append("Image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfile:function(e){return a.put("profile",e)}},c=function(){return a.get("auth/me")},i={getCaptcha:function(){return a.get("security/get-captcha-url")}}},84:function(e,t,n){e.exports={body:"App_body__3UyqE"}},86:function(e,t,n){e.exports=n.p+"static/media/logo.dac433af.png"},88:function(e,t,n){e.exports=n.p+"static/media/loader.d5c02aa6.gif"}},[[140,2,3]]]);
//# sourceMappingURL=main.b6a12f5d.chunk.js.map