import Vue from 'vue'
import Router from 'vue-router'
import ProductsDashboard from 'admin/pages/ProductsDashboard.vue'
import Settings from 'admin/pages/Settings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductsDashboard',
      component: ProductsDashboard
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ]
})
