<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <VCardRegister class="mx-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VCardRegister from '@/components/VCardRegister'
export default {
  name: 'Register',
  components: {
    VCardRegister
  }
}
</script>
