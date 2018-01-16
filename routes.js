/**
 * Created by loic on 16/01/18.
 */
let express = require('express');
let router = express.Router();

router.get('/', function (req, res , next) {
    res.render('./index.html');
});

module.exports = router;