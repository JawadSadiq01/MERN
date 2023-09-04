require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// Express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Path: ${req.path}, Request Method: ${req.method}`);
  next();
})

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to db
mongoose.connect(process.env.DB_URL)
  .then(() => {
    // Listen to request
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening on ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.log(error);
  })