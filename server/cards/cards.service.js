"use strict";

const firebaseConnector = require("../_helpers/firebase-connector");

const database = firebaseConnector.connect("metas-frsf");
const cardsReference = database.ref("newCards"); //FIXME: #Issue 28 - Cambiar esto a "cards" una vez terminada la migración

let cards = [];

cardsReference.once("value", function(snapshot) {
  cards = snapshot.val();
});

const getAll = async () => cards;
const getById = async id => cards.filter(Card => Card.id === id).pop();

const create = async card => {
  const ref = database.ref("card-objects");
  ref.push().set(card);
};

const migrate = async () => {
  const ref = database.ref("newCards");
  for (const card of cards) {
    ref.push().set(card);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  migrate
};
