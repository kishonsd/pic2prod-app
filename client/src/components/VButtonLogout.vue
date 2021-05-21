<template>
    <v-btn 
        color="secondary" 
        :loading="loading"
        @click="handleLogout"
    >Logout
    </v-btn>
</template>

<script>
import serverUtil from '../utils/serverUtil'
export default {
    name: 'VButtonLogout',
    data: () => ({
        loading: false,
    }),
    methods: {
        async handleLogout() {
            this.loading = true
            await serverUtil('session/logout', {
                method: 'DELETE'
            })
            .then(() => {
                this.$store.commit('user/setMe', null)
                this.$router.push('/')
            })
            this.loading = false
        }
    }
}

</script>