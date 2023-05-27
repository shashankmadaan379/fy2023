const mongoose = require("mongoose");
const { MONGO_DB_URL } = require("./serverConfig");

const connectDB = async () => {
  mongoose
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with Host:${con.connection.host} `
      );
    });
};

module.exports = connectDB;
