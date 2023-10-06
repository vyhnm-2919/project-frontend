import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/tasks/index.vue'),
      children: [
        {
          path: '/tasks/new',
          name: 'tasks-new',
          component: () => import('../views/tasks/new.vue')
        }
      ]
    }
  ]
});

export default router;
