const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const environment = require("server/_helpers/environment");
const User = require("./user.model");
const Role = require("./role.model");

module.exports = {
  authenticate,
  getAll
};

async function authenticate({ userName, password }) {
  const user = await User().findOne({
    include: [
      {
        model: Role(),
        required: true,
        attributes: ["id", "description"],
        through: { attributes: [] }
      }
    ],

    where: {
      userName: userName
    }
  });

  return new Promise((resolve, reject) => {
    if (!user || !user.dataValues) reject(error);

    bcrypt.compareSync(password, user.dataValues.password, 10)
      ? resolve({
          ...user.dataValues,
          token: jwt.sign({ sub: user.id }, environment.serverConfig.secret)
        })
      : reject(error);
  });
}

async function getAll() {
  return User().findAll();
}
