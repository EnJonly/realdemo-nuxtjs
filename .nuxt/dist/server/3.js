exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


// 获取公共文章列表
const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};

// 获取公共文章列表
const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
    // headers: {
    //   // 添加用户身份，数据格式：Token空格Token数据
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDgxMTYsInVzZXJuYW1lIjoibHB6OTk5IiwiZXhwIjoxNTk3NzQxNTA4fQ.2yO8Fss4hYnvsIN2UYHsutQ1hmYqSSAA-UrIRnP4DOY`
    // }
  });
};

// 添加点赞
const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};

// 取消点赞
const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};

// 获取文章详情
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};

// 获取文章评论
const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.3.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=4a5262fd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "profile-page"
  }, [_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img" + _vm._ssrAttr("src", _vm.user.image) + " class=\"user-img\"> <h4>" + _vm._ssrEscape(_vm._s(_vm.user.username)) + "</h4> <p>" + _vm._ssrEscape("\n            " + _vm._s(_vm.user.bio) + "\n          ") + "</p> <button class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>" + _vm._ssrEscape("\n             \n            Follow " + _vm._s(_vm.user.username) + "\n          ") + "</button></div></div></div></div> <div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><div class=\"articles-toggle\"><ul class=\"nav nav-pills outline-active\">" + _vm._ssrList(_vm.taps, function (item, index) {
    return "<li class=\"nav-item\"><a" + _vm._ssrAttr("href", `/profile/${_vm.user.username}?t=${index}`) + _vm._ssrClass("nav-link", {
      active: +_vm.active === index
    }) + ">" + _vm._ssrEscape("\n                " + _vm._s(item) + "\n              ") + "</a></li>";
  }) + "</ul></div> " + _vm._ssrList(_vm.acticleList, function (item, index) {
    return "<div class=\"article-preview\"><div class=\"article-meta\"><a href><img" + _vm._ssrAttr("src", item.author.image) + "></a> <div class=\"info\"><a href class=\"author\">" + _vm._ssrEscape(_vm._s(item.author.username)) + "</a> <span class=\"date\">" + _vm._ssrEscape(_vm._s(_vm._f("date")(item.updatedAt, 'MMM DD, YYYY'))) + "</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i>" + _vm._ssrEscape(" " + _vm._s(item.favoritesCount) + "\n            ") + "</button></div> <a href class=\"preview-link\"><h1>" + _vm._ssrEscape(_vm._s(item.title)) + "</h1> <p>" + _vm._ssrEscape(_vm._s(item.description)) + "</p> <span>Read more...</span></a></div>";
  }) + " <div class=\"article-preview\"" + _vm._ssrStyle(null, null, {
    display: _vm.acticleList.length === 0 ? '' : 'none'
  }) + ">\n          No articles are here... yet.\n        </div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=4a5262fd&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.3.0@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&


const getArtList = function (t = 0, name) {
  return Object(api_article["d" /* getArticles */])(t == 0 ? {
    author: name
  } : {
    favorited: name
  });
};
/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'UserProfile',
  async asyncData({
    query,
    store
  }) {
    const {
      data
    } = await getArtList(query.t, store.state.user.username);
    return {
      taps: ['My Articles', 'Favorited Articles'],
      acticleList: data.articles,
      active: query.t || 0
    };
  },
  data() {
    return {};
  },
  async mounted() {
    // const {data} = await getArticles({
    //   favorited: this.user.username,
    //   limit: 5,
    //   offset:0
    // })

    // console.log(data)
  },
  methods: {
    handleDel(article) {
      Object(api_article["b" /* deleteFavorite */])(article.slug).then(async () => {
        const {
          data
        } = await getArtList(this.active, this.user.username);
        this.acticleList = data.articles;
      });
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "acb929a0"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map