import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import TaskDetailView from '@/views/TaskDetailView.vue'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/task/:id',
    name: 'task-detail',
    component: TaskDetailView,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router