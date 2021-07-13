<template>
  <v-card color="transparent"
          flat
          dark
          max-width="500"
          class="mx-auto">
    <v-card-text>
      <v-img src="@/assets/Multimedia.png"></v-img>
      <h1 class="title">Upload an image</h1>
      <v-form v-model="uploadImageValid">
        <v-file-input label=".jpg .jpeg .png"
                      accept="image/*"
                      v-model="product.image"
                      required></v-file-input>
        <v-checkbox label="AI remove background" />
      </v-form>
    </v-card-text>

    <v-card-text>
      <h1 class="title">Add basic details about your product</h1>
      <v-form>
        <v-text-field label="Name"
                      type="text" />
        <v-text-field label="Price"
                      type="number" />
      </v-form>
    </v-card-text>

    <v-card-text>
      <h1 class="title">Select where to post</h1>
      <v-form>
        <v-checkbox label="Ebay" />
        <v-checkbox label="Magento" />
        <v-checkbox v-model="hiboutikSelected"
                    label="Hiboutik" />
        <v-checkbox label="Pretashop" />
      </v-form>
    </v-card-text>

    <v-card-text v-if="hiboutikSelected">
      <h1 class="title">Select what to post in Hiboutik</h1>
      <v-form>
        <v-text-field label="Product title" />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn block
             rounded
             class="pa-5"
             color="success"
             :disabled="!valid">
        Post
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    uploadImageValid: true,
    hiboutikSelected: false,
    product: {}
  }),

  computed: {
    valid () {
      return this.uploadImageValid
    }
  }
}
</script>

<style>
</style>