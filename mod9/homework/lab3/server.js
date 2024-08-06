const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
const PORT = process.env.PORT;
let userRoutes = require('./routes/userRoutes');
let blogRoutes = require('./routes/blogRoutes');
let postRoutes = require('./routes/postRoutes');
let commentRoutes = require('./routes/commentRoutes');



app.use("/", express.static("public"));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
    });