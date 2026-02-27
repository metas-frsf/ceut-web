import type { VercelRequest, VercelResponse } from '@vercel/node';
import { client } from '../_helpers/sanity-connector.js';

interface SanityFixedCards {
  _type: 'fixedCards';
  cards: string[];
}

interface SanityCard {
  _type: string;
  id: string;
}

export default async function getActive(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
  const cards = await client.fetch<(SanityFixedCards | SanityCard)[]>('*', {});

  const fixedCardsEntry = cards.find((card): card is SanityFixedCards => card._type === 'fixedCards');
  const fixedCardIds = fixedCardsEntry?.cards ?? [];

  const fixedCards = cards.filter((card) => 'id' in card && fixedCardIds.includes(card.id));
  const defaultCards = cards.filter((card) => 'id' in card && !fixedCardIds.includes(card.id));
  return res.json({ fixed: fixedCards, default: defaultCards });
}
