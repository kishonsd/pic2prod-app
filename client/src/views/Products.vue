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
                Manage your products with ease.
              </h1>
            </v-card-text>
            <v-card-actions class="mt-5">
              <v-product-add />
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12"
               sm="6"
               md="4"
               lg="3"
               v-for="product in products.list"
               :key="product.key">
          <v-card color="transparent"
                  flat>
            <v-img :src="product.image"
                   max-height="230"
                   class="white--text align-end"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)">
              <v-card-text>
                <h1 class="title">{{product.name}}</h1>
                <v-spacer></v-spacer>
                <h1 class="title">${{product.price}}</h1>
                <p> {{product.description}}</p>
              </v-card-text>
            </v-img>
            <v-card-actions>
              <v-btn color="success"
                     rounded
                     dark
                     block>
                <v-icon>mdi-send</v-icon>
              </v-btn>
              <!-- <v-btn color="yelllow"
                     rounded
                     dark>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn color="red"
                     rounded
                     dark>
                <v-icon>mdi-delete</v-icon>
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>

      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
import VProductAdd from '@/components/VProductAdd'

export default {
  components: {
    VProductAdd
  },

  computed: {
    ...mapState([
      'user',
      'products'
    ])
  },

  data: () => ({
    show: false
  })
}
</script>

<style>
</style>