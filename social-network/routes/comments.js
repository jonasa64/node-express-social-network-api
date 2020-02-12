const express = require('express');
const  router = express.Router();
const commentController = require('../comtrollers/comments')

router.post('/add', commentController.add);
router.put('/edit:id', commentController.edit);
router.delete('/delete', commentController.delete);
