export default {
  path: '/',
  component: resolve => require(['@/app/Home'], resolve),
  children: [
    {
      path: '/',
      component: resolve => require(['@/app/Home/Dashboard'], resolve)
    },
    {
      path: '/movie_detail/:id',
      component: resolve => require(['@/app/Home/MovieDetail'], resolve)
    }

  ]
}
