import { User } from "../../src/app/_models";

export default async function get(req, res) {
  const users = await User().findAll();
  res.json(users);
}
