/* Stream, yukarıda da değinildiği gibi büyük boyutlu bir veriyi bir yerden 
 başka bir yere transfer ederken bütün olarak değil de parça parça transfer 
 edilmesini sağlayan yayın ya da akış şeklinde tarif edilebilen bir kavramdır.  */


 /* Teknik olarak akıştaki her bir parça bir Buffer nesnesidir ve “Chunk” sıfatıyla
  temsil edilmektedir. Her chunk akışı sağlandığında “data” isimli event tetiklenmektedir.
   Tüm veri transferi sağlandığında ise “end” eventı tetiklenecektir. */

   /* Streamlar yönleri bakımından “Readable(Okunabilir)”, “Writeable(Yazılabilir)” ve 
   “Readable/Writeable(Hem Okunabilir, Hem Yazılabilir) olmak üzere üç farklı kategoride değerlendirilmektedir */


//  1-Readable

//Dosyaya ulaşmak için fs kütüphanesini getiriyoruz.
const fs = require("fs");
//Geriye EventEmitter döndürecek createReadStream fonksiyonu ile dosyayı
//Stream olarak okuyoruz.
const readStream = fs.createReadStream("video.avi");
//createReadStream readable stream oluşturur.
//() içine istediğimiz stream olarak okumak istediğimiz dosya adını yazıyoruz

 
//Şimdi her data geldiğinde data gelip gelmediğini bilmemiz gerekiyor.
//Data geliyorsa eğer EventEmitter "data" isimli olayı tetikleyecektir.
//Dolayısıyla ilgili fonksiyonu oluşturuyorum.
readStream.on("data", (chunk) => {
    console.log(`${chunk.length} : Veri geldi.`);
});
 
//Eğer akış sona erdiyse EventEmitter nesnemiz "end" isimli olayı tetikleyecektir.
//Yine fonksiyonumu tanımlıyorum.
readStream.on("end", () => {
    console.log("Veri akışı son buldu.");
});


// 2-Writable

const fs = require("fs");
const readStream = fs.createReadStream("video.avi");
const writeStream = fs.createWriteStream("video2.avi");
readStream.on("data", (chunk) => {
    console.log(`${chunk.length} : Veri geldi.`);
});
//readStream'a writeStream'ı pipe olarak vermekteyim.
readStream.pipe(writeStream);
//Yazım işlemi bittiği vakit "finish" olayı tetiklenecektir.
writeStream.on("finish", () => {
    console.log("Yazım işlemi son buldu.");
})
readStream.on("end", () => {
    console.log("Veri akışı son buldu.");
});