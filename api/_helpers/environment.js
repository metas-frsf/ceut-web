const result = require("dotenv").config();
const _ = require("lodash");

let environment;

if (!("error" in result)) {
  environment = result.parsed;
  environment.serverConfig = JSON.parse(result.parsed.SERVER_CONFIG);

  environment.sanity = {};
  environment.sanity.projectId = result.parsed.SANITY_PROJECT_ID;
  environment.sanity.dataset = result.parsed.SANITY_DATASET;
} else {
  environment = {};
  environment.serverConfig = JSON.parse(process.env.SERVER_CONFIG);

  environment.sanity = {};
  environment.sanity.projectId = process.env.SANITY_PROJECT_ID;
  environment.sanity.dataset = process.env.SANITY_DATASET;
}

module.exports = environment;
