<template>
  <div>
    <recipe-add-page
      v-bind="{
        recipe,
        recipeError,
        onUpdateRecipe,
        onAddIngredient,
        onSave,
        onRemoveIngredient,
      }"
    />
    <snack-bar v-model="displaySnackbar">{{ snackMessage }}</snack-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RecipeAddPage from "./Page.vue";
import { fetchRecipeById, save } from "../../../rest-api/api/recipe";
import { mapRecipeVmToModel } from "./mapper";
import { createEmptyRecipe, createEmptyRecipeError } from "./viewModel";
import { validations } from "./validations";
import { SnackBar } from "../../../common/components/snackbar";

export default Vue.extend({
  name: "RecipeAddPageContainer",
  components: { RecipeAddPage, SnackBar },
  data() {
    return {
      recipe: createEmptyRecipe(),
      recipeError: createEmptyRecipeError(),
      displaySnackbar: false,
      snackMessage: "",
    };
  },
  methods: {
    onUpdateRecipe(field: string, value: string) {
      this.recipe = {
        ...this.recipe,
        [field]: value,
      };
      this.validateRecipeField(field, value);
    },
    onSave() {
      validations.validateForm(this.recipe).then((result) => {
        if (result.succeeded) {
          const recipe = mapRecipeVmToModel(this.recipe);
          save(recipe)
            .then((message) => {
              console.log(message);
              this.$router.back();
            })
            .catch((error) => {
              this.displaySnackbar = true;
              this.snackMessage = error;
            });
        } else {
          this.recipeError = {
            ...this.recipeError,
            ...result.fieldErrors,
          };

          this.displaySnackbar = true;
          this.snackMessage =
            (this.recipeError.name.message ? this.recipeError.name.message + ".  " : "") +
            (this.recipeError.description.message ? this.recipeError.description.message + ".  " : "") +
            (this.recipeError.ingredients.message ? this.recipeError.ingredients.message + ".  " : "");
        }
      });
    },
    onAddIngredient(ingredient: string) {
      if (!ingredient)
      {
        this.displaySnackbar = true;
        this.snackMessage = "Ingredient cannot be empty";

        return;
      }

      this.recipe = {
        ...this.recipe,
        ingredients: [...this.recipe.ingredients, ingredient],
      };
      this.validateRecipeField("ingredients", this.recipe.ingredients);
    },
    onRemoveIngredient(ingredient: string) {
      this.recipe = {
        ...this.recipe,
        ingredients: this.recipe.ingredients.filter(
          (item) => item !== ingredient
        ),
      };
      this.validateRecipeField("ingredients", this.recipe.ingredients);
    },
    validateRecipeField(field, value) {
      validations
        .validateField(field, value)
        .then((result) => this.updateRecipeError(field, result));
    },
    updateRecipeError(field, result) {
      this.recipeError = {
        ...this.recipeError,
        [field]: result,
      };
    },
  },
});
</script>
