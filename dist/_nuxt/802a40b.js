(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{285:function(t,e,r){var content=r(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("5e0e2317",content,!0,{sourceMap:!1})},292:function(t,e,r){"use strict";r(285)},293:function(t,e,r){var n=r(82)(!1);n.push([t.i,".form-center{width:400px;margin:100px auto}",""]),t.exports=n},297:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(17),o=r(0),l=(r(55),r(18),r(66));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{email:"",name:"",password:"",password_confirm:""}},computed:{valid:function(){var t=this.password_confirm==this.password&&0!=this.password.length,e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email),r=this.name.length>1;return t&&e&&r}},methods:m(m({},Object(l.b)("user",["REGISTRATION"])),{},{signUp:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.REGISTRATION({name:t.name,email:t.email,password:t.password});case 2:e.sent&&t.$router.push("/signin");case 4:case"end":return e.stop()}}),e)})))()}})},f=(r(292),r(43)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-center"},[r("div",{staticClass:"form-signin mt-5"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.signUp(e)}}},[r("h1",{staticClass:"h3 mb-3 fw-normal center"},[t._v("Регистрация")]),t._v(" "),r("div",{staticClass:"form-floating p-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"floatingInput",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-floating p-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"floatingInput",placeholder:"Имя"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-floating p-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"Пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-floating p-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirm,expression:"password_confirm"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"Подтвердите пароль"},domProps:{value:t.password_confirm},on:{input:function(e){e.target.composing||(t.password_confirm=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{disabled:!t.valid,type:"submit"}},[t._v("Зарегистрироваться")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);