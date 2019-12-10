'use strict';

const events = require('events');
const eventEmitter = new events.EventEmitter();

function hello() {
  console.log('Hello world');
}

eventEmitter.on('write', hello); // bu komutla olay tetiklendiğinde ne olacak sorusunun cevabını ekliyoruz

eventEmitter.emit('write'); // Hello world   bu komutla olayı tetikledik


// bu olayın sadece bir kez gerçekleşmesi isteniyorsa
eventEmitter.once('write', hello);