import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import freshNews from '@/components/freshNews'
import vip from '@/components/vip'
import  noArdss from '@/components/noArdss'
// 有收货地址html
import haveAdress from '@/components/haveAdress'
//收货列表
import addressList from '@/components/addressList'
// 我的订单
import mylist from '@/components/mylist'
// 客服
import kefu from "@/components/kefu"

Vue.use(Router)

export default new Router({
  routes: [
  	{	//默认页面
  		path:'/',
  		redirect:'/home'
  	},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/freshNews',
      name: 'freshNews',
      component:freshNews
    },
    {
      path: '/vip',
      name: 'vip',
      component:vip
    },
    {
      path: '/cart',
      name: 'Cart',
      component : Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component : Mine,
      children:[
        {
            path:"/noArdss",
            component:noArdss
        },
        {
            path:"/haveAdress",
            component:haveAdress
        },
        {
            path:"/addressList",
            component:addressList
        },
        {
            path:"/kefu",
            component:kefu
        },
        {
            path:"/mylist",
            component:mylist
        }
        ]
    }
  ]
})
