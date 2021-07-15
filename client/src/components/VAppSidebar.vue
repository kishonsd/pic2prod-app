<template>
  <v-navigation-drawer app
                       color="primary darken-2"
                       dark>
    <v-toolbar color="primary darken-3"
               flat
               dark>
      <v-toolbar-title style="cursor: pointer"
                       @click="handleToDashboard"
                       class="mr-12">
        <v-icon x-large>mdi-rhombus-split</v-icon>
        Pic2Prod
      </v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense
            nav>
      <v-list-item v-for="item in items"
                   :key="item.title"
                   link
                   exact
                   :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Post', icon: 'mdi-send', to: '/post' },
        { title: 'Stores', icon: 'mdi-store', to: '/stores' },
        { title: 'Products', icon: 'mdi-basket', to: '/products' },
      ],
      right: null,
    }
  },

  methods: {
    handleToDashboard () { this.$router.push('/post') }
  }
}
</script>