import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators'
import { Produits } from '~/types/produits'
import { ProductCart } from '~/types/productCart'

@Module({
  name: 'cartModule',
  stateFactory: true,
  namespaced: true
})
export default class cartModule extends VuexModule {
  products: ProductCart[] = []

  get getCartProducts () {
    return this.products
  }

  get getTotalPrice () {
    let total = 0
    this.products.map(product => {
      total = total + (product.product.price * product.quantity)
    })

    return total
  }

  get totalProductsInCart () {
    return this.products.length
  }

  @Mutation
  addProductToCart (product: Produits) {
    const index = this.products.findIndex(productCart => productCart.product === product)
    if (index !== -1) {
      const newArray = [...this.products]
      newArray[index] = { ...newArray[index], quantity: newArray[index].quantity + 1 }
      this.products = newArray
    } else {
      this.products.push({ product, quantity: 1 })
    }
  }

  @Action
  public addItem (product: Produits) {
    this.addProductToCart(product)
  }
}
