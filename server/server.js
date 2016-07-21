var express = require('express');
var path = require('path');
app = express();


app.use(express.static('../client'));

var server = app.listen(8084, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})