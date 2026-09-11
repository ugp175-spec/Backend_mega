//require("dotenv").config();

import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_name } from "./constants.js";
import connectDb from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDb();