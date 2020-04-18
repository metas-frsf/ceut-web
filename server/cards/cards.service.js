"use strict";

const firebaseConnector = require("../_helpers/firebase-connector");

const database = firebaseConnector.connect("metas-frsf");
const cardsReference = database.ref("cards"); //FIXME: #Issue 28 - Cambiar esto a "cards" una vez terminada la migración

let cards = [];

//TODO: #Issue 28 - Resolver para devolver ordenada la lista de tarjetas por título
// cardsReference.orderByChild("title").on("child_added", function(snapshot) {
//   cards = cards.concat(snapshot.val());
// });

const retrieveCards = () => {
  return cardsReference.once("value");
};

const cardSnapshot = snapshot => {
  cards = snapshot.val();
};

const loadCards = async () => {
  return retrieveCards().then(cardSnapshot, showError);
};

const showError = e => {
  console.error(e);
};

const getAll = async function(orderBy) {
  await loadCards();
  return cards;
};

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
