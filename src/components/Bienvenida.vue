<style>

.container-fluid{
  padding: 0;
}

.maincontainer {
  /*border-radius: 25px;*/
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-color: #31495E;
}

.logoHeader {
  float: left;
  width: 12%;
  height: 12%;
}

.footer {
  padding: 20px;
  width: 100%;
  background-color: #31495E;
  padding-bottom: 3%;
}

.tituloB {
  color: white;
  margin: auto;
  margin-top: 10px;
  width: 70%;
  font-weight: bold;
  font-size: 2.5rem;
}

.button {
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 10px;
  background-color: #a876fe;
  color: white;

}

.splash {
  margin: auto;
  width: 75%;
  height: 75%;
}

.navbar{
  background-color: #414550;
  outline: 1px solid white;
}

.centerNavElements{
  align-items: center;
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 0.5rem;
}

</style>

<template>
<!--b-container fluid-->
    <div>
        <div>
            <b-navbar  class="navbar" toggleable="lg" type="dark" >
                <b-navbar-brand href><img class="logoHeader" src="..\assets\LogoApp.png" alt="logo"> </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav class="centerNavElements">
                          <router-link :to="{ name: 'Bienvenida'}" tag="span" size="lg">
                              <b-nav-item href="Bienvenida">Bienvenida</b-nav-item>
                          </router-link>
                          <router-link :to="{ name: 'SobreNosotros'}" tag="span" size="lg">
                              <b-nav-item href="SobreNosotros">Sobre Nosotros</b-nav-item>
                          </router-link>
                          <router-link :to="{ name: 'contacto'}"size="lg">
                            <b-nav-item href="contacto">Contactanos</b-nav-item>
                          </router-link>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar> <!--de quien es esto?--> <!--del navbar, si se quita esa madre ocurre error-->
        </div>
        <div class="maincontainer">
            <b-container fluid>
                <b-row>
                    <h1 class="tituloB">Todo el conocimiento al alcance de tus manos.<br>
                        Inicie a usar cualquier herramienta colaborativa hoy.</h1>
                </b-row>
                <b-row>
                  <router-link :to="{ name: 'Menu'}" tag="span" size="lg" style ="display:block; margin-left:auto; margin-right:auto; margin-top:15px; margin-bottom:15px;">
                      <b-button class="button">Inicia</b-button>
                  </router-link>
                </b-row>
                <b-row>
                  <img class="splash" src="..\assets\splash.png" alt="logo">
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Bienvenida',
    data() {
        return {

        }
    }
}

</script>
