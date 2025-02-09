import mongoose from "mongoose"

const url = process.env.DATABASE_URL;

export async function dbConnect(){
    try {
        await mongoose.connect(url);
        console.log("Successfully connected to Database :: Success");
    } catch (error) {
        console.log("Error while connecting to Database :: ", error);
        process.exit(1)
    }
}
