(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{271:function(t,e,r){"use strict";r.r(e);var n=r(21),c=(r(57),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("http://test.local/app/api/news");case 3:return n=e.sent,c=n._embedded.items,e.abrupt("return",{news:c});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{news:[]}}}),l=r(54),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"album py-5 bg-light mt-5"},[r("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},t._l(t.news,(function(e){return r("div",{staticClass:"col"},[r("div",{staticClass:"card shadow-sm"},[e.picturePath?r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:e.picturePath}}):r("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{src:"/placeholder-image.png"}}),t._v(" "),r("div",{staticClass:"card-body"},[r("h3",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(t._s(e.text))]),t._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("small",{staticClass:"text-muted"},[t._v(t._s(e.publicationDate))])])])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);