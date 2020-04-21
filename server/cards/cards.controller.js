const express = require("express");
const router = express.Router();
const cardsService = require("./cards.service");

// routes
router.get("/getAll", getAll);
router.put("/update", update);

module.exports = router;

function getAll(req, res, next) {
  cardsService
    .getAll()
    .then((cards) => res.json(cards))
    .catch((err) => next(err));
}

function update(req, res, next) {
  cardsService
    .update(req.body)
    .then((cards) => res.json(cards))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  cardsService
    .getById()
    .then()
    .catch((err) => next(err));
}

function create(req, res, next) {
  cardsService
    .create()
    .then()
    .catch((err) => next(err));
}
