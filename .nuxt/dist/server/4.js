exports.ids = [4];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.3.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=16ec4406&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "auth-page"
  }, [_vm._ssrNode("<div class=\"container page\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">", "</div>", [_vm._ssrNode("<h1 class=\"text-xs-center\">" + _vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')) + "</h1> "), _vm._ssrNode("<p class=\"text-xs-center\">", "</p>", [_vm.isLogin ? _c('nuxt-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Need an account?")]) : _c('nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Have an account?")])], 1), _vm._ssrNode(" <ul class=\"error-messages\">" + _vm._ssrList(_vm.errors, function (messages, field) {
    return _vm._ssrList(messages, function (message, index) {
      return "<li>" + _vm._ssrEscape(_vm._s(field) + " " + _vm._s(message)) + "</li>";
    });
  }) + "</ul> <form>" + (!_vm.isLogin ? "<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.username) + " class=\"form-control form-control-lg\"></fieldset>" : "<!---->") + " <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\" required=\"required\"" + _vm._ssrAttr("value", _vm.user.email) + " class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" required=\"required\" minlength=\"8\"" + _vm._ssrAttr("value", _vm.user.password) + " class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.isLogin ? 'Sign in' : 'Sign up') + "\n          ") + "</button></form>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=16ec4406&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.3.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&


// 仅在客户端加载 js-cookie 包
const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticated',
  name: 'LoginIndex',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }
  },
  data() {
    return {
      user: {
        username: '',
        email: 'enjonly@163.com',
        password: '12345678'
      },
      errors: {} // 错误信息
    };
  },

  methods: {
    async onSubmit() {
      try {
        // 提交表单请求登录
        const {
          data
        } = this.isLogin ? await Object(user["b" /* login */])({
          user: this.user
        }) : await Object(user["c" /* register */])({
          user: this.user
        });

        // console.log(data)
        // TODO: 保存用户的登录状态
        this.$store.commit('setUser', data.user);

        // 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set('user', data.user);

        // 跳转到首页
        this.$router.push('/');
      } catch (err) {
        // console.log('请求失败', err)
        this.errors = err.response.data.errors;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b015c9a0"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map