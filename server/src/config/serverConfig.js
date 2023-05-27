const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  MODE: process.env.MODE,
  OPEN_AI_KEY: process.env.OPEN_AI_KEY,
};
