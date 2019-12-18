'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {

  res.sendfile(__dirname +'/index.html');

});

app.get('/contact', function (req, res) {
  res.sendfile(__dirname+'/contact.html'); // sendFile a method for sending file not string
});

app.listen(2124);
 // now if we wanted to add dynamic content to our webpages ,we need to install ejs package. npm install ejs

