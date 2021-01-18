<style>

.container-fluid{
  padding: 0;
}

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

.footer {
  padding: 20px;
  width: 100%;
  background-color: #31495E;
  padding-bottom: 3%;
}

.titulo {
  color: white;
  margin: auto;
  width: 70%;
  font-weight: bold;
  font-size: 2.0rem;
}

.button {
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 10px;
  background-color: #a876fe;
  color: white;

}

.splash {
  margin: auto;
  width: 75%;
  height: 75%;
}

.navbar{
  background-color: #414550;
  outline: 1px solid white;
}

.centerNavElements{
  align-items: center;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 1.5rem;
  padding-left: 0.5rem;
}

</style>

<template>
  <div>
    <div>
      <b-navbar  class="navbar" toggleable="lg" type="dark" >
        <b-navbar-brand href><img class="logoHeader" src="..\assets\LogoApp.png" alt="logo"> </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
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
    <div class="maincontainer">
      <b-container fluid>
        <b-card class="ml-3 mr-3">
          <b-card-title class="mt-4 h1">¡CONTACTANOS!</b-card-title>
          <b-card-body>
            <b-card-text class="pr-5 pl-5 mr-4 ml-4" style="background-color:#31495E; color:white; border-radius: 5px;">¿Tienes alguna duda o te gustaria
              sugerirnos alguna mejora?. <br> Contactanos direcatemente, en Aphandemika estamos
              comprometidos con tu educacion y nos encantaria ayudarte.</b-card-text>
            </b-card-body>
            <b-form class="mt-3" @submit="onSubmit" @reset="onReset" v-if="show">
              <b-row>
                <b-col class="ml-5">
                  <b-row>
                    <b-col>
                      <b-form-group
                      id="input-group-1"
                      label="Correo electronico:"
                      label-for="input-1"
                      >
                      <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      placeholder=""
                      required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group id="input-group-2" label="Nombre completo:" label-for="input-2">
                      <b-form-input
                      id="input-2"
                      v-model="form.name"
                      placeholder=""
                      required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-3" label="Asunto:" label-for="input-3">
                      <b-form-input
                      id="input-3"
                      v-model="form.asunto"
                      placeholder=""
                      required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-4" label="Comentarios:" label-for="input-4">
                      <b-col>
                        <b-form-textarea
                        id="input-4"
                        size="lg"
                        v-model="form.comentarios"
                        placeholder=""
                        required
                        ></b-form-textarea>
                      </b-col>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button type="submit" variant="primary">Submit</b-button>
              </b-col>
              <b-col>
                <b-row>
                  <b-col>
                    <b-icon-geo-alt-fill style="width: 50px; height: 50px;"></b-icon-geo-alt-fill>
                    <p>Poza Rica de Hgo., Ver. 93230, Mexico</p>
                  </b-col>
                </b-row>
                <b-row class="mt-5">
                  <b-col>
                    <b-icon-telephone-fill style="width: 50px; height: 50px;"></b-icon-telephone-fill>
                    <p>+ 01 234 567 89</p>
                  </b-col>
                </b-row>
                <b-row class="mt-5">
                  <b-col>
                    <b-icon-envelope-open-fill style="width: 50px; height: 50px;"></b-icon-envelope-open-fill>
                    <p>contact.aphandemika@edusolution.com</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'contacto',
  data() {
    return {
      form: {
        email: '',
        name: '',
        asunto:'',
        comentarios:''
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.asunto = ''
      this.form.comentarios = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })

    }
  }
}

</script>
