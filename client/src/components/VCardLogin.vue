<template>
  <v-card>
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <v-text-field 
          label="Username" 
          v-model="form.username"
          type="text" 
          required
          :rules="rulesMixin.username"
        ></v-text-field>
        <v-text-field 
          label="Password" 
          v-model="form.password"
          type="password" 
          required
          :rules="rulesMixin.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn 
        color="primary" 
        :loading="loading" 
        :disabled="!valid"
        @click="handleLogin"
      >Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import serverUtil from '@/utils/serverUtil'
import rulesMixin from '../mixins/rulesMixin'

export default {
  name: 'VCardLogin',
  
  mixins: [rulesMixin],

  data: () => ({
    form: {
      username: '',
      password: ''
    },
    loading: false,
    valid: true,
  }),
  methods: {
    async handleLogin() {
      this.loading = true
      if(this.$refs.form.validate()) {
        await serverUtil('session/login', {
          method: 'POST',
          data: this.form
        })
        .then(res => {
          this.$store.commit('user/setMe', res.data)
          this.$router.push('/panel')
        })
      }
      this.form.password = ''
      this.loading = false
    }
  }
}

</script>