const http = require("http");
const fs  = require("fs");

let creatingServer =http.createServer(function(req,res) {
    res.writeHead(200,{"Content-Type" : "application/json"});
    let myObj = {
        name : "ufuk",
        surname : "uysal"
    };
    res.end(JSON.stringify(myObj)); // {"name":"ufuk","surname":"uysal"}
    
    // application need to be either string or buffer. thats why we convert it.
  
}) ;

creatingServer.listen(4000);
console.log("sdsd");
