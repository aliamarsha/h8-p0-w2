//EXERCISE 11

function balikKata(str) {
    var temp = ""
    for (var i = str.length - 1; i >=0; i--) {
        temp += str[i];
    }
    return temp;
} 

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS