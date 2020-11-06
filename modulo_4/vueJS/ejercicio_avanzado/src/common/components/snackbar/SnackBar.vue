<template>
  <v-snackbar v-bind:value="value" v-on:input="updateValue" :timeout="timeout">
    <slot></slot>
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="updateValue(false)">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SnackBar",
  props: {
    value: { required: true, type: Boolean },
  },
  data() {
    return {
      timeout: 3000,
    };
  },
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    },
  },
});
</script>
