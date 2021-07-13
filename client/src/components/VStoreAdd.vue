<template>
  <v-dialog v-model="dialog"
            max-width="500"
            hide-overlay>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success"
             rounded
             x-large
             class="pa-5"
             v-bind="attrs"
             v-on="on">
        Connect Store
      </v-btn>
    </template>

    <v-card color="primary"
            dark>
      <v-card-title>
        <v-img src="@/assets/Online shopping.png"></v-img>
        <h1 class="display-1 font-weight-bold white--text">
          Store
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-file-input v-model="file"
                        label="Image"
                        accept="image/*" />

          <v-text-field v-model="product.name"
                        label="Name"
                        prepend-icon="mdi-basket" />

          <v-text-field v-model="product.price"
                        label="Price"
                        prepend-icon="mdi-cash" />

          <v-textarea v-model="product.description"
                      label="Description"
                      prepend-icon="mdi-text" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="handleSubmit"
               :disabled="!valid"
               :loading="loading"
               color="success"
               rounded
               large>
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'VProductAdd',

  data: () => ({
    product: {},
    valid: true,
    loading: false,
    dialog: false,
    file: {}
  }),

  computed: {
    ...mapState([
      'user'
    ])
  },

  methods: {
    async handleSubmit () {
      this.loading = true
      const uid = this.user.me.uid

      const childRef = `products/${uid}/${this.file.name}`

      await firebase.storage().ref()
        .child(childRef)
        .put(this.file)

      const imageUrl = await firebase.storage().ref()
        .child(childRef)
        .getDownloadURL()

      await firebase.database()
        .ref(`products/${this.user.me.uid}`)
        .push({
          ...this.product,
          image: imageUrl
        })

      await this.$store.dispatch('products/loadList')

      this.file = {}
      this.product = {}
      this.dialog = false
      this.loading = false
    }
  }
}
</script>