const Workout = require('../models/workoutModel');

// Index
const index = async (req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 });

  res.status(200).json(workouts);
}

// Get
const get = async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(400).json({ error: true, msg: 'No such workout' })
  }

  res.status(200).json(workout)
}

// Create
const create = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = (await Workout.create({ title, reps, load }));
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: true, msg: error.message });
  }
}

// Update
const update = async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body}, {new: true})

  if (!workout) {
    return res.status(400).json({ error: true, msg: 'No such workout' })
  }

  res.status(200).json(workout);
}

// Delete
const destroy = async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findOneAndDelete({_id: id});

  if (!workout) {
    return res.status(400).json({ error: true, msg: 'No such workout' })
  }

  res.status(200).json(workout);
}

module.exports = {
  index,
  create,
  get,
  destroy,
  update
}