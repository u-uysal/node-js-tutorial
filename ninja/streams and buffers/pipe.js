let http = require("http");
let fs  = require("fs");


let myReadStream = fs.createReadStream(__dirname + "/readMe.txt");
let myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.pipe(myWriteStream) // pipe methodu ile verileri kolaylıkla kopyalabiliriz



    var fs = require('fs');
	var readableStream = fs.createReadStream('file1.txt');
	var writableStream = fs.createWriteStream('file2.txt');

	readableStream.pipe(writableStream);
/*     Pipe yapısı streams okumak ve yazmak için kullanılabilecek en iyi yöntemdir.
     Çünkü akışı size bırakmaz kontrolü kendindedir. Datayı okuma veya yazma hızını
      yönetme işini kendi yapar. Bu örnekte file1.txt içerisindeki veriyi pipe yaparak 
      yani bir boru hattı oluşturup veriyi bu yapı içerisinden file2.txt aktardığını hayal
       edebilirsiniz. Pipe ile zincirleme bir yapısı kurarak birden fazla streams nesnesini kullanabilirsiniz. */