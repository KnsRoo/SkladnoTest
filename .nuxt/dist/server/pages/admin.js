exports.ids = [2,1];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/components/NewsItem.vue?vue&type=template&id=55dfd282&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card shadow-sm"},[_vm._ssrNode(((_vm.item.picturePath)?("<img"+(_vm._ssrAttr("src",_vm.item.picturePath))+" class=\"bd-placeholder-img card-img-top\">"):("<img src=\"/placeholder-image.png\" class=\"bd-placeholder-img card-img-top\">"))+" <div class=\"card-body\"><h3>"+_vm._ssrEscape(_vm._s(_vm.item.title))+"</h3> <p class=\"card-text\">"+_vm._ssrEscape(_vm._s(_vm.item.text))+"</p> <div class=\"d-flex justify-content-between align-items-center\">"+((_vm.editable)?("<div class=\"btn-group\">"+((_vm.item.visible)?("<img width=\"24\" height=\"24\" src=\"/visible.png\">"):("<img width=\"24\" height=\"24\" src=\"/unvisible.png\">"))+" <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Редактировать</button> <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Удалить</button></div>"):"<!---->")+" <small class=\"text-muted\">"+_vm._ssrEscape(_vm._s(_vm.item.publicationDate))+"</small></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./client/components/NewsItem.vue?vue&type=template&id=55dfd282&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/components/NewsItem.vue?vue&type=script&lang=js&
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

/* harmony default export */ var NewsItemvue_type_script_lang_js_ = ({
  props: {
    item: Object,
    editable: Boolean
  },
  methods: { ...Object(external_vuex_["mapActions"])('news', ['DEL_NEW']),

    edit() {
      this.$router.push({
        path: '/editor',
        query: {
          edit: this.$props.item.id
        }
      });
    },

    remove() {
      let data = {
        link: "http://test.local/app/api/news/all",
        id: this.$props.item.id
      };
      this.DEL_NEW(data);
    }

  }
});
// CONCATENATED MODULE: ./client/components/NewsItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsItemvue_type_script_lang_js_ = (NewsItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./client/components/NewsItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NewsItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71882ecc"
  
)

/* harmony default export */ var NewsItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2acedbfb", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cp{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/admin.vue?vue&type=template&id=586729a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"album py-5 bg-light mt-5\">","</div>",[_vm._ssrNode("<div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3\">","</div>",[_vm._ssrNode("<div class=\"col\"><div class=\"card shadow-sm cp\"><img src=\"/add.png\" class=\"bd-placeholder-img card-img-top\"> <div class=\"card-body\"><div class=\"d-flex justify-content-between align-items-center\"><div class=\"card-text\">Добавить новость</div></div></div></div></div> "),_vm._l((_vm.NEWS),function(item){return _vm._ssrNode("<div class=\"col\">","</div>",[_c('NewsItem',{attrs:{"item":item,"editable":true}})],1)})],2)]),_vm._ssrNode(" <div class=\"d-flex g-3\">"+((_vm.PREV)?("<button type=\"submit\" class=\"w-100 btn btn-lg btn-primary\">Предыдущая</button>"):"<!---->")+" "+((_vm.NEXT)?("<button type=\"submit\" class=\"w-100 btn btn-lg btn-primary\">Следующая</button>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./client/pages/admin.vue?vue&type=template&id=586729a6&

// EXTERNAL MODULE: ./client/components/NewsItem.vue + 4 modules
var NewsItem = __webpack_require__(35);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/admin.vue?vue&type=script&lang=js&
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
//
//


/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  async fetch({
    store,
    query
  }) {
    let page = 1;
    let limit = 6;
    let link = 'http://test.local/app/api/news/all';

    if (query.page) {
      page = parseInt(query.page);
      let offset = (page - 1) * limit;
      link += `?offset=${offset}&limit=${limit}`;
      this.page = page;
    }

    if (store.getters['news/NEWS'].length == 0) {
      await store.dispatch('news/FETCH_NEWS', link);
    }
  },

  data() {
    return {
      page: 1
    };
  },

  components: {
    NewsItem: NewsItem["default"]
  },
  methods: { ...Object(external_vuex_["mapActions"])('user', ['FETCH_USER']),
    ...Object(external_vuex_["mapActions"])('news', ['FETCH_NEWS']),

    add() {
      this.$router.push('/editor');
    },

    async next() {
      await this.FETCH_NEWS(this.NEXT);
      this.page += 1;
      this.$router.push(`?page=${this.page}`);
    },

    async prev() {
      await this.FETCH_NEWS(this.PREV);
      this.page -= 1;
      this.$router.push(`?page=${this.page}`);
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])('user', ['USER']),
    ...Object(external_vuex_["mapGetters"])('news', ['NEWS', 'PREV', 'NEXT'])
  },

  async created() {
    if (false) {}
  }

});
// CONCATENATED MODULE: ./client/pages/admin.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./client/pages/admin.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "65602bd7"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NewsItem: __webpack_require__(35).default})


/***/ })

};;
//# sourceMappingURL=admin.js.map