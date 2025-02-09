import express from "express";
import { createUser, loginUser } from "../controllers/user.controller.js";

// create a new router
const router = express.Router();

// ROUTES:

// to create a new user : POST /api/create
router.route("/signup").post(createUser);

// export the router
export { router };
