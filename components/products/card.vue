<template>
  <v-card>
    <v-img :src="require('~/assets/images/porsche.png')" height="200px" aspect-ratio="2" contain>
      <v-container fill-height fluid pa-2>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox class="text-center">
            <span class="white--text title text-uppercase" v-text="product.libelle"></span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="addItem(product)">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Produits } from '@/types/produits'

@Component({
  methods: {
    ...mapActions('cartModule', ['addItem'])
  }
})
export default class card extends Vue {
  @Prop() product?: Produits
}
</script>
