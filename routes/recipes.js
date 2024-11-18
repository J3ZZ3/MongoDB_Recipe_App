const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// POST: Create a recipe
router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json({ message: 'Recipe created successfully', recipe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET: Fetch all recipes with pagination
router.get('/', async (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  try {
    const recipes = await Recipe.find()
      .skip((page - 1) * pageSize)
      .limit(parseInt(pageSize));
    const total = await Recipe.countDocuments();
    res.status(200).json({ total, page: parseInt(page), pageSize: parseInt(pageSize), recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetch a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Remove a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Update a recipe by ID
router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.status(200).json({ message: 'Recipe updated successfully', recipe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
