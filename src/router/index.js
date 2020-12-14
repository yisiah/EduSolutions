import Vue from 'vue'
import Router from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Bienvenida from '../components/Bienvenida'
import menu from '../components/menu'
import PrimerosPasosKhan from '../components/PrimerosPasosKhan'
import PrimerosPasosTeams from '../components/PrimerosPasosTeams'
import PrimerosPasosMeet from '../components/PrimerosPasosMeet'
import PrimerosPasosEdmodo from '../components/PrimerosPasosEdmodo'
import PrimerosPasosZoom from '../components/PrimerosPasosZoom'
import PrimerosPasosClassroom from '../components/PrimerosPasosClassroom'
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
      path: '/PrimerosPasosKhan',
      name: 'PrimerosPasosKhan',
      component: PrimerosPasosKhan
    },
    {
      path: '/PrimerosPasosTeams',
      name: 'PrimerosPasosTeams',
      component: PrimerosPasosTeams
    },
    {
      path: '/PrimerosPasosMeet',
      name: 'PrimerosPasosMeet',
      component: PrimerosPasosMeet
    },
    {
      path: '/PrimerosPasosEdmodo',
      name: 'PrimerosPasosEdmodo',
      component: PrimerosPasosEdmodo
    },
    {
      path: '/PrimerosPasosZoom',
      name: 'PrimerosPasosZoom',
      component: PrimerosPasosZoom
    },
    {
      path: '/PrimerosPasosClassroom',
      name: 'PrimerosPasosClassroom',
      component: PrimerosPasosClassroom
    },
    {
      path: '/contenidoZoom',
      name: 'contenidoZoom',
      component: contenidoZoom
    },
  ]
})
