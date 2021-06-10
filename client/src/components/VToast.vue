<template>
    <v-snackbar v-model="toast.state"
                :color="toast.color"
                top
                center>
        {{toast.message}}
    </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'VToast',
    computed: {
        ...mapState('toast', ['me']),
        toast: {
            set() { this.$store.commit('toast/setMe', { state: false, message: '', color: '' }) },
            get() { return this.me }
        }
    }
}

</script>