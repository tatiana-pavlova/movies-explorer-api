const router = require('express').Router();
const routerUserAccount = require('./userAccount');
const routerUser = require('./users');
const routerMovie = require('./movies');
const auth = require('../middlewares/auth');

router.use(routerUserAccount);
router.use(auth);
router.use(routerUser);
router.use(routerMovie);

module.exports = router;
