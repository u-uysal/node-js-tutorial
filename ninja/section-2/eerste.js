let http = require('http'); // bir web sunucusu oluşturmak için kullanılan modül.
let log = require("./tweede.js") // diğer dosya ile aynı dizinde 


http.createServer(function (request, response) { //createServer web sunucusu oluşturma yöntemi
// request : bir web sunucusuna yapılan istektir
//response : isteğe karşılık serverın yaptığı yanıt

  response.writeHead(200, {'Content-Type': 'text/html'});
  // 200 ün manası yapılan istek ok! .gayet legal istek demek
  // aynı zamanda cevabın hangi formatta gönderileceği content type ile belli edilir

  response.end('Hello World!!!');// kullanıcıya verilecek cevap
}).listen(8080); // bu cevabı nerde yayınlayacaksınızın cevap

log.information("sunucu yayına geçti");