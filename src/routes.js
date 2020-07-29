import VueRouter from 'vue-router'
import Home from './components/Home'
import Cars from './components/Cars'
import Car from './components/Car'
import CarFull from './components/CarFull'

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