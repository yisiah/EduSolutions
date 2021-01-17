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
    /*width: 500px;
    height: 500px;*/
    background-color: #ffffff;
    align: center;
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
                          <b-row class="mb-1 ml-1 mr-1">
                              <b-button href="#accesoT" block variant="info">Accede a Microsoft Teams.</b-button>
                          </b-row>
                          <b-row class="ml-1 mr-1">
                              <b-button href="#cuentaT" block variant="info">¿Como crear una cuenta?</b-button>
                          </b-row>
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-1 variant="info">Primeros pasos</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-col>
                                        <b-row>
                                            <b-button href="#propietario" block variant="light">Propietario</b-button>
                                        </b-row>
                                        <b-row>
                                            <b-button href="#miembro" block variant="light">Miebro</b-button>
                                        </b-row>
                                    </b-col>
                                </b-card-body>
                            </b-collapse>
                            <b-row class="ml-1 mr-1">
                                <b-button block variant="outline-primary"><router-link :to="{ name: 'Menu'}"size="lg">Otros cursos</router-link></b-button>
                            </b-row>
                        </b-card>
                    </div>
                </b-sidebar>
            </div>


            <div class=" container mt-4 ">
                <h2 class="titulo mb-3">Acceder a Microsoft Teams</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Acceder desde navegador">
                            <b-card-text class="text-justify">
                                <p>La plataforma Teams es un espacio de trabajo
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
                                requerimientos adecuados. Puede descargar una version mobil de igual modo.</p>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <img src="../assets/pant1-teams.png" class="m-3" width="90%">
            </div>
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3">¿Como crear una cuenta?</h2>
                <b-row class="mb-2">
                    <b-col>
                          <b-card  title="Pasos" img-src="https://support.content.office.net/es-es/media/0986e60d-8c70-47e6-8d1a-a484f359efc9.png" img-alt="Card image" img-right class="mb-3">
                            <b-card-text class="text-justify">
                              <ol>
                                <li>Seleccionado la opción Registrarse gratis.</li>
                                <li>Escriba su correo electrónico suscrito a Office 365 y seleccione Siguiente.</li>
                                <li>Elija una de las tres opciones que se apegue a sus preferencias y seleccione Siguiente.</li>
                                <li>Escriba su contraseña y seleccione Iniciar sesión.</li>
                                <li>Agregue los datos solicitados y seleccione Configurar Teams.</li>
                                <li>Elija si quiere usar Temas en Web o Descargarlo.</li>
                              </ol>
                             </b-card-text>
                          </b-card>
                    </b-col>
                </b-row>


            </div>
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3">Descarga desde Android</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Paso 1 - Alguna instruccion">
                            <b-card-text>
                                Aqui iran algunas de las instrucciones.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="darkCard" title="Paso 2 - Alguna instruccion">
                            <b-card-text>
                                Aqui iran algunas de las instrucciones.
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-card class="darkCard" title="Paso 3 - Alguna instruccion">
                            <b-card-text>
                                Aqui iran algunas de las instrucciones.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 4 - Alguna instruccion">
                            <b-card-text>
                                Aqui iran algunas de las instrucciones.
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3">Descarga desde iOS</h2>
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Paso 1 - Alguna instruccion">
                            <b-card-text>
                                Aqui iran algunas de las instrucciones.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="darkCard" title="Paso 2 - Alguna instruccion">
                            <b-card-text>
                                Aqui iran algunas de las instrucciones.
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-card class="darkCard" title="Paso 3 - Alguna instruccion">
                            <b-card-text>
                                Aqui iran algunas de las instrucciones.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="lightCard" title="Paso 4 - Alguna instruccion">
                            <b-card-text>
                                Aqui iran algunas de las instrucciones.
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
