import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import HomeViewMobile from '../views/home-mobile/HomeViewMobile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => { 
      if (window.innerWidth < 992) {
        return import('../views/home-mobile/HomeViewMobile.vue');
      } else {
        return import('../views/home/HomeView.vue');
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/portfolio/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
