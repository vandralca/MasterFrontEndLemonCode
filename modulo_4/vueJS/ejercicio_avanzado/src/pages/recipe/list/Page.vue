<template>
  <app-layout>
    <v-card>
      <v-card-title class="text-h4">
        Recipes
      </v-card-title>
      <v-card-text>
        <search-bar-component :search-text="searchText" :on-search="onSearch" />
        <table-component :recipes="recipes" :on-remove-recipe="removeRecipe" />
        <v-btn type="submit" :class="$style.tableFooter" color="info" @click.prevent="openAddRecipe"
          >+ Recipe</v-btn
        >
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { baseRoutes } from "../../../router";
import { Recipe } from "./viewModel";
import { TableComponent, SearchBarComponent } from "./components";

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, TableComponent, SearchBarComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: { required: true } as PropOptions<(value: string) => void>,
    onRemoveRecipe: { required: true } as PropOptions<(recipe: Recipe) => void>,
  },
  methods: {
    openAddRecipe() {
      this.$router.push(baseRoutes.add);
    },
    removeRecipe(item: Recipe) {
      this.onRemoveRecipe(item);
    },
  },
});
</script>

<style module>
.table-footer {
  margin-top: 30px;
}
</style>
