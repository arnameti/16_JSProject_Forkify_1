export const state = {
  recipe: {},
};

export const fetchRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );

    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}: ${data.status}`);

    const { recipe } = data.data;

    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.sourceUrl,
      title: recipe.title,
    };

    console.log(state.recipe);
  } catch (err) {
    console.log(err);
  }
};
