import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: () =>import('./components/Introduce.vue')
    },
    {
      path: '/carrea',
      name: 'carrea',
      component: () => import('./components/Carrea.vue')
    },
    {
      path: '/gh-project',
      name: 'gh-project',
      component: () => import('./components/Gh-Project.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./components/Contact.vue')
    },
  ]
})