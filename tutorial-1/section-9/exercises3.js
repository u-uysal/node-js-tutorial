'use strict';

const events = require('events');

function process(number) {

  const eventEmitter = new events.EventEmitter();

  setTimeout(function () {

    for (let i = 1; i <= number; i++) {

      eventEmitter.emit('start', i);

      console.log('İşlem sırası : ' + i)

      eventEmitter.emit('finish', i);

    }

  }, 1000);

  return eventEmitter;

}

let execute = process(3);

execute.on('start', function (number) {

  console.log('Sırası ' + number + ' olan işlem başladı.');

});

execute.on('finish', function (number) {

  console.log('Sırası ' + number + ' olan işlem bitti.');

});