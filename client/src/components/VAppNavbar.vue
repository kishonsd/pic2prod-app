<template>
  <v-app-bar app
             dark
             color="primary darken-3"
             elevate-on-scroll>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title v-if="$route.meta.layout !== 'dashboard'"
                     style="cursor: pointer"
                     @click="handleToHome"
                     class="mr-12">
      <v-icon x-large>mdi-rhombus-split</v-icon>
      Pic2Prod
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn rouded
           color="red"
           @click="handleSignout"
           rounded
           v-if="user.me">
      Sign out
    </v-btn>
    <!-- <v-btn link
           v-for="link in navLinks"
           :key="link.to"
           class="ml-4"
           outlined
           rounded
           text>
      {{link.text}}
    </v-btn> -->
  </v-app-bar>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
export default {
  data: () => ({
    navLinks: [
      {
        text: 'Features',
        to: '/features'
      }
    ]
  }),

  computed: {
    ...mapState(['user'])
  },
  methods: {
    handleToHome () { this.$router.push('/') },
    handleSignout () {
      firebase.auth().signOut()
    }
  }
}
</script>

<style>
</style>