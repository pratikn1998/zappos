var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));
app.use("/images", express.static(__dirname + '/images'));
app.use(express.static(path.resolve(__dirname, './client/public')));


// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile('./client/public/index.html');
});



app.listen(process.env.PORT || 8080);