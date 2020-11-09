import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import produitsModule from '~/store/produitsModule'
import cartModule from '~/store/cartModule'
import menuModule from '~/store/menuModule'

let produitsStore: produitsModule
let cartStore: cartModule
let menuStore: menuModule

function initialiseStores (store: Store<any>): void {
  produitsStore = getModule(produitsModule, store)
  cartStore = getModule(cartModule, store)
  menuStore = getModule(menuModule, store)
}

export { initialiseStores, produitsStore, cartStore, menuStore }
