const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.status(500).json({salude:"welcome etickets padawan",choice:["Dark","Light"]});
  });

  app.get('*', function(req, res) {  res.status(500).json({error:"uppps ",msg:"we have not on that route yet"})});

module.exports = app;
