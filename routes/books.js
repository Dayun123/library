const express = require('express');
const router = express.Router();

router.get('/:isbn10', (req, res, next) => {
  res.json(req.params.isbn10);
});

module.exports = router;