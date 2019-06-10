import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'tuijian',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Tuijian.vue'),
    },
    {
      path: '/youshengshu',
      name: 'youshengshu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Youshengshu.vue'),
    },
    {
      path: '/xiangsheng',
      name: 'xiangsheng',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Xiangsheng.vue'),
    },
    {
      path: '/yinyue',
      name: 'yinyue',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Yinyue.vue'),
    },
    {
      path: '/ertong',
      name: 'ertong',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Ertong.vue'),
    },
    {
      path: '/renwen',
      name: 'renwen',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Renwen.vue'),
    },
    {
      path: '/qinggan',
      name: 'qinggan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Qinggan.vue'),
    },
    {
      path: '/lishi',
      name: 'lishi',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Lishi.vue'),
    },
    {
      path: '/keji',
      name: 'keji',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './mhome/Keji.vue'),
    },
    {
      path: '/paihang',
      name: 'paihang',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Paihang.vue'),
    },
    {
      path: '/tingdan',
      name: 'tingdan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Tingdan.vue'),
    },
    {
      path: '/zhibo',
      name: 'zhibo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Zhibo.vue'),
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Fenlei.vue'),
    },
    {
      path: '/free',
      name: 'free',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './xiangqing/Free.vue'),
    },
  ],
});
