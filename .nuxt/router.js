import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b62fc69a = () => interopDefault(import('..\\client\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _d6a00006 = () => interopDefault(import('..\\client\\pages\\editor.vue' /* webpackChunkName: "pages/editor" */))
const _8325a89c = () => interopDefault(import('..\\client\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _59f8fbb0 = () => interopDefault(import('..\\client\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _6f176920 = () => interopDefault(import('..\\client\\pages\\admin\\page\\_page.vue' /* webpackChunkName: "pages/admin/page/_page" */))
const _ef99abc2 = () => interopDefault(import('..\\client\\pages\\page\\_page.vue' /* webpackChunkName: "pages/page/_page" */))
const _2a2c48f2 = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _b62fc69a,
    name: "admin"
  }, {
    path: "/editor",
    component: _d6a00006,
    name: "editor"
  }, {
    path: "/signin",
    component: _8325a89c,
    name: "signin"
  }, {
    path: "/signup",
    component: _59f8fbb0,
    name: "signup"
  }, {
    path: "/admin/page/:page?",
    component: _6f176920,
    name: "admin-page-page"
  }, {
    path: "/page/:page?",
    component: _ef99abc2,
    name: "page-page"
  }, {
    path: "/",
    component: _2a2c48f2,
    name: "index"
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
