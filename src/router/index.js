import { createRouter, createWebHashHistory } from 'vue-router'
import LibraryView from '../views/LibraryView.vue'
import ReadView from '../views/ReadView.vue'

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'library',
    component: LibraryView
  },
  {
    path: '/read/:id',
    name: 'read',
    component: ReadView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
