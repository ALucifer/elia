import { Store } from 'vuex'
import { $axios } from '~/utils/api'
import { initialiseStores } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {

  nuxtServerInit ({ dispatch }) {
    dispatch('menuModule/fetchMenus')
  }
}
