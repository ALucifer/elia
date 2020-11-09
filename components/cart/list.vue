<template>
  <v-list two-line subheader>
    <v-subheader inset class="text-h6">
      <p v-if="getCartProducts.length">
        Votre pannier
      </p>
      <p v-else>
        Pannier vide
      </p>
    </v-subheader>

    <v-list-item v-for="(productCart, index) in getCartProducts" :key="index">
      <v-list-item-avatar tile>
        <v-img :src="require('~/assets/images/porsche-50x50.png')"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="productCart.product.libelle"></v-list-item-title>

        <v-list-item-subtitle>Qté {{ productCart.quantity }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="getCartProducts.length" id="justfy-middle">
      <v-list-item-action class="mr-0">
        <v-btn color="teal" to="/cart/view">Voir mon pannier</v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ProductCart } from '../../types/productCart'

@Component({
  computed: {
    ...mapGetters('cartModule', ['getCartProducts'])
  }
})
export default class List extends Vue {
  @Prop() productsCart!: ProductCart[]
}
</script>

<style scoped>
#justfy-middle{
  justify-content: center;
}
</style>
