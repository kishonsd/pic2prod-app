<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-select
                        :items="platform"
                        v-model="selectedPlatform"
                        label="Platform List"
                        outlined
                        ></v-select>
                        <v-card max-width="500">
                            <v-card-text v-if="selectedPlatform === 'Hiboutik'">
                                <VFormHiboutik @getHiboutik="addToHiboutik" />
                            </v-card-text>
                            <v-card-text v-else-if="selectedPlatform === 'Magento'">
                                <VFormMagento @getMagento="addToMagento" />
                            </v-card-text>
                            <v-card-text v-else-if="selectedPlatform === 'eBay'">
                                <VFormEbay @getEbay="addToEbay" />
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div>
                            <h1>Active Combos</h1>
                            <VButtonLogout class="float-right" />
                        </div>
                        <v-btn 
                            color="primary"
                            :loading="loading"
                            @click="handlePost"
                        >Combo</v-btn>
                        <v-expansion-panels class="mt-5" v-for="(item,index) in items" :key="index">
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    {{ item.platform }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <code>
                                        <pre>
{{ item }}
                                        </pre>
                                    </code>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import VFormHiboutik from '@/components/forms/VFormHiboutik'
import VFormMagento from '@/components/forms/VFormMagento'
import VFormEbay from '@/components/forms/VFormEbay'
import serverUtil from '../utils/serverUtil'
import VButtonLogout from './VButtonLogout'

export default {
    name: 'VCardPic2Prod',
    components: {
        VFormHiboutik,
        VFormMagento,
        VFormEbay,
        VButtonLogout
    },

    data: () => ({
        platform: ['Hiboutik', 'Magento', 'eBay'],
        selectedPlatform: 'Hiboutik',
        items: [],
        valid: true,
        loading: false,
    }),
    methods: {
        addToHiboutik(hiboutikItems) {
            this.items.push(hiboutikItems)
        },

        addToMagento(magentoItems) {
            this.items.push(magentoItems)
        },

        addToEbay(inventory, offers) {
            this.items.push(inventory, offers)
        },

        async handlePost() {
            this.loading = true
            await this.items.map((item) => {
                if(item.platform === 'eBayInventory') {
                    serverUtil(item.server, {
                        method: 'PUT',
                        data: item
                    })
                } else if(item.platform === 'eBayOffer') {
                    serverUtil(item.server, {
                        method: 'POST',
                        data: item
                    })
                } else {
                    serverUtil(item.server, {
                        method: 'POST',
                        data: item
                    })
                }
            })
            this.loading = false
        }
  }
}
</script>