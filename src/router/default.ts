import DefaultLayout from '@/layouts/Default.vue';

const defaultRoutes = [
  {
    path: '/',
    name: 'Default',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: (): Promise<typeof import('*.vue')> => import('@/views/report/Index.vue'),
      },
    ],
  },
];

export { defaultRoutes };
