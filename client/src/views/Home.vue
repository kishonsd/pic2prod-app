<template>
  <v-main class="primary">
    <v-container fill-height>
      <v-row>
        <v-col md="4">
          <v-img src="@/assets/Online shopping.png"></v-img>
        </v-col>
        <v-col cols="12"
               md="8">
          <v-card class="mx-auto"
                  color="transparent"
                  flat
                  shaped
                  dark>
            <v-card-text>
              <h1 class="display-3 font-weight-bold white--text">
                Amazing company deserve amazing software.
              </h1>
            </v-card-text>
            <v-card-text>
              <h2>
                Millions of happy users work better with our integrated Apps.
              </h2>
            </v-card-text>
            <v-card-actions class="mt-5">
              <v-btn color="success"
                     rounded
                     x-large
                     class="pa-5"
                     to="/signin">
                Get Started
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Home'
}
</script>
