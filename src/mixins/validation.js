const mixin = {
  data: () => ({
    fieldRequired: v => !!v || 'Field is required',
    fieldEmail: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
  })
}

export default mixin