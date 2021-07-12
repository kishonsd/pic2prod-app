<template>
  <v-main class="primary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="transparent"
                  flat
                  dark
                  max-width="500"
                  class="mx-auto">
            <v-card-text>
              <v-img src="@/assets/Multimedia.png"></v-img>
              <h1 class="title">Upload an image</h1>
              <v-form>
                <v-file-input label="Upload an image"></v-file-input>
                <!-- <v-checkbox label="AI remove background"></v-checkbox> -->
              </v-form>
            </v-card-text>

            <v-card-text>
              <h1 class="title">Select where to post</h1>
              <v-form>
                <v-checkbox label="Ebay"></v-checkbox>
                <v-checkbox label="Magento"></v-checkbox>
                <v-checkbox label="Hiboutik"></v-checkbox>
                <v-checkbox label="Pretashop"></v-checkbox>
              </v-form>
            </v-card-text>

            <v-card-text>
              <v-form>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn block
                     rounded
                     class="pa-5"
                     color="success">
                Post
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
  data: () => ({
    e1: 1
  })
}
</script>

<style>
</style>