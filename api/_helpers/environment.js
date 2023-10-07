const result = require("dotenv").config();
const _ = require("lodash");

let environment;

if (!("error" in result)) {
  environment = result.parsed;
  environment.serverConfig = JSON.parse(result.parsed.SERVER_CONFIG);

  environment.sanity = {};
  environment.sanity.projectId = result.parsed.SANITY_PROJECT_ID;
  environment.sanity.dataset = result.parsed.SANITY_DATASET;

  environment.google.apiKey = result.parsed.GOOGLE_API_KEY;
  environment.google.clientId = result.parsed.GOOGLE_CLIENT_ID;
} else {
  environment = {};
  environment.serverConfig = JSON.parse(process.env.SERVER_CONFIG);

  environment.sanity = {};
  environment.sanity.projectId = process.env.SANITY_PROJECT_ID;
  environment.sanity.dataset = process.env.SANITY_DATASET;

  environment.google.apiKey = process.env.GOOGLE_API_KEY;
  environment.google.clientId = process.env.GOOGLE_CLIENT_ID;
}

module.exports = environment;
