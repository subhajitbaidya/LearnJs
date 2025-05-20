const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const UserRoute = require("./routes/user.js");
const cors = require("cors");
const { connectMongoDB } = require("./database/mongoConnect.js");
const { LoginWithJwt } = require("./middlewares/auth.js");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "http://127.0.0.1:5501", // frontend origin
    credentials: true, // allow cookies/credentials
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", LoginWithJwt, UserRoute);

connectMongoDB().then(() => {
  console.log("MongoDB Connected!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
