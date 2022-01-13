const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // добавить проверку url
  },
  trailer: {
    type: String,
    required: true, // добавить проверку url
  },
  thumbnail: {
    type: String,
    required: true, // добавить проверку url
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // _id пользователя нужно
    required: true,
  },
  movieId: {
    type: String, // уточнить тип moviesExplorer
    required: true,
  },
  nameRU: {
    type: String, // мб проверка на кириллицу
    required: true,
  },
  nameEN: {
    type: String, // мб проверка на латиницу
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
