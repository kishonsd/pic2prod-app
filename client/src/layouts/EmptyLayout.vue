<template>
  <v-app>
    <v-app-bar app
               dark
               flat
               color="transparent">
      <v-spacer></v-spacer>
      <v-toolbar-title v-if="$route.meta.layout !== 'dashboard'"
                       style="cursor: pointer"
                       @click="handleToHome"
                       class="mr-12">
        <v-icon x-large>mdi-rhombus-split</v-icon>
        Pic2Prod
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <slot />
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',

  methods: {
    handleToHome () { this.$router.push('/') }
  }
}
</script>