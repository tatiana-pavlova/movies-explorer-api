const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const routerUser = require('./routes/users');
const routerMovie = require('./routes/movies');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
  autoIndex: true,
});

app.use(express.json());

app.use(auth);
app.use(routerUser);
app.use(routerMovie);

app.use(errors());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
