const environment = require("server/_helpers/environment");

module.exports = {
  get
};

async function get(key) {
  return environment.serverConfig.keys[key];
}
