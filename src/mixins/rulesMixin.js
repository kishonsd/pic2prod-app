import Vue from 'vue'

const mixin = Vue.mixin({
  data: () => ({
    rulesMixin: {
      username: [
        v => !!v || 'Field is required'
      ],
      password: [
        v => !!v || 'Field is required'
      ],
      email: [
        v => !!v || 'Field is required'
      ]
    }
  })
})

export default mixin