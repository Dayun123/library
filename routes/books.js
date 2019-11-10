const express = require('express');
const bent = require('bent');

const router = express.Router();

const googleBooksApiBaseUrl = 'https://www.googleapis.com/books/v1/volumes';
const apiJSONRequest = bent(googleBooksApiBaseUrl, 'json');

router.get('/:isbn10', async (req, res, next) => {
  
  const query = `?q=${req.params.isbn10}`;
  const { items } = await apiJSONRequest(query);
  const bookInfo = items[0];

  res.json(bookInfo);
});

module.exports = router;