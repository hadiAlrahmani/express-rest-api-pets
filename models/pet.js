const mongoose = require('mongoose');

const petsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  breed: {
    type: String,
  },
});

const Pet = mongoose.model('Pet', petsSchema);

module.exports = Pet;
