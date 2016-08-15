var Parse = require('parse');
Parse.initialize("LlfYEifUnczdxWQzEgWw4kb8v7206BdAvMGkAXJP");
Parse.serverURL = 'http://localhost:8084/parse'




var express = require('express');
var path = require('path');
app = express();




app.use(express.static('./client'));
app.use(express.static(__dirname + '/../client/public'));






var server = app.listen(process.env.Port || 8084, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})

app.get('*', function(req,res){
  res.sendFile(path.resolve('client', 'index.html'));
})

app.get('/*', function(req,res){
  res.sendFile(path.resolve('client', 'index.html'));
})


app.get('/Home', function(req,res){
	res.sendFile(path.resolve('../client/index.html'));
})

app.get('/Login', function(req,res){
	res.sendFile(path.resolve('../client/index.html'));
})


app.post('/', function(req, res){
	res.end('All good to go!');
})