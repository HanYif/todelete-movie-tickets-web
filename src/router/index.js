import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/utils/auth'
import Root from '@/app/Root'
import Layout from '@/app/Layout'
import notFound from './routes/notFound'
import home from './routes/home'
import articles from './routes/articles'
import login from './routes/login'
import logout from './routes/logout'
import iView from 'iview'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Root,
      children: [
        {
          // url: http://localhost:8080/#/
          path: '/',
          component: Layout,
          children: [
            home,
            articles
          ],
          // 用于router.beforeEach钩子函数登录判断；
          // 通过对to.matched的判断是否登录；
          meta: {
            requiresAuth: true
          }
        },
        login,
        logout,
        notFound
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
})

export default router
