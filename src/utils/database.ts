import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
  } catch (error) {
    console.log("Failed DB conncet");
    throw new Error();
  }
};
