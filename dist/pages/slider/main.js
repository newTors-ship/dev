require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([13],{

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(231);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bf19f7f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(234);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(232)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bf19f7f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\slider\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bf19f7f", Component.options)
  } else {
    hotAPI.reload("data-v-4bf19f7f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 232:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      sliderValue: '300',
      sliderMin: 100,
      sliderMax: 500,
      sliderValueText: ''
    };
  },

  methods: {
    sliderChange1: function sliderChange1(e) {
      console.log('滑动选择的值为：' + e.mp.detail.value);
    },
    sliderChange2: function sliderChange2(e) {
      this.sliderValue = e.mp.detail.value;
      console.log('滑动选择的值为：' + e.mp.detail.value);
    },
    sliderChange3: function sliderChange3(e) {
      this.sliderValue = e.mp.detail.value;
      this.sliderValueText = '\u6ED1\u52A8\u9009\u62E9\u7684\u503C\u4E3A\uFF1A ' + e.mp.detail.value;
    },
    sliderChange4: function sliderChange4(e) {
      this.sliderMin = e.mp.detail.value;
    },
    sliderChange5: function sliderChange5(e) {
      this.sliderMax = e.mp.detail.value;
    }
  }
});

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd page__bd_spacing"
  }, [_c('slider', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "change": _vm.sliderChange1
    }
  }), _vm._v(" "), _c('slider', {
    attrs: {
      "show-value": "",
      "value": "50",
      "eventid": '1'
    },
    on: {
      "change": _vm.sliderChange2
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title issues-content"
  }, [_vm._v("动态修滑块最大值与最小值(默认区间为[100,500])：")]), _vm._v(" "), _c('slider', {
    attrs: {
      "show-value": "",
      "value": _vm.sliderValue,
      "min": _vm.sliderMin,
      "max": _vm.sliderMax,
      "eventid": '2'
    },
    on: {
      "change": _vm.sliderChange3
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("滑动修改滑块最小值(100-200)：")]), _vm._v(" "), _c('slider', {
    attrs: {
      "show-value": "",
      "value": _vm.udpateSliderMinValue,
      "min": "100",
      "max": "200",
      "eventid": '3'
    },
    on: {
      "change": _vm.sliderChange4
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("滑动修改滑块最大值(900-1000)：")]), _vm._v(" "), _c('slider', {
    attrs: {
      "show-value": "",
      "value": _vm.updateSliderMaxValue,
      "min": "900",
      "max": "1000",
      "eventid": '4'
    },
    on: {
      "change": _vm.sliderChange5
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "slider-value-text"
  }, [_vm._v(_vm._s(_vm.sliderValueText))])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("Slider")]), _vm._v(" "), _c('div', {
    staticClass: "page__desc"
  }, [_vm._v("滑块，这里采用小程序原生的slider。")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4bf19f7f", esExports)
  }
}

/***/ })

},[230]);
//# sourceMappingURL=main.js.map