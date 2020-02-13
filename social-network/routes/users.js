const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/register');
router.post('/login');
router.put('/update/:id');
router.delete('/destroy');

module.exports = router;
