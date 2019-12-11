/* EventEmitter sınıfı sayesinde özel olaylar tanımlayarak, tanımladığınız bu olayları istediğiniz
 zaman clickyebilirsiniz. İlgili sınıfı kullanabilmek için öncelikle “events” modülünün require 
 edilmesi gerekmektedir.
 */
const event = require("events");

//Ardından bu modül içerisinde bulunan EventEmitter sınıfından nesne talep edilmelidir.

const myEventEmitter = new event.EventEmitter();

//Bu işlemden sonra EventEmitter nesnesi üzerinden olaylarımızı tanımlayabiliriz. burda click olayı tetiklenince
// mssg argumanı iletilecek dedik

myEventEmitter.on("click", (mssg) => { //myEventEmitter.addListener("click", (mssg) =>  metodu aynı işi yapar
    console.log( mssg +" click...");
});

//Tanımlanan olayı tetiklemek için tekrardan EventEmitter nesnesinin “emit” fonksiyonunu çağırmamız yeterlidir.

myEventEmitter.emit("click" , "hello"); // hello click...