(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{280:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var n=r(0),c=r(66);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{item:Object,editable:Boolean},methods:l(l({},Object(c.b)("news",["DEL_NEW"])),{},{edit:function(){this.$router.push({path:"/editor",query:{edit:this.$props.item.id}})},remove:function(){var data={link:"http://test.local/app/api/news/all",id:this.$props.item.id};this.DEL_NEW(data)}})},m=r(43),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card shadow-sm"},[t.item.picturePath?r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:t.item.picturePath}}):r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:"/placeholder-image.png"}}),t._v(" "),r("div",{staticClass:"card-body"},[r("h3",[t._v(t._s(t.item.title))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(t._s(t.item.text))]),t._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[t.editable?r("div",{staticClass:"btn-group"},[t.item.visible?r("img",{attrs:{width:"24",height:"24",src:"/visible.png"}}):r("img",{attrs:{width:"24",height:"24",src:"/unvisible.png"}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.edit}},[t._v("Редактировать")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.remove}},[t._v("Удалить")])]):t._e(),t._v(" "),r("small",{staticClass:"text-muted"},[t._v(t._s(t.item.publicationDate))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);