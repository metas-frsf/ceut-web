"use strict";

const firebaseConnector = require("../_helpers/firebase-connector");

const database = firebaseConnector.connect("metas-frsf");
const cardsReference = database.ref("cards");

let cards = {};

const retrieveCards = () => {
  cards = {};
  return cardsReference.orderByChild("title").once("value");
};

const cardSnapshot = (snapshot) => {
  snapshot.forEach((card) => {
    cards[card.key] = card.val();
  });
};

const loadCards = async () => {
  return retrieveCards().then(cardSnapshot, showError);
};

const showError = (e) => {
  console.error(e);
};

const getAll = async function () {
  await loadCards();
  return cards;
};

const getById = async function (id) {
  await loadCards();
  return cards.filter((Card) => Card.id === id).pop();
};

const create = async (card) => {
  const ref = database.ref("cards");
  await ref.push().set(card);
};

async function update({ key, ...card }) {
  const ref = database.ref("cards");
  console.log("Key:" + key);
  console.log("Card:");
  console.log(card);
  return ref.child(key).set(card);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};
