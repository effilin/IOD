

const express = require("express");
const app = express();
require("dotenv").config();
let userRoutes = require('./routes/userRoutes');
let dbConnect = require("./dbConnect");
const PORT = process.env.PORT || 8080;



app.use('/', express.static("public"));
app.use(express.json());
app.use('/api/users', userRoutes);
app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`)
    });
    
