import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model";
import recipeView from "./views/recipeView.js";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const recipeContainer = document.querySelector(".recipe");

const controlRecipe = async function () {
  // 1: Loading Recipe
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.fetchRecipe(id);

    // 2: Rendering the Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

["hashchange", "load"].forEach((ev) => {
  window.addEventListener(ev, controlRecipe);
});
