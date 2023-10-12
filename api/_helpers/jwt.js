import { environment } from "./environment";
import { expressjwt } from "express-jwt";

function jwt() {
  const { secret } = environment.serverConfig;
  return expressjwt({ secret: secret, algorithms: ["HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/users/authenticate",
      "/backend",
      "/cards/getAll",
      "/calendario",
    ],
  });
}

module.exports = jwt;
