import Vue from 'vue'

import VueRouter from 'vue-router'
import Router from 'vue-router'
Vue.use(VueRouter)

const HelloWorld = () => import('@/components/HelloWorld')
const H3015 = () => import('@/components/H3015')
const Result = () => import('@/components/Result')
const User = () => import('@/components/User')
const About = () => import('@/components/About')
const Abc = () => import('@/components/abc')
const New = () => import('@/components/new')
const New1 = () => import('@/components/New1')
const Login = () => import('@/components/Login')
const Profile = () => import('@/components/Profile')
const Num = () => import('@/components/Num')
const Other = () => import('@/components/Other')


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: "/HelloWorld"
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
    {
      path: '/user/:Id',
      component: User,
      meta: {
        title: '使用者'
      }
    },
    {
      path: '/h3015/:h3015Id',
      component: H3015
      ,
      meta: {
        title: 'H3015'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          redirect: 'profile',

        },
        {
          path: 'new',
          component: New,
          children: [{
            path: "new1",
            component: New1
          }]
        },
        {
          path: 'abc',
          component: Abc,
          meta: {
            title: Abc

          }

        },
        {
          path: 'login',
          component: Login,
          meta: {
            title: '登录'
          }
        },
        {
          path: 'profile',
          meta: '',
          component: Profile
        },
        {
          path: 'num/:numId',
          component: Num
        },

      ]
    },
  ]


})
// 前置勾子 在调用之前已经回调  
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title; // to从哪里到哪里 
  console.log(to)
  next()
})
router.afterEach((to, from) => {
  console.log("go");

})
export default router

new Vue({

})