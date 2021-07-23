<template>
  <v-dialog v-model="dialog"
            max-width="500"
            fullscreen>

    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success"
             rounded
             class="pa-5"
             v-bind="attrs"
             v-on="on">
        Add Product
      </v-btn>
    </template>
    <v-sheet dark
             color="primary">
      <v-card color="transparent"
              flat
              dark
              max-width="400"
              class="mx-auto">
        <v-toolbar dark
                   flat
                   color="transparent">
          <v-spacer></v-spacer>
          <v-btn rounded
                 text
                 @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-title>

          <v-avatar v-if="computeProductImageUrl"
                    size="248"
                    class="mb-5 d-block mx-auto">
            <v-img :src="computeProductImageUrl" />
          </v-avatar>
          <v-img v-else
                 src="@/assets/Online shopping.png" />

          <h1 class="display-1 font-weight-bold white--text">
            Product
          </h1>
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <VProductFields :form="product"
                            :file="file" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="handleSubmit"
                 :disabled="!valid"
                 :loading="loading"
                 block
                 rounded
                 color="success"
                 class="pa-5">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-sheet>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import VProductFields from '@/components/VProductFields'
export default {
  name: 'VProductAdd',

  components: {
    VProductFields
  },

  data: () => ({
    product: {},
    valid: true,
    loading: false,
    dialog: true,
    file: {}
  }),

  computed: {
    ...mapState([
      'user'
    ]),

    computeProductImageUrl () {
      return this.file.obj ? URL.createObjectURL(this.file.obj) : false
    }
  },

  watch: {
    file (v) {
      console.log(v)
    }
  },

  methods: {
    async handleSubmit () {
      this.loading = true
      const uid = this.user.me.uid

      const childRef = `products/${uid}/${this.file.obj.name}`

      await firebase.storage().ref()
        .child(childRef)
        .put(this.file.obj)

      const imageUrl = await firebase.storage().ref()
        .child(childRef)
        .getDownloadURL()

      await firebase.database()
        .ref(`products/${this.user.me.uid}`)
        .push({
          ...this.product,
          image: imageUrl
        })

      this.dialog = false
      await this.$store.dispatch('products/loadItems')

      this.file = {}
      this.product = {}
      this.loading = false
    }
  }
}
</script>