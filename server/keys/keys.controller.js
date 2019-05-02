const express = require('express');
const router = express.Router();
const keysService = require('./keys.service');

// routes
router.get('/get*', get);

module.exports = router;

function get(req, res, next) {
  keysService.get(req.query.key)
    .then(retrievedKey => res.json(retrievedKey))
    .catch(err => next(err));
}
