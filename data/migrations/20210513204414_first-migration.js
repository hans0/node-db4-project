
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 127)
        .notNullable()
        .unique()
      // created at
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.integer('step_number')
        .unsigned()
        .notNullable()
      tbl.string('step_instructions', 255)
        .notNullable()
      tbl.integer('recipe_id')
        .references('recipe_id')
        .inTable('recipes')
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name', 127)
        .notNullable()
        .unique()
    })
    .createTable('quantity', tbl => {
      tbl.integer('ingredient_id')
        .references('ingredient_id')
        .inTable('ingredients')
      tbl.integer('quantity')
        .notNullable()
        .unsigned()
      tbl.integer('step_id')
        .references('step_id')
        .inTable('steps')
    })
};

exports.down = function(knex) {
  
};
