var dogSpeech = function(num) {
    var init = "";
    for (var i = 0; i < num; i++) {
        init += "bow ";
    }
    return init;
}

var sentence = function(sent) {
    return "Dog says, " + sent(3);
}

console.log(sentence(dogSpeech));