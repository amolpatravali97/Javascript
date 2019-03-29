const events = require('events');
let emitter = new events.EventEmitter();
let light = true;

console.log('The light is on');

emitter.on('off light', function(msg){
    light = false;
    console.log(msg);
});

emitter.emit('off light', 'Light is off');