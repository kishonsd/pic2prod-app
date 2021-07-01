<template>
  <v-container fill-height>
    <app-bar />
    <v-row>
      <v-col cols="12">
        <VCardPic2Prod class="mx-auto" />
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import VCardPic2Prod from '@/components/VCardPic2Prod'
import serverUtil from '../utils/serverUtil'
import AppBar from '../layouts/AppBar.vue'
import Footer from '../layouts/Footer.vue'
export default {
  name: 'Panel',
  components: {
    VCardPic2Prod,
    AppBar,
    Footer
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
