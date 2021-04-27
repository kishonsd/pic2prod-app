<template>
  <v-form ref="form"
          v-model="form">
    <v-text-field label="Username"
                  type="text"></v-text-field>

    <v-text-field label="Password"
                  type="password"></v-text-field>

    <v-btn :loading="loading"
           color="primary"
           outlined>
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'VFormLogin',

  data: () => ({
    form: {},
    loading: false
  }),

  methods: {
    async handleLogin () {
      this.loading = true
      this.loading = false
    }
  }
}
</script>