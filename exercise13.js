//EXERCISE 13 NOT DONE YET

/*function xo(str){
    for (var x=0; x < str.length; x++) {
        for (var o=0; o == x; o++);
    
    if (x.length === o.length) {
        return true 
    } else {
        return false
    }
    
    }
} */

function xo(str) {
    var newStr
    for (var i =0; i < str.length; i++){
        console.log(newStr[i])
    }
  }

  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true