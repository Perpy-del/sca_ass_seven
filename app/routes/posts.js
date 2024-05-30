const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validateRequest = require('../middlewares/createPostValidator');
const validateUpdateRequest = require('../middlewares/updatePostValidation');

router.get('/', postsController.index);

router.get('/:post', postsController.show)

router.post('/', validateRequest, postsController.store);

router.put('/:post', validateUpdateRequest, postsController.update);

module.exports = router;
