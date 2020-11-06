<template>
  <tr>
    <td :class="$style.pictureCell">
      <img
        :src="recipe.pictureUrl"
        :class="$style.picture"
        :title="recipe.name"
        @click.stop="ampliarImagen"
      />
    </td>
    <td :class="$style.name">
      <span>{{ recipe.name }}</span>
    </td>
    <td :class="$style.description">
      <span>{{ recipe.description }}</span>
    </td>
    <td :class="$style.editButton">
      <v-btn text icon :to="routeEdit">
        <v-icon>edit</v-icon>
      </v-btn>
    </td>

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
  </tr>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { baseRoutes } from "../../../../router";
import { Recipe } from "../viewModel";

export default Vue.extend({
  name: "RowComponent",
  props: {
    recipe: { required: true } as PropOptions<Recipe>,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    routeEdit(): string {
      return `${baseRoutes.recipe}/${this.recipe.id}`;
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

.edit-button {
  text-align: end;
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
