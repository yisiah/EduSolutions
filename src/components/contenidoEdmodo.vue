<style>

.maincontainerEd {
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

    <div class="maincontainerEd">
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
            <div class=" container mt-4">
              <h2 class="titulo mb-3" id ="cuenta">¿Como creo una cuenta?</h2>
              <b-row class="mb-2">
                <b-col>
                  <b-card title="Registro" img-src="https://i.postimg.cc/W4GfxQh0/pant2-edmodo.png" img-right class="mb-3">
                    <b-card-text class="text-justify" style="margin-top:8%;">
                      <ol>
                        <li>Seleccione la opción <b>"Registrarse."</b> en el sitio principal. </li>
                        <li>Elija una de las tres opciones que se apegue más a su rol.</li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col>
                  <b-card img-src="https://i.postimg.cc/vBLdZBXB/pant3-edmodo.png" img-left class="mb-3">
                    <b-card-text class="text-justify" style="margin-top:8%;">
                      <ol>
                        <li> Seleccione con que servicio email quiere registrarse. </li>
                        <li> Si se le solicita, verifique su correo electrónico y presione <b>Siguiente.</b></li>
                        <li> Rellene la información personal y presione <b>Finalizar.</b></b></li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
            </div>

            <div class=" container mt-4">
              <h2 class="titulo mb-3" id ="profesor">Primeros pasos (Profesor).</h2>
              <b-row class="mb-2">
                <b-col>
                  <b-card title="Edita tu perfil" img-src="https://i.postimg.cc/ZnbzBSDL/pant4-edmodo.png" img-right class="mb-3">
                    <b-card-text class="text-justify" style="margin-top:5%;">
                      <ol>
                        <li>Vaya a <b>Edmodo</b>, e inicie sesión. </li>
                        <li>Debajo de su nombre haga clic en "<b>Ver perfil</b>".</li>
                        <li> Agregue la información sobre usted que desee. </li>
                        <li>Al terminar, presione el logotipo de <b>Edmodo</b>.</li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col>
                  <b-card title="Inicio de clase" img-src="https://i.postimg.cc/Kj0StH6h/pant5-edmodo.png" img-left class="mb-3">
                    <b-card-text class="text-justify" style="margin-top:8%;">
                      <ol>
                        <li> Seleccione <b>"Crear una clase".</b></li>
                        <li> Rellene la información correspondiente.</li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col>
                  <b-card title="Agregar estudiantes" img-src="https://i.postimg.cc/qMQyCxgc/pant10-edmodo.png" img-left class="mb-3">
                    <b-card-text class="text-justify" style="margin-top:8%;">
                      <ol>
                        <li>  Para agregar estudiantes presione <b>"Invitar"</b>. </b></li>
                        <li>  Elija la opción de su preferencia. </li>
                      </ol>
                      <br>
                      <p>
                        Ahora que su cuenta esta lista le invitamos a explorar todas las posibilidades
                        que Edmodo le ofrece, haciendo clic en Crear y los símbolos + podrá continuar su viaje por Edmodo.
                      </p>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
            </div>

            <div class=" container mt-4">
              <h2 class="titulo mb-3" id ="estudiante">Primeros pasos (Estudiante).</h2>
              <b-row class="mb-2">
                <b-col>
                  <b-card title="Unirse a un grupo" img-src="https://i.postimg.cc/2jGDp1V9/pant6-edmodo.png" img-right class="mb-3">
                    <b-card-text class="text-justify" style="margin-top:5%;">
                      <ol>
                        <li>Vaya a <b>Edmodo</b>, e inicie sesión. </li>
                        <li> Seleccione el botón <b>"Únete a un grupo"</b>. </li>
                        <li> Ingrese el código y presione Unirse. </li>
                      </ol>
                    </b-card-text>
                  </b-card>
                </b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col>
                  <b-card title="Vista de clase">
                    <b-card-text class="text-justify" >
                        En la columna izquierda usted podrá observar las separaciones de su clase a las cuales
                         podrá acceder a su contenido haciendo clic. En la columna central se encontrará el contenido
                         de la separación en la que usted se encuentre, y en la columna derecha se encuentra el calendario de eventos.

                      <img src="https://i.postimg.cc/02Nq99Sk/pant7-edmodo.png" class="mb-3" style="display: block; width:95%; margin-left:auto; margin-right:auto;">
                    </b-card-text>
                  </b-card>
                </b-col>
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
