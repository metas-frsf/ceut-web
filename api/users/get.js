const User = require("../_models/user/user.model");

export default async function get(req, res) {
  const users = await User().findAll();
  res.json(users);
}
