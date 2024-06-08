import express from "express";
import calculatorRoutes from "./public/js/calculatorRoutes.js";

const app = express()
const port = 3000


app.use('/', express.static("public"));
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
    
