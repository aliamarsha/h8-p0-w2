//EXERCISE 6
//Question 1

var i = 0;

while (i <= 20) {
    console.log("LOOPING PERTAMA")
    console.log( i + " - I love coding")
    i+=2;
}

var a = 20

console.log("LOOPING KEDUA")
while (a >0){
    console.log( a + " - I will become fullstack developer")
    a -=2;
}

//Question 2

console.log("LOOPING PERTAMA")
for ( var  b = 1; b <= 20; b++) {
    console.log( b + " - I love coding")
}

console.log("LOOPING KEDUA")
for (var c = 20; c > 0; c--){
  console.log( c + " - I will become fullstack developer")
}

//Question 3

var d = 1

while (d <=100){
        if (d % 2 === 0){
            console.log(d + " is GENAP")
        } else {
            console.log(d + " is GANJIL")
        }
     d++;
    }