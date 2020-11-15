import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { Menu } from '~/types/menu'

@Module({
  name: 'menuModule',
  stateFactory: true,
  namespaced: true
})
export default class menuModule extends VuexModule {
  menus: Menu[] = []

  get getMenus () {
    return this.menus
  }

  @Mutation
  setMenu (menus: Menu[]) {
    this.menus = menus
  }

  @Action({ commit: 'setMenu' })
  public async fetchMenus () {
    return await $axios.$get('/menu')
  }
}
