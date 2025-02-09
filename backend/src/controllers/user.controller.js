import { User } from "../models/User.models";
import { userSchema } from "../schema/user.schema";

export const createUser = async(req, res) => {

    const {username, firstname, lastname, password} = req.body;
    const user = {
        username,
        firstname,
        lastname,
        password
    }

    // check if the innputs provided are correct
    userSchema.safeParse(user)

    // check if the user does not already exists
    const existingUser = await User.find({username})

    if(existingUser){
        throw new Error({
            status : 200,
            message : "User Already Exists!"
        })
    }

    // else create new user

    const newUser = await User.create({
        username, firstname, lastname, password
    })

    (await newUser).save();

    res.json({
        "userId" : 'jwt'
    })
};

export const loginUser = (req, res) => {

};