import type { VercelRequest, VercelResponse } from '@vercel/node';
import { client } from '../_helpers/sanity-connector.js';

interface SanityCard {
  id: string;
}

export default async function getById(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const cards = await client.fetch<SanityCard[]>('*', {});

  const result = cards.find((card) => card.id === id);
  return res.json(result ?? null);
}
