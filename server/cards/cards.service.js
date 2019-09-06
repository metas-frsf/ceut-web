"use strict";

const firebaseConnector = require("../_helpers/firebase-connector");

const database = firebaseConnector.connect("metas-frsf");
const cardsReference = database.ref("cards");
let cards = [];

cardsReference.once("value", function(snapshot) {
  cards = snapshot.val();
});

const getAll = async () => cards;
const getById = async id => cards.filter(Card => Card.id === id).pop();

const create = async card => {
  const ref = database.ref("card-objects");
  const key = ref.push().key;
};

module.exports = {
  getAll,
  getById,
  create
};
