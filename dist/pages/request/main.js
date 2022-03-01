require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([16],{

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(215);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2df8a687_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(219);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(216)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2df8a687_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\request\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2df8a687", Component.options)
  } else {
    hotAPI.reload("data-v-2df8a687", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contentNewsList: []
    };
  },

  methods: {
    getNewsData: function getNewsData(type) {
      var _this = this;

      wx.showLoading({
        title: '加载中',
        mask: true
      });

      var fly = new __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default.a(); // 创建fly实例
      fly.get('https://v.juhe.cn/toutiao/index', {
        type: type,
        key: 'fc35d7872c25744ab4669c7d9dbcf15e'
      }).then(function (res) {
        wx.hideLoading();
        _this.contentNewsList = res.data.result.data;
      });
    }
  }
});

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("点击相关按钮获取对应的最新新闻")]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn mini-btn",
    attrs: {
      "type": "primary",
      "size": "mini",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.getNewsData('top')
      }
    }
  }, [_vm._v("头条")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn mini-btn",
    attrs: {
      "type": "primary",
      "size": "mini",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.getNewsData('junshi')
      }
    }
  }, [_vm._v("军事")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn mini-btn",
    attrs: {
      "type": "primary",
      "size": "mini",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.getNewsData('tiyu')
      }
    }
  }, [_vm._v("体育")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn mini-btn",
    attrs: {
      "type": "primary",
      "size": "mini",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.getNewsData('yule')
      }
    }
  }, [_vm._v("娱乐")])], 1), _vm._v(" "), _c('div', {
    staticClass: "content-list"
  }, _vm._l((_vm.contentNewsList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('div', {
      staticClass: "list-item"
    }, [_c('div', {
      staticClass: "list-item-content"
    }, [_c('div', {
      staticClass: "list-item-left"
    }, [_c('image', {
      attrs: {
        "src": item.thumbnail_pic_s
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "list-item-right"
    }, [_c('div', {
      staticClass: "article-title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "article-source"
    }, [_vm._v(_vm._s(item.author_name))]), _vm._v(" "), _c('div', {
      staticClass: "article-editTime"
    }, [_vm._v(_vm._s(item.date))])])])])])
  }))])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("Request")]), _vm._v(" "), _c('div', {
    staticClass: "page__desc"
  }, [_vm._v("网络请求，可以使用小程序原生 wx.request 进行操作，也可以使用第三方 flyio 网络库，本示例是基于 flyio 网络库。")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2df8a687", esExports)
  }
}

/***/ })

},[214]);
//# sourceMappingURL=main.js.map