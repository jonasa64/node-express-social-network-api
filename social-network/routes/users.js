const express = require('express');
const router = express.Router();
const userController = require('../comtrollers/users');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/register', userController.creat);
router.post('/login');
router.put('/update/:id');
router.delete('/destroy');

module.exports = router;
