exports.ids = [3];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5e2abc77", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mt-60{margin-top:100px}.gap{grid-gap:10px;gap:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/editor.vue?vue&type=template&id=7e76cc86&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mt-60"},[_vm._ssrNode("<h1 class=\"h3 mb-3 fw-normal center\">"+_vm._ssrEscape(_vm._s(_vm.maintitle))+"</h1> <div class=\"form-group\"><div class=\"form-floating\"><p class=\"title\">Заголовок</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.title)))+" class=\"form-control\"></div> <div class=\"form-floating\"><p class=\"title\">Текст</p> <textarea class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.text))+"</textarea></div> <div class=\"mb-3\"><label for=\"formFile\" class=\"form-label\">Изображение</label> "+((_vm.picturePath)?("<img width=\"500\""+(_vm._ssrAttr("src",_vm.picturePath))+" class=\"bd-placeholder-img card-img-top\">"):"<!---->")+" <input type=\"file\" id=\"formFile\" class=\"form-control\"></div> <div class=\"form-floating\"><p class=\"title\">Видимость</p> <div class=\"form-check\"><input type=\"radio\" name=\"dateGroup\" id=\"unvisible\" value=\"0\""+(_vm._ssrAttr("checked",_vm._q(_vm.visible,"0")))+" class=\"form-check-input\"> <label for=\"unvisible\" class=\"form-check-label\">\n\t\t\t    Скрыта\n\t\t\t  </label></div> <div class=\"form-check\"><input type=\"radio\" name=\"dateGroup\" id=\"visible\" value=\"1\" checked=\"checked\" class=\"form-check-input\"> <label for=\"visible\" class=\"form-check-label\">\n\t\t\t    Опубликована\n\t\t\t  </label></div> <div class=\"form-check\"><input type=\"radio\" name=\"dateGroup\" id=\"ondate\" value=\"2\" checked=\"checked\" class=\"form-check-input\"> <label for=\"ondate\" class=\"form-check-label\">\n\t\t\t    Опубликовать ко времени\n\t\t\t  </label> <input"+(_vm._ssrAttr("disabled",_vm.visible != 2))+" id=\"ondate\" placeholder=\"YYYY-MM-DD HH:MM\" type=\"text\""+(_vm._ssrAttr("value",(_vm.publicationDate)))+"></div></div> <div class=\"d-flex mt-5 gap\"><button class=\"w-100 btn btn-lg btn-primary\">Сохранить</button> <button class=\"w-100 btn btn-lg btn-danger\">Отменить</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./client/pages/editor.vue?vue&type=template&id=7e76cc86&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./client/utils/api.js
var api = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./client/pages/editor.vue?vue&type=script&lang=js&
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


/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  data() {
    return {
      mode: 'new',
      editableId: null,
      title: '',
      text: '',
      file: null,
      visible: '1',
      publicationDate: null,
      picturePath: null
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])('user', ['USER']),

    maintitle() {
      return this.mode === 'new' ? 'Добавление новости' : 'Редактирование новости';
    }

  },
  methods: { ...Object(external_vuex_["mapActions"])('user', ['FETCH_USER']),

    async onSubmit() {
      let data = {
        'title': this.title,
        'text': this.text,
        'file': this.file,
        'visible': parseInt(this.visible),
        'publicationDate': this.publicationDate
      };

      if (this.editableId && this.mode == 'edit') {
        data['id'] = this.editableId;
      }

      data.link = api["a" /* default */].all;
      await this.$store.dispatch('news/PATCH_NEW', data);
      this.$router.push('/admin');
    },

    cancel() {
      this.$router.push('/admin');
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }

  },

  async created() {
    this.mode = this.$route.query.edit ? 'edit' : 'new';

    if (false) {}

    let id = this.$route.query.edit;
    if (!id) return;
    const response = await this.$axios.$get(api["a" /* default */].get(id));
    this.editableId = response.id, this.mode = 'edit', this.title = response.title, this.text = response.text, this.visible = response.visible, this.picturePath = response.picturePath, this.publicationDate = response.publicationDate;
  }

});
// CONCATENATED MODULE: ./client/pages/editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./client/pages/editor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "790563d6"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=editor.js.map