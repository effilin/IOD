let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.catController.getCat(res);
});

module.exports = router
