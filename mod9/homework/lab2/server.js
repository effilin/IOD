

const express = require("express");
const app = express();
require("dotenv").config();
let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes');
let commentRoutes = require('./routes/commentRoutes');
let blogRoutes = require('./routes/blogRoutes')
let dbConnect = require("./dbConnect");
const PORT = process.env.PORT || 8080;



app.use('/', express.static("public"));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/blogs', blogRoutes);
app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`)
    });
    
