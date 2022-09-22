import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => {
      if (window.innerWidth/window.innerHeight > 1.5) {
        return import(/* webpackChunkName: "home" */ '../views/home/Home.vue');
      } else {
        return import(/* webpackChunkName: "home-mobile" */ '../views/home-mobile/HomeMobile.vue');
      }
    }
  },
  {
    path: '/applications',
    name: 'applications',
    component: () => {
      return import(/* webpackChunkName: "applications" */ '../views/app/Applications.vue')
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => {
      return import(/* webpackChunkName: "portfolio" */ '../views/portfolio/Portfolio.vue')
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => {
      return import(/* webpackChunkName: "order" */ '../views/order/Order.vue')
    }
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => {
      return import(/* webpackChunkName: "donate" */ '../views/donate/Donate.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => {
      return import(/* webpackChunkName: "contact" */ '../views/contact/Contact.vue')
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: () => {
      return import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
