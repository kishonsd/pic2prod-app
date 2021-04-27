<template>
  <v-card max-width="500">
    <v-card-title class="orange--text">
      Register
    </v-card-title>
    <v-card-text>
      <VFormRegister />
    </v-card-text>
    <v-card-actions>
      <router-link to="/">Already have an account?</router-link>
    </v-card-actions>
  </v-card>
</template>   

<script>
import VFormRegister from '@/components/VFormRegister'

export default {
  name: 'VCardRegister',

  components: {
    VFormRegister
  }
}
</script>