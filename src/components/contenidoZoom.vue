<style>

.maincontainer {
    /*border-radius: 25px;*/
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
    width: 100%;
    background-color: #31495E;
    height: 100vh;
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

    <div class="maincontainer">
        <b-container fluid>
            <div>
                <b-button class="logoHeader" variant="outline-light" v-b-toggle.sidebar-1>
                    <b-icon icon="card-list" aria-hidden="true"></b-icon> Contenidos
                </b-button>
                <b-sidebar id="sidebar-1" shadow>
                    <img class="logoZoom" src="..\assets\logoZoom.png" alt="lZoom" height="15%" width="60%">
                    <div class="px-3 py-2">
                        <b-dropdown id="descargaZ" block text="¿Como descargar Zoom?" class="m-2">
                            <b-dropdown-item href="#">Instalacion desde Windows</b-dropdown-item>
                            <b-dropdown-item href="#">Instalacion desde MAC</b-dropdown-item>
                            <b-dropdown-item href="#">Instalacion desde Android</b-dropdown-item>
                            <b-dropdown-item href="#">Instalacion desde iOS</b-dropdown-item>
                        </b-dropdown>
                        <b-dropdown id="cuentaZ" block text="¿Como crer una cuenta?" class="m-2">
                            <b-dropdown-item href="#">Crear una cuenta desde Windows</b-dropdown-item>
                            <b-dropdown-item href="#">Crear una cuenta desde MAC</b-dropdown-item>
                            <b-dropdown-item href="#">Crear una cuenta desde Android</b-dropdown-item>
                            <b-dropdown-item href="#">Crear una cuenta desde iOS</b-dropdown-item>
                        </b-dropdown>
                        <b-dropdown id="pReunionAdminZ" block text="Mi primera reunion (Administrador)." class="m-2">
                            <b-dropdown-item href="#">Primera reunion Windows (Administrador)</b-dropdown-item>
                            <b-dropdown-item href="#">Primera reunion MAC (Administrador)</b-dropdown-item>
                            <b-dropdown-item href="#">Primera reunion Android (Administrador)</b-dropdown-item>
                            <b-dropdown-item href="#">Primera reunion iOS (Administrador)</b-dropdown-item>
                        </b-dropdown>
                        <b-dropdown id="pReunionAdminZ" block text="Mi primera reunion (Invitado)." class="m-2">
                            <b-dropdown-item href="#">Primera reunion Windows (Invitado)</b-dropdown-item>
                            <b-dropdown-item href="#">Primera reunion MAC (Invitado)</b-dropdown-item>
                            <b-dropdown-item href="#">Primera reunion Android (Invitado)</b-dropdown-item>
                            <b-dropdown-item href="#">Primera reunion iOS (Invitado)</b-dropdown-item>
                        </b-dropdown>
                    </div>
                </b-sidebar>
            </div>

            <h1 class="titulo">¿Como descargar Zoom?</h1>
            <div class=" container mt-4 ">
                <h2 class="titulo mb-3">Descarga desde windows</h2>
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
                <b-row >
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
                <h2 class="titulo mb-3">Descarga desde MAC</h2>
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
                <b-row >
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
                <b-row >
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
                <b-row >
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
    name: 'contenidoZoom',
    data() {
        return {

        }
    },
    template: {

    }


}

</script>
