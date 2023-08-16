const express = require("express");
const axios = require("axios");
const profileRouter = require("./profile");
const requestRouter = require("./request");
const messageRouter = require("./message");
const highlineRouter = require("./highline");
const cardsRouter = require("./cards");

//create router
const router = express.Router();

//middleware
router.use("/profile", profileRouter);
router.use("/request", requestRouter);
router.use("/message", messageRouter);
router.use("/highline", highlineRouter);
router.use("/cards", cardsRouter);

module.exports = router;