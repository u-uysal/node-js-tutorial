const http = require("http");
const fs = require("fs");


// http://bsaral.github.io/blog/2016/03/23/node-streams/


let myServer = http.createServer(function(req,res){
    if (req.url === "/home" || req.url ==="/") {
        res.writeHead(200,{"Content-Type" : "text/html"});
        fs.createReadStream(__dirname + "/index.html").pipe(res); // fs.createReadStream yaparak bu dosyayı stream olarak okumamızı sağlıyoruz
        
    }else if (req.url ==="/contact") {
        res.writeHead(200,{"Content-Type" : "text/html"});
        fs.createReadStream(__dirname + "/contact.html").pipe(res);
    }
})

myServer.listen(4000);