<template>
<div>
  <login-page v-bind="{ login, updateLogin, loginRequest, loginError }" />
  <snack-bar v-model="displaySnackbar">{{ snackMessage }}</snack-bar>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { loginRequest } from "../../rest-api/api/login";
import { baseRoutes } from "../../router";
import LoginPage from "./Page.vue";
import { createEmptyLogin, Login, createEmptyLoginError } from "./viewModel";
import { mapLoginVMToModel } from "./mapper";
import { validation } from "./validations";
import { SnackBar } from "../../common/components/snackbar";

export default Vue.extend({
  name: "PageLoginContainer",
  components: { LoginPage, SnackBar },
  data() {
    return {
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
      snackMessage: "",
      displaySnackbar: false
    };
  },
  methods: {
    updateLogin(field: string, value: string) {
      this.login = {
        ...this.login,
        [field]: value
      };

      validation.validateField(field, value).then(result => {
        this.loginError = {
          ...this.loginError,
          [field]: result
        };
      });
    },
    loginRequest() {
      validation.validateForm(this.login).then(result => {
        if (result.succeeded) {

          const loginModel = mapLoginVMToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              this.$router.push(baseRoutes.recipe);
            })
            .catch(error =>
            {
              this.displaySnackbar = true;
              this.snackMessage = error;
            });


        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    }
  }
});
</script>
