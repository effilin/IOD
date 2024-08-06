
let express = require("express");
let router= express.Router();
let Controllers = require('../controllers');

router.get('/', (req,res) => {
    Controllers.blogController.getBlogs(res);
});

router.post('/createBlog',(req, res) => {
    Controllers.blogController.createBlog(req.body, res);
})

module.exports = router;