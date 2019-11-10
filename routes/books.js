const express = require('express');
const bent = require('bent');

const router = express.Router();

const googleBooksApiBaseUrl = 'https://www.googleapis.com/books/v1/volumes';
const apiJSONRequest = bent(googleBooksApiBaseUrl, 'json');

router.get('/:isbn13', async (req, res, next) => {
  
  const query = `?q=${req.params.isbn13}`;
  const { items } = await apiJSONRequest(query);
  const bookInfo = items[0];

  res.render('books', { pageTitle: bookInfo.volumeInfo.title });
});

module.exports = router;