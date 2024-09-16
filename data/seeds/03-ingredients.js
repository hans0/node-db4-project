exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'Shredded Mexican 4-Cheese' },
    { ingredient_name: 'Flour tortillas, large' },
    { ingredient_name: 'Red Pepper flakes' },
  ]);
};