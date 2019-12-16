const http = require("http");
const fs  = require("fs");

let creatingServer =http.createServer(function(req,res) {
    res.writeHead(200,{"Content-Type" : "text/html"});
    let myReadServer = fs.createReadStream(__dirname + "/index.html","utf-8");
    myReadServer.pipe(res);
}) ;

creatingServer.listen(3000);
console.log("sdsd");
