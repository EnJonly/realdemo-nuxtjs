exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return uptateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProfiles; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


// 用户登录
const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};

// 用户注册
const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
};

// 用户更新
const uptateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

// 获取用户信息
const getProfiles = name => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'Get',
    url: '/api/profiles/' + name
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.3.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=afd43466&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "settings-page"
  }, [_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\"" + _vm._ssrAttr("value", _vm.profile.image) + " class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\"" + _vm._ssrAttr("value", _vm.profile.username) + " class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">" + _vm._ssrEscape(_vm._s(_vm.profile.bio)) + "</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.profile.email) + " class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" minlength=\"8\"" + _vm._ssrAttr("value", _vm.profile.password) + " class=\"form-control form-control-lg\"></fieldset> <div class=\"btn btn-lg btn-primary pull-xs-right\">\n                Update Settings\n              </div></fieldset></form></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=afd43466&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.3.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&


// 仅在客户端加载 js-cookie 包
const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'SettingsIndex',
  data() {
    return {
      profile: {
        username: '',
        email: '',
        image: '',
        username: '',
        bio: '',
        password: ''
      }
    };
  },
  async mounted() {
    let {
      data
    } = await Object(user["a" /* getProfiles */])(this.user.username);
    this.profile = Object.assign({}, data.profile, this.user);
  },
  methods: {
    uptateSetting() {
      Object(user["d" /* uptateUser */])({
        user: this.profile
      }).then(res => {
        let userInfo = {
          ...this.user,
          ...this.profile
        };
        this.$store.commit('setUser', userInfo);
        // 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set('user', userInfo);
        this.$router.push({
          path: `/profile/${this.profile.username}`
        });
      });
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "61eef450"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map