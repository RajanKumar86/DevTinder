const express = require("express");
const app = express();
const PORT = 5000;
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

connectDB()
  .then(() => {
    console.log("Database is connected...");
    app.listen(PORT, () => {
      console.log("server is started at the port", PORT);
    });
  })
  .catch((err) => {
    console.log("error! Database is not connected...");
  });
