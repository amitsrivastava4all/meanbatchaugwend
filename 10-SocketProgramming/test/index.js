var express = require('express');
var app = express();
var http = require('http');
http = http.Server(app);
var io = require('socket.io');
io =io(http);

app.use(express.static("public"));

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});*/

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
