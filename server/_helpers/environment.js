const result = require("dotenv").config();
const _ = require("lodash");

let environment;

if (!("error" in result)) {
  environment = result.parsed;
  environment.serverConfig = JSON.parse(result.parsed.SERVER_CONFIG);
} else {
  environment = {};
  environment.serverConfig = JSON.parse(process.env.SERVER_CONFIG);
}

module.exports = environment;
