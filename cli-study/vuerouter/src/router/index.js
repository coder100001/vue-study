import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const HomeMessage = () => import('@/components/HomeMessage')

const Account = () => import('@/components/Account')
const User = () => import('@/components/User')


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: "/home",
      meta: {
        title:"default",
      },
    },
    {
      path: '/home',
      meta: {
        title:"home",
      },
      component: Home,
      children:[
        {
          path: 'news',
          component: HomeMessage,
        }
      ]
    },
    {
      path: '/account',
      component: Account,
      meta: {
        title:"account",
      },
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title:"user",
      },
    },
  ],
  mode:"history",
  activeClass: "active",
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

router.afterEach((to, from) => {
  // document.title = to.matched[0].meta.title
})

export default router