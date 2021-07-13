<template>
  <v-app v-if="loading">
    <v-main class="primary">
      <v-container fill-height>
        <v-row>
          <v-col cols="12">
            <v-card flat
                    dark
                    color="primary"
                    class="mx-auto"
                    max-width="600">
              <v-img src="@/assets/Travel in the desert.png"></v-img>
              <v-card-text>
                <p class="caption"
                   id="loading-caption">
                  Loading camel cases...
                </p>
                <v-progress-linear class="mb-4"
                                   color="white"
                                   :indeterminate="true"></v-progress-linear>
                <v-icon x-large>mdi-rhombus-split</v-icon>
                Pic2Prod
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <component v-else
             :is="computeLayout">
    <router-view></router-view>
  </component>

</template>

<script>
import Loadr from 'randloadr'
import firebase from 'firebase'
import VAppNavbar from '@/components/VAppNavbar'
import VAppFooter from '@/components/VAppFooter'

export default {
  name: 'App',
  components: {
    VAppNavbar,
    VAppFooter
  },

  data: () => ({
    loading: true,
    instance: false
  }),

  computed: {
    computeLayout () {
      return this.$route.meta.layout ? this.$route.meta.layout + '-layout' : 'page-layout'
    }
  },

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

  watch: {
    loading (v) {
      if (v) this.instance.start()
      else this.instance.stop()
    }
  },

  methods: {
    async handleSignedin (user) {
      this.$store.commit('user/setMe', user)
      await this.$store.dispatch('products/loadItems')
      await this.$store.dispatch('store/loadItems')
      if (
        this.$route.path === '/' ||
        this.$route.path === '/signin' ||
        this.$route.path === '/signup'
      ) this.$router.push('/post')
    },
    handleSignedout () {
      this.$store.commit('user/setMe', false)
      if (this.$route.meta.guarded) this.$router.push('/')
    }
  }
}
</script>
