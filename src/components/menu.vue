<style>

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
  margin-top: 5%;
  width: 70%;
  font-weight: bold;
  font-size: 2.0rem;
}

.splash {
  margin: auto;
  width: 75%;
  height: 75%;
}

.buttonMenu {
  margin: auto;
  margin-top: 5%;
  margin-bottom: 0%;
}

.navbar{
  background-color: #414550;
  outline: 1px solid white;
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 0.5rem;
}

.centerNavElements{
  align-items: center;
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
                            <router-link :to="{ name: 'contacto'}"size="lg">
                              <b-nav-item href="contacto">Contactanos</b-nav-item>
                            </router-link>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar> <!--de quien es esto?-->
        </div>
        <div class="maincontainer">
            <b-container fluid>
                <b-row>
                    <h1 class="titulo">Elige entre nuestros cursos disponibles<br>
                        para empezar a aprender.</h1>
                </b-row>
                <b-row >
                    <b-col lg="4" class="pb-2 buttonMenu ">
                        <router-link :to="{ name: 'PrimerosPasosKhan'}"size="lg">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\khanA.png" alt="khanAcademy"></b-button>
                        </router-link>
                    </b-col>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <router-link :to="{ name: 'PrimerosPasosTeams'}"size="lg">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\teams.png" alt="teams"></b-button>
                        </router-link>
                    </b-col>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <router-link :to="{ name: 'PrimerosPasosMeet'}"size="lg">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\meet.png" alt="googleMeet"></b-button>
                        </router-link>
                    </b-col>
                </b-row>
                <b-row >
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <router-link :to="{ name: 'PrimerosPasosEdmodo'}"size="lg">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\edmodo.png" alt="edmodo"></b-button>
                        </router-link>
                    </b-col>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <router-link :to="{ name: 'PrimerosPasosZoom'}"size="lg">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\zoom.png" alt="zoom"></b-button>
                        </router-link>
                    </b-col>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <router-link :to="{ name: 'PrimerosPasosClass'}"size="lg">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\classroom.png" alt="googleClassroom"></b-button>
                        </router-link>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Menu',
    data() {
        return {

        }
    }
}

</script>
