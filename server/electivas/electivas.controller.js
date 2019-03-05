const express = require('express');
const router = express.Router();
const electivasService = require('./electivas.service');

// routes
router.get('/get*', get);

module.exports = router;

function get(req, res, next) {
  electivasService.get(req.query.carrera)
    .then(electivas => res.json(electivas))
    .catch(err => next(err));
}
