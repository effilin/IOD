import express from "express";
import calculatorRoutes from "./routes/calculatorRoutes.js";
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from "./swagger.json" assert { type: 'json' };

const app = express()
const port = 3000

app.use('/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocument)
);
app.use('/', express.static("public"));
app.use('/calculator', calculatorRoutes);
app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
    
