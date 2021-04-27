<template>
  <v-card max-width="500">
    <v-card-title>
      <span class="primary--text">Pic</span><span class="orange--text">2</span><span class="success--text">Prod</span>
    </v-card-title>
    <v-card-text>
      <VFormLogin />
    </v-card-text>
    <v-card-actions>
      <router-link to="/register">Don't have an account?</router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import VFormLogin from '@/components/VFormLogin'
export default {
  name: 'VCardLogin',

  components: {
    VFormLogin
  },

  data: () => ({
    form: {
      username: '',
      password: ''
    }
  })
}
</script>