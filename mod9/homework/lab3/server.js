const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
const PORT = process.env.PORT;
let userRoutes = require('./routes/userRoutes');
let blogRoutes = require('./routes/blogRoutes')



app.use("/", express.static("public"));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
    });