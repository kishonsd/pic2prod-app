<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <VCardLogin class="mx-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VCardLogin from '@/components/VCardLogin'
export default {
  name: 'Home',
  components: {
    VCardLogin
  }
}
</script>
