const expressJwt = require("express-jwt");
const environment = require("./environment");

module.exports = jwt;

function jwt() {
  const { secret } = environment.serverConfig;
  return expressJwt({ secret }).unless({
    path: [
      // public routes that don't require authentication
      "/users/authenticate",
      "/backend",
      "/cards/getAll",
      "/api/electivas/get",
      "/api/deportes/get",
      "/api/deportes/getAll",
      "/api/keys/get",
      "/electivas",
      "/deportes",
      "/calendario"
    ]
  });
}
