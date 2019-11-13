const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.clearCookie('username');
  res.redirect(req.get('referrer'));
});

module.exports = router;