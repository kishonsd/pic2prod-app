<template>
    <v-footer
    app
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="deep-purple py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Pic2Prod</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>