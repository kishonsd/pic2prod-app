<template>
  <v-main class="primary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-post-manual-add />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import VPostManualAdd from '@/components/VPostManualAdd'
export default {
  components: {
    VPostManualAdd
  }
}
</script>

<style>
</style>