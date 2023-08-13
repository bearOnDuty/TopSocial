const express = require("express");
const axios = require("axios");
const profileRouter = require("./profile");

//create router
const router = express.Router();

//middleware
router.use(profileRouter);

module.exports = router;