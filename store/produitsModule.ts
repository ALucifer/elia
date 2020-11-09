import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { Produits } from '~/types/produits'
import { $axios } from '~/utils/api'

@Module({
  name: 'produitsModule',
  stateFactory: true,
  namespaced: true
})
export default class produitsModule extends VuexModule {
  products: Produits[] = []

  public get getProducts () {
    return this.products
  }

  @Mutation
  updateProducts (products: Produits[]) {
    this.products = products
  }

  @Action({ commit: 'updateProducts' })
  public async fetchProducts () {
    return await $axios.$get('/products')
  }
}
