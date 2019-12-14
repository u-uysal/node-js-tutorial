let http = require("http");
let fs  = require("fs");


let myReadStream = fs.createReadStream(__dirname + "/writeMe.txt")
myReadStream.on("data" , function(chunk){
    console.log("new chunk received"); //new chunk received
    console.log(chunk); // <Buffer 6d 65 72 68 61 62 61>
})

// if we add at line 5  "utf-8" we can see text in the file. 