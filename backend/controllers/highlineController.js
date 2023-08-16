const axios = require("axios");

const getHighline = async function(req, res, next){
    try {
        const url = "http://localhost:8000/highline";
        const highline = await axios.get(url);
        console.log("highline", highline.data);
        res.status(200).json({
            msg: "Get highline succeed",
            data: highline.data
        })
/*         throw new Error("Server error"); */
    } catch (error) {
        console.error("error", error);
        next(error);
    }
};

module.exports = { getHighline };