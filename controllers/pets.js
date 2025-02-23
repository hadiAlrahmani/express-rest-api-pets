const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(201).json(newPet);
  } catch (error) {
    res.status(422).json({ error: `failed to create pet ${error}` });
  }
});

router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(400).json({ error: `failed to load pets ${error}` });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) throw new Error('Pet not found');

    res.status(200).json(pet);
  } catch (error) {
    res.status(404).json({ error: `failed to get cat ${error}` });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);

    if (!pet) throw new Error('Pet not found');

    res.status(204).json({ success: true });
  } catch (error) {
    res.status(400).json({ error: `Unable to delete: ${error}` });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!pet) throw new Error('Pet not found');

    res.status(200).json(pet);
  } catch (error) {
    res.status(422).json(`Failed to update pet ${error}`);
  }
});

module.exports = router;
