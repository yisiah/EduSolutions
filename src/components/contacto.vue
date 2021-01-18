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

.titulo {
  color: white;
  margin: auto;
  width: 70%;
  font-weight: bold;
  font-size: 2.0rem;
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
    <div>
        <div>
            <b-navbar  class="navbar" toggleable="lg" type="dark" >
                <b-navbar-brand href><img class="logoHeader" src="..\assets\LogoApp.png" alt="logo"> </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav class="centerNavElements">
                            <b-nav-item href="#">Bienvenida</b-nav-item>
                            <b-nav-item href="#">Sobre Nosotros</b-nav-item>
                            <b-nav-item href="#">Contactanos</b-nav-item>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar> <!--de quien es esto?--> <!--del navbar, si se quita esa madre ocurre error-->
        </div>
        <div class="maincontainer">
            <b-container fluid>
                
            </b-container>
        </div>
    </div>
</template>

<script>

export default {
    name: 'contacto',
    data() {
        return {

        }
    }
}

</script>
