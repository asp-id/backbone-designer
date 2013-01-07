(function () {
  'use strict';

  var express = require('express')
    , app = express()
    , port = 3000
    , appPath = require('path').normalize(__dirname + '/../app');

  app.use(express.favicon());
  app.use(express.static(appPath));
  app.use(function (req, res) {
    res.sendfile(appPath + '/index.html');
  });

  app.listen(port, function () {
    console.log('Listening on port ', port);
  });
}());
