<template>
    <v-card 
        class="mx-auto overflow-hidden" 

    >
        <v-app-bar 
            app
            color="deep-purple" 
            dark
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Pic2Prod</v-toolbar-title>
            <v-spacer></v-spacer>

            <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>
        </v-app-bar>

        <v-navigation-drawer
            app
            v-model="drawer"
            temporary
            floating
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-button-logout />
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
import VButtonLogout from '../components/VButtonLogout.vue'
export default {
  components: { VButtonLogout },
    name: 'AppBar',
    
    data: () => ({
        drawer: false,
        group: null,
        items: [
        'Panel',
        'About',
      ],
    }),
}
</script>