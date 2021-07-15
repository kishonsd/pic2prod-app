<template>
  <v-card shaped>
    <v-toolbar color="primary darken-3"
               dark>
      <v-toolbar-title class="mr-5">
        Products
      </v-toolbar-title>
      <v-text-field v-model="search"
                    label="Search"
                    prepend-icon="mdi-magnify"
                    hide-details />
      <v-spacer></v-spacer>

      <VProductAdd />
    </v-toolbar>

    <v-card-text>
      <v-data-table :loading="loading"
                    :headers="headers"
                    :items="items"
                    :search="search">

        <template v-slot:[`item.image`]="{ item }">
          <v-avatar size="36"
                    small>
            <v-img :src="item.image"></v-img>
          </v-avatar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <VProductEdit :product="item">
            <v-icon>mdi-pencil</v-icon>
          </VProductEdit>
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
import { mapState } from 'vuex'
import firebase from 'firebase'
import VProductAdd from '@/components/VProductAdd'
import VProductEdit from '@/components/VProductEdit'
export default {
  name: 'VProductsTableList',

  components: {
    VProductAdd,
    VProductEdit
  },

  data: () => ({
    search: '',
    loading: true,
    headers: [
      { text: 'Image', value: 'image' },
      { text: 'Name', value: 'name' },
      { text: 'Price', value: 'price' },
      { text: 'Actions', value: 'actions' }
    ]
  }),

  async mounted () {
    this.loading = true
    await this.$store.dispatch('products/loadItems')
    this.loading = false
  },

  computed: {
    ...mapState('products', ['items']),
    ...mapState('user', ['me'])
  },

  methods: {
    async handleDelete (item) {
      this.loading = true

      await firebase.database()
        .ref(`products/${this.me.uid}/${item.key}`)
        .remove()

      await this.$store.dispatch('products/loadItems')
      this.loading = false
    }
  }

}
</script>

<style>
</style>