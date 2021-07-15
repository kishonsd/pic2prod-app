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
        Add Store
      </v-btn>
    </template>

    <v-sheet dark
             color="primary"
             class="fill-height">
      <v-card color="transparent"
              max-width="400"
              class="mx-auto"
              flat
              dark>
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
          <v-img src="@/assets/Online shopping.png"></v-img>
          <h1 class="display-1 font-weight-bold white--text">
            Store
          </h1>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field v-model="storeMeta.name"
                          label="Name"
                          type="text"
                          :rules="formRule.required" />

            <v-select label="Select platform"
                      v-model="platform"
                      :items="platforms"
                      item-text="text"
                      item-value="value"
                      :rules="formRule.required"></v-select>

            <component :is="platform"
                       :credentials="credentials" />
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
import formRule from '@/utilities/formRule'
import VStoreHiboutikAdd from '@/components/VStoreHiboutikAdd'
export default {
  name: 'VStoreAdd',
  components: {
    VStoreHiboutikAdd
  },

  data: () => ({
    formRule,
    dialog: false,
    valid: true,
    platform: false,
    platforms: [
      { text: 'Hiboutik', value: VStoreHiboutikAdd }
    ],
    credentials: {},
    loading: false,
    storeMeta: {}
  }),

  computed: {
    ...mapState('user', ['me']),
    computePlatform () {
      if (this.platform) return this.platforms.find(pl => pl.value === this.platform)
      else return false
    }
  },

  methods: {
    async handleSubmit () {
      this.loading = true
      await firebase.database()
        .ref(`stores/${this.me.uid}`)
        .push({
          ...this.storeMeta,
          platform: this.computePlatform.text,
          credentials: this.credentials
        })
      await this.$store.dispatch('stores/loadItems')
      this.platform = false
      this.credentials = {}
      this.storeMeta = {}
      this.loading = false
      this.dialog = false
    }
  }
}
</script>