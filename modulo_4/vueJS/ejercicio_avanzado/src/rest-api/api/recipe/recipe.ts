import { Recipe } from "../../model";
import { mockRecipes } from "./mockData";

let recipes = mockRecipes;

export const fetchRecipes = (): Promise<Recipe[]> => {
  return Promise.resolve(recipes);
};

export const fetchRecipeById = (id: number): Promise<Recipe> => {
  const recipe = recipes.find((r) => r.id === id);
  return Promise.resolve(recipe as Recipe);
};

export const save = (recipe: Recipe): Promise<string> => {
  const index = recipes.findIndex((r) => r.id === recipe.id);

  return index >= 0 ? saveRecipeByIndex(index, recipe) : addRecipe(recipe);
};

export const remove = (recipe: Recipe): Promise<string> => {
  const index = recipes.findIndex((r) => r.id === recipe.id);

  return index >= 0 ? deleteRecipeByIndex(index) : Promise.resolve("Delete recipe success");
}

const saveRecipeByIndex = (index: number, recipe: Recipe): Promise<string> => {
  recipes = [...recipes.slice(0, index), recipe, ...recipes.slice(index + 1)];

  return Promise.resolve("Update recipe success");
};

const addRecipe = (recipe: Recipe): Promise<string> => {
  if (!recipe.id || recipe.id <= 0)
  {
    recipe.id = recipes.map(r => r.id).reduce((acc, id) => Math.max(acc, id), 0) + 1;
  }

  if (!recipe.pictureUrl)
  {
    const no_recipe_picture = require("../../assets/no_recipe_image.png");
    recipe.pictureUrl = no_recipe_picture.default;
  }

  recipes = [...recipes, recipe];

  return Promise.resolve("Add recipe success");
};

const deleteRecipeByIndex = (index: number): Promise<string> => {
  recipes = [...recipes.slice(0, index), ...recipes.slice(index + 1)];

  return Promise.resolve("Delete recipe success");
};
