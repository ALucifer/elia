<template>
  <v-badge
    :content="totalProducts"
    :value="totalProducts"
    color="purple"
    bottom
    left
    overlap
  >
    <v-icon @click.stop="$emit('toggleRDrawer')">mdi-cart</v-icon>
  </v-badge>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters('cartModule', {
      totalProducts: 'totalProductsInCart'
    })
  }
})
export default class CartIconMenu extends Vue {
}
</script>
