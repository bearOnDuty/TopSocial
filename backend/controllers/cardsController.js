const axios = require("axios");
//url
const CARDS_API_URL = "http://localhost:8000/cards";
//GET card by id ?id=
const getCardById = async function(req, res, next){
    const {id} = req.query;
    console.log("id", id);
    if(!id){
        return res.status(400).send("Id is required");
    }
    try {
        const cardRes = await axios.get(`${CARDS_API_URL}?id=${id}`);
        const card = cardRes.data;
        console.log("length", card.length);
        if(!card.length){
            return res.status(404).json({
                msg: "Card not found",
            });
        }
        res.status(200).json({
            msg: "Get card succeed",
            data: card,
        });
    } catch (error) {
        next(error);
    }
}
//POST card
const postCard = async function (req, res, next){
    const newCard = req.body;
    console.log("newCard", newCard); //{}
    if(Object.keys(newCard).length===0){
        return res.status(400).send("Card is required");
    }
    try {
        await axios.post(CARDS_API_URL, newCard, {
            headers: { "content-Type": "application/json" },
        });
        res.status(200).json({
            msg: "Card post succeed",
        });
    } catch (error) {
        next(error);
    }
}
//DELETE card by id /:card_id
const deleteCardById = async function(req, res, next){
    const id = req.params.card_id;
    if(!id){
        return res.status(400).send("Id is required");
    }
    try {
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg: "Card is deleted",
        });
    } catch (error) {
        next(error);
    }
}
module.exports = { getCardById, postCard, deleteCardById };