<template>
  <div id="app">
    <v-app>
      <loading :active.sync="loading"></loading>
      <v-container>
        <navigation-guest v-if="!isLogged"></navigation-guest>
        <navigation-logged v-else></navigation-logged>
        <router-view />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import NavigationLogged from "@/components/Navigations/Logged";
import NavigationGuest from "@/components/Navigations/Guest";
import { mapState } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  components: {
    NavigationLogged,
    NavigationGuest,
    Loading
  },
  computed: {
    ...mapState("auth", ["isLogged"]),
    ...mapState(["loading"])
  }
};
</script>