const events = require('events');
const util = require('util');

const Person = (name) => {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

let bob = new Person('Bob');
let mary = new Person('Mary');
let raju = new Person('Raju');
let peeps = [bob, mary, raju];

peeps.forEach((dude) => {
  dude.on('speak', (msg) => {
    console.log(`${dude.name} said, "${msg}".`);
  });
});

bob.emit('speak', 'I like noodles');
mary.emit('speak', 'Can you find my dentures? I think I dropped it in Bob\'s noodles bowl. Oopsie!');
raju.emit('speak', 'Namaste sir. Would you like to buy an Airtel sim card?');
