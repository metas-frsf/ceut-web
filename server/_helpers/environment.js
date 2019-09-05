const result = require("dotenv").config();
const _ = require("lodash");

let environment;

if (!("error" in result)) {
  environment = result.parsed;
  environment.serverConfig = JSON.parse(result.parsed.SERVER_CONFIG);
} else {
  environment = {};
  _.each(process.env, (value, key) => (environment[key] = value));
  environment.serverConfig = JSON.parse(result.parsed.SERVER_CONFIG);
}

module.exports = environment;
