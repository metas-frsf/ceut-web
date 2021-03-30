"use strict";

const sanityConnector = require("../_helpers/sanity-connector");

const showError = (e) => {
  console.error(e);
};

const getAll = async function () {
  const query = "*";
  const cards = await sanityConnector.client.fetch(query, {});
  return cards;
};

const getById = async function (id) {
  const query = "*";
  const cards = await sanityConnector.client.fetch(query, {});
  return Array.from(cards)
    .filter((Card) => Card.id === id)
    .pop();
};

const create = async (card) => {
  // TODO: Implementar este método
};

async function update({ key, ...card }) {
  // TODO: Implementar este método
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};
