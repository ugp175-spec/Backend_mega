import { response } from "express";
import { asynceHandler } from "../utils/asyncHandler.js";

const registerUser = asynceHandler(async (req, res) => {

    res.status(200).json({
        message : "User registered successfully"
    })
})

export {registerUser};