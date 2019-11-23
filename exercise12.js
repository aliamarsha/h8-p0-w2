//EXERCISE 12

var menit; 
var menitBaru;
var detikBaru;

function konversiMenit(menit) {
    menitBaru = Math.floor(menit / 60);
    detik = Math.floor(menit % 60);
    if (detik < 10) {
    detikBaru = "0" + detik 
    }
    return menitBaru + ":" + detikBaru;
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

