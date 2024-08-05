const express = require('express')
const axios = require('axios')
const app = express()
require("dotenv").config();
const PORT = process.env.PORT

let catRoute = require('./routes/catRoutes');
let userRoutes = require('./routes/userRoutes');
let dbConnect = require("./dbConnect");

app.use(express.json());
app.use("/", express.static('public'));
app.use('/api/users', userRoutes);
app.use('/api/cat', catRoute);
app.get('/', (req, res) => {
res.json({message: "Welcome to lab4"})
});

app.listen(PORT, () => {
console.log(`Example app listening
at http://localhost:${PORT}`)
});