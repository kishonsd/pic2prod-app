<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <VCardPic2Prod class="mx-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VCardPic2Prod from '@/components/VCardPic2Prod'
export default {
  name: 'Panel',
  components: {
    VCardPic2Prod
  }
}
</script>
