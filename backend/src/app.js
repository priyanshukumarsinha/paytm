import express from "express"
import {router as userRouter} from './routes/user.routes.js'
import cors from "cors"

export const app = express();

import 'dotenv/config'

app.use(cors())
app.use(express.json())
app.use("/api/v1/users", userRouter)


app.get("/", (req, res) => {
    res.send("Hello World!!")
})


