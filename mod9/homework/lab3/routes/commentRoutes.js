
let express = require("express");
let router= express.Router();
let Controllers = require('../controllers');

router.get('/', (req,res) => {
    Controllers.commentController.getComment(res);
});

router.post('/createComment',(req, res) => {
    Controllers.commentController.createComment(req.body, res);
})

module.exports = router;