/* var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000); */

'use strict';

//asekron yapı

/* const fs = require('fs');

fs.readFile('readMe.txt', 'utf-8', function (err, data) {

  if (err) throw err;

  console.log(data);

});
console.log("hello");    */    //hello
                            //asdasdasda

// sekron yapı

'use strict';

const fs = require('fs');

var data = fs.readFileSync('readMe.txt', 'utf-8');

console.log(data);
console.log("hi'")
 //asdasdasda
//hi'
