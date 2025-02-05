import User from "../models/User.js";
import bcrypt from "bcrypt";
import asyncHandler from "../middlewares/asyncHandler.js";
import createToken from "../utils/createToken.js";


const createUser = asyncHandler(async(req, res) => {
    const {username,email,password} = req.body;
    console.log(username,email,password);
})


export {createUser};