exports.ids = [4];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/index.vue?vue&type=template&id=d628b634&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"album py-5 bg-light mt-5\"><div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3\">"+(_vm._ssrList((_vm.news),function(item){return ("<div class=\"col\"><div class=\"card shadow-sm\">"+((item.picturePath)?("<img"+(_vm._ssrAttr("src",item.picturePath))+" class=\"bd-placeholder-img card-img-top\">"):("<img src=\"/placeholder-image.png\" class=\"bd-placeholder-img card-img-top\">"))+" <div class=\"card-body\"><h3>"+_vm._ssrEscape(_vm._s(item.title))+"</h3> <p class=\"card-text\">"+_vm._ssrEscape(_vm._s(item.text))+"</p> <div class=\"d-flex justify-content-between align-items-center\"><small class=\"text-muted\">"+_vm._ssrEscape(_vm._s(item.publicationDate))+"</small></div></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./client/pages/index.vue?vue&type=template&id=d628b634&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  async asyncData({
    $axios
  }) {
    const response = await $axios.$get('http://test.local/app/api/news');
    let news = response._embedded.items;
    return {
      news
    };
  },

  data() {
    return {
      news: []
    };
  }

});
// CONCATENATED MODULE: ./client/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var client_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./client/pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  client_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "33f0d7da"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map