import Vue from 'vue'
import Router from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Bienvenida from '../components/Bienvenida'
import contacto from '../components/contacto'
import menu from '../components/menu'
import SobreNosotros from '../components/SobreNosotros'

import PrimerosPasosKhan from '../components/PrimerosPasosKhan'
import contenidoKhan from '../components/contenidoKhan'
import PrimerosPasosTeams from '../components/PrimerosPasosTeams'
import contenidoTeams from '../components/contenidoTeams'
import PrimerosPasosMeet from '../components/PrimerosPasosMeet'
import contenidoMeet from '../components/contenidoMeet'
import PrimerosPasosEdmodo from '../components/PrimerosPasosEdmodo'
import contenidoEdmodo from '../components/contenidoEdmodo'
import PrimerosPasosZoom from '../components/PrimerosPasosZoom'
import contenidoZoom from '../components/contenidoZoom'
import PrimerosPasosClass from '../components/PrimerosPasosClass'
import contenidoClass from '../components/contenidoClass'

Vue.use(Router)
Vue.use(BootstrapVueIcons)

export default new Router({
  scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
          return {selector: to.hash}
        } else if (savedPosition) {
          return savedPosition;
        } else {
          return {x: 0, y: 0}
        }
      },
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
<<<<<<< HEAD
      path: '/',
      name: 'contacto',
      component: contacto
=======
      path: '/SobreNosotros',
      name: 'SobreNosotros',
      component: SobreNosotros
>>>>>>> a8f5fb6be9a66cda06c3ba2a074813c703c6afdb
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
      path: '/contenidoKhan',
      name: 'contenidoKhan',
      component: contenidoKhan
    },{
      path: '/PrimerosPasosTeams',
      name: 'PrimerosPasosTeams',
      component: PrimerosPasosTeams
    },
    {
      path: '/contenidoTeams',
      name: 'contenidoTeams',
      component: contenidoTeams
    },{
      path: '/PrimerosPasosMeet',
      name: 'PrimerosPasosMeet',
      component: PrimerosPasosMeet
    },
    {
      path: '/contenidoMeet',
      name: 'contenidoMeet',
      component: contenidoMeet
    },{
      path: '/PrimerosPasosEdmodo',
      name: 'PrimerosPasosEdmodo',
      component: PrimerosPasosEdmodo
    },
    {
      path: '/contenidoEdmodo',
      name: 'contenidoEdmodo',
      component: contenidoEdmodo
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
    },{
      path: '/PrimerosPasosClass',
      name: 'PrimerosPasosClass',
      component: PrimerosPasosClass
    },
    {
      path: '/contenidoClass',
      name: 'contenidoClass',
      component: contenidoClass
    }
  ]
})
