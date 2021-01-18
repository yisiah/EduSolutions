<style>

.maincontainerClass {
    /*border-radius: 25px;*/
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    background-color: #1d6344;
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

.capturaPantallaClass {
    align: center;
    margin-top: 2%;
    margin-bottom: 3%;
    border:3px solid white;
    border-radius: 3px;
    max-width: 95%;
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
                        <router-link :to="{ name: 'SobreNosotros'}" tag="span" size="lg">
                            <b-nav-item href="SobreNosotros">Sobre Nosotros</b-nav-item>
                        </router-link>
                        <b-nav-item href="#">Contactanos</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!--de quien es esto?-->
    </div>

    <div class="maincontainerClass">
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
                                <b-button href="#acceder" block variant="info">¿Cómo accedo a Classroom?</b-button>
                            </b-card-header>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button href="#cuenta" block variant="info">¿Cómo creo una cuenta?</b-button>
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
                                          <b-button href="#profesor" block variant="light">Anfitrión</b-button>
                                      </b-row>
                                      <b-row>
                                          <b-button href="#alumno" block variant="light">Invitado</b-button>
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
                <h2 class="titulo mb-3" id="acceder">¿Cómo accedo a Classroom?</h2>
                <b-row class="mb-2">
                  <b-col>
                      <b-card class="lightCard" title="Ingreso desde navegador">
                          <b-card-text class="text-justify">
                              El primer paso para ingresar es buscar desde el navegador de su preferencia
                              "Classroom". A continuacion dará clic en el primer resultado que aparece
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
                              <b-link href="https://classroom.google.com/">Ir a la plataforma</b-link>
                            </div>
                          </b-card-text>
                      </b-card>
                  </b-col>
                </b-row>
                <img src="..\assets\pant1-class.png" alt="pant1" class="capturaPantallaClass">
              </div>
              <div class=" container mt-4">
                <h2 class="titulo mb-3" id ="cuenta">¿Cómo creo una cuenta?</h2>
                <b-row class="mb-2">
                  <b-col>
                    <b-card title="Registro" img-src="https://i.postimg.cc/3Rhhgpc7/pant2-class.png" img-right class="mb-3">
                      <b-card-text class="text-justify" style="margin-top:8%;">
                        <p>
                          Para acceder a Google Classroom únicamente se necesita iniciar sesión en una cuenta de
                           Google o Gmail, si no cuenta con una siga los siguientes pasos:
                        </p>
                        <ol>
                          <li>Vaya a <a href="https://classroom.google.com"> https://classroom.google.com</a> y haga un clic en "<b>Crear Cuenta</b>".</li>
                          <li>Rellene la información solicitada y pulse <b>"Siguiente"</b>.</li>
                          <li>De manera opcional rellene la información de seguridad y pulse <b>"Siguiente"</b>.</li>
                          <li>Presione <b>"Acepto"</b> y después <b>"Continuar"</b>.</li>
                        </ol>
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </div>
              <div class=" container mt-4">
                <h2 class="titulo mb-3" id="profesor">Primeros pasos (Profesor)</h2>
                <div class="mb-3">
                  <b-card title="Crear una clase" img-src="https://i.postimg.cc/7PTcxbsn/pant4-class.png" img-right>
                    <b-card-text class="text-justify">
                      <ol>
                        <li>Vaya a <a href="https://classroom.google.com"> https://classroom.google.com</a>.</li>
                        <li>Haga clic en <b>"Añadir (+)"</b> y luego <b>"Crear una clase"</b>.</li>
                        <img src="../assets/pant3-class.png" style="display:block; margin-left:auto; margin-right:auto">
                        <li>Acepte los términos y condiciones y presione<b> "Continuar"</b>.</li>
                        <li>Escriba el nombre de la clase y sus detalles.</b>.</li>
                        <li>Pulse <b>"Crear"</b></li>

                      </ol>
                    </b-card-text>
                  </b-card>
                </div>
                <div class="mb-3">
                <b-card>
                  <b-card-text class="text-justify">
                    Para invitar a alumnos a su clase Classroom genera automáticamente un código que  puede en la parte
                    superior del tablón de anuncios. También puede obtener un link de invitación.
                  </b-card-text>
                </b-card>
                </div>
                <div class="mb-3">
                <b-card title="Partes de Classroom" img-src="https://i.postimg.cc/tCG6sCyj/pant5-class.png" img-alt="Card image" img-left style="max-height:80%;">
                  <b-card-text class="text-justify">
                    <p>Google Classroom cuenta con cuatro separaciones:</p>
                    <ol>
                      <li><b>Tablón:</b> Este es un espacio de bienvenida personalizable en donde podrá comunicarse con los alumnos, hacer anuncios y fechas de entrega.</li>
                      <li><b>Trabajo de Clase:</b> Aquí están localizadas las actividades que tendrán que realizar los alumnos, si desea ver más opciones pulse <b>+</b>.</li>
                      <li><b>Personas:</b> Aquí podrá localizar, añadir o eliminar alumnos y maestros asistentes a su Google Classroom.</li>
                      <li><b>Calificaciones:</b> En esta última sección podrá evaluar el rendimiento de sus alumnos.</li>
                    </ol>
                  </b-card-text>
                </b-card>
                </div>
              </div>
              <div class=" container mt-4 ">
                  <h2 class="titulo mb-3" id="alumno">Primeros pasos (Alumno).</h2>
                  <div class="mb-3">
                    <b-card title="Entrar a la clase mediante enlace o código " >
                      <b-card-text class="text-justify" style="margin-top:2%;">
                        <ol>
                          <li>Haga clic en el enlace a la clase que han compartido.</li>
                          <li>Seleccione su cuenta Google con la cual desea acceder a Classroom.</li>
                          <li>Haga Clic en <b>"Unirse"</b>.</li>
                          <br>
                        </ol>
                        Alternativamente:
                        <ol>
                            <li>Vaya a <a href="https://classroom.google.com"> https://classroom.google.com</a>.</li>
                            <li>Asegúrese de seleccionar su cuenta Google con la cual desea acceder a Classroom.</li>
                            <li>Haga clic en <b>"Añadir" (+)</b> y luego <b>"Unirse a una clase"</b>.</li>
                            <img src="../assets/pant7-class.png" style="display:block; margin-left:auto; margin-right:65%;">
                            <li>Introduzca el código de clase y haga clic en <b>"Unirse"</b>.</li>
                        </ol>
                      </b-card-text>
                    </b-card>
                  </div>
                  <div class="mb-3">
                  <b-card title="Entrar a la clase por Correo Electronico" img-src="https://i.postimg.cc/0Qdzm791/pant8-class.png" img-alt="Card image" img-left style="max-height:80%;">
                    <b-card-text class="text-justify">
                      <ol>
                        <li>Abra el correo electrónico que utiliza con Classroom.</li>
                        <li>En la invitación por correo electrónico, haga clic en Unirse.</li>
                        <br>
                        <p>Cuando te apuntas a una clase con un dispositivo, estarás inscrito en ella cuando te conectes con cualquier otro dispositivo.</p>
                      </ol>
                    </b-card-text>
                  </b-card>
                  </div>
                </div>
                <div class=" container mt-4 ">
                    <div class="mb-3">
                      <b-card img-src="https://i.postimg.cc/52NDMJXB/pant9-class.png" img-right style="max-height:80%;">
                        <b-card-text class="text-justify" style="margin-top:4%;">
                          <ol>
                            <p>Google Classroom cuenta con tres separaciones:</p>
                            <li><b>Tablón:</b> Este es un espacio de bienvenida en donde podrá comunicarse con los profesores y alumnos, ver anuncios y fechas de entrega.</li>
                          </ol>
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="mb-3">
                    <b-card img-src="https://i.postimg.cc/90kwFCWD/pant10-class.png" img-alt="Card image" img-left style="max-height:80%;">
                      <b-card-text class="text-justify">
                        <ol start="2">
                          <li><b>Trabajo de Clase:</b> Aquí están localizadas las actividades a realizar y los espacios para entregarlas.</li>
                        </ol>
                      </b-card-text>
                    </b-card>
                    </div>
                    <div class="mb-3">
                      <b-card img-src="https://i.postimg.cc/76rBhnQ1/pant5-class.png" img-alt="Card image" img-right style="max-height:80%;">
                        <b-card-text class="text-justify">
                          <ol start="3">
                            <li><b>Personas:</b> Aquí podrá localizar alumnos y maestros del Google Classroom.</li>
                          </ol>
                        </b-card-text>
                      </b-card>
                    </div>
                  </div>
          </b-container>
      </div>
  </div>

</template>

</template>

<script>

export default {
    name: 'contenidoClass',
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
