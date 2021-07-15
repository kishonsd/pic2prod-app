<template>
  <v-main class="primary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-post-add />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import VPostAdd from '@/components/VPostAdd'
export default {
  components: {
    VPostAdd
  }
}
</script>

<style>
</style>