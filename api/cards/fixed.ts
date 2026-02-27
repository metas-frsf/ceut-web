import type { VercelRequest, VercelResponse } from '@vercel/node';
import { client } from '../_helpers/sanity-connector.js';

export default async function getFixed(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
  const query = `*[_type == 'fixedCards']`;
  const cards = await client.fetch(query, {});
  return res.json(cards);
}
