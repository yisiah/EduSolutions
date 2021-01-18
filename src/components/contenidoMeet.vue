<style>

.maincontainerM {
  /*border-radius: 25px;*/
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-color: #2684FC;
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
  /*width: 500px;
  height: 500px;*/
  background-color: #ffffff;
  align: center;
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
              <b-nav-item href="#">Sobre Nosotros</b-nav-item>
              <router-link :to="{ name: 'contacto'}" size="lg">
                <b-nav-item href="contacto">Contactanos</b-nav-item>
              </router-link>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="maincontainerM">
      <b-container fluid>
        <div>
          <b-button class="logoHeader" variant="outline-light" v-b-toggle.sidebar-1>
            <b-icon icon="card-list" aria-hidden="true"></b-icon> Contenidos
          </b-button>
          <b-sidebar id="sidebar-1" shadow>
            <img class="logoZoom mt-5 mb-2" src="..\assets\meet.png" alt="lMeet" height="15%">
            <div class="accordion mt-4" role="tablist">
              <b-card no-body class="mb-1">
                <b-row class="m-2">
                  <b-button href="#accesoM" block variant="info">Accede a Google Meet.</b-button>
                </b-row>
                <b-row class="m-2">
                  <b-button href="#cuentaM" block variant="info">¿Necesito una cuenta?</b-button>
                </b-row>
                <b-row class="m-2">
                  <b-button href="#usoM" block variant="info">¿Usando Google Meet?</b-button>
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

        <div id="accesoM" class=" container mt-4 ">
          <h2 class="titulo mb-3">Acceder a Google Meet</h2>
          <b-row class="mb-4">
            <b-col>
              <b-card class="lightCard" title="Accede desde el navegador">
                <b-card-text class="text-justify">
                  <p>Google Meet es un servicio de video conferencias desarrollado por
                  Google, esta plataforma pretende sustituir a la aplicacion de Hangouts
                  en conjunto con su hermana Google Chat.
                  Para ingresar a este servicio basta con dirigirse al buscador, ingresar el nombre y entrar
                  en la primera opcion.</p>
                  <p>Si usted es usuario de Chrome puede optar por abrir el menu de aplicaciones de Google y seleccionar
                  el icono de la aplicacion.</p>
                </b-card-text>
              </b-card>
            </b-col>
            <b-col>
              <b-card class="lightCard" title="Otras opciones de acceso">
                <b-card-text class="text-justify">
                  Si lo que usted desea es entrar ahora y probar todas las opciones que Google Meet tiene para ofrecerle
                  puede ingresar en el siguiente link:
                  <p class="text-center"><b-link href="https://meet.google.com">Ir a Google Meet</b-link>.</p>
                  <p>Google tambien disponibiliza una version movil para este servicio.
                  Es tan sencillo como abrir la tienda de aplicaciones de tu dispositivo movil y buscar Google Meet.</p>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
          <img src="../assets/pant1-meet.png" style="max-width:90%;">
        </div>
        <div id="cuentaM" class=" container mt-4 ">
          <h2 class="titulo mb-3">¿Necesito una cuenta?</h2>
          <div class="mb-3">
            <b-card  title="Solo inicia sesion" img-src="https://www.hijosdigitales.es/wp-content/uploads/2017/11/accederseguro0.jpg" img-alt="Card image" style="max-height:80%;" img-right>
              <b-card-text class="text-justify">
                <p>Ya que Google Meet pertenece a la paqueteria de aplicaciones que Google nos ofrece
                no es necesario crear una cuenta alterna para accesar.
                Si usted no tiene con una cuenta de Gmail, no podra usar este servicio. Siga estos pasos una vez ya tenga correo
                de Gmail.</p>
                <ol>
                  <li>Seleccionado la opción <span class="font-weight-bold">Iniciar sesión</span>.</li>
                  <li>Elija la cuenta de Google con la que desea acceder.</li>
                  <li>Ingrese su contraseña y pulse <span class="font-weight-bold">Siguiente</span>.</li>
                </ol>
              </b-card-text>
            </b-card>
          </div>
        </div>
        <div id="usoM" class="container mt-4 ">
          <h2 class="titulo mb-3">Usando Google Meet</h2>
          <b-row class="mb-4">
            <b-col>
              <b-card class="lightCard" title="Creando una reunion">
                <b-card-text class="text-justify">
                  <ol>
                    <li>Vaya a Google Meet.</li>
                    <li>Haga clic en <span class="font-weight-bold">Nueva reunión</span>.</li>
                    <li>Elija una de las tres opciones:</li>
                      <ul>
                        <li><span class="font-weight-bold">Crear una reunión para más tarde</span>.</li>
                        <li><span class="font-weight-bold">Iniciar una reunión al instante</span>.</li>
                        <li><span class="font-weight-bold">Programar en Google Calendar</span>.</li>
                      </ul>
                      <li>Cuando esté listo acceda a la reunión y presione <span class="font-weight-bold">Unirse Ahora</span>.</li>
                      <li>Para invitar a más personas pulse <span class="font-weight-bold">Copiar información para unirse y envíe este link</span>.</li>
                  </ol>
                </b-card-text>
              </b-card>
            </b-col>
            <b-col>
              <b-card class="lightCard" title="Ingrese a una reunion">
                <b-card-text class="text-justify">
                  <ol>
                    <li>Vaya a Google Meet.</li>
                    <li>Localice el espacio Introduzca un <span class="font-weight-bold">código o enlace</span>.</li>
                    <li>Pegue el código o enlace de reunión.</li>
                    <li>El código de reunión es la cadena de letras que aparece <span class="font-weight-bold">al final del enlace de la reunión</span>. No es necesario que introduzcas los guiones.</li>
                    <li>Haga clic en <span class="font-weight-bold">Continuar</span> y después en <span class="font-weight-bold">Unirse ahora</span>.</li>
                  </ol>
                  Si a usted le enviaron un link como invitacion, puede acceder a la llamada solo con presionar el enlace y este le redireccionará.
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
          <img src="../assets/pant3-meet.jpg" alt="" width="90%">
        </div>
      </b-container>
    </div>
  </div>

</template>

<script>

export default {
  name: 'contenidoMeet',
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
