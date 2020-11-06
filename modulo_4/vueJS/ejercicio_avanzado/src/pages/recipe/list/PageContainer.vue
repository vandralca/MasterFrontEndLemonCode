<template>
  <recipe-list-page
    v-bind="{ searchText, recipes: filteredRecipes, onSearch, onRemoveRecipe }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipes, remove } from "../../../rest-api/api/recipe";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";
import { mapRecipeListModelToVm, mapRecipeVmToModel } from "./mapper";
import { Recipe } from "./viewModel";
import RecipeListPage from "./Page.vue";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage,
  },
  data() {
    return {
      recipes: [] as Recipe[],
      searchText: "",
    };
  },
  computed: {
    filteredRecipes(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetchRecipes()
        .then((recipes) => {
          this.recipes = mapRecipeListModelToVm(recipes);
        })
        .catch((error) => {
          this.displaySnackbar = true;
          this.snackMessage = error;
        });
    },
    onSearch(value: string) {
      this.searchText = value;
    },
    onRemoveRecipe(recipe: Recipe) {
      remove(mapRecipeVmToModel(recipe))
        .then(_ => {
          this.fetchData();
        });
    },
  },
});
</script>
