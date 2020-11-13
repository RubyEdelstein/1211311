import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2459a6fd = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _32cc7a6d = () => interopDefault(import('../pages/farms.vue' /* webpackChunkName: "pages/farms" */))
const _1b330fbe = () => interopDefault(import('../pages/farm/_id.vue' /* webpackChunkName: "pages/farm/_id" */))
const _441181c2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2459a6fd,
    name: "about"
  }, {
    path: "/farms",
    component: _32cc7a6d,
    name: "farms"
  }, {
    path: "/farm/:id?",
    component: _1b330fbe,
    name: "farm-id"
  }, {
    path: "/",
    component: _441181c2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
