"use strict";

const firebaseConnector = require("../_helpers/firebase-connector");

const database = firebaseConnector.connect("metas-frsf");
const cardsReference = database.ref("cards"); //FIXME: Issue #28 - Cambiar esto a "cards" una vez terminada la migración

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
  // const ref = database.ref("cards");
  // return ref.child(key).set(card);
  console.log("Key:" + key);
  console.log("Card:");
  console.log(card);
}

//FIXME - Issue #28 - Eliminar código relacionado a la migración
const migrate = () => {
  const baseRef = database.ref("cards");
  const ref = database.ref("cards");

  baseRef.once("value", function (snapshot) {
    cards = snapshot.val();
    for (const card in cards) {
      ref.push().set(cards[card]);
    }
  });
};

module.exports = {
  getAll,
  getById,
  create,
  migrate,
  update,
};
