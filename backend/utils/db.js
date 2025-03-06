const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB is connected');
  } catch (error) {
    console.log("❌ MongoDB Connection Failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
