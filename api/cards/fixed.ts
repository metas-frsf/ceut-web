import type { VercelRequest, VercelResponse } from '@vercel/node';
import { client } from '../_helpers/sanity-connector.js';

export default async function getFixed(_req: VercelRequest, res: VercelResponse): Promise<void> {
  const query = `*[_type == 'fixedCards']`;
  const cards = await client.fetch(query, {});
  res.json(cards);
}
