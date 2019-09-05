const config = JSON.parse(process.env.SERVER_CONFIG);

module.exports = {
  get
};

async function get(key) {
  return config.keys[key];
}
