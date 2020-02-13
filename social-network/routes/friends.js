const express = require('express');
const  router = express.Router();
const friendController = require('../comtrollers/friends');
// add a new friend
router.post('/add', friendController.add);
// remove a friend
router.delete('/destroy', friendController.remove);
// you friend count
router.get('/count', friendController.count);
//you friends count 
router.get('/friend-count', friendController.friendCount);
// you friends suggestions
router.get('/suggestions');
//viwe all you friends 
router.get('/all/:id');

module.exports = router;