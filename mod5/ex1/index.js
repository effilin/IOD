import express from "express";

const app = express()
const app2 = express()

const port = 3000
const port2 = 3001

app.use('/', express.static('public'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
app2.listen(port2, () => {
        console.log(`Example is listening at port: ${port2}`)
    })
    
