const bcrypt = require("bcrypt");
const User = require("../models/user");
const usersRouter = require("express").Router();

usersRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

usersRouter.get("/", async (request, response) => {
  try {
    const users = await User.find({}, { _id: 1, username: 1, name: 1 });

    const formattedUsers = users.map((user) => ({
      username: user.username,
      name: user.name,
      id: user._id,
    }));

    response.json(formattedUsers);
  } catch (error) {
    console.error("Error getting users:", error);
    response.status(500).json({ error: "Internal server error" });
  }
});
module.exports = usersRouter;

// [
//   {
//     url: "http://localhost:3001/api/users",
//     title: "GET all users",
//     author: "John Doe",
//     user: {
//       username: "johndoe",
//       name: "John Doe",
//       id: "5f0b9561e4d5d2a5f4f7f4b7",
//     },
//     likes: 0,
//     id: "5f0b9561e4d5d2a5f4f7f4b8",
//   },
// ];
