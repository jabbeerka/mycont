(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[7],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(58),i=n.n(o),c=function(e){return function(t){var n=t.input,a=t.className,o=t.placeholder,c=t.type,l=t.meta,u=l.touched,s=l.error,m=l.warning;return r.a.createElement(r.a.Fragment,null,r.a.createElement(e,Object.assign({className:a+" "+(u&&s?a+"_error":"")},n,{placeholder:o,type:c})),u&&(s&&r.a.createElement("span",{className:i.a.field__message_error},s)||m&&r.a.createElement("span",{className:i.a.field__message_warning},m)))}}},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Please write any symbol"},r=function(e){return function(t){if(t&&t.length>e)return"Max lenght is ".concat(e," symbols")}}},238:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(113);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"type",l=arguments.length>6?arguments[6]:void 0;return r.a.createElement(o.a,Object.assign({},l,{className:e,placeholder:t,name:n,component:a,validate:i,type:c}))}},307:function(e,t,n){e.exports={form:"Login_form__2S_l9",form__title:"Login_form__title__2RbkT",form__wrapper:"Login_form__wrapper__1YCGL",form__input:"Login_form__input__1Qr23",form__input_checkbox:"Login_form__input_checkbox__10gCh",form__button:"Login_form__button__hyu8q"}},322:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(307),i=n.n(o),c=n(114),l=n(229),u=n(230),s=n(238),m=Object(u.a)(30),_=Object(l.a)("input"),f=Object(c.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("div",{className:i.a.form__wrapper},r.a.createElement("h1",{className:i.a.form__title},"Login"),r.a.createElement("form",{onSubmit:t,className:i.a.form},Object(s.a)(i.a.form__input,"login","email",_,[u.b,m]),Object(s.a)(i.a.form__input,"password","password",_,[u.b,m],"password"),r.a.createElement("div",{className:i.a.form__input_checkbox},Object(s.a)(null,null,"rememberMe",_,null,"checkbox"),r.a.createElement("span",null,"Remember me")),n&&r.a.createElement("div",null,n),r.a.createElement("button",{className:i.a.form__button},"Sign in")))})),p=n(16),b=n(21),g=n(30),h=n(5),d=Object(b.compose)(Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}),{userLogin:g.c}))((function(e){var t=e.isAuth,n=e.userLogin;return t?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement(f,{onSubmit:n})}));t.default=d}}]);
//# sourceMappingURL=7.87422d13.chunk.js.map