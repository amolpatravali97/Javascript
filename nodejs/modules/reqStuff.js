let stuff = require('./stuff');

console.log('Types of holds:');
stuff.holds.forEach(function(holdNames){
    console.log(holdNames);
});

console.log(`Value of PI: ${stuff.PI}`);
console.log(`Sum of 2 & 5 = ${stuff.sum(2, 5)}`);

