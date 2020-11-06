import { ValidationResult, createDefaultValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
  pictureUrl: string;
}

export const createEmptyRecipe = (): Recipe => ({
  name: "",
  description: "",
  ingredients: [],
  pictureUrl: require("../../../rest-api/assets/no_recipe_image.png").default,
});

export interface RecipeError {
  name: ValidationResult;
  description: ValidationResult;
  ingredients: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
});
