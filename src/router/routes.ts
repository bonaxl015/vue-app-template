export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'tabbar.home',
          keepAlive: true
        }
      },
      {
        path: 'list',
        component: () => import('@/views/list/index.vue'),
        meta: {
          title: 'tabbar.list',
          keepAlive: true
        }
      },
      {
        path: 'member',
        component: () => import('@/views/member/index.vue'),
        meta: {
          title: 'tabbar.member',
          keepAlive: true
        }
      }
    ]
  }
]

export default routes
