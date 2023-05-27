const express = require("express");
const cloudinary = require("cloudinary");
const {
  CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET_KEY,
  CLOUDINARY_CLOUD_NAME,
} = require("../../config/serverConfig");
const router = express.Router();

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET_KEY,
});

router.get("/", async (req, res) => {});
router.post("/", async (req, res) => {});

module.exports = router;
