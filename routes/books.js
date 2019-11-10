const express = require('express');
const bent = require('bent');

const router = express.Router();

const googleBooksApiBaseUrl = 'https://www.googleapis.com/books/v1/volumes';
const openLibraryApiBaseUrl = 'http://covers.openlibrary.org/b/ISBN/';
const googleBooksApiJSONRequest = bent(googleBooksApiBaseUrl, 'json');

router.get('/:isbn13', async (req, res, next) => {
  
  const query = `?q=${req.params.isbn13}`;
  const { items } = await googleBooksApiJSONRequest(query);
  const bookInfo = items[0];

  // Only a thumbnail image comes with results from Google Books API. The Open Library API seems to have most book covers in large sizes, but not all.
  bookInfo.imageLink = `${openLibraryApiBaseUrl}${req.params.isbn13}-L.jpg`;

  res.render('books', { pageTitle: bookInfo.volumeInfo.title, bookInfo });

});

module.exports = router;