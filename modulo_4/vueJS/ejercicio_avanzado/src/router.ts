import Router, { RouteConfig, Route } from "vue-router";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPageContainer } from "./pages/recipe/list";
import { EditRecipePageContainer } from "./pages/recipe/edit";
import { AddRecipePageContainer } from "./pages/recipe/add";
import { getUserLogged } from "./common/components/security";

export const baseRoutes = {
  root: "/",
  login: "/login",
  recipe: "/recipe",
  edit: "/recipe/:id",
  add: "/addRecipe",
};

export type BaseRoutes = typeof baseRoutes;

const routes: RouteConfig[] = [
  { path: baseRoutes.root, redirect: baseRoutes.login },
  { path: baseRoutes.login, component: LoginPageContainer },
  { path: baseRoutes.recipe, component: RecipeListPageContainer },
  { path: baseRoutes.edit, component: EditRecipePageContainer, props: true },
  { path: baseRoutes.add, component: AddRecipePageContainer, props: true },
];

export const router = new Router({
  routes,
});

const isPublicRoute = (to: Route) : boolean => {
  return to.path === baseRoutes.root || to.path === baseRoutes.login;
}

router.beforeEach((to, from, next) => {
  if (isPublicRoute(to) || getUserLogged()) {
    next();
  }
  else {
    next(baseRoutes.login);
  }
});