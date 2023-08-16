const express = require("express");
const cardsRouter = express.Router();
const { getCardById, postCard, deleteCardById } = require("../controllers/cardsController");

//GET card by id /cards?id=
cardsRouter.get("/", getCardById);
//POST cards
cardsRouter.post("/", postCard);
//DELETE card by id /:card_id
cardsRouter.delete("/:card_id", deleteCardById);

module.exports = cardsRouter;