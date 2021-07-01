<template>
    <v-list-item
        @click="handleLogout()"
    >
        <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
    </v-list-item>
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
                alert('logging out...')
                this.$store.commit('user/setMe', null)
                this.$router.push('/')
            })
            this.loading = false
        }
    }
}

</script>