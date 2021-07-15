<template>
  <v-main class="primary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <VProductsTable />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import VProductsTable from '@/components/VProductsTable'

export default {
  components: {
    VProductsTable
  }
}
</script>

<style>
</style>