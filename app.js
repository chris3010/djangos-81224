var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    upload = multer();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.server = http.createServer(app);

app.get('/', function (req, res) {
  res.send('something else');
});

app.post('/', upload.any(), function(req, res) {
  console.log(req.body['body-plain']);
  res.json(req.body);
});

var server = app.server.listen((process.env.PORT || 5000), '0.0.0.0', function () {
  console.log('Running: http://%s:%s', app.server.address().address, app.server.address().port)
});

module.exports = server;
