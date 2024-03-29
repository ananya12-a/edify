import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: () => import(/* webpackChunkName: "about" */ '../views/graphView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import(/* webpackChunkName: "about" */ '../views/graphView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
