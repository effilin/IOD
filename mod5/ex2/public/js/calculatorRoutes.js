import express from 'express';
const router = express.Router();

router.get('/add', (req, res) => {
    console.log(req.query);
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(`number1: ${number1} number2: ${number2}`);
    console.log(sum)
    res.status(200)
    res.json({result:sum})

})

export default router