const mongoose = require("mongoose");
require("dotenv").config();

async function connectMongoDB(URL = process.env.DB_URL) {
  try {
    const connect = await mongoose.connect(URL);
    console.log(connect.connection.host, connect.connection.name);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = {
  connectMongoDB,
};
