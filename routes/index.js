const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'hi there!',
    user: 'Arthur',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Karol',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
