import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => {
      if (window.innerWidth/window.innerHeight > 1.5) {
        return import('../views/home/Home.vue');
      } else {
        return import('../views/home-mobile/HomeMobile.vue');
      }
    }
  },
  {
    path: '/app',
    name: 'app',
    component: () => {
      return import('../views/app/Application.vue')
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/portfolio/Portfolio.vue')
    }
  },
  {
    path: '/order',
    name: 'order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/order/Order.vue')
    }
  },
  {
    path: '/donate',
    name: 'donate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/donate/Donate.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/contact/Contact.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
