<template>
  <v-row>
    <v-col cols="10">
      <div class="blue-grey darken-2 rounded-lg pa-4">
        <v-row v-for="(productCart, index) in getCartProducts" :key="index" class="pa-3">
          <v-col cols="1">
            <v-img :src="require('~/assets/images/porsche-70x70.png')"></v-img>
          </v-col>
          <v-col cols="11">
            <span>{{ productCart.product.libelle }}</span>
            <span>Quantité: {{ productCart.quantity }}</span>
            <span>Prix: {{ productCart.product.price }}</span>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col cols="2">
      <div class="blue-grey darken-2 rounded-lg pa-4 text-center">
        <div class="mb-6">
          Total: <b>{{ getTotalPrice }} €</b>
        </div>
        <div class="w-100">
          <v-btn color="success">
            Checkout
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('cartModule', ['getCartProducts', 'getTotalPrice'])
  }
}
</script>
