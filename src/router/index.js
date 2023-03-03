import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about us',
    name: 'about us',
    component: () => import('../views/AboutUsView.vue')

  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import('../views/RegisterView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
