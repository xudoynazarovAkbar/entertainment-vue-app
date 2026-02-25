import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/router'
import { useAuth } from '@/composables/useAuth'

const router = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
})

router.beforeEach((to) => {
  const { isAuthenticated } = useAuth()

  if (to.meta.requiresAuth && !isAuthenticated()) {
    return { name: 'Auth' }
  }

  if (to.name === 'Auth' && isAuthenticated()) {
    return { name: 'Home' }
  }
})

export default router
