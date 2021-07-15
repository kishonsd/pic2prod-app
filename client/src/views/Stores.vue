<template>
  <v-main class="primary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <VStoresTable />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import VStoresTable from '@/components/VStoresTable'

export default {
  components: {
    VStoresTable
  }
}
</script>

<style>
</style>