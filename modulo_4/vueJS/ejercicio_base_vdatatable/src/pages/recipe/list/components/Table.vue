<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="recipesInTable"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.recipeIcon`]="{ item }">
        <div :class="$style.pictureCell">
          <img
            :src="item.pictureUrl"
            :class="$style.picture"
            :title="item.name"
            @click.stop="ampliarImagen(item)"
          />
        </div>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-btn text icon :to="routeEdit(item)">
          <v-icon>edit</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <div :class="$style.imageContainer">
          <img
            :src="dialogImageSrc"
            :class="$style.bigPicture"
            :title="dialogImageName"
          />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";
import { baseRoutes } from "../../../../router";
import HeaderComponent from "./Header.vue";

export default Vue.extend({
  name: "TableComponent",
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
  },
  data() {
    return {
      dialog: false,
      dialogImageSrc: "",
      dialogImageName: "",
      headers: [
        {
          text: "",
          align: "",
          sortable: false,
          value: "recipeIcon",
        },
        { text: "Name", value: "name", width: "25%" },
        { text: "Description", value: "description" },
        {
          text: "",
          align: "",
          sortable: false,
          value: "actions",
        },
      ],
      recipesInTable: [],
    };
  },
  watch: {
    recipes: function(recipes: Recipe[]) {
      this.recipesInTable = this.buildRecipesInTable(recipes);
    },
  },
  methods: {
    buildRecipesInTable(recipes: Recipe[]) {
      return recipes.map((recipe) => {
        return {
          ...recipe
        };
      });
    },
    routeEdit(item: Recipe): string {
      return `${baseRoutes.recipe}/${item.id}`;
    },
    ampliarImagen(item: Recipe) {
      this.dialogImageSrc = item.pictureUrl;
      this.dialogImageName = item.name;
      this.dialog = true;
    },
  },
});
</script>

<style module>
.picture-cell {
  width: 70px;
}

.picture {
  width: 70px;
  margin-right: 10px;
}

.picture:hover {
  cursor: pointer;
}

.name {
  width: 25%;
}

.description {
  max-width: 177px;
}

.description span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
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
