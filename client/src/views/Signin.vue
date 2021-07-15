<template>
  <v-main class="primary">
    <v-container fill-height>
      <v-row>
        <v-col cols="12">
          <v-card color="transparent"
                  flat
                  dark
                  max-width="400"
                  class="mx-auto">
            <v-card-text>
              <v-img src="@/assets/App Sign in .png"></v-img>

              <v-form>
                <v-form v-model="valid"
                        ref="form">
                  <v-text-field v-model="email"
                                :rules="formRule.email"
                                label="Email"
                                type="email" />
                  <v-text-field v-model="password"
                                :rules="formRule.password"
                                label="Password"
                                type="password" />
                </v-form>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="handleSignin"
                     :loading="loading"
                     :disabled="!valid"
                     block
                     rounded
                     class="pa-5"
                     outlined
                     dark>
                Sign in
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn @click="handleSigninWithGoogle"
                     :loading="loading"
                     block
                     rounded
                     color="success"
                     class="pa-5">
                Sign in with Google
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn to="/signup"
                     :loading="loading"
                     block
                     rounded
                     class="pa-5"
                     color="warning"
                     dark>
                Sign up
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import formRule from '@/utilities/formRule'
import firebase from 'firebase'
export default {
  data: () => ({
    formRule: formRule,
    loading: false,
    email: '',
    password: '',
    valid: true
  }),

  methods: {
    async handleSigninWithGoogle () {
      this.loading = true
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth()
        .signInWithPopup(provider)
        .then(res => this.$store.commit('user/setMe', res.user))
        .catch(err => alert(err.message))
      this.loading = false

    },

    async handleSignin () {
      this.loading = true
      if (this.$refs.form.validate()) {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(err => alert(err.message))
      }
      this.loading = false
    }
  }
}
</script>

<style>
</style>