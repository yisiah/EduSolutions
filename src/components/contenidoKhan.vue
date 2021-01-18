<style>

.maincontainerK {
    /*border-radius: 25px;*/
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    background-color: #14bf96;
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
    width: 60%;
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
      <!--AQUI  INICIAEL NAVBAR-->
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
                        <router-link :to="{ name: 'contacto'}"size="lg">
                          <b-nav-item href="contacto">Contactanos</b-nav-item>
                        </router-link>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

    <div class="maincontainerK">
      <!--AQUI  INICIA EL MENU LATERAL-->
        <b-container fluid>
            <div>
                <b-button class="logoHeader" variant="outline-light" v-b-toggle.sidebar-1>
                    <b-icon icon="card-list" aria-hidden="true"></b-icon> Contenidos
                </b-button>
                <b-sidebar id="sidebar-1" shadow>
                    <img class="logoZoom" src="..\assets\khanA.png" alt="lkhan" height="25%" width="45%">
                    <div class="accordion mt-4" role="tablist">
                        <b-card no-body class="mb-1">
                          <b-row class="m-1">
                              <b-button href="#acceso" block variant="info">Accede a Khan Academy.</b-button>
                          </b-row>
                          <b-row class="ml-1">
                              <b-button href="#cuenta" block variant="info">¿Como crear una cuenta?</b-button>
                          </b-row>
                          <b-row class="m-1">
                              <b-button href="#profesores" block variant="info">Primero pasos (Profesores)</b-button>
                          </b-row>
                          <b-row class="m-1">
                              <b-button href="#alumnos" block variant="info">Primero pasos (Alumnos)</b-button>
                          </b-row>

                          <b-card no-body class="mb-1">
                              <b-card-header header-tag="header" class="p-1" role="tab">
                                  <b-button block variant="info">
                                      <router-link :to="{ name: 'Menu'}" tag="b-card-text">Otros cursos</router-link>
                                  </b-button>
                              </b-card-header>
                          </b-card>
                        </b-card>
                    </div>
                </b-sidebar>
            </div>

            <!--AQUI  INICIAEL CONTENIDO-->
            <div class="container mt-4" id="acceso">
                <h1 class="titulo">Acceder a Khan Academy</h1>
                <b-row class="mb-2 mt-3">
                    <b-col>
                        <b-card class="lightCard" title="Ingreso desde navegador">
                            <b-card-text class="text-justify">
                                El primer paso para ingresar es buscar desde el navegador de su preferencia
                                "Khan Academy". A continuacion dará clic en el primer resultado que aparece
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
                                  <b-link href="https://es.khanacademy.org">Ir a la plataforma</b-link>
                                </div>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="..\assets\pant1-khan.png" alt="pant1" class="m-3" height="25%" width="90%">
            </div>

            <div class=" container mt-4" id="cuenta">
                <h2 class="titulo mb-3">¿Como crear una cuenta?</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Registro">
                            <b-card-text class="text-justify">
                                Para disfrutar de todas las opciones que esta plataforma tiene para nosotros
                                es necesario crear una cuenta.  <p><span class="font-italic">Los estudiantes menores de 13 años </span>pueden elegir un nombre de usuario y una
                                contraseña. Pero deberá agregar el correo electrónico de uno de sus padres o uno de sus tutores.</p>
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Pasos">
                            <b-card-text>
                              <ol class="text-md-left">
                                <li>Dirigirse al boton "Registrarse"</li>
                                <li>Identificarse en las opciones</li>
                                <li>Llenar el formulario</li>
                                <li>Elegir el tipo de registro</li>
                              </ol>
                              <br>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="..\assets\pant2-khan.png" alt="pant2" class="m-3"height="25%" width="90%">
            </div>

            <div class=" container mt-4" id="profesores">
                <h2 class="titulo mb-3">Primeros pasos profesores</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Creando el curso">
                            <b-card-text class="text-justify">
                                <p>Si usted es un maestro, despues de crear su cuenta deberá seleccionar
                                las materias que impartirá, estas apareceran en una lista ubicadas por categorias.</p>
                                <p>En caso de no encontrar la opcion que se adapte a nuestro curso podemos
                                seleccionar la opción de <span class="font-italic">General</span> que se encuentra en
                                la sección <span class="font-italic">Mi curso no está en la lista</span>.</p>
                            </b-card-text>
                        </b-card>
                    </b-col>
                  </b-row>
                  <img src="..\assets\pant3-khan.png" alt="pant3" class="m-3">
                <b-row class="mt-2">
                  <b-col>
                      <b-card class="lightCard" title="Añadir alumnos a la clase">
                          <b-card-text class="text-justify">
                            Para agregar alumnos a la clase recomendamos escoger una de las siguientes opciones:
                            <p class="font-weight-bold">Usar el código de clase para que los alumnos se incorporen ellos mismos.</p>
                            <ol class="text-md-left">
                              <li>Vaya a la pestaña de clases y seleccione la clase donde quiera agregar alumnos.</li>
                              <li>Haga click en Compartir código de clase.</li>
                              <li>Presione el botón Copiar.</li>
                              <li>Y ahora podrá enviar este enlace a las personas que desee agregar.</li>
                            </ol>
                          </b-card-text>
                      </b-card>
                  </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Importar la clase desde Google Classroom">
                            <b-card-text class="text-justify">
                              <p>Si se cuenta con una clase en la plataforma de <span class="font-italic">Google</span> Classroom
                                puede enlazar e importar los datos junto con los alumnos que estén en ella.</p>
                                <ol class="text-md-left">
                                  <li>  Vaya a la pestaña de clases y seleccione la clase donde quiera agregar alumnos.</li>
                                  <li>Haga clic en Agregar nuevos estudiantes.</li>
                                  <li>Seleccione Invita a tu Google Classroom.</li>
                                  <li>Presione el botón Conecta tu Google Classroom.</li>
                                  <li>Inicie sesión en el correo electrónico asociado a su Google Classroom.</li>
                                </ol>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </div>

            <div class=" container mt-4" id="alumnos">
                <h2 class="titulo mb-3">Primeros pasos alumnos</h2>
                <b-row class="mb-2">
                    <b-col>
                          <b-card class="lightCard" title="Entrar a un curso">
                              <b-card-text class="text-justify">
                                <p>Si usted es un alumno, despues de crear su cuenta deberá seleccionar el o los
                                cursos que desee tomar en Khan Academy.</p>
                                <br>
                                <p>Para esto existe un listado de seleccion donde podrá visualizar los contenidos
                                separados por materias.
                                Ahora puede comenzar a aprender con los cursos otorgados por Khan Academy.</p>
                                <br>
                              </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                          <b-card class="lightCard" title="Entrar a la clase de un maestro">
                              <b-card-text class="text-justify">
                                <p>Si desea unirse a la clase de un profesor, siga los siguientes pasos.</p>
                                <ol>
                                  <li>Entre a la sección Maestros</li>
                                  <li>Ingrese el código de la clase del profesor o ingresando el correo del profesor al que deseamos unirnos.</li>
                                </ol>
                                Ahora que tu cuenta esta lista te invitamos a explorar todas las posibilidades haciendo click en el logo que siempre
                                se encuentra en la parte superior del “Panel de control”
                              </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="..\assets\pant5-khan.png" alt="pant5"  width="70%" class="rounded-0 m-3">
                <img src="..\assets\pant6-khan.png" alt="pant6"  width="70%" class="rounded-0 m-3">
            </div>
        </b-container>
    </div>
</div>
</template>

<script>

export default {
    name: 'contenidoKhan',
    data() {
        return {

        }
    },
    template: {

    }


}

</script>
