const expressJwt = require("express-jwt");
const config = JSON.parse(process.env.SERVER_CONFIG);

module.exports = jwt;

function jwt() {
  const { secret } = config;
  return expressJwt({ secret }).unless({
    path: [
      // public routes that don't require authentication
      "/users/authenticate",
      "/backend",
      "/cards/getAll",
      "/api/electivas/get",
      "/api/keys/get",
      "/electivas",
      "/deportes"
    ]
  });
}
