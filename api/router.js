const express = require('express');

const recipes = require('./model');

const router = express.Router();

router.get('/recipes/:id', (req, res, next) => {
  recipes.getRecipeById(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(next);
});

module.exports = router;