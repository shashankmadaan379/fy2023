const express = require("express");
const router = express.Router();
const v1ApiAuthRoutes = require("./v1/userAuth");
const v1DalleRoutes = require("./v1/dalle");
const v1PostRoutes = require("./v1/post");
router.use("/v1", v1ApiAuthRoutes);
router.use("/v1", v1DalleRoutes);
router.use("/v1", v1PostRoutes);

module.exports = router;
