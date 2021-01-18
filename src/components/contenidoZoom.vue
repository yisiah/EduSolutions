<style>

.maincontainerZoom {
    /*border-radius: 25px;*/
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    background-color: #2d8cff;
}

.logoHeader {
    float: left;
    width: 12%;
    height: 12%;
}

.logoSidebar {
    width: 70%;
    height: auto;
    padding-bottom: 5%;
}

.buttonImage {
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
    font-size: 3rem;
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

.navbar {
    background-color: #414550;
    outline: 1px solid white;
}

.centerNavElements {
    align-items: center;
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 0.5rem;
}

.list {
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

.darkCard {
    /*width: 500px;
    height: 500px;*/
    background-color: rgba(255, 255, 255, 0.8);
    align: center;
}

.lightCard {
    /*width: 500px;
    height: 500px;*/
    background-color: #ffffff;
    align: center;
}

.capturaPantalla {
    align: center;
    margin-top: 2%;
    margin-bottom: 3%;
    border:3px solid white;
    border-radius: 3px;
}

.icono{
    width: 25%;
}

.card-img-right{
    margin-top: auto;
    margin-bottom: auto;
    border:5px solid white;
}

.card-img-left{
    margin-top: auto;
    margin-bottom: auto;
    border:5px solid white;
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
                        <router-link :to="{ name: 'Bienvenida'}" tag="span" size="lg">
                            <b-nav-item href="Bienvenida">Bienvenida</b-nav-item>
                        </router-link>
                        <b-nav-item href="#">Sobre Nosotros</b-nav-item>
                        <b-nav-item href="#">Contactanos</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!--de quien es esto?-->
    </div>

    <div class="maincontainerZoom">
        <b-container fluid>
            <div>
                <b-button class="logoHeader" variant="outline-light" v-b-toggle.sidebar-1>
                    <b-icon icon="card-list" aria-hidden="true"></b-icon> Contenidos
                </b-button>
                <b-sidebar id="sidebar-1" shadow>
                    <img class="logoSidebar" src="..\assets\logoZoom.png">
                    <div class="accordion mt-4" role="tablist">
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button href="#acceder" block variant="info">¿Como accedo a Zoom?</b-button>
                            </b-card-header>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button href="#cuenta" block variant="info">¿Como creo una cuenta?</b-button>
                            </b-card-header>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-3 variant="info">Primeros pasos</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                                  <b-col>
                                      <b-row>
                                          <b-button href="#anfitrion" block variant="light">Anfitrión</b-button>
                                      </b-row>
                                      <b-row>
                                          <b-button href="#invitado" block variant="light">Invitado</b-button>
                                      </b-row>
                                  </b-col>
                              </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block variant="info">
                                    <router-link :to="{ name: 'Menu'}" tag="b-card-text">Otros cursos</router-link>
                                </b-button>
                            </b-card-header>
                        </b-card>
                    </div>
                </b-sidebar>
            </div>
            <!-- inicio contenido -->
            <div class=" container mt-4">
                <h2 class="titulo mb-3" id="acceder">¿Como accedo a Zoom?</h2>
                <b-row class="mb-2">
                  <b-col>
                      <b-card class="lightCard" title="Ingreso desde navegador">
                          <b-card-text class="text-justify">
                              El primer paso para ingresar es buscar desde el navegador de su preferencia
                              "Zoom". A continuacion dará clic en el primer resultado que aparece
                              entre los resultados de las busquedas.
                          </b-card-text>
                      </b-card>
                  </b-col>
                  <b-col>
                      <b-card class="lightCard" title="Ingreso desde link">
                          <b-card-text class="text-justify">
                            Si desea ingresar ahora al sitio para poder probarlo puede ingresar mediante
                            el siguiente Link, el cual le redireccionará a la pagina.
                            <br>
                            <div class="text-center">
                              <b-link href="https://zoom.us/">Ir a la plataforma</b-link>
                            </div>
                          </b-card-text>
                      </b-card>
                  </b-col>
                </b-row>
                <img src="..\assets\pant1-zoom.png" alt="pant1" class="capturaPantalla">
              </div>
              <div class=" container mt-4">
                <h2 class="titulo mb-3" id ="cuenta">¿Como creo una cuenta?</h2>
                <b-row class="mb-2">
                  <b-col>
                    <b-card title="Pasos" img-src="https://i.imgur.com/jYVUfmr.png" img-right class="mb-3">
                      <b-card-text class="text-justify" style="margin-top:8%;">
                        <ol>
                          <li>Seleccione el botón <b>"Registrese, es gratuito"</b></li>
                          <li>Confirme su fecha de nacimiento</li>
                          <li>Ingrese con su correo electrónico o alguna de las alternativas.</li>
                        </ol>
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </div>
              <div class=" container mt-4">
                <h2 class="titulo mb-3" id="anfitrion">Primeros pasos (Anfitrión)</h2>
                <div class="mb-3">
                  <b-card title="Crear un equipo" img-src="https://i.imgur.com/s6vMA6B.png" img-right>
                    <b-card-text class="text-justify">
                      <ol>
                        <li>Vaya a la página principal de <b>Zoom</b>.</li>
                        <li>Coloque el mouse sobre <b>"Ser anfitrión de una reunión."</b></li>
                        <li>Elija una de las tres opciones:</li>
                        <img src="../assets/pant3-zoom.png" style="display:block; margin-left:auto; margin-right:auto">
                        <li>
                          Si usted no cuenta con el cliente de <b>Zoom</b> instalado este comenzará a descargarse.
                            <ul><br>
                              <li>Si no comienza a descargarse el cliente de Zoom, haga clic en <b>"Descargar ahora".</b></li>
                              <li>Abra el archivo descargado y espere a que termine la instalación.</li>
                              <li>Una vez terminada su reunión deberá de comenzar automáticamente.</li>
                            </ul>
                        </li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </div>
                <div class="mb-3">
                <b-card title="Agregar miembros" img-src="https://i.imgur.com/5I0Vgxo.png" img-alt="Card image" img-left style="max-height:80%;">
                  <b-card-text class="text-justify">
                    <p>Si desea agregar más miembros siga los siguientes pasos:</p>
                    <ol>
                      <li>Pulse <b>Participantes</b> y después <b>Invite</b>.</li>
                      <li>Escoja la opción de su preferencia y hágala llegar a los interesados.</li>
                    </ol>
                  </b-card-text>
                </b-card>
                </div>
              </div>
              <div class=" container mt-4 ">
                  <h2 class="titulo mb-3" id="invitado">Primeros pasos (Invitado).</h2>
                  <div class="mb-3">
                    <b-card title="Entrar a una reunión por ID de reunión o Código de entrada" img-src="https://i.postimg.cc/J76j7PXJ/pant6-zoom.png" img-right>
                      <b-card-text class="text-justify">
                        <ol>
                          <li>Vaya a la página principal de <b>Zoom</b>.</li>
                          <li>Haga clic en <b>"Entra a una reunión"</b>.</li>
                          <li>Ingrese el ID de reunión o Código de entrada.</li>
                        </ol>
                      </b-card-text>
                    </b-card>
                  </div>
                  <div class="mb-3">
                  <b-card title="Entrar a una reunión por Enlace o Correo Electronico" img-src="https://i.postimg.cc/8cMFbByk/pant7-zoom.png" img-alt="Card image" img-left style="max-height:80%;">
                    <b-card-text class="text-justify">
                      <ol>
                        <li>Haga clic en la invitación por enlace.</li>
                        <li>Pulse Iniciar Reunión.</li>
                        <br>
                        <p>Alternativamente:</p>
                        <li>Abra su correo electrónico donde fue contactado.</li>
                        <li>Haga clic en la invitación por enlace.</li>
                        <li>Pulse Iniciar Reunión.</li>
                      </ol>
                    </b-card-text>
                  </b-card>
                  </div>
                </div>
          </b-container>
      </div>
  </div>

</template>

<script>

export default {
    name: 'contenidoZoom',
    data() {
        return {
            windows: 'Desde Windows',
            mac: 'Desde MAC',
            ios: 'Desde iOS',
            android: 'Desde Android'
        }
    },
    template: {

    }


}

</script>
