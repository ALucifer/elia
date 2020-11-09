<template>
  <v-container>
    <ListProduct :products="products" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { produitsStore } from '~/store'
import ListProduct from '~/components/products/list'

export default {
  name: 'Index',
  components: {
    ListProduct
  },
  async asyncData () {
    await produitsStore.fetchProducts()
  },
  computed: {
    ...mapGetters('produitsModule', {
      products: 'getProducts'
    })
  }
}
</script>
