exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    { step_number: 1, recipe_id: 1, step_instructions: 'Place one flour tortilla on paper napkin' },
    { step_number: 2, recipe_id: 1, step_instructions: 'Place one handful of Mexican 4 Cheese Shredded Cheese in center' },
    { step_number: 3, recipe_id: 1, step_instructions: 'Place one flour tortilla on top of cheese mountain' },
    { step_number: 4, recipe_id: 1, step_instructions: 'Microwave for 30 - 60 seconds, heat up flat pan' },
    { step_number: 5, recipe_id: 1, step_instructions: 'Cook on pan to desired crispness' },
  ]);
};