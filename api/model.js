const db = require('../data/db-config');

function getRecipes() {
  return db('recipes');
}

async function getRecipeById(recipe_id) {
  const recipeQuery = await db('recipes as r')
    .where('r.recipe_id', recipe_id)
    .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
    .leftJoin('quantities as q', 'q.step_id', 's.step_id')
    .leftJoin('ingredients as i', 'i.ingredient_id', 'q.ingredient_id')
    .select(
      'r.recipe_id', 
      'r.recipe_name', 
      'r.created_at', 
      's.step_id', 
      's.step_number', 
      's.step_instructions', 
      'i.ingredient_id',
      'i.ingredient_name', 
      'q.quantity'
    );

    const result = {
      recipe_id: parseInt(recipe_id),
      recipe_name: recipeQuery[0]['recipe_name'],
      created_at: recipeQuery[0]['created_at'],
      steps: [],
    }
    let stepsIncluded = []
    recipeQuery.forEach(step => {
      // console.log(step);
      const parsedStepId = parseInt(step.step_id);
      if (!stepsIncluded.includes(parsedStepId)){
        stepsIncluded.push(parsedStepId);
        result.steps.push({ 
          step_id: parsedStepId,
          step_number: step.step_number,
          step_instructions: step.step_instructions,
          ingredients: [],
        });
      }

      if (step.ingredient_name) {
        console.log('HERE', step.ingredient_name);
        const ingArray = result.steps.find( ({ step_id }) => step_id === parsedStepId);
        ingArray.ingredients.push({
          ingredient_id: step.ingredient_id,
          ingredient_name: step.ingredient_name,
          quantity: step.quantity,
        })
      }
      // if (step.ingredient_name){
      //   result.steps[parsedStepId].ingredients.push({
      //     ingredient_id: 0,
      //     ingredient_name: 'placeholder',
      //     quantity: 'amount goes here',
      //   })
      // }
    });
    return result;
}

function getStepsByRecipeId(recipe_id) {
  return db('steps as s')
    .where('s.recipe_id', recipe_id)
    .leftJoin('quantities as q', 'q.step_id', 's.step_id');
}



module.exports = {
  getRecipes,
  getRecipeById,
  getStepsByRecipeId,
}