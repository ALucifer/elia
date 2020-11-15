<template>
  <v-container>
    <div>
      {{ this.slug }}
    </div>
    <ListProduct />
  </v-container>
</template>

<script>
import { produitsStore } from '~/store'
import ListProduct from '~/components/products/list'

export default {
  name: 'Index',
  components: {
    ListProduct
  },
  async asyncData ({ params }) {
    const slug = params.slug
    await produitsStore.fetchProducts()
    return { slug }
  }
}
</script>
