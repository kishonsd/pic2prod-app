<template>
  <v-card color="transparent"
          flat
          dark
          max-width="400"
          class="mx-auto">
    <v-card-title>
      <v-img src="@/assets/Online shopping.png"></v-img>
      <h1 class="display-1 font-weight-bold white--text">
        Post
      </h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-select v-model="post.productId"
                  label="Product"
                  :items="products.items"
                  item-text="name"
                  item-value="key"
                  :rules="formRules.required" />

        <v-select v-model="post.stores"
                  label="Stores"
                  :items="stores.items"
                  item-text="name"
                  return-object
                  multiple
                  :rules="formRules.required" />
      </v-form>
    </v-card-text>

    <div class="post-meta"
         v-for="store in post.stores"
         :key="store.key">
      <v-card-title>
        <h1 class="display-1 font-weight-bold white--text">
          {{store.name}}
        </h1>
        <v-subheader>
          {{store.platform}}
        </v-subheader>
      </v-card-title>

      <v-card-text>
        <component :is="handlePostStoreAdd(store.platform)"
                   :store="store" />
      </v-card-text>
    </div>

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
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import formRules from '@/mixins/formRules'
import VPostHiboutikAdd from '@/components/VPostHiboutikAdd'
import VPostMagentoAdd from '@/components/VPostMagentoAdd'
export default {
  name: 'VPostAdd',


  components: {
    VPostHiboutikAdd,
    VPostMagentoAdd
  },

  mixins: [formRules],

  data: () => ({
    post: {},
    valid: true,
    loading: false
  }),

  computed: {
    ...mapState([
      'stores',
      'products',
      'user'
    ])
  },

  methods: {
    async handleSubmit () {
      this.loading = true
      await firebase.database()
        .ref(`post/${this.user.me.uid}`)
        .push(this.post)

      this.post = {}
      this.loading = false
    },
    handlePostStoreAdd (store) {
      return `VPost${store}Add`
    }
  }
}
</script>

<style>
</style>