<template>
<<<<<<< HEAD
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <VCardLogin class="mx-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VCardLogin from '@/components/VCardLogin'
export default {
  name: 'Home',
  components: {
    VCardLogin
  }
=======
  <v-main class="primary ">
    <v-container>
      <v-row class="mb-12 mt-12"
             justify-center>

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
        <v-col md="4">
          <v-img src="@/assets/Online shopping.png"></v-img>
        </v-col>
      </v-row>

      <v-row class="mb-12">
        <v-col cols="12">
          <v-card dark
                  color="transparent"
                  flat>
            <v-card-text>
              <h1 class="display-3 font-weight-bold white--text">
                3 simple steps to get started
              </h1>

            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12"
               md="4">
          <v-card flat
                  color="transparent"
                  dark>
            <v-card-text class="text-center">
              <v-img src="@/assets/Multimedia.png"></v-img>
              <h1 class="title">Add a product by providing basic details.</h1>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card flat
                  color="transparent"
                  dark>
            <v-card-text class="text-center">
              <v-img src="@/assets/Notifications.png"></v-img>
              <h1 class="title">Add a store by authenticating or adding credentials.</h1>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card flat
                  color="transparent"
                  dark>
            <v-card-text class="text-center">
              <v-img src="@/assets/Multimedia.png"></v-img>
              <h1 class="title">Select where to post the product to one of your stores.</h1>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Home'
>>>>>>> development
}
</script>
