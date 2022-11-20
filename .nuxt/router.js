import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29857e98 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _5f9b14e9 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _d8005ec2 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _6c74f55f = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _992c71a6 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _41233212 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _533f38ac = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _29857e98,
    children: [{
      path: "",
      component: _5f9b14e9,
      name: "home"
    }, {
      path: "/login",
      component: _d8005ec2,
      name: "login"
    }, {
      path: "/register",
      component: _d8005ec2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _6c74f55f,
      name: "profile"
    }, {
      path: "/settings",
      component: _992c71a6,
      name: "settings"
    }, {
      path: "/editor",
      component: _41233212,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _533f38ac,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
