<template>
  <v-container fill-height>
    <app-bar />
    <v-row>
      <v-col cols="12">
        <parallax />
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import serverUtil from '../utils/serverUtil'
import AppBar from '../layouts/AppBar.vue'
import Footer from '../layouts/Footer.vue'
import Parallax from '../layouts/Parallax.vue'
export default {
  name: 'Panel',
  components: {
    AppBar,
    Footer,
    Parallax
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      serverUtil('session/me', {
          method: 'GET'
      })
      .then((response) => {
          console.log(response)
      })
      .catch((error) => {
          console.log(error)
          this.$router.push('/')
      })
    },
  }
}
</script>
