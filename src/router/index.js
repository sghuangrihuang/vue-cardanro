import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/page/home/home'
import Home from '@/page/home/home'
import sort from '@/page/sort/sort'
import search from '@/page/search/search'
import users from '@/page/users/users'
import userinfo from '@/page/users/children/userinfo'
import address from '@/page/users/children/address'
import collection from '@/page/users/children/collection'
import comment from '@/page/users/children/comment'
import purchase from '@/page/users/children/purchase'
import login from '@/page/login/login'
import register from '@/page/register/register'
import shopcart from '@/page/shopcart/shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { active: 0 }
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort,
      meta: { active: 1 },
      children: [{
        path: '/sort/:id',
        component: sort
      }]
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/users',
      name: 'users',
      component: users,
      meta: { active: 3, isUsers: true },
      children: [{
        path: 'userinfo',
        meta: { active: 3, isUsers: false, title: '个人资料' },
        component: userinfo
      },{
        path: 'address',
        meta: { active: 3, isUsers: false, title: '收货地址' },
        component: address
      },{
        path: 'purchase',
        meta: { active: 3, isUsers: false, title: '购物记录' },
        component: purchase
      },{
        path: 'comment',
        meta: { active: 3, isUsers: false, title: '评论' },
        component: comment
      },{
        path: 'collection',
        meta: { active: 3, isUsers: false, title: '收藏' },
        component: collection
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
