<template>
  <v-app>
    <v-toast />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import VToast from './components/VToast.vue'
import serverUtil from './utils/serverUtil'

export default {
  components: { VToast },
  name: 'App',

  data: () => ({
    loading: true,
  }),

  async mounted () {
    this.loading = true
    await serverUtil('session/me', {
      withCredentials: true
    }).then(res => {
      if (res) {
        this.$store.commit('user/setMe', res.data)
      }
    })
    this.loading = false
  }
}
</script>
