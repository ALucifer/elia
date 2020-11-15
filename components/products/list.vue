<template>
  <v-row>
    <v-col v-for="(product, index) in products" :key="index" cols="2">
      <card :product="product" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Produits } from '~/types/produits'
import { card } from '~/components/products/card'

@Component({
  components: { card },
  computed: {
    ...mapGetters('produitsModule', {
      products: 'getProducts'
    })
  }
})
export default class ListProduct extends Vue {
  @Prop() products?: Produits[]
}
</script>
