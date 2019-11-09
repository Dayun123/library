const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  if (req.body.username === 'Dayun123' && req.body.password === 'p') {
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;