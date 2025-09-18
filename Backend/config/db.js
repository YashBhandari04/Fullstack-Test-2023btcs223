import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb is connected");

  } catch (error) {
    console.error("Mongodb is not conneted");
    process.exit(1);
  }
};

export default connectDB;
