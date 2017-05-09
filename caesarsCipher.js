// A common modern use is the ROT13 cipher, where the values of the letters are
// shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string
// as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic
// character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!

  var newStr = [];

  str = str.split('');
  for(i=0;i<str.length;i++) {
    if (str[i]>='A' && str[i]<='M'){
      str[i] = str[i].charCodeAt()+13;
      str[i] = String.fromCharCode(str[i]);
      newStr.push(str[i]);
    } else if(str[i]>='N' && str[i]<='Z') {
      str[i] = str[i].charCodeAt()-13;
      str[i] = String.fromCharCode(str[i]);
      newStr.push(str[i]);
    }
      else {
      newStr.push(str[i]);
    }
  }

  newStr = newStr.join('');

  return newStr;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
