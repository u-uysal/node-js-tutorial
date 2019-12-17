'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {

  res.send('Homepage');

});

app.get('/contact', function (req, res) {
  res.send('Contact Page');
});

app.get("/profiles/:id",(req,res) => {
  res.send(`You requested  to see this profile ${req.params.id}`)
})

app.listen(2222);