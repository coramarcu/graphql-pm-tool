const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDC Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
