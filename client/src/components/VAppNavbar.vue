<template>
  <v-app-bar app
             dark
             color="primary darken-2"
             elevate-on-scroll>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title style="cursor: pointer"
                     @click="handleToHome"
                     class="mr-12">
      <v-icon x-large>mdi-rhombus-split</v-icon>
      Pic2Prod
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn link
           v-for="link in navLinks"
           :key="link.to"
           class="ml-4"
           outlined
           rounded
           text>
      {{link.text}}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    navLinks: [
      {
        text: 'Features',
        to: '/features'
      },
      {
        text: 'Testimonials',
        to: '/testimonials'
      },
      {
        text: 'Pricing',
        to: '/pricing'
      },
      {
        text: 'FAQ',
        to: '/faq'
      },
      {
        text: 'Policy',
        to: '/policy'
      }
    ]
  }),

  methods: {
    handleToHome () { this.$router.push('/') }
  }
}
</script>

<style>
</style>