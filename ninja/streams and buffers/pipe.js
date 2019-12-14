let http = require("http");
let fs  = require("fs");


let myReadStream = fs.createReadStream(__dirname + "/readMe.txt");
let myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.pipe(myWriteStream) // pipe methodu ile verileri kolaylıkla kopyalabiliriz
