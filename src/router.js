import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/servicio',
      name: 'servicio',
      component: () => import(/* webpackChunkName: "about" */ './views/Servicio.vue')
    },

    {
      path: '/fotos/:id',
      name: 'fotos',
      component: () => import(/* webpackChunkName: "about" */ './views/Fotos.vue')
    },
  ]
})
