const config = require('server-config.json');

module.exports = {
  get
};

async function get(key) {
  return config.keys[key];
}
