<template>
  <div :class="$style.container">
    <span :class="$style.user">{{ user }}</span>
    <v-btn
      type="submit"
      color="grey"
      @click.prevent="logOut"
      >
      Log Out</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { unregisterUserLogged } from "../../common/components/security";

export default Vue.extend({
  name: "LogoutContainer",
  props: {
    user: { required: true, type: String },
  },
  methods: {
    logOut() {
      unregisterUserLogged();
    },
  },
});
</script>

<style module>
.container {
  display: flex;
}

.user {
  margin-right: 20px;
}
</style>
