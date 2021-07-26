<template>
  <v-dialog v-model="dialog"
            max-width="500"
            fullscreen>

    <template v-slot:activator="{ on, attrs }">
      <v-btn color="yellow"
             rounded
             text
             class="pa-5"
             v-bind="attrs"
             v-on="on">
        <slot />
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
          <v-btn icon
                 @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-dialog v-model="dialogImage"
                  max-width="800">
          <v-img :src="product.image"></v-img>
        </v-dialog>
        <v-card @click="dialogImage = true"
                shaped
                hover
                flat
                color="transparent">
          <v-card-text>
            <v-img :src="product.image"></v-img>
          </v-card-text>
        </v-card>
        <v-card-title>
          <h1 class="display-1 font-weight-bold white--text">
            Edit Product
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

  props: {
    product: {
      type: Object,
      default: () => new Object()
    }
  },

  components: {
    VProductFields
  },

  data: () => ({
    valid: true,
    loading: false,
    dialog: false,
    dialogImage: false,
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


      await firebase.database()
        .ref(`products/${this.user.me.uid}/${this.product.key}`)
        .update(this.product)

      if (this.file.obj) {
        const childRef = `products/${uid}/${this.file.obj.name}`

        await firebase.storage().ref()
          .child(childRef)
          .put(this.file.obj)

        const imageUrl = await firebase.storage().ref()
          .child(childRef)
          .getDownloadURL()
        console.log(imageUrl)
        await firebase.database()
          .ref(`products/${this.user.me.uid}/${this.product.key}/image`)
          .set(imageUrl)
      }


      this.dialog = false
      await this.$store.dispatch('products/loadItems')

      this.file = {}
      this.loading = false
    }
  }
}
</script>