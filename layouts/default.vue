<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <a href="/" style="text-decoration: none; color:inherit">
          MainStore
        </a>
      </v-toolbar-title>
      <v-spacer />
      <UserIconMenu class="mx-3" />
      <CartIconMenu class="mx-3" @toggleRDrawer="rightDrawer = !rightDrawer" />
      <template v-slot:extension>
        <v-tabs v-for="(menu, index) in getMenus" :key="index">
          <v-tab :key="index" link :to="menu.url">{{ menu.libelle }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <List />
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import List from '~/components/cart/list'
import CartIconMenu from '~/components/cart/CartIconMenu'
import UserIconMenu from '~/components/user/UserIconMenu'

export default {
  components: {
    List, CartIconMenu, UserIconMenu
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  computed: {
    ...mapGetters('menuModule', ['getMenus'])
  }
}
</script>
