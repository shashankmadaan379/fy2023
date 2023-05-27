const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { PORT, MODE } = require("./config/serverConfig");
const connectDB = require("./config/db");
const setUpAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT} in ${MODE} Mode`);
  });
  connectDB();
};
setUpAndStartServer();
