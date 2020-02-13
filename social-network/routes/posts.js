const express = require('express');
const  router = express.Router();
//add post
router.post('/add');
//update your post if you are the owner
router.put('/update/:id');
//delete your post if you are the owner
router.delete('/destroy');
//get your posts
router.get('/:id');

module.exports = router;
