<template>
     <div>
     <p class="font-weight-bold">Recipe Name</p>
     <p class="text-left">Name your recipe and choose the URL you'd like to scrape.</p>

  <v-form>
    <v-container>
        <v-card>
          <v-row>
           <v-col
              cols="12" 
              sm="6"
              >
              <v-text-field
              label="e.g. Yelp store names"
              hint="name between 3 and 50 characters"
              persistent-hint
              outlined
            ></v-text-field>
             </v-col>

             <v-col
              cols="12"
              sm="6"
              >
              <v-text-field
              label="eg. www.reddit.com"
              hint="valid url required"
              persistent-hint
              outlined
              >
           
           </v-text-field>

          </v-row>
        </v-card>
    </v-container>
  </v-form>
  </div>
</template>