import environment from './environment.js';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: environment.sanity.projectId,
  dataset: environment.sanity.dataset,
  apiVersion: '2019-01-29',
  useCdn: false,
});
