const express = require('express');
const  router = express.Router();
const commentController = require('../comtrollers/comments')
//add a comment
router.post('/add', commentController.add);
// update a comment if you are the owner
router.put('/update/:id', commentController.edit);
//delete the comment if you are the owner
router.delete('/destroy', commentController.delete);
//get comments for a given post
router.get('/all:id');

module.exports = router;
