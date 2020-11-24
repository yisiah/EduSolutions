import Vue from 'vue'
import Router from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Bienvenida from '../components/Bienvenida'
import menu from '../components/menu'
import PrimerosPasosZoom from '../components/PrimerosPasosZoom'
import contenidoZoom from '../components/contenidoZoom'

Vue.use(Router)
Vue.use(BootstrapVueIcons)

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
    },
    {
      path: '/PrimerosPasosZoom',
      name: 'PrimerosPasosZoom',
      component: PrimerosPasosZoom
    },
    {
      path: '/contenidoZoom',
      name: 'contenidoZoom',
      component: contenidoZoom
    },
  ]
})
