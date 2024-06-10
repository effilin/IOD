import express from "express";
import calculatorRoutes from "./routes/calculatorRoutes.js";

const app = express()
const port = 3000


app.use('/', express.static("public"));
app.use('/calculator', calculatorRoutes);
app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
    
