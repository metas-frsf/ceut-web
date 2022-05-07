const expressJwt = require("express-jwt");
const environment = require("./environment");

module.exports = jwt;

function jwt() {
  const { secret } = environment.serverConfig;
  return expressJwt({ secret: secret, algorithms: ["HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/users/authenticate",
      "/backend",
      "/cards/getAll",
      "/calendario",
    ],
  });
}
