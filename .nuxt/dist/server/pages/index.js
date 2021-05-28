exports.ids = [4,1];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/components/NewsItem.vue?vue&type=template&id=55dfd282&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card shadow-sm"},[_vm._ssrNode(((_vm.item.picturePath)?("<img"+(_vm._ssrAttr("src",_vm.item.picturePath))+" class=\"bd-placeholder-img card-img-top\">"):("<img src=\"/placeholder-image.png\" class=\"bd-placeholder-img card-img-top\">"))+" <div class=\"card-body\"><h3>"+_vm._ssrEscape(_vm._s(_vm.item.title))+"</h3> <p class=\"card-text\">"+_vm._ssrEscape(_vm._s(_vm.item.text))+"</p> <div class=\"d-flex justify-content-between align-items-center\">"+((_vm.editable)?("<div class=\"btn-group\">"+((_vm.item.visible)?("<img width=\"24\" height=\"24\" src=\"/visible.png\">"):("<img width=\"24\" height=\"24\" src=\"/unvisible.png\">"))+" <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Редактировать</button> <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Удалить</button></div>"):"<!---->")+" <small class=\"text-muted\">"+_vm._ssrEscape(_vm._s(_vm.item.publicationDate))+"</small></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./client/components/NewsItem.vue?vue&type=template&id=55dfd282&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/index.vue?vue&type=template&id=3870f7e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"album py-5 bg-light mt-5\">","</div>",[_vm._ssrNode("<div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3\">","</div>",_vm._l((_vm.NEWS),function(item){return _vm._ssrNode("<div class=\"col\">","</div>",[_c('NewsItem',{attrs:{"item":item,"editable":false}})],1)}),0)]),_vm._ssrNode(" <div class=\"d-flex g-3\">"+((_vm.PREV)?("<button class=\"w-100 btn btn-lg btn-primary\">Предыдущая</button>"):"<!---->")+" "+((_vm.NEXT)?("<button class=\"w-100 btn btn-lg btn-primary\">Следующая</button>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./client/pages/index.vue?vue&type=template&id=3870f7e6&

// EXTERNAL MODULE: ./client/components/NewsItem.vue + 4 modules
var NewsItem = __webpack_require__(36);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./client/utils/api.js
var api = __webpack_require__(3);

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(9);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

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




/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      page: 1
    };
  },

  components: {
    NewsItem: NewsItem["default"]
  },
  computed: { ...Object(external_vuex_["mapGetters"])('news', ['NEWS', 'PREV', 'NEXT'])
  },
  methods: { ...Object(external_vuex_["mapActions"])('news', ['FETCH_NEWS']),

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

  async created() {
    let limit = 6;
    let link = api["a" /* default */].published;

    if (this.$route.query.page) {
      let page = parseInt(this.$route.query.page);
      let params = {
        limit,
        offset: (page - 1) * limit
      };
      link += '?' + external_qs_default.a.stringify(params);
      this.page = page;
    }

    await this.FETCH_NEWS(link);
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

/* nuxt-component-imports */
installComponents(component, {NewsItem: __webpack_require__(36).default})


/***/ })

};;
//# sourceMappingURL=index.js.map