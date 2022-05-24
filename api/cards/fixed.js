"use strict";

const sanityConnector = require("../_helpers/sanity-connector");
//TODO: Put this endpoint to work and retrieve the fixed cards.
export default async function getFixed(req, res) {
  const query = `*[_type == 'fixedCards']`;
  const cards = await sanityConnector.client.fetch(query, {});
  return res.json(cards);
}
