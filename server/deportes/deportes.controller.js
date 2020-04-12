const express = require("express");
const router = express.Router();
const deportesService = require("./deportes.service");

// routes
router.get("/get", get);
router.get("/getAll", getAll);

module.exports = router;

function get(req, res, next) {
  deportesService
    .get(req.query.deporte)
    .then(deportes => res.json(deportes))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  deportesService
    .getAll()
    .then(deportes => res.json(deportes))
    .catch(err => next(err));
}
