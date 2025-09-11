import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const configDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((error) => {
      console.error("Error on connecting database", error);
    });
};
