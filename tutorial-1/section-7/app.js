let http = require("http");
let date = require("./mymodule");

http.createServer(function(req, res)  {

    res.end("Anlik tarih " + date.myDateTime())

}).listen(8080);