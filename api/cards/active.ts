import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { SanityCard } from '../_helpers/sanity-types.js';
import { client } from '../_helpers/sanity-connector.js';

interface SanityFixedCards {
  _type: 'fixedCards';
  cards: string[];
}

export default async function getActive(_req: VercelRequest, res: VercelResponse): Promise<void> {
  const cards = await client.fetch<(SanityFixedCards | SanityCard)[]>('*', {});

  const fixedCardsEntry = cards.find((card): card is SanityFixedCards => card._type === 'fixedCards');
  const fixedCardIds = fixedCardsEntry?.cards ?? [];

  const contentCards = cards.filter((card): card is SanityCard => card._type !== 'fixedCards');
  const fixedCards = contentCards.filter((card) => fixedCardIds.includes(card.id));
  const defaultCards = contentCards.filter((card) => !fixedCardIds.includes(card.id));
  res.json({ fixed: fixedCards, default: defaultCards });
}
