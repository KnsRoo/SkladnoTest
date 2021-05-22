exports.ids = [1];
exports.modules = {

/***/ 32:
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

/***/ })

};;
//# sourceMappingURL=news-item.js.map