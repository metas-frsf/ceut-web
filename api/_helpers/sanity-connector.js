const environment = require('./environment');
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: environment.sanity.projectId,
  dataset: environment.sanity.dataset,
  apiVersion: '2019-01-29', // use current UTC date - see "specifying API version"!
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = { client };
