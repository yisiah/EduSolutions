<template>
  <div id="app">
    <Bienvenida/>
    <router-view/>
  </div>
</template>

<script>
import Bienvenida from './components/Bienvenida.vue';
export default {
  name: 'App'

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #31495E;
}
</style>
