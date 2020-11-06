import * as model from "../../../rest-api/model";
import * as vm from "./viewModel";

export const mapRecipeVmToModel = (recipe: vm.Recipe): model.Recipe => ({
  ...recipe,
  id: 0
});
