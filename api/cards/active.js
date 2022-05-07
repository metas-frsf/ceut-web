"use strict";

const sanityConnector = require("../_helpers/sanity-connector");

export default async function getAll(req, res) {
  const query = "*";
  const cards = await sanityConnector.client.fetch(query, {});
  return res.json(cards);
}
