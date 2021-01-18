<style>

.maincontainerT {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-color: #7C84EC;
}

.logoHeader {
  float: left;
  width: 12%;
  height: 12%;
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

  background-color: #ffffff;
  align: center;
}
.icono{
  width: 25%;


}

</style>

<template>
  <div>
    <div>
      <b-navbar class="navbar" toggleable="lg" type="dark">
        <b-navbar-brand href><img class="logoHeader" src="..\assets\LogoApp.png" alt="logo"></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav class="centerNavElements">
              <router-link :to="{ name: 'Bienvenida'}" size="lg">
                <b-nav-item href="Bienvenida">Bienvenida</b-nav-item>
              </router-link>
<<<<<<< HEAD
              <b-nav-item href="#">Sobre Nosotros</b-nav-item>
              <router-link :to="{ name: 'contacto'}"size="lg">
                <b-nav-item href="contacto">Contactanos</b-nav-item>
              </router-link>
=======
              <router-link :to="{ name: 'SobreNosotros'}" tag="span" size="lg">
                  <b-nav-item href="SobreNosotros">Sobre Nosotros</b-nav-item>
              </router-link>
              <b-nav-item href="#">Contactanos</b-nav-item>
>>>>>>> a8f5fb6be9a66cda06c3ba2a074813c703c6afdb
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="maincontainerT">
      <b-container fluid>
        <div>
          <b-button class="logoHeader" variant="outline-light" v-b-toggle.sidebar-1>
            <b-icon icon="card-list" aria-hidden="true"></b-icon> Contenidos
          </b-button>
          <!--AQUI INICIA EL SIDEBAR -->
          <b-sidebar id="sidebar-1" shadow>
            <img class="logoZoom" src="..\assets\teams.png" alt="lTeams" height="25%">
            <div class="accordion mt-4" role="tablist">
              <b-card no-body class="mb-1">
                <b-row class="m-1">
                  <b-button href="#accesoT" block variant="info">Accede a Microsoft Teams.</b-button>
                </b-row>
                <b-row class="m-1">
                  <b-button href="#cuentaT" block variant="info">¿Como crear una cuenta?</b-button>
                </b-row>
                <b-row class="m-1">
                  <b-button href="#propietario" block variant="info">Primeros pasos (Propietario)</b-button>
                </b-row>
                <b-row class="m-1">
                  <b-button href="#miembro" block variant="info">Primeros pasos (Miembro)</b-button>
                </b-row>
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


        <div id="accesoT" class=" container mt-4 ">
          <h2 class="titulo mb-3">Acceder a Microsoft Teams</h2>
          <b-row class="mb-2">
            <b-col>
              <b-card class="lightCard" title="Acceder desde navegador">
                <b-card-text class="text-justify">
                  <p>La plataforma <span class="font-italic">Teams</span> es un espacio de trabajo
                    desarrollado por Microsoft, el cual mejora la
                    comunicación entre equipos de trabajo combinando chat, reuniones en video
                    almacenamiento de archivos e integración de aplicaciones.</p>
                    Para entrar al sitio web, basta con ingresar en
                    el buscador <span class="font-italic">Microsoft Teams</span>
                    y seleccionar la primera opción.
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col>
                <b-card class="lightCard" title="Descarga de la aplicación">
                  <b-card-text class="text-justify">
                    Si usted es usuario de Windows puede hacer uso de la aplicacion
                    de escitorio, disponible en <b-link href="products.office.com/microsoft-teams">products.office.com/microsoft-teams</b-link>.
                    <p>La version de escritorio cuenta con mas opciones que la version web, por lo
                      cual recomendamos la instalacion de la misma si su equipo cuenta con los
                      requerimientos adecuados. Puede descargar una version movil de igual modo.</p>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
              <img src="../assets/pant1-teams.png" class="m-3" width="90%">
            </div>
            <div id="cuentaT" class=" container mt-4 ">
              <h2 class="titulo mb-3">¿Como crear una cuenta?</h2>
              <b-row class="mb-2">
                <b-col>
                  <b-card  title="Pasos" img-src="https://support.content.office.net/es-es/media/0986e60d-8c70-47e6-8d1a-a484f359efc9.png" img-alt="Card image" img-right class="mb-3">
                    <b-card-text class="text-justify">
                      <ol>
                        <li>Seleccionado la opción <span class="font-weight-bold">Registrarse gratis</span>.</li>
                        <li>Escriba su correo electrónico suscrito a Office 365 y seleccione <span class="font-weight-bold">Siguiente</span>.</li>
                        <li>Elija una de las tres opciones que se apegue a sus preferencias y seleccione <span class="font-weight-bold">Siguiente</span>.</li>
                        <li>Escriba su contraseña y seleccione <span class="font-weight-bold">Iniciar sesión</span>.</li>
                        <li>Agregue los datos solicitados y seleccione <span class="font-weight-bold">Configurar Teams</span>.</li>
                        <li>Elija si quiere usar Temas en Web o Descargarlo.</li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
            </div>
            <div class=" container mt-4" id="propietario">
              <h2 class="titulo mb-3">Primeros pasos propietario</h2>
              <div class="mb-3">
                <b-card  title="Crear un equipo" img-src="https://support.content.office.net/es-es/media/6ee3015b-4da1-43dd-a998-981e2b0ba079.png" img-alt="Card image" style="max-height:80%;" img-right>
                  <b-card-text class="text-justify">
                    <ol>
                      <li>Vaya a la sección Equipos y seleccione Unirse a un equipo o crear uno.</li>
                      <li>Presione el botón <span class="font-weight-bold">Crear equipo</span>.</li>
                      <li>Rellene los campos con sus preferencias y presione <span class="font-weight-bold">Siguiente</span>.</li>
                      <li>Si lo desea invite miembros a su equipo (esto se puede hacer después) y presione <span class="font-weight-bold">Cerrar u Omitir</span>.</li>
                    </ol>
                  </b-card-text>
                  <img src="../assets/united.png" alt="" class="icono mt-2">
                </b-card>
              </div>
              <div class="mb-3">
              <b-card  title="Agregar miebros" img-src="https://ayuda.hostalia.com/hc/article_attachments/360012644497/Agregar_miembros_a_un_equipo_en_Teams.PNG" img-alt="Card image" img-left style="max-height:80%;">
                <b-card-text class="text-justify">
                  <p>Si desea agregar más miembros a el equipo siga los siguientes pasos:</p>
                  <ol>
                    <li>Dentro de su equipo seleccione <span class="font-weight-bold">Más opciones (...)</span> junto al nombre del equipo.</li>
                    <li>Elija la opción <span class="font-weight-bold">Agregar Miembro</span>.</li>
                    <li>Agregue los miembros que desee por medio de su correo electrónico, nombre o grupo.</li>
                  </ol>
                </b-card-text>
                <img src="../assets/agregar-usuario.png" alt="" class="icono mt-2">
              </b-card>
              </div>
              <b-row class="mb-2">
                <b-col>
                  <b-card class="lightCard" title="Creando un canal">
                    <b-card-text class="text-justify">
                      <ol>
                        <li>Dentro de su equipo seleccione <span class="font-weight-bold">Más opciones (...)</span> junto al nombre del equipo.</li>
                        <li>Seleccione <span class="font-weight-bold">Agregar canal</span>.</li>
                        <li>Rellene los campos con sus preferencias y presione <span class="font-weight-bold">Agregar</span>.</li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card class="lightCard" title="Personalice y administre su equipo">
                    <b-card-text class="text-justify">
                      <ol>
                        <li>Dentro de su equipo seleccione <span class="font-weight-bold">Más opciones (...)</span> junto al nombre del equipo.</li>
                        <li>Seleccione <span class="font-weight-bold">Administrar equipo</span> y encontrará Miembros, Canales, Configuración y Aplicaciones del equipo.</li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
            </div>
            <div class=" container mt-4 ">
              <h2 class="titulo mb-3" id="miembro">Primeros pasos miembro</h2>
              <div class="mb-3">
                <b-card  title="Entrar a un equipo" img-src="https://support.content.office.net/es-es/media/c98251cd-0bd3-447c-823e-088e47d42f7f.png" img-alt="Card image" img-right>
                  <b-card-text class="text-justify">
                    <p>Sí fue invitado a un equipo mediante código:</p>
                    <ol>
                      <li>Vaya a la sección Equipos y seleccione Unirse a un equipo o crear uno</li>
                      <li>En la sección <span class="font-weight-bold">Unirse a un equipo con un código</span>, ingrese el código provisto por el propietario del equipo.</li>
                    </ol>
                    <p>Sí fue invitado a un equipo mediante correo electrónico:</p>
                    <ol>
                      <li>Vaya a la sección <span class="font-weight-bold">Equipos</span>.</li>
                      <li>Si su equipo no aparece en esta pantalla revise su correo electrónico ya que la invitación pudo haber llegado ahí.</li>
                    </ol>
                  </b-card-text>
                </b-card>
              </div>
              <div class="mb-3">
                <b-card  title="Navegar en Teams" img-src="https://docs.microsoft.com/es-es/microsoftteams/media/private-channels-in-teams.png" img-alt="Card image" style="max-height:80%;" img-left>
                  <b-card-text class="text-justify">
                    <p>Cada equipo de trabajo cuenta con separaciones llamadas
                      Canales, para acceder a estos haga clic en ellos.</p>
                    <p>Tome en cuenta que cada canal cuenta con diferentes
                      secciones con diferentes propósitos organizativos, para
                      acceder a ellos haga un click.</p>
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
      name: 'contenidoTeams',
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
