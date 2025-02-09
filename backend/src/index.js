import { app } from "./app.js";
import { dbConnect } from "./db/db.connect.js";


const PORT = process.env.PORT || 3000

app.listen(PORT, async (req, res) => {
    // MongoDB connection
    await dbConnect();

    // Starting the server after connection
    console.log(`Server started at https://localhost:${PORT}`);
})


