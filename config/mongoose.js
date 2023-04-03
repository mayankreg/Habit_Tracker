const mongoose = require('mongoose');

const uri = process.env.HABIT_URI;

mongoose.connect('mongodb://127.0.0.1/habit_tracker');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
