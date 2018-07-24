import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { formatRoutes } from '@/utils/util'
import Layout from '@/components/layout/Layout'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow.
// so only in production use lazy-loading;

Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {
    path: '/',
    name: 'Dashboard',
    redirect: '/dashboard'
  }, {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [{
      path: 'index',
      name: 'Dashboard',
      component: import('@/views/dashboard/index')
    }]
  }
]

export const asyncRouterMap = [
  {
    path: '/system-setting',
    component: Layout,
    redirect: '/systemsetting/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '系统设置',
      icon: 'dashboard',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'users',
      component: () => import('@/views/dashboard/index'),
      name: 'users',
      meta: {
        title: '用户管理',
        icon: 'user',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'roles',
      component: () => import('@/views/dashboard/index'),
      name: 'roles',
      meta: {
        title: '角色管理',
        icon: 'peoples'
        // if do not set roles, means: this page does not require permission
      }
    }, {
      path: 'menus',
      component: () => import('@/views/dashboard/index'),
      name: 'menus',
      meta: {
        title: '菜单管理',
        icon: 'list'
        // if do not set roles, means: this page does not require permission
      }
    }, {
      path: 'depts',
      component: () => import('@/views/dashboard/index'),
      name: 'depts',
      meta: {
        title: '部门管理',
        icon: 'drag'
        // if do not set roles, means: this page does not require permission
      }
    }, {
      path: 'dicts',
      component: () => import('@/views/dashboard/index'),
      name: 'dicts',
      meta: {
        title: '字典管理',
        icon: 'icon'
        // if do not set roles, means: this page does not require permission
      }
    }, {
      path: 'logs',
      component: () => import('@/views/dashboard/index'),
      name: 'logs',
      meta: {
        title: '日志管理',
        icon: 'international'
        // if do not set roles, means: this page does not require permission
      }
    }]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: [].concat(...formatRoutes(store.state.menus), constantRouterMap)
})
