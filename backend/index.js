const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { handleError } = require("./middleware/errorMiddleware");
//create server
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use(handleError);
const PORT = 80;
app.listen(PORT, function(){
    console.log("Server is running on http://localhost:80");
});

