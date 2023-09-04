const express = require('express');
const {
  index,
  create,
  get,
  destroy,
  update
} = require('../controllers/workoutController');

const router = express.Router();

// Workout / Index
router.get('/', index);

// Workout / Get
router.get('/:id', get);

// Workout / Create
router.post('/', create);

// Workout / Delete
router.delete('/:id', destroy);

// Workout / Update
router.patch('/:id', update);

module.exports = router;