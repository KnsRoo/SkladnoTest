(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{282:function(t,e,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("5e2abc77",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r(282)},288:function(t,e,r){var n=r(82)(!1);n.push([t.i,".mt-60{margin-top:100px}.gap{grid-gap:10px;gap:10px}",""]),t.exports=n},294:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),l=r(17),o=(r(100),r(55),r(66));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.query,n=t.$axios,l=r.edit){e.next=4;break}return e.abrupt("return",{mode:"new",editableId:null});case 4:return e.next=6,n.$get("http://test.local/app/api/news/get/".concat(l));case 6:return o=e.sent,e.abrupt("return",{editableId:o.id,mode:"edit",title:o.title,text:o.text,visible:o.visible,picturePath:o.picturePath,publicationDate:o.publicationDate});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{mode:"new",editableId:null,title:"",text:"",file:null,visible:"1",publicationDate:null,picturePath:null}},computed:d(d({},Object(o.c)("user",["USER"])),{},{maintitle:function(){return"new"===this.mode?"Добавление новости":"Редактирование новости"}}),methods:d(d({},Object(o.b)("user",["FETCH_USER"])),{},{onSubmit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={title:t.title,text:t.text,file:t.file,visible:parseInt(t.visible),publicationDate:t.publicationDate},t.editableId&&"edit"==t.mode&&(data.id=t.editableId),data.link="http://test.local/app/api/news/all",e.next=5,t.$store.dispatch("news/PATCH_NEW",data);case 5:t.$router.push("/admin");case 6:case"end":return e.stop()}}),e)})))()},cancel:function(){this.$router.push("/admin")},handleFileUpload:function(){this.file=this.$refs.file.files[0]}}),created:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.mode=t.$route.query.edit?"edit":"new";case 1:case"end":return e.stop()}}),e)})))()}},m=(r(287),r(43)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-60"},[r("h1",{staticClass:"h3 mb-3 fw-normal center"},[t._v(t._s(t.maintitle))]),t._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"form-floating"},[r("p",{staticClass:"title"},[t._v("Заголовок")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-floating"},[r("p",{staticClass:"title"},[t._v("Текст")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"formFile"}},[t._v("Изображение")]),t._v(" "),t.picturePath?r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"500",src:t.picturePath}}):t._e(),t._v(" "),r("input",{ref:"file",staticClass:"form-control",attrs:{type:"file",id:"formFile"},on:{change:t.handleFileUpload}})]),t._v(" "),r("div",{staticClass:"form-floating"},[r("p",{staticClass:"title"},[t._v("Видимость")]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.visible,expression:"visible"}],staticClass:"form-check-input",attrs:{type:"radio",name:"dateGroup",id:"unvisible",value:"0"},domProps:{checked:t._q(t.visible,"0")},on:{change:function(e){t.visible="0"}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"unvisible"}},[t._v("\n\t\t\t    Скрыта\n\t\t\t  ")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.visible,expression:"visible"}],staticClass:"form-check-input",attrs:{type:"radio",name:"dateGroup",id:"visible",value:"1",checked:""},domProps:{checked:t._q(t.visible,"1")},on:{change:function(e){t.visible="1"}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"visible"}},[t._v("\n\t\t\t    Опубликована\n\t\t\t  ")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.visible,expression:"visible"}],staticClass:"form-check-input",attrs:{type:"radio",name:"dateGroup",id:"ondate",value:"2",checked:""},domProps:{checked:t._q(t.visible,"2")},on:{change:function(e){t.visible="2"}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"ondate"}},[t._v("\n\t\t\t    Опубликовать ко времени\n\t\t\t  ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.publicationDate,expression:"publicationDate"}],attrs:{disabled:2!=t.visible,id:"ondate",placeholder:"YYYY-MM-DD HH:MM",type:"text"},domProps:{value:t.publicationDate},on:{input:function(e){e.target.composing||(t.publicationDate=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"d-flex mt-5 gap"},[r("button",{staticClass:"w-100 btn btn-lg btn-primary",on:{click:t.onSubmit}},[t._v("Сохранить")]),t._v(" "),r("button",{staticClass:"w-100 btn btn-lg btn-danger",on:{click:t.cancel}},[t._v("Отменить")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);