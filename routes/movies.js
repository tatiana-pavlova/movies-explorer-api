const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const regexForUrl = require('../utils/regex');

router.get('/movies', getMovies);

router.post('/movies', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().min(4).max(4).required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(regexForUrl),
    trailer: Joi.string().required().regex(regexForUrl),
    nameRu: Joi.string().required(),
    nameEn: Joi.string().required(),
    thumbnail: Joi.string().required().regex(regexForUrl),
    movieId: Joi.string().hex(), // length?
  }),
}), createMovie);

router.delete('/movies/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex(), // length(24)???
  }),
}), deleteMovie);

module.exports = router;
