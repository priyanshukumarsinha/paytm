import { User } from "../models/User.models.js";
import { userSchema } from "../schema/user.schema.js";
import bcrypt from "bcrypt";

const validateUserInput = (data) => {
  const { username, firstname, lastname, password } = data;

  // check if all required input is provided
  if (!username || !firstname || !lastname || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const inputValidation = userSchema.safeParse(req.body);

  if (!inputValidation.success) {
    return res
      .status(400)
      .json({ error: inputValidation.error.issues[0].message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, firstname, lastname, password } = req.body;

    validateUserInput(req.body);

    // check existing user
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User already exists with the same username" });
    }

    // encryptedPassword
    const encryptedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );

    // if all validations are done and user does not exist, create user
    const newUser = await User.create({
      username,
      firstname,
      lastname,
      password: encryptedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
};

export const loginUser = (req, res) => {};
