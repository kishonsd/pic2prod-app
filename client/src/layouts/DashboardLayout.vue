<template>
  <v-app>
    <v-app-navbar></v-app-navbar>
    <v-app-sidebar />
    <slot />
  </v-app>
</template>

<script>
import VAppNavbar from '@/components/VAppNavbar'
import VAppSidebar from '@/components/VAppSidebar'
export default {
  name: 'PageLayout',
  components: {
    VAppNavbar,
    VAppSidebar
  }
}
</script>