import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { DB_name } from "./constants.js";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
});


connectDb()
    .then(() => {

        app.on("error", (err) => {
            console.log("Error connecting to MongoDB:", err);
            throw err;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `Server is running on port ${process.env.PORT || 8000}`
            );
        });

    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });