<style>

.maincontainer {
    /*border-radius: 25px;*/
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    background-color: #3949ab;
}

.logoHeader {
    float: left;
    width: 12%;
    height: 12%;
}

.logoSidebar {
    width: 40%;
    height: auto;
    padding-bottom: 10%;
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
                        <router-link :to="{ name: 'Bienvenida'}" size="lg">
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

    <div class="maincontainer">
        <b-container fluid>
            <div>
                <b-button class="logoHeader" variant="outline-light" v-b-toggle.sidebar-1>
                    <b-icon icon="card-list" aria-hidden="true"></b-icon> Contenidos
                </b-button>
                <b-sidebar id="sidebar-1" shadow>
                    <img class="logoSidebar" src="..\assets\edmodo.png">
                    <div class="accordion" role="tablist">
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button href="#acceder" block variant="info">
                                    ¿Como accedo a Edmodo?
                                </b-button>
                            </b-card-header>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button href="#cuenta"block variant="info">
                                    ¿Como crear una cuenta?
                                </b-button>
                            </b-card-header>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button href="#profesor"block variant="info">
                                    Primeros pasos (Profesor).
                                </b-button>
                            </b-card-header>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button href="#estudiante" block variant="info">
                                    Primeros pasos (Estudiante).
                                </b-button>
                            </b-card-header>
                        </b-card>
                    </div>
                </b-sidebar>
            </div>
            <!-- inicio contenido -->
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3" id="acceder">¿Como accedo a Edmodo?</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Ingreso desde navegador">
                            <b-card-text class="text-justify">
                                El primer paso para ingresar es buscar desde el navegador de su preferencia
                                "Edmodo". A continuacion dará clic en el primer resultado que aparece
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
                                <b-link href="https://new.edmodo.com/">Ir a la plataforma</b-link>
                              </div>
                            </b-card-text>
                        </b-card>
                    </b-col>
                  </b-row>
                  <img src="..\assets\pant1-edmodo.png" alt="pant1" class="capturaPantalla">
            </div>
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3" id="cuenta">¿Como crear una cuenta?</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Paso 1 - Registro">
                            <b-card-text>
                                Seleccione la opción "Registrarse." en el sitio principal.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 2 ">
                            <b-card-text>
                                Elija una de las tres opciones que se apegue más a su rol.
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="..\assets\pant2-edmodo.png" alt="pant1" class="capturaPantalla">
                <b-row>
                    <b-col>
                        <b-card class="lightCard" title="Paso 3">
                            <b-card-text>
                                Seleccione con que servicio email quiere registrarse.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 4">
                            <b-card-text>
                              Si se le solicita, verifique su correo electrónico y presione <b>Siguiente.</b>
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 5">
                            <b-card-text>
                              Rellene la información personal y presione <b>Finalizar.</b>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="..\assets\pant3-edmodo.png" alt="pant1" class="capturaPantalla">
            </div>
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3" id="profesor">Primeros pasos (Profesor).</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Paso 1 ">
                            <b-card-text>
    	                         Vaya a <b>Edmodo,</b> e inicie sesión.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 2 ">
                            <b-card-text>
                                Debajo de su nombre haga clic en <b>Ver perfil.</b>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="..\assets\pant4-edmodo.png" alt="pant1" class="capturaPantalla">
                <b-row>
                    <b-col>
                        <b-card class="lightCard" title="Paso 3 ">
                            <b-card-text>
                                Agregue la información sobre usted que desee.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 4 ">
                            <b-card-text>
                                Presione el logo de <b>Edmodo</b>, y seleccione <b>Crear una clase.</b>
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 4 ">
                            <b-card-text>
                                Rellene la información correspondiente de su clase.
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="..\assets\pant5-edmodo.png" alt="pant1" class="capturaPantalla">
                <b-row>
                  <b-col>
                      <b-card class="lightCard" title="Paso 5 ">
                          <b-card-text>
                              Para agregar estudiantes presione Invitar.
                          </b-card-text>
                      </b-card>
                  </b-col>
                  <b-col>
                      <b-card class="lightCard" title="Paso 6 ">
                          <b-card-text>
                              Elija la opción de su preferencia.
                          </b-card-text>
                      </b-card>
                  </b-col>
                </b-row>
                <img src="..\assets\pant5-edmodo.png" alt="pant1" class="capturaPantalla">
                <b-card class="lightCard" >
                    <b-card-text class="text-justify" >
                        Ahora que su cuenta esta lista le invitamos a explorar
                         todas las posibilidades que Edmodo le ofrece, haciendo
                         clic en <b>Crear</b> y los símbolos <b>+</b> podrá continuar su viaje por Edmodo.
                    </b-card-text>
                </b-card>
            </div>
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3" id="estudiante">Primeros pasos (Estudiante).</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Paso 1 ">
                            <b-card-text>
                                Vaya a <b>Edmodo</b>, e inicie sesión.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 2 ">
                            <b-card-text>
                                Seleccione el botón <b>Únete a un grupo</b>.
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="..\assets\pant6-edmodo.png" alt="pant1" class="capturaPantalla">

                <b-card class="lightCard" title="Paso 3 ">
                    <b-card-text>
                        Ingrese el código y presione Unirse.
                    </b-card-text>
                </b-card>
                <br>
                <b-row>
                    <b-col>
                        <b-card class="lightCard" title="Paso 4 ">
                            <b-card-text class="text-justify">
                                En la columna izquierda usted podrá observar las
                                separaciones de su clase a las cuales podrá acceder a su contenido haciendo clic.
                                En la columna central se encontrará el contenido de la separación en la que usted se encuentre,
                                y en la columna derecha se encuentra el calendario de eventos.
                            </b-card-text>
                        </b-card>
                    </b-col>

                </b-row>
                <br>
                <b-row>
                    <img src="..\assets\pant7-edmodo.png" alt="pant1" class="capturaPantalla" style="margin-left:auto; margin-right:auto;">
                </b-row>

            </div>
        </b-container>
    </div>
</div>

</template>

<script>

export default {
    name: 'contenidoEdmodo',
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
