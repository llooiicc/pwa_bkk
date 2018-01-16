/**
 * Created by loic on 15/01/18.
 */
let express = require('express');
let app = express();
let router = require('./routes');

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/'));

app.use('/', router);

app.listen(3000, function () {
    console.log("[SERVER] is runing on 3000 [DATE] " + Date.now());
});