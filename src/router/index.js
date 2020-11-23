import Vue from 'vue'
import Router from 'vue-router'
import Bienvenida from '../components/Bienvenida'
import menu from '../components/menu'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: '/',
      component: Bienvenida
    },
    {
      path: '/',
      name: 'Bienvenida',
      component: Bienvenida
    },
    {
      path: '/menu',
      name: 'Menu',
      component: menu
    }

  ]
})
