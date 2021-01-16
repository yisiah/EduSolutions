<style>

.maincontainer {
  /*border-radius: 25px;*/
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
  background-color: #31495E;
}

.logoHeader {
  float: left;
  width: 12%;
  height: 12%;
}

.buttonImage{
  width: 30%;
  height: 30%;
}

.footer {
  padding: 20px;
  width: 100%;
  background-color: #31495E;
  padding-bottom: 3%;
}

.titulo {
  color: white;
  margin: auto;
  margin-top: 3%;
  width: 70%;
  font-weight: bold;
  font-size: 3.5rem;
}

.splash {
  margin: auto;
  width: 75%;
  height: 75%;
}

.buttonMenu {
  margin: auto;
  margin-top: 3%;
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

.list{
  line-height: 150%;
  font-size: 150%;
  width: 50%;
  padding-top: 3%;
  margin: auto;
  text-align: left;
}

.buttonList {
  width: 10%;
  background-color: #414550;
  color: white;
  float: right;
  text-align: center;
  font-size: 80%;
}

</style>

<template>
<!--b-container fluid-->
    <div>
        <div>
            <b-navbar class="navbar" toggleable="lg" type="dark">
                <b-navbar-brand href><img class="logoHeader" src="..\assets\LogoApp.png" alt="logo"></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav class="centerNavElements">
                            <router-link :to="{ name: 'Bienvenida'}"size="lg">
                            <b-nav-item href="Bienvenida">Bienvenida</b-nav-item>
                            </router-link>
                            <b-nav-item href="#">Sobre Nosotros</b-nav-item>
                            <b-nav-item href="#">Contactanos</b-nav-item>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar> <!--de quien es esto?-->
        </div>
        <div class="maincontainer">
            <b-container fluid>
                <b-row>
                    <h1 class="titulo">PRIMEROS PASOS</h1>
                </b-row>
                <b-row>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\classroom.png" alt="khan"></b-button>
                    </b-col>
                </b-row>
                  <b-list-group class="list">
                  <b-list-group-item variant="secondary">
                    ¿Como ingresar a ClassRoom?
                    <router-link :to="{ name: 'contenidoClass'}" class="buttonList" size="lg" > Ir </router-link>
                  </b-list-group-item>
                  <b-list-group-item>
                    ****
                    <router-link :to="{ name: 'siguiente'}" class="buttonList" size="lg" > Ir </router-link>
                  </b-list-group-item>
                  <b-list-group-item variant="secondary">
                    ****.
                    <router-link :to="{ name: 'siguiente'}" class="buttonList" size="lg" > Ir </router-link>
                  </b-list-group-item>
                  <b-list-group-item>
                    ****.
                    <router-link :to="{ name: 'siguiente'}" class="buttonList" size="lg" > Ir </router-link>
                  </b-list-group-item>
                </b-list-group>
            </b-container>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PrimerosPasosClass',
    data() {
        return {

        }
    }
}

</script>
