<template>
  <v-app>
    <v-app-navbar></v-app-navbar>
    <slot />
    <v-app-footer />
  </v-app>
</template>

<script>
import VAppNavbar from '@/components/VAppNavbar'
import VAppFooter from '@/components/VAppFooter'

export default {
  name: 'PageLayout',
  components: {
    VAppNavbar,
    VAppFooter
  }
}
</script>