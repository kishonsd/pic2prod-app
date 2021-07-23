export default {
    data: () => ({
        formRules: {
            displayName: [
                v => !!v || 'Field is required',
                v => v.length >= 5 || 'Field must be higher or equal to 5 characters'
            ],

            email: [
                v => !!v || 'Field is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],

            password: [
                v => !!v || 'Field is required',
                v => v.length >= 8 || 'Field must be higher or equal to 8 characters'
            ],

            required: [
                v => !!v || 'Field is required',
            ]
        }
    })
}