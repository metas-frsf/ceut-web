import sanityConnector from "../_helpers/sanity-connector";

export default async function getById(req, res) {
  const { id } = req.query;
  const query = "*";
  const cards = await sanityConnector.client.fetch(query, {});

  const result = cards.filter((Card) => Card.id === id).pop();

  res.json(result);
}
