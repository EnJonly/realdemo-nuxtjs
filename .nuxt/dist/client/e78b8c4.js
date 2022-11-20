/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{211:function(e,t,r){var n,o;!function(c){if(void 0===(o="function"==typeof(n=c)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var m in c)c[m]&&(d+="; "+m,!0!==c[m]&&(d+="="+c[m].split(";")[0]));return document.cookie=t+"="+r+d}}function l(e,r){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");r||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var m=t(l[0]);if(d=(n.read||n)(d,m)||t(d),r)try{d=JSON.parse(d)}catch(e){}if(o[m]=d,e===m)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,r){c(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},270:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(36),r(33),r(66)),c=function(data){return Object(o.b)({method:"POST",url:"/api/users/login",data:data})},l=function(data){return Object(o.b)({method:"POST",url:"/api/users",data:data})},d=r(211),m={middleware:"notAuthenticated",name:"LoginIndex",computed:{isLogin:function(){return"login"===this.$route.name}},data:function(){return{user:{username:"",email:"lpzmail@163.com",password:"12345678"},errors:{}}},methods:{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.isLogin){t.next=7;break}return t.next=4,c({user:e.user});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,l({user:e.user});case 9:t.t0=t.sent;case 10:r=t.t0,data=r.data,e.$store.commit("setUser",data.user),d.set("user",data.user),e.$router.push("/"),t.next=20;break;case 17:t.prev=17,t.t1=t.catch(0),e.errors=t.t1.response.data.errors;case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}},f=r(30),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"auth-page"},[t("div",{staticClass:"container page"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[t("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.isLogin?"Sign in":"Sign up"))]),e._v(" "),t("p",{staticClass:"text-xs-center"},[e.isLogin?t("nuxt-link",{attrs:{to:"/register"}},[e._v("Need an account?")]):t("nuxt-link",{attrs:{to:"/login"}},[e._v("Have an account?")])],1),e._v(" "),t("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(r,n){return e._l(r,(function(r,o){return t("li",{key:o},[e._v(e._s(n)+" "+e._s(r))])}))}))],2),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e.isLogin?e._e():t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",required:"",minlength:"8"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),t("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            "+e._s(e.isLogin?"Sign in":"Sign up")+"\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);