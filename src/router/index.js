import { createRouter, createWebHistory } from 'vue-router'

import defaultRoutes from './default';
import serviceRoutes from './service';
import clientRoutes from './client';

const routes = [
  ...defaultRoutes,
  ...serviceRoutes,
  ...clientRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router