const express = require('express');
const  router = express.Router();
const postCrontroller = require('../comtrollers/posts')
//add post
router.post('/add', postCrontroller.creat);
//update your post if you are the owner
router.put('/update/:id');
//delete your post if you are the owner
router.delete('/destroy:id');
//get your posts
router.get('/:id');

module.exports = router;
