exports.seed = function(knex, Promise) {
  return knex('quantities').insert([
    { ingredient_id: 2, quantity: '1 tortilla', step_id: 1 },
    { ingredient_id: 1, quantity: '1 handful', step_id: 2 },
    { ingredient_id: 3, quantity: 'desired amount', step_id: 2 },
    { ingredient_id: 2, quantity: '1 tortilla', step_id: 3 },
  ]);
};