exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: 'Quesadillas, 3 AM' },
    { recipe_name: 'Pasta' },
  ]);
};