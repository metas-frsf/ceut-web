import { client } from '../_helpers/sanity-connector.js';

export default async function getFixed(req, res) {
  const query = `*[_type == 'fixedCards']`;
  const cards = await client.fetch(query, {});
  return res.json(cards);
}
