function laugh(num) {
    var numLaughs = "";
    for(var i = num; i>= 1; i--) {
        numLaughs += "ha";
    }
    return (numLaughs + "!");
}
console.log(laugh(5));