var router = require('express').Router();
var controller = require('./subjectController');
var auth = require('../../auth/auth');
var checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);
// checkUser,
router.route('/')
  .get(controller.get)
  .post(controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete)

module.exports = router;
