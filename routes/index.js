const express = require('express');
const bent = require('bent');

const router = express.Router();

/*
  Endpoint construction:
  Base_url: https://api.nytimes.com/svc/books/v3
  Path: /lists.json
  Query: ?list=hardcover-fiction
  ApiKey: fg2mFVonHMDo4zdDgHvLu5VpWskgzVpK

  Example:

  https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=fg2mFVonHMDo4zdDgHvLu5VpWskgzVpK
*/

const apiKey = 'fg2mFVonHMDo4zdDgHvLu5VpWskgzVpK';

const nytAPIRequest = bent('https://api.nytimes.com/svc/books/v3', 'json');
const overviewPath = '/lists/overview.json'

/* GET home page. */
router.get('/', async (req, res, next) => {

  const nytBestSellers = await nytAPIRequest(`${overviewPath}?api-key=${apiKey}`);

  const { books: hardcoverFictionList } = nytBestSellers.results.lists.find((list) => {
    return list.list_name === 'Hardcover Fiction';
  });
  
  console.log(hardcoverFictionList);

  // res.json(hardcoverFictionList);
  res.render('index', { pageTitle: 'Library', hardcoverFictionList });
});

module.exports = router;
