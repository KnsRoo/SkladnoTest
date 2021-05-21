import { wrapFunctional } from './utils'

export { default as NavBar } from '../..\\client\\components\\NavBar.vue'
export { default as NavBarAdmin } from '../..\\client\\components\\NavBarAdmin.vue'

export const LazyNavBar = import('../..\\client\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyNavBarAdmin = import('../..\\client\\components\\NavBarAdmin.vue' /* webpackChunkName: "components/nav-bar-admin" */).then(c => wrapFunctional(c.default || c))
