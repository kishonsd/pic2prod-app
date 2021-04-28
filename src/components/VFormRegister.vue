<template>
  <v-form ref="form"
          v-model="valid">
    <v-text-field label="Email"
                  type="email"
                  v-model="form.email" />

    <v-text-field label="Username"
                  type="text"
                  v-model="form.username" />

    <v-text-field label="Password"
                  type="password"
                  v-model="form.password" />

    <v-text-field label="Confirm Password"
                  type="password"
                  v-model="form.confirmPassword" />

    <v-btn color="primary"
           @click="handleRegister"
           outlined>
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import server from '@/mixins/server'
import axios from 'axios';
import { APIURL } from '../constants';

export default {
  name: 'VFormRegister',
  mixins: [server],

  data: () => ({
    form: {},
    valid: true
  }),

  methods: {
    async handleRegister () {
      const { email, username, password, confirmPassword } = this.form;
      if (!username || !password || !email) {
        alert("Email, Username and password are required");
      }
      try {
        await axios.post(`${APIURL}/user/register`, {
          username,
          password,
          confirmPassword,
          email
        });
        alert("Registration successful");
        this.$router.push("/");
      } catch (error) {
        alert("Registration failed.");
      }
    }
  }
}
</script>