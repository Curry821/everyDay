import Vue from 'vue'
import Router from 'vue-router'
// 主页面
import Home from '@/components/Home'
import map from '@/components/Map'
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
//商品详情
import detail from "@/components/detail"

Vue.use(Router)

export default new Router({
  routes: [
  	{	//默认页面
  		path:'/',
  		redirect:'/home'
  	},
    // 首页
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/detail',
      name:'detail',
      component:detail
    },
    //新鲜事
    {
      path: '/freshNews',
      name: 'freshNews',
      component:freshNews
    },
    // 会员+
    {
      path: '/vip',
      name: 'vip',
      component:vip
    },
    //购物车
    {
      path: '/cart',
      name: 'Cart',
      component : Cart
    },
    {
      path: '/mapa',
      name: 'map',
      component :map
    },
    //个人中心
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
