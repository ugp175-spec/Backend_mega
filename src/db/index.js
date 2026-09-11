import mongoose from "mongoose";
import { DB_name } from "../constants.js";  

const connectDB = async () => {
  try{

    const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)
    console.log(`\n mongodb connected !! DB HOST : ${conn.connection.host} \n`);

  }catch(err){
    console.log("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

export default connectDB;