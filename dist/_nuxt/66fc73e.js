(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{281:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),c=r(66);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{item:Object,editable:Boolean},methods:l(l({},Object(c.b)("news",["DEL_NEW"])),{},{edit:function(){this.$router.push({path:"/editor",query:{edit:this.$props.item.id}})},remove:function(){this.DEL_NEW(this.$props.item.id)}})},f=r(43),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card shadow-sm"},[t.item.picturePath?r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:t.item.picturePath}}):r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:"/placeholder-image.png"}}),t._v(" "),r("div",{staticClass:"card-body"},[r("h3",[t._v(t._s(t.item.title))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(t._s(t.item.text))]),t._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[t.editable?r("div",{staticClass:"btn-group"},[r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.edit}},[t._v("Редактировать")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.remove}},[t._v("Удалить")])]):t._e(),t._v(" "),r("small",{staticClass:"text-muted"},[t._v(t._s(t.item.publicationDate))])])])])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),c=r(17),o=(r(55),r(281)),l=r(66);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={fetch:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(r=t.store).getters["news/NEWS"].length){e.next=4;break}return e.next=4,r.dispatch("news/FETCH_NEWS","published");case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{}},components:{NewsItem:o.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("news",["NEWS"]))},m=r(43),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"album py-5 bg-light mt-5"},[r("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},t._l(t.NEWS,(function(t){return r("div",{staticClass:"col"},[r("NewsItem",{attrs:{item:t,editable:!1}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NewsItem:r(281).default})}}]);