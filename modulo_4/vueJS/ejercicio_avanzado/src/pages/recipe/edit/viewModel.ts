import { ValidationResult, createDefaultValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  pictureUrl: string;
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  description: "",
  ingredients: [],
  pictureUrl: "",
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
