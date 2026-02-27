import dotenv from 'dotenv';

// In Vercel, environment variables are injected by the runtime; dotenv is only used locally.
dotenv.config();

interface SanityConfig {
  projectId: string | undefined;
  dataset: string | undefined;
}

interface Environment {
  sanity: SanityConfig;
}

const environment: Environment = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
  },
};

export default environment;
