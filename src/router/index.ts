import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'student',
      component: () => import('@/modules/StudentsList.vue'),
    },
    {
      path: '/:id',
      name: 'student-detail',
      component: () => import('@/modules/StudentDetail.vue'),
      props: true,
    },
  ],
});

export default router;
