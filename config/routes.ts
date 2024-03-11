export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
    ],
  },
  { name: '首页', path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name: 'BI智能分析(同步)',
    path: '/add_chart',
    icon: 'AreaChartOutlined',
    component: './AddChart',
  },
  {
    name: 'BI智能分析(异步)',
    path: '/add_chart_async',
    icon: 'AreaChartOutlined',
    component: './AsyncAddChart',
  },
  { name: '我的图表', path: '/my_chart', icon: 'pieChart', component: './MyChart' },
  {
    name: '查看图表',
    path: '/viewChartData/:id',
    icon: 'checkCircle',
    component: './ViewChartData',
    hideInMenu: true,
  },

  {
    name: '管理员页面',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
