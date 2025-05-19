const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const UserRoute = require("./routes/user.js");
const cors = require("cors");
const { connectMongoDB } = require("./database/mongoConnect.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", UserRoute);
connectMongoDB().then(() => {
  console.log("MongoDB Connected!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
