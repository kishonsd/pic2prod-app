<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-card max-width="500">
                            <v-card-text>
                                <v-form v-model="valid" ref="form">
                                    <div class="attrs" v-for="(attr, index) in attrs" :key="index">
                                        <v-text-field 
                                            label="Attribute Code" 
                                            v-model="attr.attribute_code"
                                            :rules="rulesMixin.attribute_code"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Value" 
                                            v-model="attr.value"
                                            :rules="rulesMixin.value"
                                        ></v-text-field>
                                    </div>
                                    <v-btn 
                                        small color="primary" 
                                        :disabled="!valid"
                                        @click="handlePost"
                                    >Add Attribute</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <code>
                            <pre>
{{attrs}}
                            </pre>
                        </code>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import rulesMixin from '../mixins/rulesMixin'

export default {
    name: 'VCardPic2Prod',
    mixins: [rulesMixin],

    data: () => ({
        form: {},
        attrs: [],
        valid: true,
        loading: false,
    }),
    methods: {
    handlePost() {
      this.loading = true
      if(this.$refs.form.validate()) {
          this.attrs.push({})
      }
      this.loading = false
    }
  }
}
</script>