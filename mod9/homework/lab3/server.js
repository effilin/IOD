const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
const PORT = process.env.PORT || 8080;



app.use('/', express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`)
    });