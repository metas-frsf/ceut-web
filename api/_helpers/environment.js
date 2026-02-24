const result = require("dotenv").config();

let environment;

if (!("error" in result)) {
  environment = result.parsed;
  environment.sanity = {};
  environment.sanity.projectId = result.parsed.SANITY_PROJECT_ID;
  environment.sanity.dataset = result.parsed.SANITY_DATASET;
} else {
  environment = {};
  environment.sanity = {};
  environment.sanity.projectId = process.env.SANITY_PROJECT_ID;
  environment.sanity.dataset = process.env.SANITY_DATASET;
}

module.exports = environment;
