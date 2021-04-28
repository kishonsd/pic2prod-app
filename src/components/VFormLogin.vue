<template>
  <v-form ref="form"
          v-model="form"
          @submit.prevent="login">
    <v-text-field label="Username"
                  type="text"
                  v-model="username"></v-text-field>

    <v-text-field label="Password"
                  type="password"
                  v-model="password"></v-text-field>

    <v-btn :loading="loading"
           color="primary"
           outlined
           type="submit">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';
import { APIURL } from '../constants';
export default {
  name: 'VFormLogin',

  data: () => ({
    form: {},
    loading: false,
    username: '',
    password: ''
  }),

  methods: {
    async login(){
      const username = this.username;
      const password = this.password;
      if(!username || !password){
        alert("Username and Password are required");
      }

      try{
        const { data: { token } } = await axios.post(`${APIURL}/user/login`, {
          username,
          password,
        });
        localStorage.setItem("token", token);
        // Routing to main..
        this.$router.push("/panel");
      } catch (error){
        alert("Invalid Username or Password");
      }
    }
  }
}
</script>