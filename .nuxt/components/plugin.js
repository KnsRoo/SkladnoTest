import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  NavBar: () => import('../..\\client\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c)),
  NavBarAdmin: () => import('../..\\client\\components\\NavBarAdmin.vue' /* webpackChunkName: "components/nav-bar-admin" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
