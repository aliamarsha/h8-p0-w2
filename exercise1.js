//EXERCISE ONE 
//Question 1
START 
SET  M as mass
SET A as acceleration
CALCULATE force by multiplying M by A
DISPLAY result 

M * A = result

//Question 2
START
SET variable x as year
IF x divides by 4 is 0 and X divides by 100 is GREATER than 0 
ELSE IF X divides by 4 is 0 and X divides by 100 is 0 and X divides by 400 is 0
     THEN DISPLAY "X is a leap year"

var year = x
if {
    x / 4 == 0
    x / 100 > 0
} else {
    x/4 == 0
    x/100 == 0
    x/400 ==0
} return "This is a leap year"

Question 3
SET "clothes" to 1
WHILE "clothes" == 20
DISPLAY "washing machine on"

var clothes = 1
var 
while clothes = 20 {

}

//Question 4

//EXERCISE 3
var nama = "Indra"
var peran = "Tabib"

peran = "Penyihir"
nama = "Alia"

if (peran === "Ksatria") {
  console.log("Halo Ksatria " 
  + nama + ", kamu dapat menyerang dengan senjatamu!")
} else if (peran === "Tabib") {
  console.log("Halo Tabib "+ nama +", kamu akan membantu temanmu yang terluka.")
} else if (peran === "Penyihir") {
  console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
} else {
  console.log("Pilih peranmu untuk memulai game!")
} 

//EXERCISE 4
var tanggal = 1
var bulan = 1
var tahun = 2012

tanggal = 1
bulan = 5
tahun = 1996

switch (bulan) { 
    case 1: { console.log(tanggal + ' January ' + tahun); break;}
    case 2: { console.log(tanggal + 'February' + tahun); break;}
    case 3: { console.log(tanggal + ' March ' + tahun); break;}
    case 4: { console.log(tanggal + ' April ' + tahun); break;}
    case 5: { console.log(tanggal + ' May ' + tahun); break;}
    case 6: { console.log(tanggal + ' June ' + tahun); break;}
    case 7: { console.log(tanggal + ' July ' + tahun); break;}
    case 8: { console.log(tanggal + ' August ' + tahun); break;}
    case 9: { console.log(tanggal + ' September ' + tahun); break;}
    case 10: { console.log(tanggal + ' October ' + tahun); break;}
    case 11: { console.log(tanggal + ' November ' + tahun); break;}
    case 12: { console.log(tanggal + ' December ' + tahun); break;}
}

//EXERCISE 5
// Question 1
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh); 

//Question 2
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] 
+ word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; // do your own!
var thirdWord = word[15] + word[16]; // do your own!
var fourthWord = word[18] + word[19]; // do your own!
var fifthWord = word[20] + word[21] + word[22] + word[23]; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//Question 3
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 13); // do your own!
var thirdWord3 = word.substring(15, 16); // do your own!
var fourthWord3 = word.substring(18, 19); // do your own!
var fifthWord3 = word.substring(20, 23); // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//Question 4
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4, 14); // do your own!
var thirdWord4 = word.substring(15, 17); // do your own!
var fourthWord4 = word.substring(18, 20) ; // do your own!
var fifthWord4 = word.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);