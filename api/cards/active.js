"use strict";

const sanityConnector = require("../_helpers/sanity-connector");

export default async function get(req, res) {
  const cards = await sanityConnector.client.fetch(`*`, {});
  const fixedCardIds = cards.filter((card) => card._type === "fixedCards").pop()
    .cards;

  const fixedCards = cards.filter((card) => fixedCardIds.includes(card.id));
  const defaultCards = cards.filter((card) => !fixedCardIds.includes(card.id));
  return res.json({ fixed: fixedCards, default: defaultCards });
}
