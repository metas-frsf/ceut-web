import { client } from '../_helpers/sanity-connector.js';

export default async function getById(req, res) {
  const { id } = req.query;
  const query = '*';
  const cards = await client.fetch(query, {});

  const result = cards.filter((Card) => Card.id === id).pop();

  res.json(result);
}
