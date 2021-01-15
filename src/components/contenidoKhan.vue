<style>

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
                    <img class="logoZoom" src="..\assets\khanA.png" alt="lkhan" height="25%" width="45%">
                    <div class="accordion mt-4" role="tablist">
                        <b-card no-body class="mb-1">
                          <b-row class="mb-1 ml-1 mr-1">
                              <b-button block variant="info">Accede a Khan Academy.</b-button>
                          </b-row>
                          <b-row class="ml-1 mr-1">
                              <b-button block variant="info">¿Como crear una cuenta?</b-button>
                          </b-row>
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-1 variant="info">Primeros pasos</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-col>
                                        <b-row>
                                            <b-button block variant="light">Profesores</b-button>
                                        </b-row>
                                        <b-row>
                                            <b-button block variant="light">Alumnos</b-button>
                                        </b-row>
                                    </b-col>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-sidebar>
            </div>

            <h1 class="titulo">Acceder a Khan Academy</h1>
            <div class="container mt-4 ">
                <b-row class="mb-2">
                    <b-col>
                        <b-card class="lightCard" title="Opcion 1 - Desde el navegador">
                            <b-card-text class="text-justify">
                                El primer paso para ingresar es buscar desde el navegador de su preferencia
                                "Khan Academy". A continuacion dará clic en el primer resultado que aparece
                                entre los resultados de las busquedas.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card class="darkCard" title="Opcion 2 - Ingreso desde link">
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

            </div>
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3">¿Como crear una cuenta?</h2>
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
    name: 'contenidoKhan',
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
