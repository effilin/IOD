import express from 'express';
const router = express.Router();

router.get('/add', (req, res) => {
    console.log(req.query);
    console.log(req.url);
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(`number1: ${number1} number2: ${number2}`);
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})

router.get('/subtract', (req, res) => {
    console.log(req.query);
    console.log(req.url);
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 - number2;
    console.log(`number1: ${number1} number2: ${number2}`);
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})

router.get('/divide', (req, res) => {
    console.log(req.query);
    console.log(req.url);
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 / number2;
    console.log(`number1: ${number1} number2: ${number2}`);
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})

router.get('/multiply', (req, res) => {
    console.log(req.query);
    console.log(req.url);
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 * number2;
    console.log(`number1: ${number1} number2: ${number2}`);
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})

export default router