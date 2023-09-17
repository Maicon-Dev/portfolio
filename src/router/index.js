
import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/main_page/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

export default router
