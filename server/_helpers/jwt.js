const expressJwt = require('express-jwt');
const config = require('server-config.json');

module.exports = jwt;

function jwt() {
  const { secret } = config;
  return expressJwt({ secret }).unless({
    path: [
      '/users/authenticate',
      '/backend',
      '/cards/getAll',
      '/api/electivas/get',
      '/api/keys/get',
      '/electivas',
    ]
  });
}
