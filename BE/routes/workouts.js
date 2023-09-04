const express = require('express');
const {
  checkId,
} = require('./index');
const {
  index,
  create,
  get,
  destroy,
  update
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', index);                   // Index
router.get('/:id', checkId, get);         // Get
router.post('/', create);                 // Create
router.delete('/:id', checkId, destroy);  // Delete
router.patch('/:id', checkId, update);    // Update

module.exports = router;