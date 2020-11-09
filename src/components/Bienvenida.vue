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
}

.container {
    margin-top: 40px;
}

.titulo {
    color: white;
    padding: 50px;
}

</style>

<template>

<div class="container">
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item href="#">Home</b-nav-item>
                        <b-nav-item href="#">About</b-nav-item>
                        <b-nav-item href="#">Top</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <div class="maincontainer">
        <h1 class="titulo">Todo el conocimiento al alcance de tus manos.<br>
        Inicie a usar cualquier herramienta colaborativa hoy</h1>
        <b-button size="lg">Also Disabled</b-button>

    </div>
</div>

</template>

<script>

export default {
    name: 'Bienvenida',
    data() {
        return {

        }
    }
}

</script>
