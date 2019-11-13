const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('login', { pageTitle: 'Login' });
});

router.post('/', (req, res, next) => {
  if (req.body.username === 'Dayun123' && req.body.password === 'p') {
    res.cookie('username', 'Dayun123');
    res.redirect(req.app.get('loginReferrer'));
  } else {
    res.redirect('/login');
  }
});

module.exports = router;