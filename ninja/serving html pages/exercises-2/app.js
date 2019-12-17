const http = require("http");
const path = require("path");
const fs = require("fs");


const myServer = http.createServer((req,res) => {
    if (req.url === "/") {
        res.end ("<h1>Home Page</h1>");
    }
});

const PORT = process.env.PORT || 5000;

myServer.listen(PORT,() =>{
    console.log("Server running on port : " + PORT);
})