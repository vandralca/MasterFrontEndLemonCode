<template>
  <v-form>
    <div :class="$style.headerContainer">
      <v-text-field
        filled
        label="Name"
        :value="recipe.name"
        :rules="[resultRecipeErrorForName]"
        @input="(name) => onUpdateRecipe('name', name)"
      />

      <img
        :src="recipe.pictureUrl"
        :class="$style.picture"
        :title="recipe.name"
        @click.stop="ampliarImagen"
      />
    </div>

    <v-text-field
      filled
      label="Ingredients"
      placeholder="Add ingredient"
      append-icon="add"
      v-model="ingredient"
      @click:append="onAddIngredient(ingredient)"
    />

    <ingredient-list-component
      :ingredients="recipe.ingredients"
      :on-remove-ingredient="onRemoveIngredient"
    />

    <v-alert
      :value="!recipeError.ingredients.succeeded"
      color="error"
      outlined
      >{{ recipeError.ingredients.message }}</v-alert
    >

    <v-textarea
      label="Description"
      filled
      placeholder="Description...."
      rows="10"
      :value="recipe.description"
      :rules="[resultRecipeErrorForDescription]"
      :no-resize="true"
      @input="(value) => onUpdateRecipe('description', value)"
    ></v-textarea>

    <v-btn type="button" color="success" @click.prevent="onSave">Save</v-btn>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <div :class="$style.imageContainer">
          <img
            :src="recipe.pictureUrl"
            :class="$style.bigPicture"
            :title="recipe.name"
          />
        </div>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import IngredientListComponent from "./IngredientList.vue";
import { FormProps } from "../formProps";

export default Vue.extend({
  name: "FormComponent",
  components: { IngredientListComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
  } as FormProps,
  data() {
    return {
      ingredient: "",
      dialog: false,
    };
  },
  computed: {
    resultRecipeErrorForName(): boolean | string {
      return this.recipeError.name.succeeded || this.recipeError.name.message;
    },
    resultRecipeErrorForDescription(): boolean | string {
      return (
        this.recipeError.description.succeeded ||
        this.recipeError.description.message
      );
    },
  },
  methods: {
    ampliarImagen() {
      this.dialog = true;
    },
  },
});
</script>

<style module>
.headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.picture {
  width: 70px;
  height: 70px;
  margin-left: 10px;
}

.picture:hover {
  cursor: pointer;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.big-picture {
  max-width: 270px;
  max-height: 270px;
  margin: 20px;
}
</style>
