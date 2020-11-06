<template>
  <div>
    <v-app-bar app dark color="amber">
      <v-toolbar-title :class="$style.headerContainer">
        <span>Recipe App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title :class="$style.headerContainer">
        <logout-container :user="loggedUser"></logout-container>
      </v-toolbar-title>
    </v-app-bar>
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LogoutContainer } from "../../pod/logout";
import { getUserLogged } from "../components/security";

export default Vue.extend({
  name: "AppLayout",
  components: { LogoutContainer },
  computed: {
    loggedUser() {
      return getUserLogged();
    }
  }
});
</script>

<style module>
.headerContainer {
  display: flex;
  justify-content: flex-end;
}
</style>