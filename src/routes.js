import VueRouter from 'vue-router'
import Home from './components/Home'
import Cars from './components/Cars'
import Car from './components/Car'
import CarFull from './components/CarFull'
import error404 from './components/error404'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'carFull'
        }
      ]
    },
    {
      path: '/none',
      redirect: '/'
    },
    {
      path: '*',
      component: error404
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if  (to.hash) {
      return {selector: to.hash}
    }

    return {
      x: 0,
      y: 500
    }
  }
})