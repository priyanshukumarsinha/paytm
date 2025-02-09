import express from "express"
import {createUser, loginUser} from "../controllers/user.controller.js"

export const userRouter = express.Router();

userRouter.post('/singup', createUser);
userRouter.use('/signin', loginUser);




