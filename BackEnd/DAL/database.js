import mongoose from "mongoose";

const databaseURL = "mongodb://localhost:27017/ketban4phuong";

class DatabaseClass {
  constructor() {}
  connect = async () => {
    await mongoose.connect(databaseURL);
  };
}

export default DatabaseClass;
