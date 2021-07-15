<template>
  <v-card shaped>
    <v-toolbar color="primary darken-3"
               dark>
      <v-toolbar-title class="mr-5">
        Stores
      </v-toolbar-title>
      <v-text-field v-model="search"
                    label="search"
                    prepend-icon="mdi-magnify"
                    hide-details />
      <v-spacer></v-spacer>
      <VStoreAdd />
    </v-toolbar>

    <v-card-text>
      <v-data-table :loading="loading"
                    :headers="headers"
                    :items="items"
                    :search="search">
        <template v-slot:[`item.actions`]="{ item }">
          <VStoreEdit :store="item">
            <v-icon>mdi-pencil</v-icon>
          </VStoreEdit>

          <v-btn @click="handleDelete(item)"
                 color="error"
                 text
                 rounded>
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
import VStoreAdd from '@/components/VStoreAdd'
import VStoreEdit from '@/components/VStoreEdit'
export default {
  name: 'VStoresTable',
  components: {
    VStoreAdd,
    VStoreEdit
  },

  data: () => ({
    search: '',
    loading: true,
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Platform', value: 'platform' },
      { text: 'Actions', value: 'actions' }
    ]
  }),

  computed: {
    ...mapState('stores', ['items']),
    ...mapState('user', ['me'])
  },

  async mounted () {
    this.loading = true
    await this.$store.dispatch('stores/loadItems')
    this.loading = false
  },

  methods: {
    async handleDelete (item) {
      this.loading = true

      await firebase.database()
        .ref(`stores/${this.me.uid}/${item.key}`)
        .remove()
      await this.$store.dispatch('stores/loadItems')
      this.loading = false

    }
  }
}
</script>

<style>
</style>