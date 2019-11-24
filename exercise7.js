//EXERCISE 7

//Question 1
var rows1;
rows1 = 4

for (i=0; i < rows1; i++ ){
    console.log("*")
}

//Question 2 
var rows2;
var bintang1 = " ";
var bintang2 = " "; 

rows2 =5

for (i = 1; i < rows2; i++) {
 for (j =1; j < rows2; j++) {
  bintang1 += ("*")
  }
bintang2 = (bintang1 += ("*") + "\n")
}
console.log(bintang2)

//Question 3 
var rows3;
var bintang3 = " ";
var bintang4 = " "; 

rows3 = 4;

for (i=0; i < rows3; i++ ) {
  for (j =0; j < i; j++ ) {
    bintang3 += ("*")
  }
  bintang4 = bintang3 += ("*") + "\n"
}

console.log (bintang4); 