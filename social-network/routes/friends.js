const express = require('express');
const  router = express.Router();
const friendController = require('../comtrollers/friends');

router.post('/add', friendController.add);
router.delete('/delete', friendController.remove);
router.get('count', friendController.count);
router.get('friend-count', friendController.friendCount);
