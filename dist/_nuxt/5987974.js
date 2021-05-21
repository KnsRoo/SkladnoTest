(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(t,e,n){"use strict";n.r(e);var r=n(43),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-md fixed-top navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Лента новостей")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[n("ul",{staticClass:"navbar-nav me-auto mb-2 mb-md-0"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{exact:"","active-class":"active",to:"/signin"}},[t._v("Войти")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{exact:"","active-class":"active",to:"/signup"}},[t._v("Регистрация")])],1)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null);e.default=component.exports},135:function(t,e,n){"use strict";n.r(e);var r=n(43),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-md fixed-top navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Лента новостей")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[n("ul",{staticClass:"navbar-nav me-auto mb-2 mb-md-0"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{exact:"","active-class":"active",to:"/editor"}},[t._v("Панель Управления")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Выйти")])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null);e.default=component.exports},201:function(t,e,n){"use strict";var r=n(134),c=n(135),o={components:{NavBar:r.default,NavBarAdmin:c.default},computed:{loggedIn:function(){return!!this.$store.getters["user/USER"]}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loggedIn?n("NavBarAdmin"):n("NavBar"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBarAdmin:n(135).default,NavBar:n(134).default})},202:function(t,e,n){n(203),t.exports=n(204)},219:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;e.getters["user/USER"]||n("/signin")}},239:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"actions",(function(){return o})),n.d(e,"mutations",(function(){return l})),n.d(e,"getters",(function(){return v}));var r=n(17),c=(n(55),function(){return{news:[]}}),o={FETCH_NEWS:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=t.commit,o="all"===e?"all":"",r.next=4,n.$axios.$get("http://test.local/app/api/news/".concat(o));case 4:l=r.sent,c("SET_NEWS",l._embedded.items);case 6:case"end":return r.stop()}}),r)})))()},PATCH_NEW:function(t,data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,link;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=new FormData).append("title",data.title),r.append("text",data.text),r.append("visible",0==data.visible?0:1),data.file&&r.append("file",data.file),2==data.visible&&r.append("publicationDate",data.publicationDate),link="http://test.local/app/api/news/create",data.id&&(link="http://test.local/app/api/news/update/".concat(data.id)),n.next=10,e.$axios.$post(link,r,{headers:{"Content-Type":"multipart/form-data"}});case 10:return n.sent,n.next=13,t("FETCH_NEWS","all");case 13:case"end":return n.stop()}}),n)})))()},DEL_NEW:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$axios.$delete("http://test.local/app/api/news/delete/".concat(e));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()}},l={SET_NEWS:function(t,data){t.news=data}},v={NEWS:function(s){return s.news}}},240:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"actions",(function(){return v})),n.d(e,"mutations",(function(){return f})),n.d(e,"getters",(function(){return d}));var r=n(17),c=(n(55),n(10),n(18),n(196)),o=n.n(c),l=function(){return{user:{}}},v={FETCH_USER:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,header,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,c=JSON.parse(localStorage.getItem("jwt")),header="".concat(c.token_type," ").concat(c.access_token),n.next=5,e.$axios.$post("http://test.local/app/api/auth/me",{},{headers:{Authorization:header}});case 5:o=n.sent,r("SET_USER",o);case 7:case"end":return n.stop()}}),n)})))()},REGISTRATION:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$axios.$post("http://test.local/app/api/auth/registration",{params:e});case 2:if("Successfully registration!"==t.sent.message){t.next=5;break}return t.abrupt("return",!1);case 5:return t.abrupt("return",!0);case 6:case"end":return t.stop()}}),t)})))()},LOGIN:function(t,data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.dispatch,t.commit,c=t.state,n.next=3,e.$axios.$post("http://test.local/app/api/auth/login",o.a.stringify(data),{headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});case 3:return l=n.sent,console.log(l),localStorage.setItem("jwt",JSON.stringify(l)),n.next=8,r("FETCH_USER");case 8:if(c.user.name){n.next=10;break}return n.abrupt("return",!1);case 10:return n.abrupt("return",!0);case 11:case"end":return n.stop()}}),n)})))()},LOGOUT:function(t){var e=t.commit;localStorage.removeItem("jwt"),e("REM_USER")}},f={SET_USER:function(t,data){console.log("setting user",data),t.user=data,console.log("user setted",t.user)},REM_USER:function(t,data){t.user=void 0}},d={USER:function(s){return s.user.name}}},250:function(t,e){}},[[202,8,1,9]]]);