const User = require("../_models/user/user.model");
const Role = require("../_models/user/role.model");

export default async function authenticateWithEmail(req, res) {
  const { email } = req.body;

  const user = await User().findOne({
    attributes: {
      exclude: [
        "password",
        "enabled",
        "deleted",
        "avatar",
        "createdAt",
        "updatedAt",
      ],
    },
    include: [
      {
        model: Role(),
        required: true,
        attributes: ["id", "description"],
      },
    ],

    where: {
      email: email,
    },
  });

  if (!user) {
    res.json(error);
  }

  res.json(user);
}
