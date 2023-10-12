"use strict";

//TODO: Put this endpoint to work and retrieve the fixed cards.
import sanityConnector from "../_helpers/sanity-connector";

export default async function getFixed(req, res) {
  const query = `*[_type == 'fixedCards']`;
  const cards = await sanityConnector.client.fetch(query, {});
  return res.json(cards);
}
