import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/promote',
    name: 'promote',
    component: () => import('@/views/promote')
  }
]

const router = new VueRouter({
  routes
})

export default router
