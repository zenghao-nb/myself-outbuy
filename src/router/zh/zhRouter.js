export  default [
    // tablebar-我的
    {
        path: '/my',
        name: 'My',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../../views/My.vue')
    },

    // 登录
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../../views/zh/Login.vue')
    },

    {
        path: '/cashcoupo',
        name: 'CashCoupo',
        component: () => import(/* webpackChunkName: "about" */ '../../views/zh/CashCoupo.vue')
    },

]