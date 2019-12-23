const http = require("http");

const  server = http.createServer((req , res)=> {
    res.write(JSON.stringify([1,2,43])); // we could not send directly an object
    res.end();
})
server.listen(3000);