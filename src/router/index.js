import Vue from 'vue'
import Router from 'vue-router'
import Bienvenida from '../components/Bienvenida'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Bienvenida',
      component: Bienvenida
    }

  ]
})
