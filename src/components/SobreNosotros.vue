<style>

.container-fluid{
  padding: 0;
}

.maincontainerSN {
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

.tituloS {
  color: white;
  margin: auto;
  margin-top: 10px;
  width: 90%;
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

.columnas {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  width: 50%;
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
                            <b-nav-item href="#">Sobre Nosotros</b-nav-item>
                            <b-nav-item href="#">Contactanos</b-nav-item>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div class="maincontainerSN">
            <b-container fluid>
                <b-row>
                    <h1 class="tituloS" style="font-size:6.5rem; margin-top:5%; margin-bottom:5%;">SOBRE NOSOTROS</h1>
                </b-row>
            </b-container>
        </div>
        <div style="height:100%; background-color:white; position:relative;left: 0; right: 0;">
                <h2 class="tituloS" style="color:#202020; margin-top:2%; margin-bottom:2%; padding-top:30px;">¿Quienes somos?</h2>
                <b-card-text class="text-justify" style=" margin:auto; width:80%;">
                  <b>EduSolutions</b> es una pequeña empresa de desarrollo de software, fundada en la ciudad de Poza Rica, Veracruz,
                  integrada por cinco estudiantes del Instituto Tecnologico Superior de Poza Rica. Durante el ultimo semestre de clases,
                  EduSolutions ha tomado el sector informatico por sorpresa; llevando a cabo el desarrollo de multiples proyectos y coordinando
                  los esfuerzos de un diverso equipo de trabajo en distintas labores y responsabilidades, con la finalidad de salir adelante y lograr
                  el exito como una empresa informatica.
                </b-card-text >
                <b-row style="width:85%; margin:auto; padding-top:30px; padding-bottom:3%;">
                    <b-card-group>
                          <b-card title="NUESTRA META" class="lightCard">
                            <b-card-text class="text-justify">
                              Desarrollar aplicaciones de software encaminadas a fomentar nuestra buena reputación a través
                              de su calidad, difundiendo nuestra imagen con honestidad, integridad, transparencia y responsabilidad,
                              para brindar información y productos veraces, claros y contrastables, manteniendo la confianza y estima de nuestros clientes.
                            </b-card-text>
                          </b-card>
                          <b-card title="NUESTRA MISION" class="lightCard">
                            <b-card-text class="text-justify">
                              <ul>
                                <li>Preservar e impulsar nuestra imagen y reputación.</li>
                                <li>Gestionar la comunicación de forma proactiva y planificada con nuestros clientes.</li>
                                <li>Colaborar activamente en la generación de cultura interna.</li>
                                <li>Desarrollar productos de alta calidad, siempre mejorando.</li>
                              </ul>
                            </b-card-text>
                          </b-card>
                          <b-card title="NUESTRA VISION" class="lightCard">
                            <b-card-text class="text-justify">
                              Ser líderes en innovación y diseño, y proveer la mejor experiencia del usuario cada día,
                               logrando el máximo rendimiento con cada producto que traemos al mercado.
                            </b-card-text>
                          </b-card>
                    </b-card-group>
                </b-row>
                <div style="background-color:#31495E; position:relative;left: 0; right: 0;">
                  <b-row style="width:100%; margin:auto; padding-top:20px;">
                      <b-card-text class="text-justify" style=" margin:auto; width:80%;color:white;">
                        <b>INTEGRANTES:</b>
                        <p>
                            <ul class="columnas">
                              <li>Yisiah García Montalvo</li>
                              <li>Aldair Hernández Moreno</li>
                              <li>Jonathan Licona Maldonado</li>
                              <li>Álvaro Sánchez Castañón</li>
                              <li>Carlos Daniel Rodríguez Pérez</li>
                            </ul>
                        </p>
                      </b-card-text >
                  </b-row>
                </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'SobreNosotros',
    data() {
        return {

        }
    }
}

</script>
