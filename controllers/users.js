const User = require('../models/user');

module.exports.getUser = (req, res, next) => {
  const id = req.user._id;
  return User.findById(id)
    .then((user) => {
      if (!user) {
        // throw new NotFoundError('Информация о пользователе не найдена');
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { email, name } = req.body;
  User.findByIdAndUpdate(req.user._id, { email, name }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        // throw new NotFoundError('Пользователь не найден');
      }
      return res.status(200).send(user);
    })
    .catch((err) => { // разобраться с ошибкой
      if (err.name === 'ValidationError') {
        // throw new BadRequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
};
