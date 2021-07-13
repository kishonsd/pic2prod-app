<template>
  <v-main class="primary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto"
                  color="transparent"
                  flat
                  shaped
                  dark>
            <v-card-text>
              <h1 class="display-3 font-weight-bold white--text">
                Connect your stores with a few clicks.
              </h1>
            </v-card-text>
            <v-card-actions class="mt-5">
              <v-store-add />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import VStoreAdd from '@/components/VStoreAdd'

export default {
  name: 'Stores',
  components: {
    VStoreAdd
  }
}
</script>

<style>
</style>