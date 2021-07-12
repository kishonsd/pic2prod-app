<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

    computeLayout () {
      return this.$route.meta.layout ? this.$route.meta.layout + '-layout' : 'page-layout'
    }
  mounted () {
    this.instance = new Loadr(document.querySelector('#loading-caption'))
    this.instance.start()

    firebase.auth().onAuthStateChanged(async user => {
      this.loading = true
      if (user) await this.handleSignedin(user)
      else this.handleSignedout()
      this.loading = false
    })
  },
    async handleSignedin (user) {
      this.$store.commit('user/setMe', user)
      await this.$store.dispatch('products/loadList')
    },
    handleSignedout () {
      this.$store.commit('user/setMe', false)
      if (this.$route.meta.guarded) this.$router.push('/')
    }
</script>
