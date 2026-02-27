import type { SanityClient } from '@sanity/client';
import { createClient } from '@sanity/client';
import environment from './environment.js';

export const client: SanityClient = createClient({
  projectId: environment.sanity.projectId,
  dataset: environment.sanity.dataset,
  apiVersion: '2019-01-29',
  useCdn: false,
});
