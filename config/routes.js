const routes = [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      // 首页
      {
        path: '/',
        redirect: '/welcome',
      },
      // 欢迎页
      {
        path: '/welcome',
        name: '欢迎页',
        icon: 'SmileOutlined',
        component: './Welcome',
      },
      // 功能页
      {
        path: '/detail',
        name: '功能页',
        icon: 'BankOutlined',
        routes: [
          {
            path: './instruction',
            name: '使用说明',
            component: './detail/Instruction',
          },
          {
            path: './method',
            name: '各种方法',
            component: './detail/Method',
          },
        ],
      },
    ],
  },
];

export default routes;
