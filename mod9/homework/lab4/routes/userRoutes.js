let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) =>{
    Controllers.userController.getUser(res)
})

module.exports = router;