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
  height:100vh;

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


</style>

<template>
<!--b-container fluid-->
    <div>
        <div>
            <b-navbar  toggleable="lg" type="light" variant="info">
                <b-navbar-brand href><img class="logoHeader" src="..\assets\LogoApp.png" alt="logo"></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav>
                            <b-nav-item href="#">Bienvenida</b-nav-item>
                            <b-nav-item href="#">Sobre Nosotros</b-nav-item>
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
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\khanA.png" alt="khanAcademy"></b-button>
                    </b-col>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\teams.png" alt="teams"></b-button>
                    </b-col>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <b-button variant="light" size="lg"><img width="120" height="120" src="..\assets\meet.png" alt="googleMeet"></b-button>
                    </b-col>
                </b-row>
                <b-row >
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <b-button variant="info" size="lg"><img width="120" height="120" src="..\assets\edmodo.png" alt="edmodo"></b-button>
                    </b-col>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <b-button variant="info" size="lg"><img width="120" height="120" src="..\assets\zoom.png" alt="zoom"></b-button>
                    </b-col>
                    <b-col lg="4" class="pb-2 buttonMenu">
                        <b-button variant="info" size="lg"><img width="120" height="120" src="..\assets\classroom.png" alt="googleClassroom"></b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
    <!--footer class="footer">
    </footer>
<!--/b-container-->
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
