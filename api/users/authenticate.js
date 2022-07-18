const { User } = require("../_models/user/user.model");
const Role = require("../_models/user/role.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const environment = require("../_helpers/environment");

export default async function authenticate(req, res) {
  const { userName, password } = req.body;

  const user = await User.findOne({
    raw: true,
    include: [
      {
        model: Role(),
        required: true,
        attributes: ["id", "description"],
        through: { attributes: [] },
      },
    ],

    where: {
      userName: userName,
    },
  });

  if (!user) {
    res.json(error);
  }

  const result = bcrypt.compareSync(password, user.password, 10)
    ? {
        ...removePasswordFromReturnedUser(user),
        token: jwt.sign({ sub: user.id }, environment.serverConfig.secret),
      }
    : error;

  res.json(result);
}

/**
 * Removes password from the result user that is to be returned
 * @param userWithPassword
 * @returns {Pick<*, Exclude<keyof *, "password">>}
 */
function removePasswordFromReturnedUser(userWithPassword) {
  const { password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}
