(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{280:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),c=r(66);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{item:Object,editable:Boolean},methods:l(l({},Object(c.b)("news",["DEL_NEW"])),{},{edit:function(){this.$router.push({path:"/editor",query:{edit:this.$props.item.id}})},remove:function(){var data={link:"http://test.local/app/api/news/all",id:this.$props.item.id};this.DEL_NEW(data)}})},f=r(43),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card shadow-sm"},[t.item.picturePath?r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:t.item.picturePath}}):r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:"/placeholder-image.png"}}),t._v(" "),r("div",{staticClass:"card-body"},[r("h3",[t._v(t._s(t.item.title))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(t._s(t.item.text))]),t._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[t.editable?r("div",{staticClass:"btn-group"},[t.item.visible?r("img",{attrs:{width:"24",height:"24",src:"/visible.png"}}):r("img",{attrs:{width:"24",height:"24",src:"/unvisible.png"}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.edit}},[t._v("Редактировать")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.remove}},[t._v("Удалить")])]):t._e(),t._v(" "),r("small",{staticClass:"text-muted"},[t._v(t._s(t.item.publicationDate))])])])])}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("2acedbfb",content,!0,{sourceMap:!1})},285:function(t,e,r){"use strict";r(281)},286:function(t,e,r){var n=r(82)(!1);n.push([t.i,".cp{cursor:pointer}",""]),t.exports=n},293:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r(17),o=(r(55),r(10),r(4),r(3),r(1),r(5),r(2),r(6),r(280)),l=r(66);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={fetch:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,o,link;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.store,c=t.query,o=1,6,link="http://test.local/app/api/news/all",c.page&&(o=parseInt(c.page),link+="?offset=".concat(6*(o-1),"&limit=").concat(6),e.page=o),0!=n.getters["news/NEWS"].length){r.next=8;break}return r.next=8,n.dispatch("news/FETCH_NEWS",link);case 8:case"end":return r.stop()}}),r)})))()},data:function(){return{page:1}},components:{NewsItem:o.default},methods:f(f(f({},Object(l.b)("user",["FETCH_USER"])),Object(l.b)("news",["FETCH_NEWS"])),{},{add:function(){this.$router.push("/editor")},next:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.FETCH_NEWS(t.NEXT);case 2:t.page+=1,t.$router.push("?page=".concat(t.page));case 4:case"end":return e.stop()}}),e)})))()},prev:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.FETCH_NEWS(t.PREV);case 2:t.page-=1,t.$router.push("?page=".concat(t.page));case 4:case"end":return e.stop()}}),e)})))()}}),computed:f(f({},Object(l.c)("user",["USER"])),Object(l.c)("news",["NEWS","PREV","NEXT"])),created:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},v=(r(285),r(43)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"album py-5 bg-light mt-5"},[r("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},[r("div",{staticClass:"col"},[r("div",{staticClass:"card shadow-sm cp",on:{click:t.add}},[r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:"/add.png"}}),t._v(" "),t._m(0)])]),t._v(" "),t._l(t.NEWS,(function(t){return r("div",{staticClass:"col"},[r("NewsItem",{attrs:{item:t,editable:!0}})],1)}))],2)]),t._v(" "),r("div",{staticClass:"d-flex g-3"},[t.PREV?r("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit"},on:{click:t.prev}},[t._v("Предыдущая")]):t._e(),t._v(" "),t.NEXT?r("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit"},on:{click:t.next}},[t._v("Следующая")]):t._e()])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-body"},[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("div",{staticClass:"card-text"},[t._v("Добавить новость")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NewsItem:r(280).default})}}]);