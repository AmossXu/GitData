import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/* Router Modules */
import componentsRouter from './Modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import treeTableRouter from './modules/tree-table'
import nestedRouter from './modules/nested'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  {
    path: '/auth-redirect', component: () => import('@/views/login/authredirect'), hidden: true
  },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '', // 首页
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard'
      // meta: { title: 'dashboard', ico}
    }]
  },

  {
    path: '/orders', // 订单管理
    component: Layout,
    // redirect: ''   重定向
    children: [
      {
        path: 'index',
        name: 'Order',
        component: () => import('@/views/orders/index'), // orders/index.vue 页面没做
        meta: { title: '订单管理', icon: 'dingdan' }
      }
    ]
  },

  {
    path: '/product', // 产品管理
    component: Layout,
    children: [
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/product/product'), // product.vue 没做
        meta: { title: '产品管理', icon: 'chanpin' }
      }
    ]
  },

  {
    path: '/report', // 统计管理
    component: Layout,
    redirect: '/report/order', // 重定向到订单管理
    name: 'Report',
    meta: { title: '统计管理', icon: 'report' },
    children: [
      {
        path: 'order',
        name: 'OrderCount',
        component: () => import('@/views/report/order/index'), // index.vue 没做
        meta: { title: '订单统计', icon: 'dingdantongji' }
      },
      {
        path: 'product',
        name: 'ProductCount',
        component: () => import('@/views/report/product/index'), //  index.vue 没做
        meta: { title: '产品统计', icon: 'chanpingtongji' }
      },
      {
        path: 'clicks',
        name: 'ClicksCount',
        component: () => import('@/views/report/clicks/index'), // index.vue 没做
        meta: { title: '点击量统计', icon: 'dianjiliangtongji' }
      }
    ]
  },

  {
    path: '/users',
    component: Layout,
    redirect: '/users/user',
    name: 'Users',
    meta: { title: '用户管理', icon: 'usersmanage' },
    children: [
      {
        path: 'user',
        name: 'UserManage',
        component: () => import('@/views/users/user'), //  普通用户管理页面   user.vue
        meta: { title: '普通用户管理', icon: 'usermanage' }
      },

      {
        path: 'comuser',
        name: 'ComuserManage',
        component: () => import('@/views/users/comuser'), //  企业用户管理页面   comuser.vue
        meta: { title: '企业用户管理', icon: 'comusermanage' }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '样例', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '树图', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '活动', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '嵌套的模板',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '菜单1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: '菜单2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '外部链接', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
